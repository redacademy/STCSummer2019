import AsyncStorage from '@react-native-community/async-storage';

export const createFaveStore = async (faveStoreId) => {
  try {
    const favedStores = await queryFaveStores();
    if (favedStores && favedStores.length > 0) {
      if (favedStores.includes(faveStoreId)) {
        await AsyncStorage.setItem(`faveStores`, JSON.stringify(favedStores))
        return true;
      } else {
        favedStores.push(faveStoreId)
        await AsyncStorage.setItem(`faveStores`, JSON.stringify(favedStores))
        return true;
      }
    } else {
      await AsyncStorage.setItem(`faveStores`, JSON.stringify([faveStoreId]))
      return true;
    }
  }
  catch (error) {
    return new Error(error)
  }
}

export const deleteFaveStore = async (faveStoreId) => {
  try {
    const favedStores = await queryFaveStores();
    const newFavedStores = favedStores.filter((favedStoreId) => favedStoreId !== faveStoreId)
    await AsyncStorage.removeItem('faveStores')
    await AsyncStorage.setItem(`faveStores`, JSON.stringify(newFavedStores));
    return true;
  } catch (error) {
    return new Error(error)
  }
}

export const queryFaveStores = async () => {
  try {
    const values = await AsyncStorage.getItem('faveStores');
    return JSON.parse(values);
  }
  catch (e) {
    return error
  }
}
