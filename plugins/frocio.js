let handler = async (m, { conn, command, text }) => {
let love = `*CALCOLATORE DI FROCIAGGINE🍆*
*${text}  è frocio del  *${Math.floor(Math.random() * 100)}%* * 100%*

`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(frocio)$/i
export default handler
