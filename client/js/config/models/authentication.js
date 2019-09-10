import AsyncStorage from '@react-native-community/async-storage';

export const createToken = async (token, id) => {
  try {
    await AsyncStorage.setItem('userToken', JSON.stringify({ id: token, userId: id }))
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
    const value = await AsyncStorage.getItem('userToken');
    return JSON.parse(value)
  }
  catch (e) {
    return error
  }
}