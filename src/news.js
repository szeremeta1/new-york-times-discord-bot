const Discord = require('discord.js');
const Parser = require('rss-parser');
const config = require('./config');

const parser = new Parser();
const newsFeedUrl = 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml';

let lastMessage = null;

async function fetchNewsHeadlines(client) {
  try {
    const feed = await parser.parseURL('https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml');
    const headlines = feed.items.slice(0, 5); // Get the top 5 headlines

    const embed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('New York Times Top Headlines')
      .setDescription('Here are the latest news headlines:')
      .setTimestamp();

    headlines.forEach((headline) => {
      embed.addFields(
        { name: headline.title, value: headline.link }
      );
    });

    const channel = client.channels.cache.get(config.channelId);
    if (channel) {
      if (lastMessage) {
        try {
          await lastMessage.fetch();
          await lastMessage.delete();
        } catch (error) {
          if (error.code === 10008) {
            console.log('Message already deleted');
          } else {
            throw error;
          }
        }
      }
      lastMessage = await channel.send({ embeds: [embed] });
    } else {
      console.log(`Channel with ID ${config.channelId} not found.`);
    }
  } catch (error) {
    console.error('Error fetching headlines:', error);
  }

  // Fetch news headlines every 30 seconds
  setTimeout(() => fetchNewsHeadlines(client), 30000);
}

async function getTopHeadlines() {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
    return response.data.articles.map(article => ({
      title: article.title,
      tagline: article.description,
      link: article.url,
      image: article.urlToImage,
    }));
  } catch (error) {
    console.error('Error fetching headlines:', error);
  }
}

module.exports = {
  fetchNewsHeadlines,
  getTopHeadlines,
};