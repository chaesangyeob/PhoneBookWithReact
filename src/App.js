// import React, { Component } from 'react';
// import Form from './component/Form';
// import ListInfo from './component/ListInfo';

// class App extends Component {
 
//   state = {
//     information:[],
//     id:0
//   }

//  handleRemove = (id) => {
//   this.setState({
//     information:this.state.information.filter(x=> x.id!==id)
//   })
//  }
//   handleCreate = (data) => {
//     this.setState({
//       information:this.state.information.concat({
//         ...data,
//         id:this.state.id++
//       })
//     })
//   }
//   handleUpdate = (id,data)  =>{
//     this.setState({
//       information:this.state.information.map((x) =>{
//         if(x.id == id) {
//           return {
//             id:id,
//             ...data
//           }
//         } else {
//           return x
//         }
//       })
//     })
//   }
  

//   render() {
//     return (
//       <div>
//         <Form onCreate={this.handleCreate} />
//         <ListInfo
//            info={this.state.information}
//            onRemove={this.handleRemove}
//            onUpdate = {this.handleUpdate}
//            />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import Form from './component/Form';
import ListInfo from './component/ListInfo';



class App extends Component {
  state = {
    information:[],
    id:0,
    keyword:''
  }

  handleCreate = (data) => {
    const {information} = this.state;
  
    this.setState({
      information:information.concat({
        ...data,
        id:this.state.id++
      })
    })
    
  }

  handleDelte = (id) => {
    const {information} = this.state;
    this.setState({
      information:information.filter(x => x.id !==id)
    })
  }

  handleChange = (e) => {
    this.setState({
      keyword:e.target.value
    })
  }

  handleUpdate = (id,data) => {
  
    const {information} = this.state;
    this.setState({
      information:information.map(x => {
        console.log(x)
        if(x.id ===id) {
          return {
            id,
            ...data
          }
        } else {
          return x
        }
      })
    })
  }

  render() {
    return (
      <div>
        <Form onCreate = {this.handleCreate} />
        <input className='form-control' onChange={this.handleChange} value={this.state.keyword} placeholder='이름 또는 전화번호를 검색하세요' />
        <ListInfo information={this.state.information.filter(x => {
          const name = x.name.includes(this.state.keyword);
          const phone = x.phone.includes(this.state.keyword);
          return name || phone
        })} 
                  findId={this.handleDelte}
                  onUpdata={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;