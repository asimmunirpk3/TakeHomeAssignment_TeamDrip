/**
 * Front Page
 * https://github.com/facebook/react-native
 * 
 * @format
 * @flow strict-local
 */ 
import React from 'react'; 
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native'; 
import { styles } from "./assets/Styles";

export default function FrontPage() 
{
  return (
    <View style={{flex:1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Wonder</Text>
        <Image source={{  uri: 'https://static-00.iconduck.com/assets.00/discord-icon-2048x2048-nnt62s2u.png' }}  style={styles.headerImg} />
      </View>

      <View style={styles.profileContainer}>
        <View>
          <Image style={styles.profileImage} source={{uri: 'https://www.pexels.com/photo/771742/download/'}}  />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>Jake44</Text>
          <Text style={styles.artText}>250+ Arts</Text>
          <Text style={styles.veteranText}>Veteran AI Artist</Text>
        </View>
      </View>

      <View style={styles.Gallery}>
        <View>
          <View style={styles.GalleryImgTxt}>
            <Image style={styles.Gallerylogo}
              source={{ uri: 'https://media.istockphoto.com/id/1219543900/vi/vec-to/%E1%BA%A3nh-gallery-icon-logo-vector-illustrattion-m%E1%BA%ABu-vector-thi%E1%BA%BFt-k%E1%BA%BF-bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-b%E1%BB%99-s%C6%B0u-t%E1%BA%ADp-%E1%BA%A3nh.jpg?s=1024x1024&w=is&k=20&c=FbDRJ3DEgZyPW4b-gGPcio6gKmtDHV-m7ugeAanpWfw='  }} />
            <Text style={styles.Gallerytxt}>My Gallery</Text>
          </View>
          <View style={styles.lineContainer}>
            <View style={styles.line}></View>
          </View>
        </View>

        <View style={styles.wonderContainer}>
          <Text style={styles.atText}>@</Text>
          <Text style={styles.wonderText}>WonderSelf</Text>
        </View>
      </View>

    <View style={{flex:1}}>
      <ScrollView>
        <View style={styles.galleryContainer}>
          <View style={styles.imgContainer}>
            {tileView(require('./assets/images/img1.jpeg'), "Dark Village")}
            {tileView(require('./assets/images/img2.jpg'), "Pyramid")}
            {tileView(require('./assets/images/img3.jpg'), "Halloween")}
            {tileView(require('./assets/images/img1.jpeg'), "Dark Village")}
            {tileView(require('./assets/images/img1.jpeg'), "Dark Village")}
            {tileView(require('./assets/images/img2.jpg'), "Pyramid")}
            {tileView(require('./assets/images/img3.jpg'), "Halloween")}
            {tileView(require('./assets/images/img1.jpeg'), "Dark Village")}
            {tileView(require('./assets/images/img2.jpg'), "Pyramid")}
            {tileView(require('./assets/images/img3.jpg'), "Halloween")}
          </View>
        </View>
      </ScrollView>
    </View>
    </View>
  );

  function tileView(imagePath, title) {
    return (
    <View>
      <Image style={styles.images} source={imagePath} />
      <Text style={styles.imgText}>{title}</Text>
    </View>
    );
  }

}

