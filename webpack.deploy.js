const config = require('./webpack.config');

module.exports = {
    ...config,
    output: {
        ...config.output,
        // GH pages path
        publicPath: '/sample-vuejs-app/',
    },
};