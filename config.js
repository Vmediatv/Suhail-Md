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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348105807961";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_51_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDksXG4gICAgICAgIDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDk2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI2LFxuICAgICAgICA4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgODMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkzLFxuICAgICAgICA1NSxcbiAgICAgICAgNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDksXG4gICAgICAgIDE5MixcbiAgICAgICAgODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDk0LFxuICAgICAgICA0LFxuICAgICAgICA4LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNCxcbiAgICAgICAgODYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDc2LFxuICAgICAgICAwLFxuICAgICAgICAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOS9OLzZSaXJOYzVIeXM5alNiN252dU5QdGNoQzE3eit1cThpbDAvaUNCbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTA1ODA3OTYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4QzE2NDBCODY2MjlDNUNEN0U4NjQyMUYzM0UyNUYxOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk4NzA3MTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTA1ODA3OTYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBOEIxM0U2QjM2MTIwMzBFNjM1OTFGRDY4NEM1NzRGRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk4NzA3MTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZEc2aWFEbVhUMXFKamZUTTU2WVpBQVwiLFxuICBcInBob25lSWRcIjogXCIwNWNhNzUwZC0yNmIxLTRmNWUtYWFkZC1iMjA1Mzc5ODQ2MWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMTMsXG4gICAgICAxOSxcbiAgICAgIDE5MCxcbiAgICAgIDIzMixcbiAgICAgIDk3LFxuICAgICAgMjQ3LFxuICAgICAgMjE1LFxuICAgICAgMTI1LFxuICAgICAgMjQ1LFxuICAgICAgMjM5LFxuICAgICAgMTIsXG4gICAgICAyMDgsXG4gICAgICAxOTIsXG4gICAgICAyMDcsXG4gICAgICAyMjMsXG4gICAgICA0NSxcbiAgICAgIDI3LFxuICAgICAgNTQsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAyMzAsXG4gICAgICA1MixcbiAgICAgIDE5OSxcbiAgICAgIDI0MixcbiAgICAgIDIyNCxcbiAgICAgIDEzMSxcbiAgICAgIDIwOCxcbiAgICAgIDEzNyxcbiAgICAgIDM4LFxuICAgICAgMTIsXG4gICAgICAxOTUsXG4gICAgICAxMTIsXG4gICAgICA0NixcbiAgICAgIDg0LFxuICAgICAgMzAsXG4gICAgICAxMzYsXG4gICAgICAyMTAsXG4gICAgICAyNDQsXG4gICAgICAxNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNDhKM1Q4SERcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDU4MDc5NjE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjcxNTE1NDE3Mzc0NzkwOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2JLb280REVQVEpqTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuS0l2OENSQWptZmkyVHNNMkdmWmttalJrdTBpSVl6cW1aRXo3eTdzeUJZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZLUHRDTFFhb1lzbzFPb0NhbW9qVktsMEd1SmFhY3NNSHRYaHJnN2R3RUNsMEFNUjVxWVlDc2ZDYWFKdlZ1ZUZPaWp6TFZ3RGlhOEJTT1ZsNklJNUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJyK0p1VTJBWEpFUW9iZmRZclg1UWsvL25Xb09YdWFXams3RGJFZjZNNkhHbGZlNE84b0MyNEU0UU5rYkQ3c3UrSkkwdzYyQUIydTJzVUtJVkZmaWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDU4MDc5NjE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODcwNzExXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
