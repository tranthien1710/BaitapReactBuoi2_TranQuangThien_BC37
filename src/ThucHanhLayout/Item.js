import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Item.css'
class Item extends React.Component {
    render() {
        return (
            <div className="group-item">
                <div className="item-top">500 x 325</div>
                <div className="item-mid">
                    <h3>Card title</h3>
                    <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                </div>
                <div className="item-bottom"><button className="btn btn-primary">Find out More!</button></div>
            </div>
        )
    }
}

export default Item;
