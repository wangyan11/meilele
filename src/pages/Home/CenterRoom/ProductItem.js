import React from 'react';
class ProductItem extends React.Component{
    render() {
        console.log(this.props)
        const {
            id,
            img,
            tilte,
            price
        } = this.props;
        return (
            <div className="room-room">
               <div className='room-img'>
                 <img src={img}/>
               </div>
               <div className='room-imgs_img'>
                <img src={img}/>
                <div className='room-imgs_tilte'>{tilte}</div>
                <div className='room_imgs_price'>{price}</div>      
            </div>
             </div>
        )
    }
}

export default ProductItem