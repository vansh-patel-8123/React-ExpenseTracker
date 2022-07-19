import ExpenseItem from "./Components/ExpenseItem";
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
        <div>
            <ExpenseItem
                date={expense[0].date}
                title={expense[0].title}
                amout={expense[0].amout}
            ></ExpenseItem>
            <ExpenseItem
                date={expense[1].date}
                title={expense[1].title}
                amout={expense[1].amout}
            ></ExpenseItem>
            <ExpenseItem
                date={expense[2].date}
                title={expense[2].title}
                amout={expense[2].amout}
            ></ExpenseItem>
            <ExpenseItem
                date={expense[3].date}
                title={expense[3].title}
                amout={expense[3  ].amout}
            ></ExpenseItem>
        </div>
        
    );
};

export default App;
