import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  forms: {
    flex: 1,
    marginTop: 20,
    height: '65%',
    justifyContent: 'center'
  },
  inputContainer: {
    height: 30,
    marginBottom: 10
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#686868'
  },
  lable: {
    color: '#686868'
  },
  error: {
    color: 'red'
  },
  terms: {
    color: '#2D2B2F',
    fontWeight: '500'
  },
  logoContainer: {
    height: '35%',
    justifyContent: 'center',
  },
  logo: {
    height: '85%',
    width: '100%',
    resizeMode: 'contain'
  },
  loginSwitch: {
    color: '#2D2B2F',
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    height: 45,
    borderWidth: 1,
    borderColor: '#2D2B2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600'
  }
});
export default styles;


