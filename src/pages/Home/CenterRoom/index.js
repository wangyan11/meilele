import React from 'react'
import {connect} from 'react-redux'
import { Tabs, WhiteSpace } from 'antd-mobile';
// import ProductItem from './ProductItem';
import './index.less';

import { roomgetRoomCenter } from '../../../actions/room';


const mapState = (state)=>{
    
    return {
        redacetList:state.Room.list
    }
}
@connect(mapState,{roomgetRoomCenter})
class CenterRoom extends React.Component{  

    componentDidMount() {
       this.props.roomgetRoomCenter();
    }

    render(){
        
        const tabs = [
                { title: '客厅' },
                { title: '卧室' },
                { title: '餐厅' },
            ];

            const {
                redacetList
            } = this.props;
            // const _prods = redacetList.imgs;
            // console.log(_prods)
            
        return (
            <div className = "room-center">
                <div className = "room-top">
                 <h2>全屋套系</h2>
                </div>
                <WhiteSpace /> 
                <Tabs tabs={tabs} initialPage={0} animated={true} useOnPan={true}>
                    <div>
                    <img src={redacetList.img} alt=''/>
                    </div>
                    <div> 
                    <img src={redacetList.img} alt=''/>
                    </div>
                    <div>
                       <img src={redacetList.img} alt=''/>

                        {
                   this.props.length
                    && 
                    redacetList.imgs.map(res=>{
                        console.log(123)
                        return(
                        <div className='room-imgs_img' key={res.id} >
                            <img src={res.img} alt=''/>
                            <div>{res.tilte}</div>
                            <div>{res.price}</div>      
                        </div>
                        ) 
                    })
                     }
                    </div>
                </Tabs>
                <WhiteSpace /> 
            </div>    

         )
    }
}
export default CenterRoom 



//  <div> 
//                         3
//                     <ProductItem> 
//                       <img src={redacetList.img} />
//                     {
//                     redacetList.length>0 
//                     && 
//                     redacetList.imgs.map(res=>{
//                         console.log(123)
//                         return(
//                         <div className='room-imgs_img' key={res.id} >
//                             <img src={res.img}/>
//                             <div>{res.tilte}</div>
//                             <div>{res.price}</div>      
//                         </div>
//                         ) 
//                     })
//                      }
//                      </ProductItem>
//                     </div>
//                 </Tabs>
//                 <WhiteSpace /> 
//             </div>             