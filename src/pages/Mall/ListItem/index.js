import React, { Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getMallListItems} from '../../../actions/mall'
import './listitem.less';

const mapState = state=>{
  return {
    lists:state.ui.list.data
  }
}
@withRouter
@connect(mapState,{getMallListItems})
export default class ListItem extends Component {
  componentDidMount(){
      this.props.getMallListItems()
  }
  handleChangeDetail(id){ 
    this.props.history.push(`/detail/${id}`)
  }
  render() {
    const {lists} = this.props;
    return (
      <div className="listitem">
        {lists &&
          lists.map(list=>{
            const {id,img,text,price, sale,title} = list;
            return (
              <dl key={id} onClick={this.handleChangeDetail.bind(this,id)}>
                <dt><img src={img} alt={title}/></dt>
                <dd>
                  <h3>[{title}]{text}</h3>
                  <h4>￥{price}</h4>
                  <p>已售{sale}</p>
                </dd>
              </dl>
            )
          })
        }
      </div>
    )
  }
}
