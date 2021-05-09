const {alias} = require('react-app-rewire-alias');


module.exports = override = ( config ) => {
    alias({
        '@views':'src/views',
        '@root':'src',
    })(config);

    return config;
}