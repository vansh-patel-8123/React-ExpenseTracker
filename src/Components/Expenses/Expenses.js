import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import React from 'react';
const Expenses = (props) =>{
    return(
        <Card className='expenses'>
            <ExpenseItem
                date={props.item[0].date}
                title={props.item[0].title}
                amout={props.item[0].amout}
                />
            <ExpenseItem
                date={props.item[1].date}
                title={props.item[1].title}
                amout={props.item[1].amout}
                />
            <ExpenseItem
                date={props.item[2].date}
                title={props.item[2].title}
                amout={props.item[2].amout}
                />
            <ExpenseItem
                date={props.item[3].date}
                title={props.item[3].title}
                amout={props.item[3].amout}
                 />
        </Card>
    );
}
export default Expenses;