import React,{useState} from 'react';
import { StyleSheet,Switch, Text, View,Button } from 'react-native';

export default function App() {
  const [outputText,setText] = useState("Test native App");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{outputText}</Text>
      <Button title="click Me" onPress={()=> setText('Text Changed')}/>
      <Button title="Revert Me" onPress={()=> setText('Test native App')}/>
       <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
