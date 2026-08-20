const { Client, LocalAuth } = require('whatsapp-web.js');
require('dotenv').config();

// Import commands
const menu = require('./commands/menu.js');
const owner = require('./commands/owner.js');
const ping = require('./commands/ping.js');

const sock = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox']
    }
});

const BOT_NAME = "MR DARK KING MD";
let botMode = process.env.BOT_MODE || 'private';
const OWNER_NUMBER = process.env.BOT_OWNER_PHONE;

// QR Code for authentication
sock.on('qr', (qr) => {
    console.log('QR Code generated. Scan it with your phone:');
    console.log(qr);
});

// Bot ready
sock.on('ready', () => {
    console.log(`${BOT_NAME} WhatsApp Bot is ready!`);
});

// Message handler
sock.on('message', async (msg) => {
    try {
        // Check bot mode
        if(botMode === 'private' && !msg.from.includes(OWNER_NUMBER)) {
            return;
        }

        const text = msg.body.toLowerCase().trim();

        // Command routing
        if(text === '.menu') {
            await menu.executeWhatsApp(sock, msg);
        } else if(text === '.owner') {
            await owner.executeWhatsApp(sock, msg);
        } else if(text === '.ping') {
            await ping.executeWhatsApp(sock, msg);
        } else if(text === '.status') {
            const statusText = `👑 Bot: Online\nMode: ${botMode}\nOwner: ${process.env.BOT_OWNER}`;
            await sock.sendMessage(msg.from, { text: statusText });
        }
    } catch (error) {
        console.error('Error handling message:', error);
    }
});

// Authentication failure
sock.on('auth_failure', (msg) => {
    console.error('Authentication failed:', msg);
});

// Disconnect
sock.on('disconnected', (reason) => {
    console.log('Bot disconnected:', reason);
});

sock.initialize();
console.log(`${BOT_NAME} WhatsApp Bot initializing...`);

module.exports = { sock, botMode };
