import { APIGatewayProxyEvent } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';

// Client Comprehend imports.
import {
    ComprehendClient,
    DetectSentimentCommand,
    DetectSentimentCommandInput,
} from '@aws-sdk/client-comprehend';

const comprehendClient = new ComprehendClient({});

export const handler = async (event: APIGatewayProxyEvent) => {
    try {
        const body = JSON.parse(event.body || '{}');

        const { text } = body;

        if (!text) {
            throw Error('You need to pass up a field of "text" to analyse')
        }

        const res = await analyseSentiment({ text });
        return formatJSONResponse(res)
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message })
        }
    }
};

/**
 * Analyzes the sentiment of the provided text
 *
 * @param {string} text - The text to analyze
 * @return {Promise<DetectSentimentCommandOutput>} - A promise that resolves to the sentiment analysis result
 */
const analyseSentiment = async ({ text }: { text: string }) => {
    const input: DetectSentimentCommandInput = {
        Text: text,
        LanguageCode: 'en',
    };

    const command = new DetectSentimentCommand(input);
    const response = await comprehendClient.send(command);
    return response;
};
