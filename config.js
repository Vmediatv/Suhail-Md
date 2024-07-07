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



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349156031882";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_43_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5LFxuICAgICAgICA4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDcwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMixcbiAgICAgICAgNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYxLFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDkzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk5LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4NixcbiAgICAgICAgODQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk3LFxuICAgICAgICA0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJieUdHbHR4Q3JXa3M2VDJtNkNMUm9CWktreklrYjFtcXJKSzV1WGs5bVRnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNTYwMzE4ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU5QkYyRjNDNURGMDIxNzY3NjRERERBNDFFNzQ3QTBFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM1NjE4MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNTYwMzE4ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI0NzMyODY1MEQyQUUxNkMwRUZBOEIwQ0EyREQ1RkZEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM1NjE4NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCeTlLV2N3blJVbXdmTEJlX3NJaV9BXCIsXG4gIFwicGhvbmVJZFwiOiBcImJkNjg2YmIzLTBmMjMtNDJhOC1hNTI0LTBhNDg0MDc4NDAyOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzcsXG4gICAgICAyMCxcbiAgICAgIDEyMyxcbiAgICAgIDE1NyxcbiAgICAgIDEwMyxcbiAgICAgIDQ0LFxuICAgICAgMTc4LFxuICAgICAgMjI5LFxuICAgICAgMTgsXG4gICAgICAxMzgsXG4gICAgICAzNixcbiAgICAgIDIzNCxcbiAgICAgIDE0NyxcbiAgICAgIDYyLFxuICAgICAgMyxcbiAgICAgIDIxMyxcbiAgICAgIDEyNSxcbiAgICAgIDExNixcbiAgICAgIDExLFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTQsXG4gICAgICAxNyxcbiAgICAgIDExLFxuICAgICAgMTI0LFxuICAgICAgMjQxLFxuICAgICAgMjQ2LFxuICAgICAgMjgsXG4gICAgICAyMTQsXG4gICAgICA4NixcbiAgICAgIDE1OCxcbiAgICAgIDI0NixcbiAgICAgIDIwNixcbiAgICAgIDIzNSxcbiAgICAgIDIyLFxuICAgICAgMTU4LFxuICAgICAgMzksXG4gICAgICAyMjIsXG4gICAgICAyNTUsXG4gICAgICAyMDQsXG4gICAgICAyMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUs4MUdFU01cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTYwMzE4ODI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlYtTUVESUFcIixcbiAgICBcImxpZFwiOiBcIjIwNzEzMzg5MTEwOTAyNToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BtWmxYb1EwSnFxdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwickNzYjBqak1DVmFxN0RWeUV6WFNiS0JLSGoyVVdGa2VZaXhOK1RSdnEzaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5b2FtZndaTWRDdStVdm11UHdYZ1crZEMvS3gwSHNJSElNb1NZVVREakZsWmp4S29HemdOMGsyRWwwREFWM2t0TDBXZzYrdnRiWkxXNW5SbVNlejNEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwRytveFRORHNGZS9Wbm1GdjZTRnFwNFg0R0Mvdzd3Y2djNDFQY2pZU2NJOUp4am9GUE1zcU9XVmQwZytIRGZVOTRSY0JwQmRDT0hGa1FTNHdZTm1CZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU2MDMxODgyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM1NjE3OVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
