module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-optimize',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-sass',
  ],
  alias: {
    '~': './src',
  },
  devOptions: {
    open: 'none',
  },
};
