import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={
      [
        styles.screen,
        style,
        { paddingTop : style.paddingTop ? Constants.statusBarHeight + style.paddingTop : Constants.statusBarHeight }
      ]
    }>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    boxSizing: "content-box",
    flex: 1,
  }
});

export default Screen;
