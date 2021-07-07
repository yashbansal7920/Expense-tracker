import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: <br />
      Add {isIncome ? "Income" : "Expense"} for ${isIncome ? 50 : 100} in
      category {isIncome ? "Buiseness" : "Home"} for{" "}
      {isIncome ? "Monday" : "Tuesday"}
    </div>
  );
};

export default InfoCard;
