import React, {useState} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {auth} from '../FirebaseConfig/FirebaseConfig';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const EmailPassword = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const SiginUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        Alert.alert('New User Has been created');
        const user = userCredential.user;
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const Login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        Alert.alert(`${email} has been login into App`);
        const user = userCredential.user;
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.Emailinput}
        placeholder="Email"
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />
      <TextInput
        style={styles.Passwordinput}
        placeholder="Password"
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
      />
      <TouchableOpacity
        style={styles.createAccont}
        onPress={() => {
          Login();
        }}>
        <Text style={styles.createText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.createAccont}
        onPress={() => {
          SiginUp();
        }}>
        <Text style={styles.createText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent:'center'
  },
  Emailinput: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingLeft: 20,
  },
  Passwordinput: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingLeft: 20,
    marginTop: 20,
  },
  createAccont: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    marginTop: 50,
    borderRadius: 50,
  },
  createText: {
    color: 'white',
    fontSize: 17,
  },
});
export default EmailPassword;
