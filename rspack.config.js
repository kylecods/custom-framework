const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js',
    },
    builtins:{
        html: [{
            template: './src/index.html'
        }]
    }
}