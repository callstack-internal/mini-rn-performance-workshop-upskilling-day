module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~components': './src/components',
          '~screens': './src/screens',
          '~utils': './src/utils',
          '~hooks': './src/hooks',
          '~services': './src/services',
          '~navigation': './src/navigation',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
