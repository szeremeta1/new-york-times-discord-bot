# Discord News Bot

This is a Discord bot that fetches the top headlines from the New York Times RSS feed and sends them as neatly formatted messages to a specified channel.

## Project Structure

```
discord-news-bot
├── src
│   ├── bot.js
│   ├── news.js
│   └── config.js
├── package.json
├── .env
└── README.md
```

The project has the following files:

- `src/bot.js`: This file contains the code for the Discord bot. It sets up the bot, connects to the Discord server, and handles incoming messages and commands.

- `src/news.js`: This file contains the code for fetching the top headlines from the New York Times RSS feed. It retrieves the headlines, extracts the necessary information (title, tagline, link, and image), and formats them into a message.

- `src/config.js`: This file contains the configuration settings for the bot, such as the Discord token and the specified channel where the bot will send the news headlines.

- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project.

- `.env`: This file is used to store sensitive information, such as the Discord token. It is not committed to version control for security reasons.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/discord-news-bot.git
   ```

2. Install the dependencies:

   ```bash
   cd discord-news-bot
   npm install
   ```

3. Configure the bot:

   - Open the `.env` file and add your Discord bot token:

     ```
     DISCORD_TOKEN=your-discord-bot-token
     ```

   - Open the `src/config.js` file and specify the channel ID where the bot will send the news headlines:

     ```javascript
     module.exports = {
       channelID: 'your-channel-id',
     };
     ```

4. Start the bot:

   ```bash
   npm start
   ```

   The bot will now connect to your Discord server and start fetching and sending the top headlines from the New York Times RSS feed to the specified channel.

## Usage

Once the bot is running and connected to your Discord server, it will automatically fetch the top headlines from the New York Times RSS feed at regular intervals and send them as neatly formatted messages to the specified channel.

You can customize the fetch interval and other settings by modifying the code in `src/news.js` and `src/config.js`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.