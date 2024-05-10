const Discord = require('discord.js');
const config = require('./config');
const { fetchNewsHeadlines } = require('./news');

const client = new Discord.Client({ intents: [
  Discord.Intents.FLAGS.GUILDS,
  Discord.Intents.FLAGS.GUILD_MESSAGES,
]});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  fetchNewsHeadlines(client);
});

client.on('messageCreate', async (message) => {
  if (message.content === '!headlines') {
    try {
      const headlines = await fetchNewsHeadlines(client);
      const channel = client.channels.cache.get(config.channelId);

      if (channel) {
        const embed = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('New York Times Top Headlines')
          .setDescription('Here are the latest news headlines:')
          .setTimestamp();

        const fields = headlines.map((headline) => [
          { name: headline.title, value: headline.tagline },
          { name: 'Link', value: headline.link },
        ]);

        embed.addFields(...fields);
        embed.setImage(headlines[0]?.image);

        channel.send({ embeds: [embed] });
      } else {
        console.log(`Channel with ID ${config.channelId} not found.`);
      }
    } catch (error) {
      console.error('Error fetching headlines:', error);
    }
  }
});

client.login(config.token);