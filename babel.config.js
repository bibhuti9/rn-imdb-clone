module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@store': './src/store',
          '@api': './src/api',
          '@assets': './src/assets',
          '@component': './src/component',
          '@navigation': './src/navigation',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@utils': './src/utils',

          '@reference': './src/reference',
        },
      },
    ],
  ],
};
