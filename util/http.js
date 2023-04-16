import axios from "axios";

const baseUrl = "https://react-native-expensive-default-rtdb.firebaseio.com/";

export async function storeExpense(expenseData) {
  const response = await axios.post(baseUrl + "expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(baseUrl + "expenses.json");
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      ...response.data[key],
    };

    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(expenseId, expenseData) {
  return axios.put(baseUrl + "expenses/" + expenseId + ".json", expenseData);
}

export async function deleteExpense(expenseId) {
  axios.delete(baseUrl + "expenses/" + expenseId + ".json");
}
