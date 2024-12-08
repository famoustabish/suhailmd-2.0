const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://qu.ax/cQZOL.jpg" || "https://qu.ax/cQZOL.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://qu.ax/cQZOL.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_37_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDExNixcbiAgICAgICAgOTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDksXG4gICAgICAgIDIxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0LFxuICAgICAgICA4NixcbiAgICAgICAgMTU4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExLFxuICAgICAgICAzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkwLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDY5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgODksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MCxcbiAgICAgICAgNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVElCYThkVFhYSFZEVlFrL1lYUldHVng0MjJEV2xMNXNrYmtFUUhBU3hIMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMjY4MTYzMDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjEyNUEyMERCQ0FEMUZEQ0M4MDk5OUIxODU4NkY1NDZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzY1NDI1MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIyNjgxNjMwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUQwQzA4QTQwQkM0QTVCRDNENzQzM0U3NzczMjI3MTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNjU0MjUwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlUtOTE3YWZwUjJXQWJ0NmgtclNscndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWFjMWU5YTgtMTE1ZC00Mzc5LThjYjMtOTk2ZWJhMzE2MTVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgNTYsXG4gICAgICAxMzIsXG4gICAgICAxNixcbiAgICAgIDI4LFxuICAgICAgMjMxLFxuICAgICAgNjIsXG4gICAgICA1OCxcbiAgICAgIDAsXG4gICAgICAxNDksXG4gICAgICAxODQsXG4gICAgICAyNTUsXG4gICAgICAxNDYsXG4gICAgICA0NixcbiAgICAgIDEwMixcbiAgICAgIDksXG4gICAgICAyMTYsXG4gICAgICAyMzksXG4gICAgICA3OCxcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDkzLFxuICAgICAgMTg4LFxuICAgICAgMjMsXG4gICAgICAxOTIsXG4gICAgICA5MSxcbiAgICAgIDkzLFxuICAgICAgMTkwLFxuICAgICAgMjgsXG4gICAgICA5MSxcbiAgICAgIDEzNyxcbiAgICAgIDY5LFxuICAgICAgMjIwLFxuICAgICAgODYsXG4gICAgICA3NixcbiAgICAgIDIyLFxuICAgICAgOTMsXG4gICAgICAyNDQsXG4gICAgICA3LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5EQ1FGN1lQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyMjY4MTYzMDQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFhZGlcIixcbiAgICBcImxpZFwiOiBcIjgxMDc2NjUxMzExMTQ1OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZ4bHZvQ0VPVHQxYm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmTkdMTTJtMlFFSE1ZUkhPSWNuWGxkWjYySEp5V3hPQkphWVQ1RDJZaDFvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNQMWdQNGNiTTRxNTgrZ01RaWFabndkU3MwTHZ2SWloNUg5RGZxU1ZXcmYzN1RUd1l2VS9kTnpGUExDcXhFTUhqSHhGQ0xWNndqZzcyNmI3K1FVTUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtzU2wwRkE0cXVtb2NVUy85RFYwaVp2OVN0TCt3QmJyZnkvcUJsNDMxQVFua3ZKMjNoV2N4eW94N0VybktXVU1ad29PMXUxbjRKTkpEZEE0enFpWWdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzIyNjgxNjMwNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNjU0MjQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ1doXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDV2guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJML0VlNFcvcWN3dkNNa2RlMnQrRXJ2elVSVXNNdnVuaGlFS0pCQlNDd3J3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc5MzA5ODM3NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNjU0MjQ5NDMwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Famous Tabish",
  packname: process.env.PACK_NAME || "Famous Tabish",
  botname : process.env.BOT_NAME  || "Famous-Tabish",
  ownername:process.env.OWNER_NAME|| "Shazada Tabish",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
