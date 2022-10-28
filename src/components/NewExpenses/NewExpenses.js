import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };
  const closeFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className={showForm ? "new-expense new-expense__form" : "new-expense"}>
      {showForm === false ? (
        <button onClick={showFormHandler}>Add a Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClose={closeFormHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
