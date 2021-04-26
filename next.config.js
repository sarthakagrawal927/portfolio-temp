const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      future: {
        webpack5: true,
      },
      async redirects() {
        return [
          {
            source: "/about",
            destination: "/",
            permanent: true,
          },
        ];
      },
    };
  }

  return {
    /* config options for all phases except development here */
  };
};
