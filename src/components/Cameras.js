import React, { Component } from 'react';
import Camera from './Camera'
import {Col, Input } from 'reactstrap'

class Cameras extends Component {
    state={
        filtered:''
    }

    _onChangeFilter = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
        console.log("Cameras - onChange", name, value)
    }

    render() {
        console.log("List ", this)


        let camerasList = this.props.cameras
        .filter(camera => camera.name.includes(this.state.filtered.charAt(0).toUpperCase()))
        .map(camera => <Camera key={camera.id} camera={camera}
        addCameraToCart={this.props.addCameraToCart}
        />)

    

        return (
            <div>
            <div className="filter-container">
          <Input className="filter"
            name="filtered"
            onChange={this._onChangeFilter}
            value={this.state.filtered}
            placeholder="Filter what you're looking for here"
          />
          </div>
           <Col className="left-column">
            
                    
                    {camerasList}
                </Col>
                
            </div>
        );
    }
}

export default Cameras;