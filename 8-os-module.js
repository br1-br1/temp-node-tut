const os = require('os')

//info about current user
const user = os.userInfo();
//console.log(user);

//method returns the system uptime in seconds
//console.log(`The system uptime ${os.uptime() * 0.000277778} hours`)

//current os
const currentOs = {
    type: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    version: os.version()
}

console.log(currentOs);