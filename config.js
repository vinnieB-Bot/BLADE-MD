const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '254765268678'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'vinnieb254@gmail.com'
global.github = 'https://github.com/Bladeh4x/BLADE-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/alex_david/' // add your username
global.sudo = process.env.SUDO || "254765268678"
global.devs = '254765268678'
global.website = 'https://github.com/Bladeh4x/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID |BLADE-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkVZZnpINjdPL0V5dnRIM0Z3TG1hOTZ0MnhuaFJoMk5JZk84bzFFQmExYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVk5xRmNwcVRUSDEwZVBPYkJ3RGFkcm1PQzFTOVhPQnJMeXc3dXFETlVWVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQ3ZXTFQrTVNiNjcwMGNpVmFsQS9XTmpmK1pOUEFkZGt1SUFYcStvY213PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLcVgyMGxZS3hiTHZZbDAwWEpvU05IK1JVbUdBZWdOSUxmcUxMRVV0VDBnPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVIaWx1SXpNbGJ2R0JXU0VFU3VCbWs1NCs4LytSQXg4bWhQVzFRSkRvbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9oelU1dS9PMTA3cGlzdWFONGk3SFdGRkxmbGhpWExET0p4VHY5empsbVE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSdjNZSHpRY3o0cFVtTHF1L1pUZnkyQkV0ZzV5S2JVVElpR05GWkVWUlBrQ2NwOFUyTk96QThNME1MbllXdDFZSjUxWUtkUGdXbnh1b3RWbVh2ZHlqUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjY2LCJhZHZTZWNyZXRLZXkiOiJzUzJSMFJ4ZmFQc2paNjdnMGJ2MlRNL292eHNKLzN4M2tnQXVLQTM2a05rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc2NTI2ODY3OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2MUMyMkE1NTJBNTg5QTdCRjI3NTQ3RTc3NTlENDQ5RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzAzNDk2MDA5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4TmZpLXBsSFR2S25ydjNuUW1jMlJ3IiwicGhvbmVJZCI6IjQyZjZiYmRlLTJkY2UtNDZhNy1iZTYzLTllZDU0MzdiMTQyNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGczlMMUJ2UnpoVFNqZlUrdjNOcmtTRFZkZDg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkIzV0w0ODg2WkR3ZGcxdnNUS21HZWsyT2licz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01MeW1GVVF3NUtsckFZWUFnPT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaVRnWHBtMlRZQ0FPYlZod3JJbXlrTlUzUDNzRUo5TDV6WkZVdVZNb3FpRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSDVrdkxLSHVLSU1wWnpoMmdWaVBYaGx2ZUpnMnZiSHcxdnBsWnh6UVhWVWNzMEFQYXdmazkvYWlxV041QUJ4dzU3b1VmVHU4MGp0WVdhYjFMVklsQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IldtMW9oRy9xR0x3QzdDTU9Xd2tRZjBNTVJHSGc5cGRCa3pkS1lac1VTYktwQ09rVElhOXZRcVZEcWd2dTB2UTFzd09EWU9qSVF5QlVOQTNML2xxN2p3PT0ifSwibWUiOnsiaWQiOiIyNTQ3NjUyNjg2Nzg6MjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoieHgifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzY1MjY4Njc4OjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllrNEY2WnRrMkFnRG0xWWNLeUpzcERWTno5N0JDZlMrYzJSVkxsVEtLb2gifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDM0OTYwMDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQjBWIn0=| "",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BLADE BOT',
  packname:  process.env.PACK_NAME || 'MADE BY ALEX DAVID',
  
  botname:   process.env.BOT_NAME === undefined ? "BLADE-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'alexdavid' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴅᴇ-²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
