import React, { Component } from 'react'

import styles from "./ItemDetail.module.css"
export default class ItemDetail extends Component {
    render() {
        const item = this.props.selectItem;
        return (

            < div >
                <div className={styles.info} >
                    <p>{item.name}</p>
                    <p>{item.desc}</p>
                </div>
            </div>
        )
    }
}
