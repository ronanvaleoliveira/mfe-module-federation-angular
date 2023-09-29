const {
  shareAll,
  withModuleFederationPlugin
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe-1',

  exposes: {
    //'./Component': './src/app/app.component.ts',
    './Module': './src/app/app.module.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto'
    }),
  },

});
