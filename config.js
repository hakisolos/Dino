//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaqgxNt5q08c9XMItG3P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348121373516";
global.owner = process.env.OWNER_NUMBER || "2348121373516";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FJNnBCais1N2toYmJHRlVvY0hrdmRTOHJYRFFzWUJoVEFQTXBoZU5XST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGxoU0MxYmtEb2xUd1NQUVNoQXFZK250NVdkVDZUUXVFbEc4dmxmQmloOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSEN5L0poYVFMWnRNdkZaUTdIV3V6U1JHbUcrUXZITEhyOThaekI0ZDFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJMkFnQUYxMmZmMVdVYVdrMnVSZWY1dkh2M1FmdWE4WlBubldmdk81SmtrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdPYjFMNXFDRk1FS2hSUkptajhZUFdmL1M2ejQ2R015SGhoeVNqNER6Rmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVua0ZFRFM3a3hta3VNaGtFSEs2VXB0YSs1dm0zbWNTelc2c2ZaV2I1eXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUMwSVFvazYybmdnT3IreUVtZHU0ZWZhZmVLZTBNbWM4eXNObXBySFRFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSTdMY2Ryd1A4R1NTcVRBbVpEVDhOYUNyc3drc0tqU2xZQjhwV1h5MjlTTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhONHRNcjVnLy9pRFdLNUVrM2x6cDVucGVLOE1HNmJlcE0yQ0JHRk52anJzMTdWTHpraUI2TDhKZmg4RlU2SVBndU1aK2NlWWhnR085WFBVS2dYSGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJHNWZTalFEVFlUUkJLY1Uyb2Q5bmJZMHJ0elNRYSt6dTBUM2g3cTE1aUFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJndktaQWJuV1NpYWJOdnNrb2ZIUU1nIiwicGhvbmVJZCI6IjJkZjhkMGQ2LTZkOWEtNGU1My1hYTBjLTdmZDFiZTNkY2ZjMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoSTdndjNTM2ZOOU1tRXR1aE9pbXAwRmpQQTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQThXU0lWa09vWFNzdlJpYmZFbnhDd2NGcmJ3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhYUjZYN0dWIiwibWUiOnsiaWQiOiIyMzQ4MTMxOTcxNjQwOjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01yQzB1SUJFTEhwNWJZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRmZ3RLa2FDQ0V5M213WDRHekJaWkdkMng5RFJOdUJnZjBmeC85MVdCU0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imp4WFlRNjNaTlFaekpzT1ppWlpUazRpYnRwUllUWGpsNVBIV2dNMVRyVTRvTi9zTDFleXk3cVRwSTE0Y1hZTXZ2bDUyMWhXdmEzeVB1TEMrbktPb0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ2REtRUTdxeGpIVXRob2YyY25SSldwQ1pTWVlEc1NweHRKMVNoQUd3cUEzWFdHQnVRVFd5eXZKMmczbytBb3o2RmJkVFR6VGN3RVBYQW5xZEhSRVpnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMzE5NzE2NDA6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiWDRMU3BHZ2doTXQ1c0YrQnN3V1dSbmRzZlEwVGJnWUg5SDhmL2RWZ1VpIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU1MjcyMzB9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
