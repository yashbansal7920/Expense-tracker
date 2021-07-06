import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter((t) => t.type === title);
  const total = transactionsPerType.reduce(
    (acc, currVal) => acc + currVal.amount,
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  console.log({ transactionsPerType, total, categories });

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filterateCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filterateCategories.map((c) => c.amount),
        backgroundColor: filterateCategories.map((c) => c.color),
      },
    ],
    labels: filterateCategories.map((c) => c.type),
  };

  return { total, chartData };
};

export default useTransactions;
