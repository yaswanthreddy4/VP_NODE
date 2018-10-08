let host = '127.0.0.1';
let port = 3500;
const dbUrl = 'mongodb://192.168.1.59:27017';
const dbUser = 'root';
const dbPwd = 'redhat';
const dbName = 'hotel';
const authSource = 'admin';


module.exports = {
    HOST: host,
    PORT: port,
    DBURL: dbUrl,
    DBUSER: dbUser,
    DBPWD: dbPwd,
    DBNAME: dbName,
    DBAUTHSRC: authSource
};