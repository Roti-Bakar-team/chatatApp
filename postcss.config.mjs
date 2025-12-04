const config = {
  plugins: {
    "@tailwindcss/postcss": {
      onWarning(warning) {
        if (warning.text && warning.text.includes("@property")) {
          return;
        }
        console.warn(warning.text);
      },
    },
  },
};

export default config;
