let handler = async (m, { conn }) => {
    conn.sendFile(m.chat,'media/sticker/Bot1.webp', '', 'xd', m)
}

handler.customPrefix = /jajaja|jsjsj|JAJAJAJA/i
handler.command = new RegExp

module.exports = handler