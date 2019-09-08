import AsyncStorage from '@react-native-community/async-storage';

export const createFaveBrand = async (faveBrandId) => {
  try {
    const favedBrands = await queryFaveBrands();
    if (favedBrands && favedBrands.length > 0) {
      if (favedBrands.includes(faveBrandId)) {
        await AsyncStorage.setItem(`faveBrands`, JSON.stringify(favedBrands))
        return true;
      } else {
        favedBrands.push(faveBrandId)
        await AsyncStorage.setItem(`faveBrands`, JSON.stringify(favedBrands))
        return true;
      }
    } else {
      await AsyncStorage.setItem(`faveBrands`, JSON.stringify([faveBrandId]))
      return true;
    }
  }
  catch (error) {
    return new Error(error)
  }
}

export const deleteFaveBrand = async (faveBrandId) => {
  try {
    const favedBrands = await queryFaveBrands();
    const newFavedBrands = favedBrands.filter((favedBrandId) => favedBrandId !== faveBrandId)
    await AsyncStorage.removeItem('faveBrands')
    await AsyncStorage.setItem(`faveBrands`, JSON.stringify(newFavedBrands));
    return true;
  } catch (error) {
    return new Error(error)
  }
}

export const queryFaveBrands = async () => {
  try {
    const values = await AsyncStorage.getItem('faveBrands');
    return JSON.parse(values);
  }
  catch (e) {
    return error
  }
}
