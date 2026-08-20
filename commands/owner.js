require('dotenv').config();

module.exports = {
    name: 'owner',
    // For WhatsApp
    executeWhatsApp: async (sock, msg) => {
        const ownerInfo = `👑 *BOT OWNER INFO* 👑

*Owner:* Mr Dark King Dev
*Co-Founder:* Sherlock himself
*WhatsApp:* +234 701 546 3103
*Number:* 2347015463103

📱 *Join Our Group:*
https://chat.whatsapp.com/ByCrWBiCH6z7cRP6PGCd9q

⛧ *mr dark king dev bot*`;

        await sock.sendMessage(msg.key.remoteJid, { 
            text: ownerInfo,
            contextInfo: {
                externalAdReply: {
                    title: "Mr Dark King Dev Bot",
                    body: "Co-Founder: Sherlock",
                    thumbnailUrl: "https://i.imgur.com/xxxx.jpg",
                    sourceUrl: "https://github.com/mrdarkingdev-md/mr-dark-king-md"
                }
            }
        });
    },

    // For Telegram  
    executeTelegram: async (ctx) => {
        const ownerText = `👑 *BOT OWNER INFO* 👑

*Owner:* Mr Dark King Dev
*Co-Founder:* Sherlock himself
*WhatsApp:* +234 701 546 3103
*Number:* 2347015463103

📱 *Join Our Group:*
https://chat.whatsapp.com/ByCrWBiCH6z7cRP6PGCd9q

🔗 GitHub: https://github.com/mrdarkingdev-md/mr-dark-king-md

⛧ *mr dark king dev bot*`;
        
        ctx.reply(ownerText, { parse_mode: "Markdown" });
    }
}
