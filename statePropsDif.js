import React from 'react';

const StatePropsDif = () => {
  return (
    <div>
      <h1>Explain diferences between state and props as much as possible</h1>
      <h2>
        State - This is data maintained inside a component. It is local or owned
        by that specific component. The component itself will update the state
        using the setState function. Props - Data passed in from a parent
        component. props are read-only in the child component that receives
        them. However, callback functions can also be passed, which can be
        executed inside the child to initiate an update. The difference is all
        about which component owns the data. State is owned locally and updated
        by the component itself. Props are owned by a parent component and are
        read-only. Props can only be updated if a callback function is passed to
        the child to trigger an upstream change. The state of a parent component
        can be passed a prop to the child. They are referencing the same value,
        but only the parent component can update it.
      </h2>
    </div>
  );
};

export default StatePropsDif;



// class Form extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { value: '' };
  
//       this.Change = this.Change.bind(this);
//       this.Submit = this.Submit.bind(this);
//     }
  
//     Change(event) {
//       this.setState({ value: event.target.value });
//     }
  
//     Submit(event) {
//       console.log(this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.Submit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.Change} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
  
//   export default Form;