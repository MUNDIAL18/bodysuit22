let handler = function (m) {
  // this.sendContact(m.chat, '593 96 416 3489', '๐Kevin๐', m)
  this.sendContact(m.chat, '593964163489', '๐Kevin๐', m)
}
handler.help = ['owner', 'creador']
handler.tags = ['info']

handler.command = /^(owner|creador)$/i

module.exports = handler
