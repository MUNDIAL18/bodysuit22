// xie hua piao piao batman membuka kulkas dan mngambil semangka lalu memberikan mayo di atas semangka

let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw '_Error!_'
  conn.sendFile(m.chat, json.url, '', '✨𝐛𝐨𝐭-𝒔𝒆𝒙𝒚✨', m)
}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^neko$/i
module.group = true
module.register = false

module.exports = handler
