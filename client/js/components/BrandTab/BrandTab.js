import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {gql} from 'apollo-boost';
import FavesItemsContext from '../../context/FaveItemsContext';
import {Query} from 'react-apollo';
import styles from './styles';
import {withNavigation} from 'react-navigation';

const GET_All_BRANDS = gql`
  {
    allBrands {
      id
      images
      title
      description
      items {
        id
      }
      stores {
        id
        address
        phone
      }
    }
  }
`;

class BrandTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;

    return (
      <FavesItemsContext.Consumer>
        {({faveBrandIds}) => (
          <Query query={GET_All_BRANDS}>
            {({loading, error, data}) => {
              if (loading) return <Text>Loading :(</Text>;
              if (error) return <Text>Error :(</Text>;
              if (data) {
                const brandsData = data.allBrands;
                const brands = brandsData.filter(
                  brand => faveBrandIds && faveBrandIds.includes(brand.id),
                );
                console.log(brands);
                return (
                  <View>
                    {brands.length > 0 ? (
                      <ScrollView>
                        <View style={styles.favItemWrapper}>
                          {brands.map(brand => (
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate('brand', {brand: item})
                              }>
                              <Brand brands={brands} />
                            </TouchableOpacity>
                          ))}
                        </View>
                      </ScrollView>
                    ) : (
                      <View>
                        <View style={styles.containerImg}>
                          <Image
                            style={styles.iconImg}
                            resizeMode="contain"
                            source={require('../../assets/icons/azheart.png')}
                          />
                        </View>
                        <Text style={styles.text}>
                          {' '}
                          See the brands you want{' '}
                        </Text>
                        <Text style={styles.subText}>
                          {' '}
                          Curate your own personal brand by favouriting the
                          brands that represent you.{' '}
                        </Text>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Stores&Brands')}>
                          <View style={styles.txtWrapper}>
                            <Text style={styles.browseTxt}>
                              {' '}
                              Browse Brands{' '}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                );
              }
            }}
          </Query>
        )}
      </FavesItemsContext.Consumer>
    );
  }
}

export default withNavigation(BrandTab);
