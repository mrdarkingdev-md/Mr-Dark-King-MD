const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, isJidBroadcast } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Import commands
const menu = require('./commands/menu.js');
const owner = require('./commands/owner.js');
const ping = require('./commands/ping.js');

const BOT_NAME = "MR DARK KING MD";
let botMode = process.env.BOT_MODE || 'private';
const OWNER_NUMBER = process.env.BOT_OWNER_PHONE;

let sock;

const startWhatsAppBot = async () => {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');
    
    sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
        logger: { level: 'silent' }
    });

    // Handle connection updates
    sock.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect, qr } = update;
        
        if(qr) {
            console.log('📱 Scan QR Code with WhatsApp to authenticate');
        }
        
        if(connection === 'close') {
            const shouldReconnect = (lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Connection closed due to', lastDisconnect?.error, ', reconnecting:', shouldReconnect);
            
            if(shouldReconnect) {
                startWhatsAppBot();
            }
        } else if(connection === 'open') {
            console.log(`✅ ${BOT_NAME} WhatsApp Bot Connected!`);
        }
    });

    // Save credentials
    sock.ev.on('creds.update', saveCreds);

    // Handle incoming messages
    sock.ev.on('messages.upsert', async (m) => {
        const msg = m.messages[0];
        
        if(!msg.message) return;
        if(msg.key.fromMe) return;
        if(isJidBroadcast(msg.key.remoteJid)) return;

        try {
            const text = (msg.message.conversation || msg.message.extendedTextMessage?.text || '').toLowerCase().trim();
            
            // Check bot mode
            if(botMode === 'private' && !msg.key.remoteJid.includes(OWNER_NUMBER)) {
                return;
            }

            // Command routing
            if(text === '.menu') {
                await menu.executeWhatsApp(sock, msg);
            } else if(text === '.owner') {
                await owner.executeWhatsApp(sock, msg);
            } else if(text === '.ping') {
                await ping.executeWhatsApp(sock, msg);
            } else if(text === '.status') {
                const statusText = `👑 Bot: Online\nMode: ${botMode}\nOwner: ${process.env.BOT_OWNER}`;
                await sock.sendMessage(msg.key.remoteJid, { text: statusText });
            } else if(text.startsWith('.pair ')) {
                const number = text.split(' ')[1];
                if(!number) {
                    await sock.sendMessage(msg.key.remoteJid, { text: 'Usage: .pair 2348012345678' });
                    return;
                }
                
                try {
                    const code = await sock.requestPairingCode(number);
                    console.log(`\n👑 PAIR CODE: ${code}\n`);
                    await sock.sendMessage(msg.key.remoteJid, { 
                        text: `👑 Pair Code: ${code}\n\nEnter this code in WhatsApp:\nSettings → Linked Devices → Link with Phone Number` 
                    });
                } catch (error) {
                    await sock.sendMessage(msg.key.remoteJid, { text: `❌ Error: ${error.message}` });
                }
            }
        } catch (error) {
            console.error('Error handling message:', error);
        }
    });

    return sock;
};

// Start the bot
startWhatsAppBot().catch(err => {
    console.error('Failed to start WhatsApp bot:', err);
    process.exit(1);
});

module.exports = { startWhatsAppBot, botMode };
