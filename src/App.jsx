import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: '',
      hitung: '',
    };
  }

  masukanAngka = value => {
    this.setState({hitung: this.state.hitung + value});
  };

  hitungHasil = () => {
    try {
      const hasil = eval(this.state.hitung);
      this.setState({hitung: String(hasil)});
    } catch (e) {
      this.setState({hitung: 'Error'});
    }
  };

  clearInput = () => {
    this.setState({hitung: ''});
  };

  deleteLast = () => {
    this.setState({hitung: this.state.hitung.slice(0, -1)});
  };

  renderButton = (label, onPress, flex = 1) => (
    <TouchableOpacity style={[styles.button, {flex}]} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000814" barStyle="light-content" />

        <View style={styles.display}>
          <Text style={styles.displayText}>{this.state.hitung}</Text>
        </View>

        <View style={styles.buttonRow}>
          {this.renderButton('7', () => this.masukanAngka('7'))}
          {this.renderButton('8', () => this.masukanAngka('8'))}
          {this.renderButton('9', () => this.masukanAngka('9'))}
          {this.renderButton('/', () => this.masukanAngka('/'))}
        </View>
        <View style={styles.buttonRow}>
          {this.renderButton('4', () => this.masukanAngka('4'))}
          {this.renderButton('5', () => this.masukanAngka('5'))}
          {this.renderButton('6', () => this.masukanAngka('6'))}
          {this.renderButton('*', () => this.masukanAngka('*'))}
        </View>
        <View style={styles.buttonRow}>
          {this.renderButton('1', () => this.masukanAngka('1'))}
          {this.renderButton('2', () => this.masukanAngka('2'))}
          {this.renderButton('3', () => this.masukanAngka('3'))}
          {this.renderButton('-', () => this.masukanAngka('-'))}
        </View>
        <View style={styles.buttonRow}>
          {this.renderButton('.', () => this.masukanAngka('.'))}
          {this.renderButton('0', () => this.masukanAngka('0'))}
          {this.renderButton('00', () => this.masukanAngka('00'))}
          {this.renderButton('+', () => this.masukanAngka('+'))}
        </View>
        <View style={styles.buttonRow}>
          {this.renderButton('C', this.clearInput)}
          {this.renderButton('DEL', this.deleteLast)}
          {this.renderButton('=', this.hitungHasil, 2)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefaf6',
    justifyContent: 'center',
  },
  display: {
    flex: 0.9,
    backgroundColor: '#eadbc8',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  displayText: {
    color: '#102c57',
    fontSize: 70,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  button: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#dac0a3',
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: '#102c57',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default App;
