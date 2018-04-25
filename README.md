# botfuel-sample-customerservice

This sample bot is used in the [**QnA Chatbot demo**](http://docs.botfuel.io/dialog/demos/qna-customer-service).

## How to run the bot

Clone the repository:

```shell
git clone git@github.com:Botfuel/botfuel-sample-customerservice.git
```

Install dependencies:

```shell
cd botfuel-sample-customerservice
npm install
```

Start the bot:

```shell
BOTFUEL_APP_TOKEN=<YOUR_BOT_ID> BOTFUEL_APP_ID=<YOUR_BOTFUEL_APP_ID> BOTFUEL_APP_KEY=<YOUR_BOTFUEL_APP_KEY> npm start botfuel-config.js
```

If you set your app credentials right, you should see:

```shell
2017-12-07T16:12:09.131Z - info: [Environment] BOTFUEL_APP_TOKEN=<YOUR_BOT_ID>
2017-12-07T16:12:09.133Z - info: [Environment] BOTFUEL_APP_ID=<YOUR_BOTFUEL_APP_ID>
2017-12-07T16:12:09.133Z - info: [Environment] BOTFUEL_APP_KEY=<YOUR_BOTFUEL_APP_KEY>
> onboarding
```

Try typing `I need assistance.`!

## Need help ?

- See [**Getting Started**](https://docs.botfuel.io/dialog/tutorials/getting-started) to learn how to run a bot in minutes.
- See [**Concepts**](https://docs.botfuel.io/dialog/concepts) for explanations about the internals of the SDK.

## License

See the [**License**](LICENSE.md) file.
