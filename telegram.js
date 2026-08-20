const { Telegraf } = require('telegraf');
require('dotenv').config();

// Import commands
const menu = require('./commands/menu.js');
const owner = require('./commands/owner.js');
const ping = require('./commands/ping.js');

const BOT_TOKEN = process.env.BOT_TOKEN;
const BOT_NAME = "MR DARK KING MD";
const CHANNEL_URL = "https://whatsapp.com/channel/0029Vb8LXbO6LwHkS1PGWV1E";

if(!BOT_TOKEN) {
    console.error('❌ BOT_TOKEN not found in .env');
    process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

// Start command
bot.start(async (ctx) => {
    const welcomeText = `
🎉 *Welcome to ${BOT_NAME}!* 🎉

Hi ${ctx.from.first_name || 'there'}! 👋

✨ This is a multi-platform bot that works on WhatsApp & Telegram

📱 *Available Commands:*
  /menu - Show all commands
  /ping - Check bot status
  /owner - Owner information
  /channel - Join our WhatsApp channel
  /help - Get help

🚀 Type /menu to get started!
`;
    
    ctx.reply(welcomeText, { parse_mode: "Markdown" });
});

// Help command
bot.help(async (ctx) => {
    const helpText = `
❓ *Need Help?* ❓

📝 *Command List:*

  /start - Welcome message
  /menu - Show all available commands
  /ping - Check if bot is online
  /status - Bot status
  /owner - Owner information
  /channel - Get WhatsApp channel link
  /help - This help message

💡 *Example Usage:*
  Simply type: /menu

📞 *Contact Owner:*
  Use /owner to get owner details

✨ Happy using! 🎉
`;
    
    ctx.reply(helpText, { parse_mode: "Markdown" });
});

// Menu command
bot.command('menu', async (ctx) => {
    await menu.executeTelegram(ctx);
});

// Ping command
bot.command('ping', async (ctx) => {
    await ping.executeTelegram(ctx);
});

// Owner command
bot.command('owner', async (ctx) => {
    await owner.executeTelegram(ctx);
});

// Channel command
bot.command('channel', async (ctx) => {
    const channelText = `📱 *Join Our Channel*\n\n${CHANNEL_URL}\n\nStay updated with latest news and updates!`;
    ctx.reply(channelText, { parse_mode: "Markdown" });
});

// Status command
bot.command('status', async (ctx) => {
    const statusText = `✅ *Bot Status*\n\n👑 Bot: Online\nPlatform: Telegram\nVersion: 1.0\nOwner: ${process.env.BOT_OWNER || 'Mr Dark King Dev'}`;
    ctx.reply(statusText, { parse_mode: "Markdown" });
});

// Echo other messages
bot.on('text', (ctx) => {
    ctx.reply('📝 I only respond to commands. Type /menu to see all commands!');
});

// Error handler
bot.catch((err, ctx) => {
    console.error(`❌ Telegram Error for ${ctx.updateType}`, err);
});

// Launch bot
const startTelegramBot = async () => {
    try {
        console.log(`🤖 ${BOT_NAME} Telegram Bot starting...`);
        await bot.launch();
        console.log(`✅ ${BOT_NAME} Telegram Bot is running!`);
    } catch (error) {
        console.error('Failed to start Telegram bot:', error);
        process.exit(1);
    }
};

// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

module.exports = { startTelegramBot, bot };
