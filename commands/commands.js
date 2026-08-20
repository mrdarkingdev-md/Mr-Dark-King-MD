require('dotenv').config();

module.exports = {
    name: 'commands',
    
    executeWhatsApp: async (sock, msg) => {
        const commandList = `*╭══ ╳-♡═════════⊷*
*♡︎•━━━━━ mr Dark king MD ━━━━━━•♡*

┏━ ɢᴇɴᴇʀᴀʟ ━┓
 ▸ .ᴀʟɪᴠᴇ
 ▸ .ᴍᴇɴᴜ
 ▸ .ɢᴍᴇɴᴜ
 ▸ .ʟɪsᴛ
 ▸ .ʜᴇʟᴘ
 ▸ .ᴄʜᴀɴɴᴇʟ
 ▸ .ʀᴇᴘᴏ
 ▸ .ᴏᴡɴᴇʀ
 ▸ .ᴘɪɴɢ
 ▸ .ᴜᴘᴛɪᴍᴇ
 ▸ .ᴠᴇʀsɪᴏɴ
 ▸ .sᴛᴀᴛᴜs
 ▸ .ʙᴏᴛɪɴғᴏ
 ▸ .ᴘʀᴏғɪʟᴇ
 ▸ .ᴜsᴇʀɪɴғᴏ
 ▸ .ɢʀᴏᴜᴘɪɴғᴏ
 ▸ .ᴊɪᴅ
 ▸ .ᴄʜᴀᴛɪᴅ
 ▸ .ᴍʏɪᴅ
 ▸ .ᴄᴏᴜɴᴛʀʏ
 ▸ .ᴛɪᴍᴇ
 ▸ .ᴅᴀᴛᴇ
 ▸ .ᴢᴏᴅɪᴀᴄ
 ▸ .ʀᴇᴘᴇᴀᴛ
 ▸ .sᴀʏ
 ▸ .ǫᴜᴏᴛᴇ
 ▸ .ʀᴀɴᴅᴏᴍ
 ▸ .ᴍᴇᴍᴇ
 ▸ .ʀᴇᴘᴏʀᴛ
 ▸ .sᴜᴘᴘᴏʀᴛ
 ▸ .ᴄᴏɴᴛᴀᴄᴛ
 ▸ .ғᴇᴇᴅʙᴀᴄᴋ
 ▸ .ʀᴇǫᴜᴇsᴛ
 ▸ .sᴜɢɢᴇsᴛ
 ▸ .ɴᴇᴡs
 ▸ .ᴜᴘᴅᴀᴛᴇs
 ▸ .ʀᴜʟᴇs
 ▸ .ᴛᴏs
 ▸ .ᴘʀɪᴠᴀᴄʏ
 ▸ .ᴘʀᴇғɪx
 ▸ .ʟᴀɴɢ
 ▸ .sᴇᴛʟᴀɴɢ
 ▸ .sᴇᴛᴘʀᴇғɪx
 ▸ .ʀᴇsᴇᴛ
┗━━━━━━━━━━━━━━━━┛

┏━ ᴍɪᴄs ━┓
 ▸ .ᴘɪɴɢ
 ▸ .ᴜᴘᴛɪᴍᴇ
┗━━━━━━━━━━━━━━━━┛

┏━ ɢʀᴏᴜᴘ ━┓
 ▸ .ᴘʀᴏᴍᴏᴛᴇ
 ▸ .ᴅᴇᴍᴏᴛᴇ
 ▸ .ᴋɪᴄᴋ
 ▸ .ᴀᴅᴅ
 ▸ .ʟᴏᴄᴋ
 ▸ .ᴜɴʟᴏᴄᴋ
 ▸ .ᴄʟᴏsᴇ
 ▸ .ᴏᴘᴇɴ
 ▸ .sᴜʙᴊᴇᴄᴛ
 ▸ .ᴅᴇsᴄ
 ▸ .ɢʀᴏᴜᴘɪɴғᴏ
 ▸ .ᴛᴀɢᴀʟʟ
 ▸ .ɪɴᴀᴄᴛɪᴠᴇ ᴛᴀɢ
 ▸ .ʜɪᴅᴇᴛᴀɢ
 ▸ .ᴡᴀʀɴ
 ▸ .ᴀɴᴛɪʟɪɴᴋ ᴋɪᴄᴋ
 ▸ .ᴀɴᴛɪʟɪɴᴋ ᴅᴇʟᴇᴛᴇ
 ▸ .ᴡᴀʀɴᴄᴏᴜɴᴛ
 ▸ .ᴡᴀʀɴʀᴇsᴇᴛ
 ▸ .ᴛᴏɢᴄsᴛᴀᴛᴜs
 ▸ .ɢᴄsᴛᴀᴛᴜs
 ▸ .ᴀɴᴛɪɢʀᴏᴜᴘᴍᴇɴᴛɪᴏɴ
 ▸ .ᴀɴᴛɪʟɪɴᴋ
 ▸ .ᴀɴᴛɪʙᴏᴛ
 ▸ .ᴀɴᴛɪɢʜᴏsᴛ
 ▸ .ᴀɴᴛɪsᴛɪᴄᴋᴇʀ
 ▸ .ᴀɴᴛɪᴡᴏʀᴅ
 ▸ .ᴡᴇʟᴄᴏᴍᴇ
 ▸ .sᴇᴛɢᴏᴏᴅʙʏᴇ
 ▸ .sᴇᴛᴡᴇʟᴄᴏᴍᴇ
 ▸ .ɢᴏᴏᴅʙʏᴇ
 ▸ .ʀᴇᴠᴏᴋᴇ
 ▸ .ɪɴᴠɪᴛᴇ
 ▸ .ʟᴇᴀᴠᴇ
 ▸ .ᴀᴅᴍɪɴ
 ▸ .ᴀᴅᴍɪɴs
 ▸ .ᴍᴜᴛᴇᴜsᴇʀ
 ▸ .ᴜɴᴍᴜᴛᴇᴜsᴇʀ
 ▸ .ᴍᴜᴛᴇʟɪsᴛ
 ▸ .ᴀғᴋ
 ▸ .ᴜɴᴀғᴋ
 ▸ .ᴍᴇᴍʙᴇʀᴄᴏᴜɴᴛ
 ▸ .ʀᴜʟᴇs
 ▸ .sᴇᴛʀᴜʟᴇs
 ▸ .ᴀɴɴᴏᴜɴᴄᴇ
 ▸ .ʟɪɴᴋ
┗━━━━━━━━━━━━━━━━┛

┏━ ᴏᴡɴᴇʀ ━┓
 ▸ .ᴍᴏᴅᴇ
 ▸ .ᴘᴜʙʟɪᴄ
 ▸ .ᴘʀɪᴠᴀᴛᴇ
 ▸ .sᴇʟғ
 ▸ .ᴀᴜᴛᴏʀᴇᴀᴅ
 ▸ .ᴀᴜᴛᴏᴛʏᴘɪɴɢ
 ▸ .ᴀᴜᴛᴏʀᴇᴄᴏʀᴅ
 ▸ .ᴀᴜᴛᴏʀᴇᴀᴄᴛ
 ▸ .ᴀᴜᴛᴏsᴛᴀᴛᴜs
 ▸ .ᴀɴᴛɪᴄᴀʟʟ
 ▸ .ʙʟᴏᴄᴋ
 ▸ .ᴜɴʙʟᴏᴄᴋ
 ▸ .sᴇᴛᴘᴘ
 ▸ .ʀᴇᴍᴏᴠᴇᴘᴘ
 ▸ .sᴇᴛɴᴀᴍᴇ
 ▸ .ᴍʏɴᴀᴍᴇ
 ▸ .sᴇᴛʙɪᴏ
 ▸ .ᴍʏᴘʀɪᴠᴀᴄʏ
 ▸ .ᴍʏsᴛᴀᴛᴜs
 ▸ .ᴊɪᴅ
 ▸ .ɢᴇᴛɴᴀᴍᴇ
 ▸ .ɢᴇᴛʙɪᴏ
 ▸ .ɢᴇᴛᴘᴘ
 ▸ .ᴡʜᴏɪs
 ▸ .ᴅᴇʟᴇᴛᴇ
 ▸ .ᴅᴇʟ
 ▸ .ᴅᴇʟᴍᴇ
 ▸ .ғᴏʀᴡᴀʀᴅ
 ▸ .ғᴡᴅ
 ▸ .ʙʀᴏᴀᴅᴄᴀsᴛ
 ▸ .ᴊᴏɪɴ
 ▸ .ʟᴇᴀᴠᴇᴀʟʟ
 ▸ .ʟɪsᴛɢᴄ
 ▸ .ᴍᴇɴᴛɪᴏɴ
 ▸ .sᴀᴠᴇ
 ▸ .sᴀᴠᴇᴅ
 ▸ .ǫᴜᴏᴛᴇᴅ
 ▸ .ʙʟᴏᴄᴋʟɪsᴛ
 ▸ .ᴜɴʙʟᴏᴄᴋᴀʟʟ
┗━━━━━━━━━━━━━━━━┛

┏━ ʀᴇᴀᴄᴛɪᴏɴs ━┓
 ▸ .ᴀɴɢʀʏ
 ▸ .ʙᴀᴋᴀ
 ▸ .ʙɪᴛᴇ
 ▸ .ʙʟᴇʜ
 ▸ .ʙʟᴏᴡᴋɪss
 ▸ .ʙʟᴜsʜ
 ▸ .ʙᴏɴᴋ
 ▸ .ʙᴏʀᴇᴅ
 ▸ .ᴄᴀʀʀʏ
 ▸ .ᴄʟᴀᴘ
 ▸ .ᴄᴏɴғᴜsᴇᴅ
 ▸ .ᴄʀʏ
 ▸ .ᴄᴜᴅᴅʟᴇ
 ▸ .ᴅᴀɴᴄᴇ
 ▸ .ғᴀᴄᴇᴘᴀʟᴍ
 ▸ .ғᴇᴇᴅ
 ▸ .ʜᴀɴᴅʜᴏʟᴅ
 ▸ .ʜᴀɴᴅsʜᴀᴋᴇ
 ▸ .ʜᴀᴘᴘʏ
 ▸ .ʜɪɢʜғɪᴠᴇ
 ▸ .ʜᴜɢ
 ▸ .ᴋᴀʙᴇᴅᴏɴ
 ▸ .ᴋɪss
 ▸ .ʟᴀᴜɢʜ
 ▸ .ɴᴏᴅ
 ▸ .ɴᴏᴍ
 ▸ .ɴᴏᴘᴇ
 ▸ .ɴʏᴀ
 ▸ .ᴘᴀᴛ
 ▸ .ᴘᴇᴄᴋ
 ▸ .ᴘᴏᴋᴇ
 ▸ .ᴘᴏᴜᴛ
 ▸ .ᴘᴜɴᴄʜ
 ▸ .ʀᴜɴ
 ▸ .sᴀʟᴜᴛᴇ
 ▸ .sʜᴀᴋᴇ
 ▸ .sʜᴏᴄᴋᴇᴅ
 ▸ .sʜʀᴜɢ
 ▸ .sɪᴘ
 ▸ .sʟᴀᴘ
 ▸ .sᴍɪʟᴇ
 ▸ .sᴍᴜɢ
 ▸ .sᴘɪɴ
 ▸ .sᴛᴀʀᴇ
 ▸ .ᴛᴀʙʟᴇғʟɪᴘ
 ▸ .ᴛᴇᴇʜᴇᴇ
 ▸ .ᴛʜɪɴᴋ
 ▸ .ᴛʜᴜᴍʙsᴜᴘ
 ▸ .ᴛɪᴄᴋʟᴇ
 ▸ .ᴡᴀɢ
 ▸ .ᴡᴀᴠᴇ
 ▸ .ᴡɪɴᴋ
 ▸ .ʏᴀᴡɴ
 ▸ .ʏᴇᴇᴛ
┗━━━━━━━━━━━━━━━━┛

┏━ ᴀɴɪᴍᴇ ━┓
 ▸ .ɴᴇᴋᴏ
 ▸ .ᴡᴀɪғᴜ
 ▸ .ᴍᴀɪᴅ
 ▸ .ᴍᴇɢᴜᴍɪɴ
 ▸ .sʜɪɴᴏʙᴜ
 ▸ .ᴀǫᴜᴏᴛᴇ
 ▸ .ᴀᴄʜᴀʀ
 ▸ .ᴀsᴇᴀʀᴄʜ
 ▸ .ᴀʀᴇᴄᴏᴍᴍᴇɴᴅ
┗━━━━━━━━━━━━━━━━┛

┏━ sᴇᴀʀᴄʜ ━┓
 ▸ .ᴡɪᴋɪ
┗━━━━━━━━━━━━━━━━┛

┏━ ɪɴғᴏ ━┓
 ▸ .ᴀɴɪᴍᴇ
 ▸ .ᴍᴀɴɢᴀ
 ▸ .ᴄʜᴀʀᴀᴄᴛᴇʀ
 ▸ .ᴡᴇᴀᴛʜᴇʀ
 ▸ .ʟʏʀɪᴄs
┗━━━━━━━━━━━━━━━━┛

┏━ ᴛᴏᴏʟs ━┓
 ▸ .ᴄᴀʟᴄ
 ▸ .ǫʀ
 ▸ .sʜᴏʀᴛᴜʀʟ
 ▸ .ssᴡᴇʙ
 ▸ .ɢᴇᴛ
 ▸ .ᴄɪʀᴄʟᴇ
 ▸ .ᴛᴏᴍᴘ3
┗━━━━━━━━━━━━━━━━┛

┏━ ᴍᴇᴅɪᴀ ━┓
 ▸ .sᴛɪᴄᴋᴇʀ
 ▸ .s
 ▸ .ᴛᴏɪᴍᴀɢᴇ
 ▸ .sᴛɪᴄᴋᴇʀ2ɪᴍɢ
 ▸ .ᴛᴀᴋᴇ
 ▸ .ɪᴍᴀɢᴇɪɴғᴏ
 ▸ .ɪᴍᴀɢᴇʜᴇʟᴘ
 ▸ .ᴠɪᴅᴇᴏ2ɪᴍɢ
 ▸ .ᴠs
 ▸ .ʀᴇᴍɪɴɪ
┗━━━━━━━━━━━━━━━━┛

┏━ ᴄᴏɴᴠᴇʀᴛᴇʀ ━┓
 ▸ .ᴜʀʟ
┗━━━━━━━━━━━━━━━━┛

┏━ ᴀɪ ━┓
 ▸ .ɢᴘᴛ
 ▸ .ᴄᴏᴘɪʟᴏᴛ
┗━━━━━━━━━━━━━━━━┛

┏━ ᴜᴛɪʟɪᴛʏ ━┓
 ▸ .ʙᴀsᴇ64ᴇɴᴄᴏᴅᴇ
 ▸ .ʙᴀsᴇ64ᴅᴇᴄᴏᴅᴇ
 ▸ .ʜᴇxᴇɴᴄᴏᴅᴇ
 ▸ .ʜᴇxᴅᴇᴄᴏᴅᴇ
 ▸ .ʙɪɴᴇɴᴄᴏᴅᴇ
 ▸ .ʙɪɴᴅᴇᴄᴏᴅᴇ
 ▸ .ᴍᴅ5
 ▸ .sʜᴀ1
 ▸ .sʜᴀ256
 ▸ .ʀᴏᴛ13
 ▸ .ᴄᴀᴇsᴀʀ
 ▸ .ᴍᴏʀsᴇ
 ▸ .ᴜɴᴍᴏʀsᴇ
 ▸ .ʀᴇᴠᴇʀsᴇ
 ▸ .ᴜᴘᴘᴇʀ
 ▸ .ʟᴏᴡᴇʀ
 ▸ .ᴄᴀᴘɪᴛᴀʟɪᴢᴇ
 ▸ .ʟᴇᴇᴛ
 ▸ .ᴍᴏᴄᴋ
 ▸ .ᴠᴏᴡᴇʟᴄᴏᴜɴᴛ
 ▸ .ᴡᴏʀᴅᴄᴏᴜɴᴛ
 ▸ .ᴄʜᴀʀᴄᴏᴜɴᴛ
 ▸ .ᴘᴀʟɪɴᴅʀᴏᴍᴇ
 ▸ .ғᴀᴄᴛᴏʀɪᴀʟ
 ▸ .ғɪʙᴏɴᴀᴄᴄɪ
 ▸ .ɢᴄᴅ
 ▸ .ʟᴄᴍ
 ▸ .ᴘʀɪᴍᴇ
 ▸ .ʀᴏᴍᴀɴ
 ▸ .ᴜᴜɪᴅ
 ▸ .ᴘᴀssᴡᴏʀᴅ
 ▸ .ᴛɪᴍᴇsᴛᴀᴍᴘ
 ▸ .ᴛɪᴍᴇ
 ▸ .ʙᴍɪ
 ▸ .ᴘᴇʀᴄᴇɴᴛ
 ▸ .sʟᴜɢɪғʏ
 ▸ .ᴜʀʟᴇɴᴄᴏᴅᴇ
 ▸ .ᴜʀʟᴅᴇᴄᴏᴅᴇ
 ▸ .ᴀɢᴇ
 ▸ .ᴅᴇғɪɴᴇ
 ▸ .ᴛɪᴛʟᴇ
 ▸ .ʟᴏʀᴇᴍ
 ▸ .ᴄʟᴀᴘɪᴛ
┗━━━━━━━━━━━━━━━━┛

┏━ ғᴜɴ ━┓
 ▸ .8ʙᴀʟʟ
 ▸ .ᴅɪᴄᴇ
 ▸ .ᴄᴏɪɴғʟɪᴘ
 ▸ .ᴛʀᴜᴛʜ
 ▸ .ᴅᴀʀᴇ
 ▸ .ᴡᴏᴜʟᴅʏᴏᴜʀᴀᴛʜᴇʀ
 ▸ .ɴᴇᴠᴇʀʜᴀᴠᴇɪᴇᴠᴇʀ
 ▸ .ʀɪᴅᴅʟᴇ
 ▸ .ᴊᴏᴋᴇ
 ▸ .ᴅᴀᴅᴊᴏᴋᴇ
 ▸ .ғᴀᴄᴛ
 ▸ .ᴀᴅᴠɪᴄᴇ
 ▸ .ǫᴜᴏᴛᴇ
 ▸ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
 ▸ .ʀᴏᴀsᴛ
 ▸ .ᴘɪᴄᴋᴜᴘ
 ▸ .sʜɪᴘ
 ▸ .ʟᴏᴠᴇᴄᴀʟᴄ
 ▸ .ʀᴀᴛᴇ
 ▸ .ɪǫ
 ▸ .ᴄʜᴏᴏsᴇ
 ▸ .ᴅᴇᴄɪᴅᴇ
 ▸ .ʀᴀɴᴅᴏᴍɴᴜᴍʙᴇʀ
 ▸ .ʀᴀɴᴅᴏᴍᴡᴏʀᴅ
 ▸ .ʀᴀɴᴅᴏᴍᴄᴏʟᴏʀ
 ▸ .ʀᴀɴᴅᴏᴍᴀɴɪᴍᴀʟ
 ▸ .ʀᴀɴᴅᴏᴍᴄᴏᴜɴᴛʀʏ
 ▸ .ғʀɪᴇɴᴅsʜɪᴘ
┗━━━━━━━━━━━━━━━━┛

┏━ ᴜɴɪᴄᴏᴅᴇ ━┓
 ▸ .ʙᴏʟᴅ
 ▸ .ɪᴛᴀʟɪᴄ
 ▸ .ʙᴜʙʙʟᴇ
 ▸ .sᴛʀɪᴋᴇ
 ▸ .ᴜɴᴅᴇʀʟɪɴᴇ
 ▸ .ғʟɪᴘ
 ▸ .sᴍᴀʟʟᴄᴀᴘs
┗━━━━━━━━━━━━━━━━┛

◤━━━━━━━━━━━━━━━━━━◥
   
◣━━━━━━━━━━━━━━━━━━◢

> Mr dark king ᴍᴅ  · mr dark king dev ᴛᴇᴄʜ`;

        await sock.sendMessage(msg.key.remoteJid, { text: commandList });
    },

    executeTelegram: async (ctx) => {
        const commandList = `*╭══ ╳-♡═════════⊷*
*♡︎•━━━━━ mr Dark king MD ━━━━━━•♡*

📋 *COMPLETE COMMAND LIST* 📋

⭐ *GENERAL COMMANDS* (47)
/alive /menu /gmenu /list /help /channel /repo /owner /ping /uptime /version /status /botinfo /profile /userinfo /groupinfo /jid /chatid /myid /country /time /date /zodiac /repeat /say /quote /random /meme /report /support /contact /feedback /request /suggest /news /updates /rules /tos /privacy /prefix /lang /setlang /setprefix /reset

🎮 *MISC* (2)
/ping /uptime

👥 *GROUP MANAGEMENT* (56)
/promote /demote /kick /add /lock /unlock /close /open /subject /desc /groupinfo /tagall /inactive-tag /hidetag /warn /antilink-kick /antilink-delete /warncount /warnreset /togcstatus /gcstatus /antigroupmention /antilink /antibot /antighostimage /antisticker /antiword /welcome /setgoodbye /setwelcome /goodbye /revoke /invite /leave /admin /admins /muteuser /unmuteuser /mutelist /afk /unafk /membercount /rules /setrules /announce /link

⚙️ *OWNER COMMANDS* (52)
/mode /public /private /self /autoread /autotyping /autorecord /autoreact /autostatus /anticall /block /unblock /setpp /removepp /setname /myname /setbio /myprivacy /mystatus /jid /getname /getbio /getpp /whois /delete /del /delme /forward /fwd /broadcast /join /leaveall /listgc /mention /save /saved /quoted /blocklist /unblockall

😄 *REACTIONS* (54)
/angry /baka /bite /bleh /blowkiss /blush /bonk /bored /carry /clap /confused /cry /cuddle /dance /facepalm /feed /handhold /handshake /happy /highfive /hug /kabedon /kiss /laugh /nod /nom /nope /nya /pat /peck /poke /pout /punch /run /salute /shake /shocked /shrug /sip /slap /smile /smug /spin /stare /tableflip /teehee /think /thumbsup /tickle /wag /wave /wink /yawn /yeet

🎨 *ANIME* (10)
/neko /waifu /maid /megumin /shinobu /aquote /achar /asearch /arecommend

🔍 *SEARCH* (1)
/wiki

ℹ️ *INFO* (5)
/anime /manga /character /weather /lyrics

🛠️ *TOOLS* (7)
/calc /qr /shorturl /ssweb /get /circle /tomp3

🎬 *MEDIA* (10)
/sticker /s /toimage /sticker2img /take /imageinfo /imagehelp /video2img /vs /remini

🔄 *CONVERTER* (1)
/url

🤖 *AI* (2)
/gpt /copilot

⚡ *UTILITY* (67)
/base64encode /base64decode /hexencode /hexdecode /binencode /bindecode /md5 /sha1 /sha256 /rot13 /caesar /morse /unmorse /reverse /upper /lower /capitalize /leet /mock /vowelcount /wordcount /charcount /palindrome /factorial /fibonacci /gcd /lcm /prime /roman /uuid /password /timestamp /time /bmi /percent /slugify /urlencode /urldecode /age /define /title /lorem /clapit

🎲 *FUN* (31)
/8ball /dice /coinflip /truth /dare /wouldyourather /neverhaveiever /riddle /joke /dadjoke /fact /advice /quote /compliment /roast /pickup /ship /lovecalc /rate /iq /choose /decide /randomnumber /randomword /randomcolor /randomanimal /randomcountry /friendship

🔤 *UNICODE* (7)
/bold /italic /bubble /strike /underline /flip /smallcaps

◤━━━━━━━━━━━━━━━━━━◥
   
◣━━━━━━━━━━━━━━━━━━◢

> Mr dark king ᴍᴅ  · mr dark king dev ᴛᴇᴄʜ`;

        ctx.reply(commandList, { parse_mode: "Markdown" });
    }
};
