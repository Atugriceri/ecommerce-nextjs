import React from "react";
import { useProduct } from "../contexts/ProductContext";

const ProductCard = () => {
  const { products, loading } = useProduct();
  console.log(products);
  return (
    <div className="container p-0 my-4">
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {!loading &&
          products.map((item, key) => {
            return (
              <div className="col position-relative">
                <div>
                  <img
                    src={item.PictureUrl}
                    class="card-img-top rounded-top-5"
                    alt={item.FriendlyUrlName}
                  />
                  <div className="card-body">
                    <h6 className="brand">
                      {item.ProductBrand}
                      <span className="product-title"> {item.ModelName}</span>
                    </h6>
                    <div className="row">
                      <div className="col-2">
                        <div className="discountBadge py-2 px-1 rounded-3">
                          %{item.AppliedDiscountRules[0]?.Rate}
                        </div>
                      </div>
                      <div className="col-10">
                        <div className="d-inline-block px-3">
                          <div className="d-block prev-price text-decoration-line-through">
                            {item.AppliedDiscountRules[0]?.PreviousPrice} TL
                          </div>
                          <div className="d-block current-price">
                            {item.AppliedDiscountRules[0]?.Price} TL
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductCard;
