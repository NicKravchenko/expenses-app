import { View, Text, FlatList } from "react-native";

function ExpensesList({ expenses }) {
  function renderExpenseItem(itemData) {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
        <Text>${itemData.item.amount}</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ExpensesList;
