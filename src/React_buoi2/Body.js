import React, { Component } from 'react'



import styles from './body.module.css'
import GlassesItem from './GlassesItem'
import ItemDetail from './ItemDetail'



export default class Body extends Component {

    ListGlass = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    renderListGlass = () => {
        const html = this.ListGlass.map((item, index) => {

            return (

                <GlassesItem prod={item} changeImageGlass={this.changeImageGlass} />

            )
        })
        return html;
    }

    state = {
        imgSelected: null,
    }
    changeImageGlass = (data) => {
        this.setState({
            imgSelected: data,
        })

    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.imgModel} style={{ textAlign: "center" }}>
                    <img src="./glassesImage/model.jpg" width={"40%"}  ></img>
                    {this.state.imgSelected ? <ItemDetail selectItem={this.state.imgSelected} /> : null}
                    {this.state.imgSelected && <img className={styles.change} src={this.state.imgSelected.url} width="20%"></img>}

                </div>
                <div className={styles.groupimg}>
                    {this.renderListGlass()}
                </div>
            </div >
        )
    }
}
