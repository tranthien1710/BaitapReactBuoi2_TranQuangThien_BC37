import React from 'react'
import Banner from './Banner'
import Item from './Item'
import './Body.css'
class Body extends React.Component {
    render() {
        return (
            <div className="container">
                <Banner />
                <div className="group-body">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        )
    }
}

export default Body;