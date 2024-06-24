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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348101881633";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_17_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc4LFxuICAgICAgICA0MixcbiAgICAgICAgMTU2LFxuICAgICAgICA3NixcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICA4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAzLFxuICAgICAgICA5NixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTc1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDk2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAyLFxuICAgICAgICA2MyxcbiAgICAgICAgODksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzLFxuICAgICAgICA1NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYwLFxuICAgICAgICA2NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk5LFxuICAgICAgICA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODksXG4gICAgICAgIDg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVjdHZXM0hyYkJhZHlNYit1QU9Cc1NwaGtOQlg2eXJkSTBIRnh2U2k0Z009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwMTg4MTYzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDEwMTEzNUJCNjg3NDFCMUJCNTMxRERERDA0NEIxNTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MTQ4NjU4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlltTFYyZTBBUWNPdTBIZDhDNzItMHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDk3MTA3NmMtNWQ4My00OTNmLTlhMzctMGQ5MmI5YzljYTExXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgNDYsXG4gICAgICAyNSxcbiAgICAgIDEwLFxuICAgICAgNjQsXG4gICAgICAxMTEsXG4gICAgICAyMixcbiAgICAgIDE5OSxcbiAgICAgIDc4LFxuICAgICAgMTgsXG4gICAgICAxMDcsXG4gICAgICAxODQsXG4gICAgICAyMzUsXG4gICAgICAxMjQsXG4gICAgICA2OSxcbiAgICAgIDE2OCxcbiAgICAgIDE1MixcbiAgICAgIDEwMCxcbiAgICAgIDE4NSxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDE5NixcbiAgICAgIDEzOCxcbiAgICAgIDM5LFxuICAgICAgODEsXG4gICAgICAyMDIsXG4gICAgICAyNSxcbiAgICAgIDEzNCxcbiAgICAgIDM5LFxuICAgICAgMTAyLFxuICAgICAgNDMsXG4gICAgICA5OCxcbiAgICAgIDQzLFxuICAgICAgNjcsXG4gICAgICAxNTgsXG4gICAgICAzNixcbiAgICAgIDIwNyxcbiAgICAgIDI1MixcbiAgICAgIDEyNSxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRRRzhKVkYyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAxODgxNjMzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJWLU1FRElBXCIsXG4gICAgXCJsaWRcIjogXCI2Mzg4ODIyNTc4Mzg4MjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pXUm4xOFE1OERnc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicUFGWUpueFNRZEVNTWE2T201eWlEdDdRbkhqQ3N3ay8vSTgyUjIwUEhVUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIydmZWcmVZc2JCOSsreTR3M2VSNndmVWhoYzFNaGhETUpDNTJ1aWlSb05HUk5qOWlteGNnVFlwQlJ0OUFaaU9veXRlSHA5TVNkbmdJVVVYVWs0aGlCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrckcyNjFUTFRvN21lc1VWd2JRZTBlcGdCbUorcVZhMWszSFJyakJ6M3JOWVg5ak01eXN3TEJ5QnptU0dqUGZQWnN5OFlnajBBVzlaVFlreTNhbVlCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAxODgxNjMzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MTQ4NjUxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
