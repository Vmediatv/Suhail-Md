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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_36_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICA2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc3LFxuICAgICAgICA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDczLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgzLFxuICAgICAgICA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNrTE5ZL0ViYzhzeVF0cmdFVTdWMm5GajR6M3RXbHp4eE9YbGJ1K1YxNVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwNTgwNzk2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDBBQTcwN0NGODhGMTY0QTI4Njg5OTFBQkQ3NEE5QzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODcwNjAzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwNTgwNzk2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUREOEFEQjM2Qzc5OTJEOTIxODM2NUNCOEIyRTE0QjhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODcwNjA1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk0tRkZUSjlKU0VhS2ktc25HRzJITEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmJlZWQwNTktYmQ2ZS00NDk1LTk5Y2QtNGQxNDI2YzMwZDkwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDQsXG4gICAgICA5MyxcbiAgICAgIDU2LFxuICAgICAgMjE5LFxuICAgICAgMTE1LFxuICAgICAgMjUzLFxuICAgICAgMTE4LFxuICAgICAgMjA5LFxuICAgICAgMjAzLFxuICAgICAgNCxcbiAgICAgIDEyLFxuICAgICAgMTU2LFxuICAgICAgODUsXG4gICAgICAxMDUsXG4gICAgICA4OSxcbiAgICAgIDE5NixcbiAgICAgIDQ3LFxuICAgICAgMTUyLFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxMjgsXG4gICAgICAwLFxuICAgICAgMjMyLFxuICAgICAgMTM0LFxuICAgICAgNTQsXG4gICAgICAxMTksXG4gICAgICAxOTIsXG4gICAgICAxMjMsXG4gICAgICA1NSxcbiAgICAgIDMzLFxuICAgICAgNTAsXG4gICAgICA2MSxcbiAgICAgIDI1MCxcbiAgICAgIDE2OSxcbiAgICAgIDg1LFxuICAgICAgMjI2LFxuICAgICAgMjE3LFxuICAgICAgMTk3LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldQQlFDNlRWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTA1ODA3OTYxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MTUxNTQxNzM3NDc5MDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pUQmd2WUJFTVBOeWJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRi9sb3hhZjJVdGNicDlpc3IybG5WMDlhVFNkc3NFVFBKUkpNUXJkNEtHUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyL242a2RoUUlzUlhSV1AwWDgwZ1ZrUWtPTHlIa2REcWlBV1hjQkxDY0RFdVI3VHVlV1EraE42SFp5bzZlbnlySDlkQytlaE56ZzJmblJaQ0MzRW9Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvNFlocmVORnMxK2twVzJHVmVnNnNqRGxtWTdON1gySjA4cHdjV200SjJUMExlVUkyVSsxRnBvZEtjSEVmNEFsLzZnOTRvR0NWM045TEx5b3hOajdnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA1ODA3OTYxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODcwNTk5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
