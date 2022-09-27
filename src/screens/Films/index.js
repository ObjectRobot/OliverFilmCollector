import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
// import openDatabase hook
import { openDatabase } from "react-native-sqlite-storage";

const FilmsScreen = props => {

  const navigation = useNavigation();

  const [films, setFilms] = useState([]);

  return (
    <View style={styles.container}>
        <View style={styles.bottom}>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => console.log('Add Film')}
            >
            <Text style={styles.buttonText}>Add Film</Text>    
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default FilmsScreen;