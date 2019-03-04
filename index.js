require('dotenv').config();
function readDotEnv() {
    console.log('---------> read dot env output goes here <---------');
    console.log("env wanted to say", process.env.HELLO);
}

readDotEnv();