module.exports = {
    name: 'owner',
    // For WhatsApp
    executeWhatsApp: async (sock, msg) => {
        const ownerText = `👑 *MR DARK KING MD* 👑

*Owner Name*: Mr Dark King Dev
*WhatsApp*: +2348071569915
*WhatsApp Username*: @mrdarkingdev1

*Telegram*: @mrdarkingdev

Tap to chat: wa.me/2348071569915`
        
        await sock.sendMessage(msg.key.remoteJid, { 
            text: ownerText,
            contextInfo: {
                mentionedJid: ['2348071569915@s.whatsapp.net']
            }
        });
    },

    // For Telegram  
    executeTelegram: async (ctx) => {
        const ownerText = `👑 *MR DARK KING MD* 👑

*Owner Name*: Mr Dark King Dev
*WhatsApp*: +2348071569915
*WhatsApp Username*: @mrdarkingdev1

*Telegram*: @mrdarkingdev`
        
        ctx.reply(ownerText, { parse_mode: "Markdown" });
    }
}
