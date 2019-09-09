import AsyncStorage from '@react-native-community/async-storage';

export const createFaveItem = async (faveItemId) => {
  try {
    const favedItems = await queryFaveItems();
    if (favedItems && favedItems.length > 0) {
      if (favedItems.includes(faveItemId)) {
        await AsyncStorage.setItem(`faveItems`, JSON.stringify(favedItems))
        return true;
      } else {
        favedItems.push(faveItemId)
        await AsyncStorage.setItem(`faveItems`, JSON.stringify(favedItems))
        return true;
      }
    } else {
      await AsyncStorage.setItem(`faveItems`, JSON.stringify([faveItemId]))
      return true;
    }
  }
  catch (error) {
    return new Error(error)
  }
}

export const deleteFaveItem = async (faveItemId) => {
  try {
    const favedItems = await queryFaveItems();
    const newFavedItems = favedItems.filter((favedItemId) => favedItemId !== faveItemId)
    await AsyncStorage.removeItem('faveItems')
    await AsyncStorage.setItem(`faveItems`, JSON.stringify(newFavedItems));
    return true;
  } catch (error) {
    return new Error(error)
  }
}

export const queryFaveItems = async () => {
  try {
    const values = await AsyncStorage.getItem('faveItems');
    return JSON.parse(values);
  }
  catch (e) {
    return error
  }
}
