const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SADIYA-MD=QI4CiC6Y#sFqk_JbEMz5EZguEeBRGckH-B-2P4Re2LIKgnm9fba4', //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || '', //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || '', //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || 'SADIYA-MD-DATABASE' //Bot Database Repo Name
};
