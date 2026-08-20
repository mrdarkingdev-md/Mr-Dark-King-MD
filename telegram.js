const { Telegraf } = require('telegraf');
require('dotenv').config();

// Import commands
const menu = require('./commands/menu.js');
const owner = require('./commands/owner.js');
const ping = require('./commands/ping.js');

const bot = new Telegraf(process.env.BOT_TOKEN);
const BOT_NAME = "mr dark king dev bot";

let botMode = 'private'; // default

// /start command
bot.start((ctx) => {
    const welcome = `⛧ *mr dark king dev bot*
Welcome! Pair your own WhatsApp number to your own private bot instance:

1️⃣ /pair 2348012345678 — get a pairing code (with country code, no +)
2️⃣ WhatsApp → Linked Devices → Link with phone number → enter the code
3️⃣ /mode public or /mode private — choose who it replies to
4️⃣ /status any time to check your connection

*private* — only replies to messages from your own WhatsApp number.
*public* — replies to anyone who messages your bot.`;

    ctx.reply(welcome, { parse_mode: "Markdown" });
});

// /pair command
bot.command('pair', (ctx) => {
    const number = ctx.message.text.split(' ')[1];
    if(!number) return ctx.reply('Usage: /pair 2348012345678');
    ctx.reply(`👑 Pair code will be sent to WhatsApp logs.\nNumber: ${number}\nCheck Railway logs for the code.`);
});

// /mode command
bot.command('mode', (ctx) => {
    const mode = ctx.message.text.split(' ')[1];
    if(mode === 'public' || mode === 'private') {
        botMode = mode;
        ctx.reply(`Mode set to: *${mode}*`, { parse_mode: "Markdown" });
    } else {
        ctx.reply('Usage: /mode public or /mode private');
    }
});

// /status command
bot.command('status', (ctx) => {
    ctx.reply(`👑 Bot: Online\nMode: ${botMode}\nOwner: Mr Dark King Dev`);
});

bot.command('menu', (ctx) => menu.executeTelegram(ctx));
bot.command('owner', (ctx) => owner.executeTelegram(ctx));
bot.command('ping', (ctx) => ping.executeTelegram(ctx));

bot.launch();
console.log(`${BOT_NAME} Telegram Bot is running...`);
module.exports = { botMode };
