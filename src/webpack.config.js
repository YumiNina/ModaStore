const { resolve } = require("dns")

module.exports= {
 resolve: {
 fallback:{ process: require.resolve('process/browser')},
 },
};