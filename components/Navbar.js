import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {
  const { items, removeFromCart, loading } = useCart();
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
                type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false"
              >
                <i className="bi bi-bag"></i>
                <span className="count-badge rounded-circle px-1">
                  {items.length}
                </span>
                Sepetim
              </button>
              <ul
                className="dropdown-menu dropdown-menu-light"   
                onClick={event => event.stopPropagation()}             
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
                          <li>
                            {!loading && "Ürün sepetinizden çıkarıldı."}
                            <div className="dropdown-item">
                              <img
                                src={item.PictureUrl}
                                className="card-img-top rounded-top-5"
                                alt={item.FriendlyUrlName}
                              />
                              <button onClick={() => removeFromCart(item.ListingId)} >
                                <i class="bi bi-trash"></i>
                              </button>
                            </div>
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
