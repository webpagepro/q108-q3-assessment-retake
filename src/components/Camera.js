import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, Button } from 'reactstrap'

class Camera extends Component {

    _onClickAddToCart = (e) =>{
        //alert("Add To Cart Button")
        e.preventDefault();
       this.props.addCameraToCart(this.props.camera.id)
    }

    render() {

       
        return (
          
                <Card style={{ width: "100%", height: "100%", borderStyle: "none" }}>

                    <CardBody>
                        <CardTitle className="title">Camera Name: {this.props.camera.name}</CardTitle>
                        <CardImg src={this.props.camera.picture} alt={this.props.camera.name} />
                        <CardText className="price">Price:&nbsp;${this.props.camera.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</CardText>
                        <CardText className="rating">Rating:&nbsp;{this.props.camera.rating} out of 4</CardText>
                        <CardTitle className="onSale">{`${this.props.camera.onSale ? '***On Sale***' : ''}`}</CardTitle>
                        <Button onClick={this._onClickAddToCart}>Add To Cart {this.props.camera.id}</Button>
                    </CardBody>

                </Card>

        );
    }
}

export default Camera;