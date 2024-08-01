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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_23_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY4LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDgxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUxLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExLFxuICAgICAgICA2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAyLFxuICAgICAgICA0MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3LFxuICAgICAgICA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxLFxuICAgICAgICA4OCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUwLFxuICAgICAgICA0NixcbiAgICAgICAgMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk2LFxuICAgICAgICAzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjksXG4gICAgICAgIDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMzLFxuICAgICAgICA1OSxcbiAgICAgICAgOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR0lOOGxPdzBJd0JNQkkvUG9xeEpuZUlMSXZxRW5jNzZVcC92djVSZHdRWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQyODMzMDg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxQzU1OTdDNzMzNUE0MTk2QzZCRTZGQTc3RDVGMEIzM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0OTcwMjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQyODMzMDg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MDdBMTNBQTFFRTA4MEU3QTY5MTFGNEMzNzUzNDU3OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0OTcwMzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTEZTbzVPRzRST3F0Sk4wMkRXekltd1wiLFxuICBcInBob25lSWRcIjogXCIxMGMyNGFkZi00ZjYzLTQyNGEtOGMzOC00Y2M5OThhOTRkZDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMTIyLFxuICAgICAgMjMxLFxuICAgICAgNyxcbiAgICAgIDIxLFxuICAgICAgMjM2LFxuICAgICAgNDksXG4gICAgICAxOTgsXG4gICAgICAxNTQsXG4gICAgICAxMjQsXG4gICAgICAxNTEsXG4gICAgICAyMjMsXG4gICAgICAxNjEsXG4gICAgICAyNDgsXG4gICAgICA5NSxcbiAgICAgIDQ4LFxuICAgICAgMjUxLFxuICAgICAgNTgsXG4gICAgICAxNDAsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjEsXG4gICAgICAyMTksXG4gICAgICAxNTMsXG4gICAgICAxNDMsXG4gICAgICAxNjIsXG4gICAgICAxODgsXG4gICAgICAzMCxcbiAgICAgIDE1NixcbiAgICAgIDExLFxuICAgICAgMjcsXG4gICAgICAxOTIsXG4gICAgICAyNDQsXG4gICAgICAxODIsXG4gICAgICAxMTAsXG4gICAgICAxNjgsXG4gICAgICAxOTMsXG4gICAgICA1NSxcbiAgICAgIDc5LFxuICAgICAgMTkzLFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTFWTE40VkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDI4MzMwODg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDgzMTAyNjE5MTE2Mjc6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJUHVoR3dRL3Urc3RRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjIzMmRjbGM2U1pzWGVNSkJCUTNYYXB1enE3WGk3UmRlZDV5dTZmRnZXZ2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiazVXK1hiQ3ZVTG4zRDc1M2FSaEZpdEQrY2lMSG13dW9VR25qdlpoZlhFb0FaMGdMVTQwT2dJNGlwSTNvSlhuQUJ1OXNOckpoOHhENVpUaURhdmQ5Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib1ZBMktmMkMyWDRBRUhTYjJtL0dSQ1NWTVFUd1ptYTRDTUZPN3daaENya3lZOVhmSUsvL0JJVS9HY3Z3V1VFRzlMM2ZFMUZVZDZQYXVNR2lHMDZ5aFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0MjgzMzA4ODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0OTcwMjZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
