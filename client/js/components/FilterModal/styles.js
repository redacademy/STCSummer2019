import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  modalContainer: {
    height: '100%',
    backgroundColor: 'white',
    margin: 0,
    marginLeft: 100,
    justifyContent: 'flex-start',
  },
  filterHeader: {
    height: '10%',
    backgroundColor: '#E0D5C4',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
  },
  filterHeaderText: {
    padding: '4%',
    fontFamily: 'Lato',
    fontSize: 20,
  },
  clearContainer: {
    backgroundColor: 'white',
    borderColor: '#D3D3D3',
    borderWidth: 1,
    padding: 5,
    width: '30%',
    alignItems: 'center',
    marginBottom: '2%',
    borderRadius: 2,
  },
  clear: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: '#003399',
  },
  applyContainer: {
    backgroundColor: 'white',
    borderColor: '#2B2D2F',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    margin: 'auto',
    borderRadius: 2,
  },
  apply: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: '#003399',
  },
  check: {
    width: '100%',
    height: '100%',
  },
  checkContainer: {
    height: 15,
    width: 15,
  },

  filterContainer: {
    height: '80%',
  },
  filterTitleContainer: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    marginLeft: '10%',
    marginRight: '10%',
    paddingTop: '6%',
    paddingBottom: '3%',
  },
  filterTitle: {
    fontSize: 20,
    fontFamily: 'Lato',
    color: '#333638',
  },
  filterOptionContainer: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    marginLeft: '20%',
    marginRight: '10%',
    paddingTop: '4%',
    paddingBottom: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterOptionText: {
    fontSize: 16,
    fontFamily: 'Lato',
    color: '#333638',
  },
});

export default styles;
