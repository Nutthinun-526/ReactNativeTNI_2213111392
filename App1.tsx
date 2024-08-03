import React from "react";
import { View, StyleSheet } from "react-native";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import AppFooter from "./components/AppFooter";

const App: React.FC = () => {

  const subtitle = "Message from App.tsx";
  const title = "Input your fullname";

  return (
    <View style={styles.container}>
      <AppHeader title={title} subtitle={subtitle} />
      <Content message={subtitle} title={title} />
      <AppFooter footerText="Thai-Nichi Institute of Technology" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default App;