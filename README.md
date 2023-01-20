![Serverless Meme](https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/meme1.png)
# :book: Sentiment Analysis API using serverless framework.
Sentiment Analysis API. Users can send some text to it and get back whether the message was positive, negative or neutral. This can be used to analyse customer tweets, support emails or online reviews.

## Topics Covered.
1. Serverless Framework - an open-source framework that allows developers to build and deploy serverless applications.
2. AWS Client Comprehend SDK service - a natural language processing (NLP) service provided by AWS that uses machine learning to find insights and relationships in text.

## :computer: Technologies.
AWS, Serverless Framework, Node.js, TypeScript

## :office: Environment, Tools and IDEs.
Ubuntu 20.04, Visual Studio Code, Github.

## :wrench: Project setup.
1. Create AWS account and user with administrative access and note credentials.
2. Set up Node.js and AWS CLI locally.

```bash
# Create node.js aws serverless project in current directory.
sls create --template aws-nodejs-typescript --path .

# Add Client Comprehend Service  to project
npm i -s @aws-sdk/client-comprehend

# Deploy serverless project.
sls deploy
```

# :books: References.
1. [Serverless Framework Documentation](https://www.serverless.com/framework/docs)

# :sunglasses: Author and Credits.
This project was done by [SE. Moses Mwangi](https://github.com/MosesSoftEng). Feel free to get intouch with me;

:iphone: WhatsApp [+254115227963](https://wa.me/254115227963)

:email: Email [moses.soft.eng@gmail.com](mailto:moses.soft.eng@gmail.com)

:clap: A lot of thanks to [Complete Coding](https://completecoding.io) 5 day serverless api exercise.
