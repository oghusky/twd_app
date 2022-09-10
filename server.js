require('dotenv').config();
const express = require('express'),
    app = express(),
    morgan = require('morgan'),
    connectDB = require('./config/db'),
    PORT = process.env.PORT || 3001;

connectDB();

app.use(morgan('dev'));

app.get("/api/test", (req, res) => {
    res.json({ msg: "SERVER UP" });
})

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
});