import AsyncStorage from '@react-native-community/async-storage';

export const createOnBoarding = async () => {
  try {
    await AsyncStorage.setItem('userOnBoarding', JSON.stringify(true))
    return true;
  }
  catch (error) {
    return new Error(error)
  }
}


export const queryToken = async () => {
  try {
    const value = await AsyncStorage.getItem('userOnBoarding');
    return JSON.parse(value)
  }
  catch (e) {
    return error
  }
}