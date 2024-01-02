import {View, Text, StyleSheet} from 'react-native';

interface GoalItemProps {
  text: string;
}
const GoalItem: React.FC<GoalItemProps> = props => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

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

export default GoalItem;
