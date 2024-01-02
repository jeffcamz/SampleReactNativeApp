import {View, Text, StyleSheet, Pressable} from 'react-native';

interface GoalItemProps {
  id: string;
  text: string;
  onDeleteItem: (id: string) => void;
}
const GoalItem: React.FC<GoalItemProps> = props => {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 5,
    margin: 5,
    backgroundColor: '#003366',
    borderRadius: 6,
  },

  goalText: {
    color: '#ffffff',
    marginLeft: 5,
  },
});
