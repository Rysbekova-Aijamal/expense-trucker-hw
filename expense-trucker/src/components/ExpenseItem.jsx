import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const expenseTitle = props.items.title;
    const expenseDate = props.items.date;
    const expensePrice = props.items.price;
   return (
        <div className='expense-item'>
            {/* <expenseDate expenseDate={expenseDate}/> */}
           <ExpenseDate expenseDate ={expenseDate}/>
           {/* <div>{expenseDate.toString()}</div> */}
           <h2 className='expense-item__description'>{expenseTitle}</h2>
            
            <div className='expense-item__price'>${expensePrice}</div>
        </div>
    )
};

export default ExpenseItem