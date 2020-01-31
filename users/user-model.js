const db = require('../database/dbConfig')

module.exports = {
    getUsers,
    getUserBy
}

function getUsers() {
    return db("users").select("id", "username")
}

function getUserBy(filter) {
    return db("users").where(filter).select("id", "username", "password")
} 