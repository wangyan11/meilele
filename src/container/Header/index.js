import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { 
    NavBar, 
    Icon,
    Badge
 } from 'antd-mobile'
import HeaderPopover from './Popover'
import './index.less'
import logo from './logo.png'
import IconFont from '../../components/Icon';

const mapStateToProps = (state) => {
    return {
            title: state.ui.title,
            isShowLeft: state.ui.isToggleFooter,
            cartList: state.detail.cartmessages
        }
    }


@withRouter
@connect(mapStateToProps)
export default class AppHeader extends Component {
    constructor(){
        super()
        this.state = {
            amount: 0
        }
        this.onLeftClick = this.onLeftClick.bind(this);
        this.handleCartClick = this.handleCartClick.bind(this);
    }
    componentDidMount(){
        
    }
    handleCartClick(){
        this.props.history.push('/cart')
    }
    onLeftClick(){
        if (this.props.isShowLeft) {
            return;
        }
        this.props.history.goBack();
    }
    render() {
        const { cartList } = this.props;
        let amount = 0;
        if(cartList.length > 0){
            cartList.map((curr) => {
                amount += curr.count 
                return amount
            })
        }
        return (
            <NavBar
                mode="light"
                onLeftClick={ this.onLeftClick }
                leftContent={
                    this.props.isShowLeft
                    ?
                    <img src={logo} key='2' alt=''/>
                    :
                    <Icon type="left" key="3" color='#c81c28'/>
                }
                rightContent={
                    this.props.isShowLeft
                    ?
                    <HeaderPopover key='2'/>
                    : 
                    [
                        (cartList.length > 0
                        ? 
                        <Badge 
                            text={amount} 
                            overflowCount={20} 
                            size='small' 
                            key='1'  
                            onClick={this.handleCartClick}>
                            <IconFont type='cart' key='7'/>
                        </Badge>
                        :
                        <IconFont type='cart' key='8'/>
                        )
                        ,
                        <HeaderPopover key='6'/>                   
                    ]
                }
            >
                { this.props.title }
            </NavBar>
        )
    }
}


