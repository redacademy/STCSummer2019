import React, {Component} from 'react';
import {
  createFaveItem,
  deleteFaveItem,
  queryFaveItems,
} from '../../config/models/favedItems';

const FaveItemsContext = React.createContext();
class FaveItemsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveItemIds: [],
    };
  }
  getFavedItemIds = async () => {
    try {
      const savedFaveItems = await queryFaveItems();
      const faveItemIds = savedFaveItems.map(faveItem => faveItem);
      this.setState({faveItemIds});
      console.log(this.state.faveItemIds);
    } catch (e) {
      return e;
    }
  };
  addFaveItem = async itemId => {
    try {
      const newFaveItem = await createFaveItem(itemId);
      if (newFaveItem)
        this.setState({faveItemIds: [...this.state.faveItemIds, newFaveItem]});
      this.getFavedItemIds();
    } catch (e) {
      throw e;
    }
  };

  removeFaveItem = async itemId => {
    try {
      await deleteFaveItem(itemId);
      this.getFavedItemIds();
    } catch (e) {
      throw e;
    }
  };

  componentDidMount() {
    this.getFavedItemIds();
  }

  render() {
    return (
      <FaveItemsContext.Provider
        value={{
          ...this.state,
          createFaveItem: this.addFaveItem,
          removeFaveItem: this.removeFaveItem,
        }}>
        {this.props.children}
      </FaveItemsContext.Provider>
    );
  }
}

export {FaveItemsProvider};
export default FaveItemsContext;
