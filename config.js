const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348142833088";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_55_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxLFxuICAgICAgICAzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDU1LFxuICAgICAgICA2MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDcsXG4gICAgICAgIDIwLFxuICAgICAgICAzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDU0LFxuICAgICAgICA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDczLFxuICAgICAgICA3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDg1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTU3LFxuICAgICAgICA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjksXG4gICAgICAgIDk3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODcsXG4gICAgICAgIDg1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzksXG4gICAgICAgIDg2LFxuICAgICAgICAyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMixcbiAgICAgICAgODQsXG4gICAgICAgIDk2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg0LFxuICAgICAgICA5LFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkwLFxuICAgICAgICA1MixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInY0RkM5L1IzRlBCeis0d3NXTlcrM2t6a2I1VEw5STRGNWFjTEMxbklqcFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0MjgzMzA4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkYzNjJDMTY0MkFFNEFCOEY2RjYzNkM4ODgzMTFFNzhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTgwNTE5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0MjgzMzA4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0QyN0QxQjhBRUNBRUI2MEE0QjI0RUQ0MEE4QTQ1RkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxOTgwNTIxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktHNXNJdk0tVFpPQi1EQlNMSnpkM3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjE4ODFjZWEtNGUxNS00OWFiLWI1MTEtZDU2OGRkZjUyMjY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3LFxuICAgICAgMjI0LFxuICAgICAgMjMxLFxuICAgICAgMTM0LFxuICAgICAgMjQwLFxuICAgICAgMTUxLFxuICAgICAgOSxcbiAgICAgIDExMSxcbiAgICAgIDg4LFxuICAgICAgMjE1LFxuICAgICAgMTk4LFxuICAgICAgMzUsXG4gICAgICAxNTEsXG4gICAgICAxMzgsXG4gICAgICA2NCxcbiAgICAgIDI1MSxcbiAgICAgIDI1MSxcbiAgICAgIDEyOSxcbiAgICAgIDg5LFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMTQ3LFxuICAgICAgMjUxLFxuICAgICAgMTU5LFxuICAgICAgNjcsXG4gICAgICAxNzUsXG4gICAgICAxNSxcbiAgICAgIDI1MyxcbiAgICAgIDc3LFxuICAgICAgMTE0LFxuICAgICAgMTU1LFxuICAgICAgMTU2LFxuICAgICAgNixcbiAgICAgIDE3NCxcbiAgICAgIDMyLFxuICAgICAgMTEsXG4gICAgICAyNDYsXG4gICAgICAxOTcsXG4gICAgICA4NyxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZXRVBNQjZIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQyODMzMDg4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ4MzEwMjYxOTExNjI3OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVhpaGM4Q0VOK3NqYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGM3poSUZQbVMwcjZjakhkRm50ZUJXdGh2TzBGbWpoWDNIbHlIYVo5ZHlNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1MenRQTXpQM25EVml2S251bUc2NHc2TGljdVcxMXdxRmhUMENVeG5zYWlFS1ozMW1CYWpNbHYzOWttQmtPUUtHT2o2YWNwZXYwRUtYZUUxSW9CaERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNUR1lWekt4QjVPZG1EaU5aSlFMWlloVG90c2pmaDhZeDQramxxemFwVFFYZnlYdXhMbE96Mjh3b3g4bWNGemNqeTE2OWVoaG56Nk1hUkxpVmEzWmdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDI4MzMwODg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5ODA1MTVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
