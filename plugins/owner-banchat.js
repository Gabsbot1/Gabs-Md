let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('Il bot si è addormentato💤 ✓')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat|off$/i
handler.rowner = true
export default handler
