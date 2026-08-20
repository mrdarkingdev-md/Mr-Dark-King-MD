module.exports = {
    name: 'ping',
    // For WhatsApp
    executeWhatsApp: async (sock, msg) => {
        const pingText = `🏓 *PONG!*

Bot is alive and running! ✅
Response Time: Fast`
        
        await sock.sendMessage(msg.key.remoteJid, { 
            text: pingText
        });
    },

    // For Telegram  
    executeTelegram: async (ctx) => {
        const pingText = `🏓 *PONG!*

Bot is alive and running! ✅
Response Time: Fast`
        
        ctx.reply(pingText, { parse_mode: "Markdown" });
    }
}
