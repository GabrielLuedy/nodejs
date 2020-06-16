const express = require ("express");

const app = express ();

app .get("/",(req,res) => {
    res.send("alo mundo boa pa nois");
});

app.listen(3001);
