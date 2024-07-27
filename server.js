const express = require('express')();

const serverPort = 5501 ;

express.listen (
    serverPort,
    () => console.log(`it's live on http://localhost:${serverPort}`)
)
