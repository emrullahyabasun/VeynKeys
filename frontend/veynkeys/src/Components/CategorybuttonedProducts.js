import React from 'react'

function CategorybuttonedProducts() {
    return (
        <>
            {/* =================Category Product Area Start =====================*/}
            <div className="product-category-area" style={{marginTop:150}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-tabs category-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" id="four-tab" data-bs-toggle="tab" href="#four">
                                        <span><img src="assets/images/category/thumb-1.png" alt="" className="img-fluid" /></span>
                                        <span>Computer - Laptop</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="five-tab" data-bs-toggle="tab" href="#five">
                                        <span><img src="assets/images/category/thumb-2.png" alt="" className="img-fluid" /></span>
                                        <span>Electronics</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="six-tab" data-bs-toggle="tab" href="#six">
                                        <span><img src="assets/images/category/thumb-3.png" alt="" className="img-fluid" /></span>
                                        <span>Toys &amp; Hobbies</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="seven-tab" data-bs-toggle="tab" href="#seven">
                                        <span><img src="assets/images/category/thumb-4.png" alt="" className="img-fluid" /></span>
                                        <span>Sports &amp; Outdores</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="eight-tab" data-bs-toggle="tab" href="#eight">
                                        <span><img src="assets/images/category/thumb-5.png" alt="" className="img-fluid" /></span>
                                        <span>Smartphone &amp; Tablets</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="nine-tab" data-bs-toggle="tab" href="#nine">
                                        <span><img src="assets/images/category/thumb-6.png" alt="" className="img-fluid" /></span>
                                        <span>Health &amp; Beauty</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="product-thing-tab slick-custom-default tab-pane fade show active" id="four">
                                    {/* Single-Product-Start */}
                                    <div className="item-product">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/images/product/product-1.jpg" alt="" className="img-fluid" />
                                            </a>
                                            <div className="box-label">
                                                <div className="label-product-new">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="action-link">
                                                <a className="quick-view same-link" href="#" title="Quick view" data-bs-toggle="modal" data-bs-target="#modal_box" data-original-title="quick view"><i className="zmdi zmdi-eye zmdi-hc-fw" /></a>
                                                <a className="compare-add same-link" href="compare.html" title="Add to compare"><i className="zmdi zmdi-refresh-alt" /></a>
                                                <a className="wishlist-add same-link" href="wishlist.html" title="Add to wishlist"><i className="zmdi zmdi-favorite-outline zmdi-hc-fw" /></a>
                                            </div>
                                        </div>
                                        <div className="product-caption">
                                            <div className="product-name">
                                                <a href="product-details.html">Natus erro at congue massa commodo sit dignissim</a>
                                            </div>
                                            <div className="rating">
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="regular-price">$30.00</span>
                                            </div>
                                            <div className="cart">
                                                <div className="add-to-cart">
                                                    <a className="cart-plus" href="shopping-cart.html" title="Add to cart"><i className="zmdi zmdi-shopping-cart-plus zmdi-hc-fw" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single-Product-End */}
                                    {/* Single-Product-Start */}
                                    <div className="item-product">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/images/product/product-2.jpg" alt="" className="img-fluid" />
                                            </a>
                                            <div className="box-label">
                                                <div className="label-product-new">
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className="action-link">
                                                <a className="quick-view same-link" href="#" title="Quick view" data-bs-toggle="modal" data-bs-target="#modal_box" data-original-title="quick view"><i className="zmdi zmdi-eye zmdi-hc-fw" /></a>
                                                <a className="compare-add same-link" href="compare.html" title="Add to compare"><i className="zmdi zmdi-refresh-alt" /></a>
                                                <a className="wishlist-add same-link" href="wishlist.html" title="Add to wishlist"><i className="zmdi zmdi-favorite-outline zmdi-hc-fw" /></a>
                                            </div>
                                        </div>
                                        <div className="product-caption">
                                            <div className="product-name">
                                                <a href="product-details.html">Mirum est notare tellus eu nibh iaculis pretium</a>
                                            </div>
                                            <div className="rating">
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="regular-price">$30.00</span>
                                            </div>
                                            <div className="cart">
                                                <div className="add-to-cart">
                                                    <a className="cart-plus" href="shopping-cart.html" title="Add to cart"><i className="zmdi zmdi-shopping-cart-plus zmdi-hc-fw" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single-Product-End */}
                                    {/* Single-Product-Start */}
                                    <div className="item-product">
                                        <div className="product-thumb">
                                            <a href="product-details.html">
                                                <img src="assets/images/product/product-3.jpg" alt="" className="img-fluid" />
                                            </a>
                                            <div className="action-link">
                                                <a className="quick-view same-link" href="#" title="Quick view" data-bs-toggle="modal" data-bs-target="#modal_box" data-original-title="quick view"><i className="zmdi zmdi-eye zmdi-hc-fw" /></a>
                                                <a className="compare-add same-link" href="compare.html" title="Add to compare"><i className="zmdi zmdi-refresh-alt" /></a>
                                                <a className="wishlist-add same-link" href="wishlist.html" title="Add to wishlist"><i className="zmdi zmdi-favorite-outline zmdi-hc-fw" /></a>
                                            </div>
                                        </div>
                                        <div className="product-caption">
                                            <div className="product-name">
                                                <a href="#">Porro quisquam eget feugiat pretium sodales</a>
                                            </div>
                                            <div className="rating">
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                                <span className="yellow"><i className="fa fa-star" /></span>
                                            </div>
                                            <div className="price-box">
                                                <span className="regular-price">$50.67</span>
                                                <span className="old-price"><del>$55.50</del></span>
                                            </div>
                                            <div className="cart">
                                                <div className="add-to-cart">
                                                    <a href="shopping-cart.html" title="Add to cart"><i className="zmdi zmdi-shopping-cart-plus zmdi-hc-fw" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Single-Product-End */}
                                  
                                </div>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================
    Product Area End
    =====================*/}
        </>

    )
}

export default CategorybuttonedProducts