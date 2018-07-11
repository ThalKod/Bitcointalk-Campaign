const { table } = require("./db");

module.exports = {
    selectAll: `SELECT * FROM ${table.campaign_u}`,
    insertAll: `INSERT INTO ${table.participant} (user, level, date,posts) VALUES ?`,
    deleteAll: `DELETE FROM ${table.participant}`,
};