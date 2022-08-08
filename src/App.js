import React from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const App = () => {
    let expense = [
        {
            id: "e1",
            title: "abcd",
            amout: 250,
            date: new Date(2022,5,12)
        },
        {
            id: "e2",
            title: "dffg",
            amout: 750,
            date: new Date(2022,5,12)
        },
        {
            id: "e3",
            title: "aerr",
            amout: 540,
            date: new Date(2022,5,12)
        },
        {
            id: "e4",
            title: "deertt",
            amout: 320,
            date: new Date(2022,5,12)
        }

    ];

    return (
        <diV>
            <NewExpense/>
            <Expenses item={expense}/>
        </diV>
    );
};

export default App;
