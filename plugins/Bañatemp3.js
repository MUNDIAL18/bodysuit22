let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/Banate.mp3'
conn.sendFile(m.chat, vn, 'Banate.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /bañate|cerda|cochina|hueles a caca|mierda/
handler.command = new RegExp
module.exports = handler
