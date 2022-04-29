import React from "react";
import { useProduct } from "../contexts/ProductContext";
import { useCart } from "../contexts/CartContext";

const ProductCard = () => {
  const { products, loading } = useProduct();
  const { addToCart, items } = useCart();
  return (
    <div className="container p-0 my-4">
      <div className="row row-cols-2 row-cols-md-4 g-md-2 px-0 mx-0">
        {!loading &&
          products.map((item) => {
            const findCartItem = items.find(
              (cart_item) => cart_item.ListingId === item.ListingId
            );
            return (
              <div key={item.ListingId} className="col mb-5 position-relative">
                {item.IsQuickCargo && (
                  <div className="bdg rounded-3 quick-cargo position-absolute">
                    Hızlı Gönderi
                  </div>
                )}
                {
                  /* item.AppliedDiscountRules[0]?.IsCargoFree && */ <div className="bdg cargo-free position-absolute rounded-3">
                    Kargo Bedava
                  </div>
                }
                {item.StockQuantity < 6 && (
                  <div className="bdg stock position-absolute rounded-3">
                    Son {item.StockQuantity}
                  </div>
                )}
                <div className="rate position-absolute rounded-3">
                  <i class="bi bi-star-fill"></i>
                  {parseFloat(item.PointAverage).toFixed(2)}
                </div>
                <div className="favorite-button position-absolute">
                  <button className="rounded-circle border-0">
                    <i class="bi bi-suit-heart"></i>
                  </button>
                </div>
                <div>
                  <div className="position-relative">
                    <img
                      src={item.PictureUrl}
                      className="card-img-top rounded-top-5"
                      alt={item.FriendlyUrlName}
                    />
                    <div className="add-to-cart-overlay position-absolute">
                      <button
                        className="add-to-cart-btn rounded-3"
                        onClick={() => addToCart(item, findCartItem)}
                      >
                        {!findCartItem ? "Sepete Ekle" : "Sepetten Çıkar"}
                      </button>
                    </div>
                  </div>

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
