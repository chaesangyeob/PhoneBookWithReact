// import React, { Component } from 'react';

// class TestCom extends Component {
//     state = {
//         name:'',
//         phone:'',
//         editing: false
//     }
//     handleRemove = () =>{
//         const {aa,onRemove} = this.props;
//         onRemove(aa.id);
//     }

//     handleUpdate = (e) => { 
//         const {aa, onUpdata} = this.props;
//         if(this.state.editing) {
//             onUpdata(aa.id, {
//                 name: this.state.name,
//                 phone:this.state.phone
//             });
//         } else {
//             this.setState({
//                 name:aa.name,
//                 phone: aa.phone
//             })
//         }
//         this.setState({
//             editing: !this.state.editing
//         })
//     }

//     handleChange = (e) => {
     
//         this.setState({
//             [e.target.name] :e.target.value
//         })
//     }
    
//     render() {
        
//         const {editing} = this.state;
//         const style = {
//             border : '1px solid black',
//             margin : '5px'

//         }
//         return (
//             <div style={style}>
//                 {editing ?
//                     <div>
//                        <div><input name='name' placeholder='수정할 이름' value={this.state.name} onChange={this.handleChange} /></div>    
//                        <div><input name='phone' placeholder='수정할 번호' value={this.state.phone} onChange={this.handleChange} /></div>
//                     </div>
//                 :
//                    <div>
//                        <div>{this.props.aa.name}</div>    
//                        <div>{this.props.aa.phone}</div>
//                    </div>    
//             }
                
//                 <button onClick={this.handleRemove}>delete</button>   
//                 <button onClick={this.handleUpdate}>{this.state.editing ? '적용' : '수정'}</button>     
//             </div>
//         );
//     }
// }

// export default TestCom;

import React, { Component } from 'react';

class TestCom extends Component {
    state = {
        editing:false,
        name:'',
        phone:''
    }

    shouldComponentUpdate(nextProps, nextState) {
        //최적화   //기본적으로는 return true를 반환하기 때문에 항상 render함수가 호출됨
        if(this.state !== nextState) {
            return true //현재 state와 가장 최근에 변경된 state가 다르다 == 스테이트가 변경되었
             //다 return true  즉 랜더링 시킨다.

        }
        else if (this.props.listData !== nextProps.listData) {
            return true     //값이 다르다  , 새로운 값이다  return true 즉 랜더링한다.
        } 
        if(this.props.listData == nextProps.listData) {
            return false     //존재하는 프롭스와 다음에 올 프롭스 값이 똑같다 ==값이 같다 return false 즉 랜더링하지않느다
        }
    }
    
    handleUpdate = () => {
        
        const {editing} = this.state;
        const {listData,onUpdata} = this.props;
        if(editing) {
            onUpdata(listData.id,{
                name:this.state.name,
                phone:this.state.phone
            })
            
        } else {
            this.setState({
                name:listData.name,
                phone:listData.phone
            })
        }

        this.setState({
            editing: !editing
        })
    }

    handleDelte = (e) => {
       
        const {findId,listData} = this.props;
        findId(listData.id)
  
    }

    handleChand = (e) => {
        console.log(e.target)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        console.log(this.props.listData.name)
        const {editing} = this.state
     
        return (
            <div className='list-group-item'>
                <li>
                    { editing ? (
                        <div>
                            <input name='name' value={this.state.name}  onChange={this.handleChand} />
                            <input name='phone' value={this.state.phone}  onChange={this.handleChand} />
                        </div>
                         ) : (
                        <div>
                            <div>이름 : {this.props.listData.name}</div>
                            <div>전화번호 : {this.props.listData.phone}</div> 
                        </div>
                         )
                    }
                  <button onClick={this.handleDelte}>삭제</button>
                  <button onClick={this.handleUpdate}>
                        { editing ? (
                            '적용'
                             ) : (
                             '수정'
                             )
                        }
                  </button>
                </li>  
            </div>
        );
    }
}

export default TestCom;