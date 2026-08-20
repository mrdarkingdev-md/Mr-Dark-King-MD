module.exports = {
    name: 'group',
    // For WhatsApp
    executeWhatsApp: async (sock, msg) => {
        const groupText = `📱 *JOIN OUR WHATSAPP GROUP* 📱

🎯 *Community Group:*
https://chat.whatsapp.com/ByCrWBiCH6z7cRP6PGCd9q

✨ Benefits:
  • Direct access to bot owner
  • Get latest updates
  • Share ideas & feedback
  • Community support
  • Exclusive features

👥 Join now and be part of our community!`;

        await sock.sendMessage(msg.key.remoteJid, { 
            text: groupText,
            contextInfo: {
                externalAdReply: {
                    title: "Join Our Group",
                    body: "Click to join WhatsApp group",
                    sourceUrl: "https://chat.whatsapp.com/ByCrWBiCH6z7cRP6PGCd9q"
                }
            }
        });
    },

    // For Telegram  
    executeTelegram: async (ctx) => {
        const groupText = `📱 *JOIN OUR WHATSAPP GROUP* 📱

🎯 *Community Group:*
https://chat.whatsapp.com/ByCrWBiCH6z7cRP6PGCd9q

✨ Benefits:
  • Direct access to bot owner
  • Get latest updates
  • Share ideas & feedback
  • Community support
  • Exclusive features

👥 Join now and be part of our community!`;

        ctx.reply(groupText, { parse_mode: "Markdown" });
    }
}
