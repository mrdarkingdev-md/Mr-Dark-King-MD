module.exports = {
    name: 'menu',
    // For WhatsApp
    executeWhatsApp: async (sock, msg) => {
        const menuText = `
╔════════════════════════════════════╗
║     👑 MR DARK KING MD - MENU 👑   ║
╚════════════════════════════════════╝

📱 *AVAILABLE COMMANDS:*

🎯 General Commands:
  • .menu - Show this menu
  • .ping - Check bot status
  • .status - Bot connection status
  • .channel - Join our WhatsApp channel
  • .group - Join our WhatsApp group

👤 Account Commands:
  • .owner - Owner information
  • .pair <number> - Generate pairing code

💡 *Example:*
  .pair 2348012345678

📞 *Need Help?*
Reply to any command or contact owner

✨ *Status:* Bot is Online
`;
        
        await sock.sendMessage(msg.key.remoteJid, { text: menuText });
    },

    // For Telegram  
    executeTelegram: async (ctx) => {
        const menuText = `
╔════════════════════════════════════╗
║     👑 MR DARK KING MD - MENU 👑   ║
╚════════════════════════════════════╝

📱 *AVAILABLE COMMANDS:*

🎯 General Commands:
  • /menu - Show this menu
  • /ping - Check bot status
  • /status - Bot connection status
  • /channel - Join our WhatsApp channel
  • /group - Join our WhatsApp group

👤 Account Commands:
  • /owner - Owner information

💡 *Features:*
  • Fast response time
  • Multi-platform support
  • Channel management
  • Group management

✨ *Status:* Bot is Online
`;
        
        ctx.reply(menuText, { parse_mode: "Markdown" });
    }
}
