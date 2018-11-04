// import React, { Component } from 'react';
// import TestCom from './TestCom';

// class ListInfo extends Component {
 
//     render() {
//        if(!this.props.info) return null
//        const {onUpdate} = this.props
    //    const lists = this.props.info.map(x=> {
    //        console.log(x)
//            const lis = (<TestCom
//                  aa={x} key={x.id} 
//                  onRemove={this.props.onRemove}
//                  onUpdate = {onUpdate}
//                  />) 
//            return lis
//        })
       
//         return (
//             <div>
//               {lists}
//             </div>
//         );
//     }
// }

// export default ListInfo;

import React, { Component } from 'react';
import TestCom from './TestCom';


class ListInfo extends Component {
    render() {
       

        console.log('rendering list')
        
        const {information,findId,onUpdata} = this.props;
        const mapToUpload = information.map(x=> {
            const lis = <TestCom listData={x}
                                 key={x.id}
                                 findId={findId}
                                 onUpdata={onUpdata}
                        /> 
            return lis
        })
        return (
            <div>
               <ul className='list-group'>{mapToUpload}</ul>
            </div>
        );
    }
}

export default ListInfo;