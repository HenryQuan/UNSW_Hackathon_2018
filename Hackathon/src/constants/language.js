/**
 * Store all strings here
 */
import LocalizedStrings from 'react-native-localization';

// English as main
export default strings = new LocalizedStrings({
  en:{
    // Login screen
    app_welcome: 'Welcome to \nStorageTrick',
    username_input: 'username',
    password_input: 'password',
    login_button: 'Login',
    signup_button: 'Sign up',
    // Other screens
  },
  zh: {
    // Login screen
    app_welcome: '欢迎使用\nStorageTrick',
    username_input: '用户名',
    password_input: '密码',
    login_button: '登陆',
    signup_button: '注册',
    // Other screens
  },
  ja: {
    // Login screen
    app_welcome: 'ストレージトリックへ\nよこそう',
    username_input: 'ユーザー名',
    password_input: 'パスワード',
    login_button: 'ログイン',
    signup_button: '新しいアカウントを作成',
    // Other screens
  }
});