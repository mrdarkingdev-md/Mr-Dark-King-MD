require('dotenv').config();

// Import bots
const whatsappBot = require('./whatsapp.js');
const telegramBot = require('./telegram.js');

const BOT_NAME = "MR DARK KING MD";

console.log(`
╔════════════════════════════════════╗
║     ${BOT_NAME}     ║
║   WhatsApp + Telegram Bot v1.0     ║
╚════════════════════════════════════╝
`);

console.log('🚀 Starting bot services...');
console.log('📱 WhatsApp Bot: Initializing...');
console.log('🤖 Telegram Bot: Launching...');

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\n🛑 Shutting down bot...');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\n\n🛑 Shutting down bot...');
    process.exit(0);
});

console.log('\n✅ Both bots are running!');
console.log('Press Ctrl+C to stop\n');
