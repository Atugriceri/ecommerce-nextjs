import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {
  const { items, removeFromCart } = useCart();
  return (
    <header className="border-bottom border-2">
      <div className="container">
        <div className="row py-3 justify-content-between align-items-center">
          <div className="col d-flex align-items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Morhipo logo"
                title="Morhipo"
                width={113}
                height={34}
              />
            </Link>
          </div>
          <div className="col d-flex justify-content-end position-relative">
            <div className="dropdown">
              <button
                className="dropdown-btn"
                type="button"
                id="dropdownMenuClickable"
                data-bs-toggle="dropdown"
                data-bs-auto-close="false"
                aria-expanded="false"
              >
                <i className="bi bi-bag"></i>
                <span className="count-badge rounded-circle px-1">
                  {items.length}
                </span>
                Sepetim
              </button>
              <ul
                className="dropdown-menu dropdown-menu-light"
                onClick={(event) => event.stopPropagation()}
              >
                {items.length < 1 && (
                  <li>
                    <div className="dropdown-header">
                      <span>Sepetim, {items.length} ürün</span>
                    </div>
                    <div className="dropdown-box">
                      <span>Sepetinizde ürün bulunmamaktadır.</span>
                    </div>
                  </li>
                )}
                {items.length > 0 && (
                  <>
                    <li>
                      <div className="dropdown-header">
                        <span>Sepetim, {items.length} ürün</span>
                      </div>
                    </li>
                    {items.map((item) => {
                      return (
                        <>
                          <li className="d-flex" key={item.ListingId}>
                            {item.deleted && (
                              <span className="animation-delete">
                                Ürün sepetinizden çıkarıldı.
                              </span>
                            )}
                            {!item.deleted && (
                              <div className="dropdown-item">
                                <div className="row">
                                  <div className="col-4">
                                    <img
                                      src={item.PictureUrl}
                                      className="card-img-top rounded-4"
                                      alt={item.FriendlyUrlName}
                                    />
                                  </div>
                                  <div className="col-6 d-flex flex-column">
                                    <span className="brand">{item.ProductBrand}</span>
                                    <span className="product-title text-truncate">{item.ModelName}</span>
                                    <span className="productInfo">{item.Color} {item.StockQuantity} Adet</span>
                                    <span className="prev-price text-decoration-line-through mt-auto">{item.StickerPrice}</span>
                                    <span className="current-price text-danger">{item.DiscountPrice}</span>
                                  </div>
                                  <div className="col-2">
                                    <button
                                      className="deleteBtn"
                                      onClick={() =>
                                        removeFromCart(item.ListingId)
                                      }
                                    >
                                      <i className="bi bi-trash"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </li>
                        </>
                      );
                    })}
                  </>
                )}
                <li className="px-3">
                  <button className="primary-btn rounded-2 my-2 py-2">
                    Sepete Git
                  </button>
                  <button className="primary-outline-btn rounded-2 my-2 py-2">
                    Siparişi Tamamla
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
