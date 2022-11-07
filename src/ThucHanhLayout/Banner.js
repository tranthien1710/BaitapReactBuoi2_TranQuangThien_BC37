import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './Banner.css'
class Banner extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="group-banner">
                    <h1>A warm welcome!</h1>
                    <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                    <button className="btn btn-primary">Call to action</button>
                </div>
            </div>
        )
    }
}

export default Banner;
