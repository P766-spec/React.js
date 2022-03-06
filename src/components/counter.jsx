import React, { Component } from 'react'


class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server
        }
    }

    componnentWillUnmount() {
        console.log("Counter - Unmount");
    }
    //state = {
    //    value: this.props.counter.value
    //};

    // constructor() {
    //   super();
    //   this.handleIncrement = this.handleIncrement.bind(this);
    //   }

    

    //handleIncrement = () => {
    //   this.setState({value: this.state.value + 1});
    //}
    
    render() { 
        console.log('Counter - Rendered');

        console.log(this.props);
        return (
            <div>
               

            <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
            <button
            onClick={() => this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm">
                Increment</button>
             <button 
             onClick={() => this.props.onDelete(this.props.counter.id)} 
             className="btn btn-danger btn-sm m-2">
                 Delete
                 </button>
             </div>
        
        );
             
        }     

    getbadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value == 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;