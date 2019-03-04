let secureEnv = require('secure-env');
global.env = secureEnv({secret:'mySecretPassword'});

function readDotEnv() {
    console.log('---------> read dot env output goes here <---------');
    console.log("env wanted to say", global.env.HELLO);
}

readDotEnv();