import { APIGatewayProxyEvent } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';

export const handler = async (event: APIGatewayProxyEvent) => {
    try {
        // Your code here
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

const analyseSentiment = async ({ text }: { text: string }) => {
    return {
        textAnalysed: text,
        result: 'fake'
    }
};

