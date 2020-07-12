import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
    const imageurl = product
        ? `${API}/product/photo/${product._id}`
        : `https://www.freepik.com/free-vector/flat-design-image-upload-landing-page_5402993.htm#page=1&query=image&position=15`;
    return (
        <img
            src={imageurl}
            alt={imageurl}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="mb-3 top-rounded"
        />
    );
};

export default ImageHelper;
