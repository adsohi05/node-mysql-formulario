const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'node',
        password: 'nodenode',
        database: 'news_portal'
    });
}