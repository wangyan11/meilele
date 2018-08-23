import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom'
import { Carousel } from 'antd-mobile'


@withRouter
export default class DetailCarousel extends Component {
  state = {
    data: ['1', '2', '3'],
    indexImage: 1
  }
    
  componentDidMount() {
    this.setState({
      data: this.props.images
    })
        
  }
  render(){
    return (
      <div>
        {
          this.props.images
          &&
          (<Fragment>
            <Carousel
              autoplay={false}
              infinite
              dots={false}
              // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => {this.setState({
                indexImage: index+1
              })}}
            >
              {this.props.images.map(item => {
                return (
                  <a key={item.id} className='carousel-style'>
                    <img
                      src={item.imgitem}
                      alt=""
                      onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                      }}
                    />
                  </a>
                )
              })}
            
          </Carousel>         
          <div className='indexImage'>
            {this.state.indexImage}/{this.props.images.length}
          </div>    
        </Fragment>
        )
      }
    </div>
    )
  }
}