import {View, StyleSheet, TextInput, Button, Modal} from 'react-native';
import React, {useState} from 'react';

interface GoalInputProps {
  OnAddGoal: (goal: string) => void;
  showModal: boolean;
  OnCancelHandler: () => void;
}

const GoalInput: React.FC<GoalInputProps> = props => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.OnAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          value={enteredGoalText}
          placeholder="Your course goal!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button onPress={props.OnCancelHandler} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
