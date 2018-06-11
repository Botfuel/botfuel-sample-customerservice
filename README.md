# botfuel-sample-customerservice

This sample bot is used in the [**QnA Chatbot demo**](http://docs.botfuel.io/platform/demos/qna-customer-service).

## Create an app

* Create a new app on Botfuel Trainer (https://app.botfuel.io). See the [Getting Started tutorial](https://docs.botfuel.io/platform/tutorials/getting-started) for how to create a new app.

* Add an QnA with title `Invoice` with:

  * Training questions:

    * Do you have an invoice?
    * Can I get an invoice ?

  * Answer: _Of course! The invoice for your purchase will be sent along with your goods. You can also download an electronic version from your account_

* Add an QnA with title `Information` with:

  * Training questions:

    * I have a question.
    * I need some information?

  * Answer: _Hello! I can provide you with information about our payment and shipping policies._

  You can get examples of intents here : https://github.com/Botfuel/botfuel-sample-customerservice/blob/master/intents.xlsx

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

* See [**Getting Started**](https://docs.botfuel.io/platform/tutorials/getting-started) to learn how to run a bot in minutes.
* See [**Concepts**](https://docs.botfuel.io/platform/concepts) for explanations about the internals of the SDK.

## License

See the [**License**](LICENSE.md) file.
