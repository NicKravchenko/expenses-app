import { View, Text, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {
  function renderExpenseItem(itemData) {
    return (
      <ExpenseItem {...itemData.item} />
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
