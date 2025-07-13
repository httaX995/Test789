const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "UDMODZ-MD=j84ilBSR#SGORfVVbkQKB2UBPgLYHjZrSWxF4ELwAlhE-96OyYHI", // session id
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false", // true,false
ANTI_DELETE: process.env.ANTI_DELETE || "false", // true,false
MODE: process.env.MODE || "public", // public,private,groups,inbox
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE || "true", // true,false
LANG: process.env.LANG || "EN",





};
