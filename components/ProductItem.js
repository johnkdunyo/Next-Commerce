import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { Store } from "../utils/Store";

const ProductItem = ({ product }) => {
  const { state, dispatch } = useContext(Store);
  return (
    <React.Fragment>
      <div className="card">
        <Link href={`/products/${product.id}`}>
          <a>
            <Image
              src={product.image}
              className="rounded shadow"
              alt={product.name}
              width="200"
              height="200"
            />
          </a>
        </Link>

        <div className="flex flex-col items-center justify-center p-5">
          <Link href={`/products/${product.id}`}>
            <a>
              <h2 className="text-lg">{product.name}</h2>
            </a>
          </Link>
          <p className="mb-2">{product.brand}</p>
          <p className="mb-2">${product.price}</p>
          <button
            className="primary-button"
            type="button"
            onClick={() =>
              dispatch({
                type: "CART_ADD_ITEM",
                payload: { ...product, quantity: 1 },
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductItem;
