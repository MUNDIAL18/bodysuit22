let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, 'media/sticker/Stiker�.webp', '', 'xd', m)
}

handler.customPrefix = /^�$/i
handler.command = new RegExp

module.exports = handler