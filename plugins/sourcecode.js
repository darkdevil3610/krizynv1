let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'GOURAV BOTz')).buffer(), `
Contact owner https://instagram.com/dark_devil_3609 and follow him and send .sc in Instagram 
-
`.trim(), '© 𝗚𝗼𝘂𝗿𝗮𝘃×͜×', 'Thanks', '.tqto', 'Back','.menu')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
