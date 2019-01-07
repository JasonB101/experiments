import React from "react";
import styles from "./styles/Products.module.css"

const Products = () => (
    <div className={["centered", styles.products].join(" ")}>
    <img className={styles['product-img']} alt="An Example" src="https://previews.123rf.com/images/fordzolo/fordzolo1506/fordzolo150600296/41026708-example-white-stamp-text-on-red-backgroud.jpg"></img>
    <img className={styles['product-img']} alt="An Example" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Example.svg/1024px-Example.svg.png"></img>
    <img className={styles['product-img']} alt="An Example" src="https://previews.123rf.com/images/burakowski/burakowski1202/burakowski120200227/12222018-example-rubber-stamp.jpg"></img>
    <img className={styles['product-img']} alt="An Example" src="https://cdn.xl.thumbs.canstockphoto.com/example-red-3d-square-button-isolated-on-white-background-stock-illustrations_csp22789272.jpg"></img>
</div>
)

export default Products;