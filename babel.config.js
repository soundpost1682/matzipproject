module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins:[
          // 'react-native-worklets/plugin',
        'react-native-reanimated/plugin',[
          'module-resolver',{
            alias :{
              '@': './src',
            }
          }
        ]],
          
};
