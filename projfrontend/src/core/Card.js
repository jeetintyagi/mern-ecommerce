import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import addItemToCart from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";

const Card = ({ product, addToCart = true, removeFromCart = false }) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    const cartTitle = product ? product.name : "Photo Unavailable";
    const cartDescription = product
        ? product.description
        : "No description provided by the seller";
    const cartPrice = product ? product.price : "Null";

    const AddToCart = () => {
        addItemToCart(product, () => setRedirect(true));
    };

    const getARedirect = ({ redirect }) => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showaddToCart = (addToCart) => {
        return (
            addToCart && (
                <button
                    onClick={AddToCart}
                    className="btn btn-block btn-outline-success rounded mt-2 mb-2"
                >
                    Add to Cart
                </button>
            )
        );
    };
    const showRemoveFromCart = (removeFromCart) => {
        return (
            removeFromCart && (
                <button
                    onClick={() => {}}
                    className="btn btn-block btn-outline-danger rounded mt-2 mb-2"
                >
                    Remove from cart
                </button>
            )
        );
    };

    return (
        <div className="card text-white">
            <div className="card-header lead bg alert-dark">{cartTitle}</div>
            <div className="card-body">
                {getARedirect(redirect)}
                <div className="rounded p-2" >
                    <ImageHelper product={product} />
                </div>
                <p className="lead bg-dark font-weight-normal text-wrap">
                    {cartDescription}
                </p>
                <p className="btn btn-info rounded  btn-sm px-4">
                    ₹ {cartPrice}
                </p>
                <ul class="list-group list-group-flush">
                    {/* <li class="list-group-item bg-dark">Cras justo odio</li>
                    <li class="list-group-item bg-dark">Dapibus ac facilisis in</li>
                    <li class="list-group-item bg-dark">Vestibulum at eros</li> */}
                </ul>

                <div className="row">
                    <div className="col-12">{showaddToCart(addToCart)}</div>
                    <div className="col-12">
                        {showRemoveFromCart(removeFromCart)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
