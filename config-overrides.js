const {alias} = require('react-app-rewire-alias');


module.exports = override = ( config ) => {
    alias({
        '@views':'src/views',
        '@root':'src',
        '@public':'public',
        "@utils":"src/utils"
    })(config);

    return config;
}