import React, { Component } from 'react';
import { createFaveBrand, deleteFaveBrand, queryFaveBrands } from "../../config/models/favedBrands"

const FaveBrandsContext = React.createContext();
class FaveBrandsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveBrandIds: [],
    };
  }
  getFavedBrandIds = async () => {
    try {
      const savedFaveBrands = await queryFaveBrands();
      const faveBrandIds = savedFaveBrands.map(faveBrand => faveBrand);
      this.setState({ faveBrandIds })
    } catch (e) {
      return e
    }
  }
  addFaveBrand = async (brandId) => {
    try {
      const newFaveBrand = await createFaveBrand(brandId);
      if (newFaveBrand) this.setState({ faveBrandIds: [...this.state.faveBrandIds, newFaveBrand] })
      this.getFavedBrandIds()
    } catch (e) {
      throw e
    }
  }

  removeFaveBrand = async (brandId) => {
    try {
      await deleteFaveBrand(brandId);
      this.getFavedBrandIds()
    }
    catch (e) {
      throw e
    }
  }

  componentDidMount() {
    this.getFavedBrandIds();
  }

  render() {
    return (
      <FaveBrandsContext.Provider
        value={{
          ...this.state,
          createFaveBrand
            : this.addFaveBrand,
          removeFaveBrand: this.removeFaveBrand
        }}  >
        {this.props.children}
      </ FaveBrandsContext.Provider>
    );
  }
}

export { FaveBrandsProvider };
export default FaveBrandsContext;