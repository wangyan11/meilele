import React from 'react';
import { Carousel} from 'antd-mobile';
import'./group.less';

import { getSwiper } from '../../../api';
import { Icon } from 'antd-mobile';

class Group extends React.Component{
    state = {
        swiper: []
      }
      componentDidMount() {
        getSwiper().then(resp => {
          this.setState({
            swiper: resp.data.data
          })
        })
      }
    render(){
        return (
            <div className="group-sweiper">
              <div className="group-top">
                <h2>限时团购
                  <Icon 
                  style={{paddingLeft:"10px"}}
                  key="1"
                  type='check-circle-o'
                     />
                </h2>
                </div>
              {
            this.state.swiper.length > 0 &&
            <Carousel
              infinite
            >
              {
                this.state.swiper.map(item => {
                return (                 
                        <div key={item.id} >
                         { 
                           item.imgae.map(res=>{
                            return(
                                    <div className="group-image" key={res.id}>
                                      <img
                                        src={res.img}
                                        style={{width:'146px',height:"146px"}}
                                        alt=''
                                      />
                                      <p>{res.name}</p>
                                      <span>${res.price}</span>
                                      <del>${res.del}</del>
                                    </div>
                                  )  
                           })
                         } 
                      </div>  
                   )
                })
              }
            </Carousel>
          }
       </div>
        )
    }
}
export default Group 