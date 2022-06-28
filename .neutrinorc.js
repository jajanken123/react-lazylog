module.exports = {
  use: [
    'neutrino-preset-mozilla-frontend-infra/styleguide',
    ['neutrino-preset-mozilla-frontend-infra/react-components', {
      targets: {
        browsers: 'ie 9',
      },
      eslint: {
        "rules":{
          "no-console": "off",
          "prettier/prettier": "off",
          "max-len": "off",
        }
      },
      style: {
        extract: false,
      }
    }],
    (neutrino) => {
      if (neutrino.options.command === 'styleguide:start') {
        neutrino.config.module.rules.delete('lint');
      }
    },
  ],
};
