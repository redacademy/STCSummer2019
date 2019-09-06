import AsyncStorage from '@react-native-community/async-storage';

export const createToken = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', JSON.stringify({ id: token }))
    return true;
  }
  catch (error) {
    return new Error(error)
  }
}

export const deleteToken = async (token) => {
  try {
    await AsyncStorage.removeItem("userToken");
    return true;
  } catch (error) {
    return new Error(error)
  }
}

export const queryToken = async () => {
  try {
    const value = await AsyncStorage.multiGet(['userToken']);
    return value
  }
  catch (e) {
    return error
  }
}