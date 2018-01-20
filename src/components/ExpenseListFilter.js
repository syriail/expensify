import React from 'react';
import {connect} from 'react-redux'
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilter extends React.Component{
    state = {
        calendarFocused: null
    };

    onDatesChange = ({startDate, endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused)=>{
        this.setState(()=>({calendarFocused}));
    };

    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e)=>{
        if(e.target.value === 'amount'){
            this.props.sortByAmount();
        }else{
            this.props.sortByDate();
        }
    };
    render() {
        return (
        <div>
            <input 
                type="text" 
                value={this.props.filters.text}
                onChange={this.onTextChange}
            >
            </input>
            <select onChange={this.onSortChange}>
                <option value="amount">Amount</option>    
                <option value="date">Date</option>
                
            </select>

            <DateRangePicker 
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={()=>false}
            />

        </div>
        );
    };
}

const mapStateToProps = (state) =>{
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        setTextFilter: (text)=>{dispatch(setTextFilter(text))},
        sortByAmount: ()=>{dispatch(sortByAmount())},
        sortByDate: ()=> {dispatch(sortByDate())},
        setStartDate: (startDate)=>{dispatch(setStartDate(startDate))},
        setEndDate: (endDate)=>{dispatch(setEndDate(endDate))}

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);