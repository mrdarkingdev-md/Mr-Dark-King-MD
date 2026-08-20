require('dotenv').config();

module.exports = {
    name: 'owner',
    // For WhatsApp
    executeWhatsApp: async (sock, msg) => {
        const ownerText = `
╔════════════════════════════════════╗
║        👑 BOT OWNER INFO 👑        ║
╚════════════════════════════════════╝

📝 *Owner Details:*
  Name: ${process.env.BOT_OWNER || 'Mr Dark King Dev'}
  Phone: ${process.env.BOT_OWNER_PHONE || '+234 807 156 9915'}

🤖 *Bot Info:*
  Name: MR DARK KING MD
  Version: 1.0
  Platform: WhatsApp + Telegram

📱 *Join Channel:*
  https://whatsapp.com/channel/0029Vb8LXbO6LwHkS1PGWV1E

💬 *Contact:*
  For inquiries, use .pair command to get paired
  and access full bot features.

✨ Thanks for using our bot!
`;
        
        await sock.sendMessage(msg.key.remoteJid, { text: ownerText });
    },

    // For Telegram  
    executeTelegram: async (ctx) => {
        const ownerText = `
╔════════════════════════════════════╗
║        👑 BOT OWNER INFO 👑        ║
╚════════════════════════════════════╝

📝 *Owner Details:*
  Name: ${process.env.BOT_OWNER || 'Mr Dark King Dev'}
  Phone: ${process.env.BOT_OWNER_PHONE || '+234 807 156 9915'}

🤖 *Bot Info:*
  Name: MR DARK KING MD
  Version: 1.0
  Platform: WhatsApp + Telegram

📱 *Join Channel:*
  https://whatsapp.com/channel/0029Vb8LXbO6LwHkS1PGWV1E

💬 *Contact:*
  For inquiries, contact the owner
  or join our channel for updates.

✨ Thanks for using our bot!
`;
        
        ctx.reply(ownerText, { parse_mode: "Markdown" });
    }
}
