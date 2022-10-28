import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filter, setFilter] = useState({
    year: "2022",
  });

  let filteredExpenses = props.items;
  if (filter.year) {
    filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filter.year;
    });
  }

  let expenseItemContent = <p>No Expense Found</p>;
  if (filteredExpenses.length > 0) {
    expenseItemContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  const filterChangeHandler = (selectedYear) => {
    setFilter({
      year: selectedYear,
    });
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filter.year}
          onChangeFilter={filterChangeHandler}
        />
        {expenseItemContent}
      </Card>
    </div>
  );
};

export default Expenses;
