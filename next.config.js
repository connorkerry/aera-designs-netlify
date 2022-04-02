// Any variables in this file can be accessed with process.env
module.exports = {
  env: {
    NETLIFY_URL:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:8888'
        : 'https://shopify-next.netlify.app',
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};