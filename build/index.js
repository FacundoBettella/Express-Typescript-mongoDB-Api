"use strict";
const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/ping", (_req, res) => {
    console.log(123);
    res.send("Someone pinged me!");
});
app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
});
