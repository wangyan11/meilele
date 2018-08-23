import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { WingBlank, WhiteSpace } from 'antd-mobile'
import { gChangeTitle, gToggleHeader, gToggleFooter } from '../../actions/ui'
import './index.less'
import DetailCarousel from './Carousel'
import { axiosGetDetail } from '../../actions/detail'
import Tabbar from './Tabbar';


const mapStatetoProps = state => {  
  return {
    detail: state.detail
  }
}

@connect(mapStatetoProps, { 
  gChangeTitle, 
  gToggleHeader, 
  gToggleFooter, 
  axiosGetDetail 
})
export default class Detail extends Component {
  componentDidMount(){
    this.props.axiosGetDetail()
    this.props.gChangeTitle("商品详情");
    this.props.gToggleFooter(false);
    this.props.gToggleHeader(false);
    
  }
  componentWillUnmount(){
    this.props.gToggleFooter();
    this.props.gToggleHeader();
  }
  render() {
    const { detail } = this.props.detail;
    return (      
      <div>
        {
          detail
          && 
          <Fragment>
          <div className='swiper__container'>
            <DetailCarousel images={detail.img} />        
          </div>
          <div className='ads'>
            <p>{detail.local}</p>
            <p>{detail.suggest}</p>
          </div>
          <WhiteSpace size='lg' />
          <WingBlank>
            <div className='detail'>
              <div className='top'>
                <div className='price'>￥{detail.price}</div>
                <div className='sale'>已售 {detail.sale}</div>
              </div>
              <WhiteSpace size='lg'/>
              <div className='desc'>
                {detail.desc}
              </div>
              <WhiteSpace size='lg'/>
              <div className='salehappy'>
                { detail.salehappy }
              </div>
            </div>    
          </WingBlank>   
          <Tabbar proid={detail.id}></Tabbar>
        </Fragment>
        }  
      </div>           
    )
  }
}
