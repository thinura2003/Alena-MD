const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94711421243']
global.premium = ['94711421243']
global.ownernomer = '94711421243'
global.ownername = 'Thinura'
global.botname = 'Bixby-MD'
global.footer = '© Alena ™'
global.ig = 'https://github.com/DGXeon'
global.region = 'Kerala'
global.sc = 'https://github.com/Afx-Abu/Alena-MD'
global.myweb = 'https://instagram.com/jsl_xr'
global.packname = 'Alena'
global.author = 'Bixby  By Thinura'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'ᴅᴏɴᴇ ✓',
    admin: 'ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴏɴʟʏ ғᴏʀ ᴀᴅᴍɪɴ !',
    botAdmin: 'ᴀᴅᴍɪɴ ɢɪᴠᴇ ᴍᴜsᴛ ᴛʜᴇɴ ᴡᴏʀᴄᴋ ᴄᴏᴍᴍᴀɴᴅ !',
    owner: 'ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴏɴʟʏ ᴏᴡɴᴇʀ !',
    group: 'ᴛʜɪs ғᴇᴀᴛᴜʀᴇ ᴏɴʟʏ ɢʀᴏᴜᴘ !',
    private: 'ᴛʜɪs ᴡᴏʀᴄᴋ ᴏɴʟʏ ᴘʀɪᴠᴀᴛᴇ !',
    bot: 'ᴛʜɪs ᴡᴏʀᴄᴋ ᴏɴʟʏ ʙᴏᴛ',
    wait: 'ටිකක් ඉම්න....',
    error: 'ᴀᴘɪ ᴋᴇʏ ᴇxᴘɪʀᴇᴅ !',
    endLimit: 'ʏᴏᴜʀ ɢᴇᴛᴇᴅ ғɪʟʏ ʟɪᴍɪᴛ !',
}
    global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
//HEROKO VARS
global.thumb = process.env.IMAGE || 'https://telegra.ph/file/8dcf20551b533dd0739e5.jpg'

function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
