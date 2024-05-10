# New York Times Bot
![The_New_York_Times_logo](https://github.com/szeremeta1/new-york-times-discord-bot/assets/66704967/310d7f89-5353-4a82-9cb2-2506012762cd)

This is a Discord bot that fetches the top headlines from the New York Times RSS feed and sends them as neatly formatted messages to a specified channel.

## Project Structure

```
discord-news-bot
├── src
│   ├── bot.js
│   ├── news.js
│   └── config.json
├── package.json
└── README.md
```

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/new-york-times-discord-bot.git
   ```

2. Install the dependencies:

   ```bash
   cd new-york-times-discord-bot
   npm install
   ```

3. Configure the bot:

   - Open `config.json`, add your Discord bot token, and specify the channel ID where the bot will send the news headlines:

     ```
     {
        "token": "INSERT-TOKEN-HERE",
        "channelId": "INSERT-NEWS-CHANNEL-HERE"
     }
     ```

3. Start the bot:

   ```bash
   node ./src/bot.js
   ```

   The bot will now connect to your Discord server and start fetching and sending the top headlines from the New York Times RSS feed to the specified channel.

## Usage

Once the bot is running and connected to your Discord server, it will automatically fetch the top headlines from the New York Times RSS feed at regular intervals and send them as neatly formatted messages to the specified channel.

You can customize the fetch interval and other settings by modifying the code in `src/news.js` and `src/bot.js`.
