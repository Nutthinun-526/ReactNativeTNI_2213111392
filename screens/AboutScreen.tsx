import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
} from "react-native";
import React from "react";

const AboutScreen = ({route}:any): React.JSX.Element => {
  const {companyName, companyID} = route.params;

  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.bgImg}>
      <SafeAreaView>
        <Image
          source={require("../assets/building.png")}
          resizeMode="contain"
          style={styles.myImage}
        />
        <Text>
          {companyName} {companyID}
        </Text>
        <Image
          source={{
            uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpicjumbo.com%2Ffree-images%2Fnature%2F&psig=AOvVaw0Hhi73fCuwO37WdpNT6cPK&ust=1725160286332000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODqvouhnogDFQAAAAAdAAAAABAE",
          }}
          style={styles.myImageNetwork}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  myImage: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  myImageNetwork: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  bgImg:{
    width :'100%',
    height:'100%'
  }

});
