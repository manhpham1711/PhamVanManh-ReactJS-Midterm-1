import React, { Component } from 'react';


class ProductItem extends Component {
    
    format_price(money) {
        return money.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    showOldPrice(){
        var oldPrice = this.props.item.priceOld;
        if(oldPrice != 0){
            return  (<span className ="col-sm-6">
                        <strike><h3> {this.format_price( this.props.item.priceOld)}đ</h3></strike>
                    </span>)
        }
    }
  render(){
      let {onItemClick} = this.props;
    return (
        <div className ="col-sm-4">
            <div className="thumbnail">
                <img data-src="#" src ={this.props.item.img} alt="Name" />
                <div className="caption">
                    <h3>{this.props.item.name}</h3>
                    <div className = "row"> 
                        <span className ="col-sm-6">
                            <h3>{this.format_price(this.props.item.price)} <span style = {{color: "red",}}>đ</span></h3>
                        </span>
                        {this.showOldPrice()}
                    </div>
                    <button onClick = {onItemClick} className="btn btn-danger">Buy </button>
                </div>
            </div>
        </div>
    );
  }
}

export default ProductItem;