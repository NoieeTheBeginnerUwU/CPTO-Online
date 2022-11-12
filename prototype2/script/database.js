const {createPool} = require('mysql')

const pool = createPool({
    host: "", 
    user: "",
    password: "",
    connectionLimit: 10,
})