// import React, { Component } from 'react';

// class Form extends Component {
//   state = {
//     name:'',
//     phone:''
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name] :e.target.value
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     this.props.onCreate({
//       name:this.state.name,
//       phone:this.state.phone
//     })
//     this.setState({
//       name:'',
//       phone:''
//     })
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input 
//             placeholder='이름'
//             name='name'
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//               <input 
//             placeholder='전화번호'
//             name='phone'
//             value={this.state.phone}
//             onChange={this.handleChange}
//           />
//           <button>등록</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;

import React, { Component } from 'react';

class Form extends Component {
  ref = React.createRef();
  state = {
    name:'',
    phone:''
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {onCreate} = this.props;
    onCreate({
      name:this.state.name,
      phone:this.state.phone
    })
    this.setState({
      name:'',
      phone:''
    })
    this.ref.current.focus();
  }
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group row'>
           <label for="inputName" className="col-sm-2 col-form-label">Name</label>
           <div className='col-sm-10'>
            <input value={this.state.name} id='inputName' name='name' placeholder='Name' onChange={this.handleChange} ref={this.ref} />
           </div>
          </div>

          <div className='form-group row'>
           <label for="inputPhone" className="col-sm-2 col-form-label">Phone</label>
           <div className='col-sm-10'>
             <input value={this.state.phone} id='inputPhone' name='phone' placeholder='phone' onChange={this.handleChange} />
           </div>
          </div>

          <div className='form-group row'>
           <div className="offset-sm-2 col-sm-10">
            <button className='btn btn-primary'>등록</button>
           </div>
          </div>
          
        </form>
      </div>


      // <div>
      //   <form onSubmit={this.handleSubmit}>
      //     <input value={this.state.name} id='inputName' name='name' placeholder='Name' onChange={this.handleChange} ref={this.ref} />
      //     <input value={this.state.phone} name='phone' placeholder='phone' onChange={this.handleChange} />
      //     <button className='btn btn-primary'>등록</button>
      //   </form>
      //   {this.state.name}
      // </div>
    );
  }
}

export default Form;
