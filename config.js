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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_58_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTczLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQwLFxuICAgICAgICAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMixcbiAgICAgICAgOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjExLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYyLFxuICAgICAgICA3NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDksXG4gICAgICAgIDQyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDcwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSC9Edkg0OVVkdzlFYVIwc0ZYMEo3RzVwRkxvdDJuWUxyZHV3MVhEc2hVcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTU2MDMxODgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCOThFNUEzNTM5NDExMTE0NDYxMzIzRDkyNDVEQjdDOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0Njg2NzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieDFCM2tMNVRSQ3FBeWxnSGhOSHVZUVwiLFxuICBcInBob25lSWRcIjogXCIxZmM2ZDlkMS1jZTBkLTQ2MDQtOTU0Zi1jMGFhNjFkN2M5ODFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAxNzEsXG4gICAgICAyMTQsXG4gICAgICAxNDQsXG4gICAgICA3LFxuICAgICAgMTg3LFxuICAgICAgNjgsXG4gICAgICAyNixcbiAgICAgIDIzNyxcbiAgICAgIDIyMyxcbiAgICAgIDEyLFxuICAgICAgMjEzLFxuICAgICAgMjM0LFxuICAgICAgMjIsXG4gICAgICA1MixcbiAgICAgIDEwMixcbiAgICAgIDExNixcbiAgICAgIDI4LFxuICAgICAgMTY3LFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAyNDIsXG4gICAgICAxMDEsXG4gICAgICA4MCxcbiAgICAgIDI0MyxcbiAgICAgIDIyNixcbiAgICAgIDIyMyxcbiAgICAgIDIzNSxcbiAgICAgIDY2LFxuICAgICAgMjMsXG4gICAgICA2LFxuICAgICAgMTQzLFxuICAgICAgMTMxLFxuICAgICAgMjI0LFxuICAgICAgNzAsXG4gICAgICA0OSxcbiAgICAgIDEyOSxcbiAgICAgIDYsXG4gICAgICAyNCxcbiAgICAgIDIxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTM0ZTWUpLNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1NjAzMTg4MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVmVlIE1lZGlhXCIsXG4gICAgXCJsaWRcIjogXCIyMDcxMzM4OTExMDkwMjU6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYm52MjhRdklteHRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9XSG84eGllK1lUOUloVFBFd3ZhT0tBbXMzcWIzbjh5elFYZVBHUWFNaFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMEttL2NPSXJNd1pFYkhDd2gzK2hhK2pyQURmL1FBQitnZ3NqdE41RUZpcUNDczRHQVpJbVZvVlJveEo3aUxuVE9IUWx0ZUtpNnNWbkdaZXdGZWRlQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibjNKUnNaQWswNXF2b2ZlcVExcUZLaVlqZGswa1QvZExOMlN2azNnNzFWRjRWSXFaWmFrbENUalZpRVVKR3ExVFRiSDgvZE5pdzY4bTBKbmNpV0Q1QUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1NjAzMTg4MjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDY4NjczXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
