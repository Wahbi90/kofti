/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-dotenv', '@snowpack/plugin-react-refresh'],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    env: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    },
  },
};
