const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '14229910',
    database: 'farm_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

// Get cow or goat by ID
const getCowOrGoatById = (id, callback) => {
    const sql = 'SELECT * FROM cows_and_goats WHERE id = ?';  // Change 'animals' to 'cows_and_goats'
    db.query(sql, [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]);
    });
};

module.exports = { getCowOrGoatById };
