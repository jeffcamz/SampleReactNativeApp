/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/Goal/GoalItem';
import GoalInput from './components/Goal/GoalInput';

interface Goal {
  text: string;
  id: string;
}

function App(): React.JSX.Element {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    setModalIsVisible(false);
  };

  const onCancelHandler = () => {
    setModalIsVisible(false);
  };

  const onDeleteItemHandler = (id: string) => {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
    console.log('Deleted');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.button}>
        <Button
          title="Add Goal"
          color="#003366"
          onPress={startAddGoalHandler}
        />
      </View>
      <GoalInput
        showModal={modalIsVisible}
        OnAddGoal={addGoalHandler}
        OnCancelHandler={onCancelHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                onDeleteItem={onDeleteItemHandler}
                text={itemData.item.text}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
  button: {
    marginBottom: 5,
  },
});

export default App;
