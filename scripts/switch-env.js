const fs = require('fs')

var envArg = process.argv.slice(2)
const environment = envArg == 'mobile' ? 'mobile' : 'web'

fs.copyFileSync(`./.env.${environment}`, './.env')