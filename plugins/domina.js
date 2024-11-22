let toM = a => '@' + a.split('@')[0];

function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id);
    
    // Controllo che ci siano almeno due partecipanti
    if (ps.length < 2) {
        m.reply("Non ci sono abbastanza partecipanti per formare una coppia.");
        return;
    }
    
    // Randomizzazione per scegliere due partecipanti
    let [a, b] = ps.sort(() => 0.5 - Math.random()).slice(0, 2);

    // Controllo del cooldown
    if (m.lastUsed && Date.now() - m.lastUsed < 30000) {
        m.reply("𝐃𝐞𝐯𝐨𝐧𝐨 𝐩𝐚𝐬𝐬𝐚𝐫𝐞 30 𝐬𝐞𝐜𝐨𝐧𝐝𝐢 𝐩𝐞𝐫 𝐩𝐨𝐭𝐞𝐫 𝐫𝐢𝐟𝐚𝐫𝐞 𝐢𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨.");
        return;
    }
    m.lastUsed = Date.now();

    // Messaggio di risposta
    m.reply(`---------------☾︎𖤍☽︎--------------- 
 *${toM(a)}* 𝚟𝚎𝚛𝚛𝚊̀ 𝚜𝚘𝚝𝚝𝚘𝚖𝚎𝚜𝚜𝚘/𝚊 𝚎 𝚊𝚋𝚞𝚜𝚊𝚝𝚘/𝚊 𝚍𝚊 *${toM(b)}*🥵. 
 𝙱𝚞𝚘𝚗𝚊 𝚏𝚘𝚛𝚝𝚞𝚗𝚊 𝚙𝚞𝚝𝚝𝚊𝚗𝚎𝚕𝚕𝚊⛓️ ---------------☾︎𖤍☽︎---------------`, null, {
        mentions: [a, b]
    });
}

handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['domina'];
handler.group = true;

export default handler;
 
