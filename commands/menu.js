module.exports = {
    name: 'menu',
    // For WhatsApp
    executeWhatsApp: async (sock, msg) => {
        const menuText = `👑 *MR DARK KING MD* 👑

*Available Commands:*

*.menu* - Show this menu
*.owner* - Owner info
*.ping* - Check if bot is alive

*Bot Running On:*
WhatsApp + Telegram

Made by Mr Dark`
        
        await sock.sendMessage(msg.key.remoteJid, { 
            text: menuText
        });
    },

    // For Telegram  
    executeTelegram: async (ctx) => {
        const menuText = `👑 *MR DARK KING MD* 👑

*Available Commands:*

*/menu* - Show this menu
*/owner* - Owner info
*/ping* - Check if bot is alive

*Bot Running On:*
WhatsApp + Telegram

Made by Mr Dark`
        
        ctx.reply(menuText, { parse_mode: "Markdown" });
    }
}
