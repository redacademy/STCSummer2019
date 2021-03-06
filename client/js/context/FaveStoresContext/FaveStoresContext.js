import React, { Component } from 'react';
import { createFaveStore, deleteFaveStore, queryFaveStores } from "../../config/models/favedStores"
import PropTypes from 'prop-types';
const FaveStoresContext = React.createContext();
class FaveStoresProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveStoreIds: [],
    };
  }
  getFavedStoreIds = async () => {
    try {
      const savedFaveStores = await queryFaveStores();
      const faveStoreIds = savedFaveStores.map(faveStore => faveStore);
      this.setState({ faveStoreIds })
    } catch (e) {
      return e
    }
  }
  addFaveStore = async (storeId) => {
    try {
      const newFaveStore = await createFaveStore(storeId);
      if (newFaveStore) this.setState({ faveStoreIds: [...this.state.faveStoreIds, newFaveStore] })
      this.getFavedStoreIds()
    } catch (e) {
      throw e
    }
  }

  removeFaveStore = async (storeId) => {
    try {
      await deleteFaveStore(storeId);
      this.getFavedStoreIds()
    }
    catch (e) {
      throw e
    }
  }

  componentDidMount() {
    this.getFavedStoreIds();
  }

  render() {
    return (
      <FaveStoresContext.Provider
        value={{
          ...this.state,
          createFaveStore
            : this.addFaveStore,
          removeFaveStore: this.removeFaveStore
        }}  >
        {this.props.children}
      </ FaveStoresContext.Provider>
    );
  }
}
FaveStoresContext.propTypes = {
  children: PropTypes.object
}

export { FaveStoresProvider };
export default FaveStoresContext;