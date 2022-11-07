import React, { Component } from 'react'

import styles from "./GlassesItem.module.css"
export default class GlassesItem extends Component {
    render() {
        const item = this.props.prod;
        return (

            <div className={styles.item} >
                <img onClick={() => { this.props.changeImageGlass(item) }} src={item.url} alt="img" width="100%"></img>

            </div>

        )
    }
}
