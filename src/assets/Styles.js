/**
 * Style sheet
 * https://github.com/facebook/react-native
 * 
 * @format
 * @flow strict-local
 */ 
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 10,
      // backgroundColor: 'skyblue',
    },
  
    headerText: {
      color: '#000',
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: 24,
      fontFamily: 'Lobster-Regular',
    },
  
    headerImg: {
      width: 40,
      height: 40,
      marginRight: 24,
    },
  
    profileContainer: {
      marginTop: 20,
      // backgroundColor: 'skyblue',
      display: 'flex',
      flexDirection: 'row',
      gap: 22,
      alignItems: 'center',
    },
  
    profileImage: {
      height: 100,
      width: 100,
      marginLeft: 24,
      borderRadius: 30,
      borderWidth: 3,
      borderColor: '#aaa',
    },
  
    textContainer: {
      // marginTop: 14
    },
  
    nameText: {
      color: '#000',
      fontSize: 18,
      fontWeight: 'bold',
    },
    artText: {
      color: '#aaa',
      fontWeight: '500',
      fontSize: 15,
    },
    veteranText: {
      color: '#aaa',
      fontWeight: '700',
      fontSize: 15,
    },
  
    Gallery: {
      // backgroundColor: 'skyblue',
      marginTop: 10,
      display: 'flex',
      flexDirection: 'row',
      gap: 20,
      paddingLeft: 24,
      alignItems: 'center',
    },
  
    GalleryImgTxt: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    Gallerylogo: {
      height: 26,
      width: 26,
    },
  
    Gallerytxt: {
      color: '#000',
      fontWeight: 'bold',
    },
  
    line: {
      backgroundColor: '#000',
      height: 4,
      width: 110,
    },
  
    lineContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
  
    wonderContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    atText: {
      color: '#000',
      fontWeight: 'bold',
    },
  
    wonderText: {
      color: '#000',
      fontWeight: 'bold',
    },
  
    galleryContainer: {
      // backgroundColor: 'skyblue',
      marginTop: 20,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    imgContainer: {
      // backgroundColor: 'orange',
      marginTop: 10,
      height: '100%',
      width: '95%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      rowGap: 20,
      columnGap: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    images: {
      width: 120,
      height: 200,
      borderRadius: 10,
    },
  
    imgText: {
      color: '#000',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
  
  export { styles }