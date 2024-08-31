import { View, Text, Modal, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import WeatherBangkok from "./WeatherBangkok";
import WeatherLondon from "./WeatherLondon";
/* import { styles } from '../styles/styles'; */

const ModelExample = (): React.JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const [LondonWeatherVisible, setLondonWeatherVisible] = useState(false);
  const [BangkokWeatherVisible, setBangkokWeatherVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      {/* Weather App Header */}
      <Text style={styles.text}>Weather App</Text>
      <Text style={styles.modalText}></Text>

      {/* London Button */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setModalVisible(true);
          setLondonWeatherVisible(true);
        }}
      >
        <Text style={styles.textStyle}>London</Text>
      </Pressable>

      <Text style={styles.modalText}></Text>

      {/* Bangkok Button */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setModalVisible(true);
          setBangkokWeatherVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Bangkok</Text>
      </Pressable>

      {/* London Weather Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible && LondonWeatherVisible}
        onRequestClose={() => {
          setLondonWeatherVisible(false);
          if (!BangkokWeatherVisible) setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>London Weather</Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => {
                setLondonWeatherVisible(false);
                if (!BangkokWeatherVisible) setModalVisible(false);
              }}
            >
              <WeatherLondon />
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Bangkok Weather Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible && BangkokWeatherVisible}
        onRequestClose={() => {
          setBangkokWeatherVisible(false);
          if (!LondonWeatherVisible) setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bangkok Weather</Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => {
                setBangkokWeatherVisible(false);
                if (!LondonWeatherVisible) setModalVisible(false);
              }}
            >
              <WeatherBangkok />
            </Pressable>
          </View>
        </View>
      </Modal>
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
    fontSize: 45,
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
    backgroundColor: "#FDC830",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:30,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:30,
  },
});