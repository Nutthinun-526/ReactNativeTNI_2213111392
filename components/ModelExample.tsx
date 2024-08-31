import { View, Text, Modal, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import WeatherBangkok from "./WeatherBangkok";
import WeatherLondon from "./WeatherLondon";
/* import { styles } from '../styles/styles'; */

const ModelExample = (): React.JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Text style={styles.text}>Weather App</Text>
      <Text style={styles.modalText}></Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>London</Text>
      </Pressable>
      <Text style={styles.modalText}></Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Bangkok</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bangkok</Text>
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <WeatherBangkok />
            </Pressable>
          </View>
        </View>
      </Modal>
      //London
      {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>London</Text>
                        <Pressable
                            style={[styles.buttonClose]}
                            onPress={() => setModalVisible(false)}
                        >
                            <WeatherBangkok/>
                        </Pressable>
                    </View>
                </View>
            </Modal> */}
    </View>
  );
};

export default ModelExample;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    fontSize: 20,
  },
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
