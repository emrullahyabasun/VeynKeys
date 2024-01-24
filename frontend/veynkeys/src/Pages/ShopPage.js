import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Slices/productsSlice';
import { addToCart } from '../Slices/cartSlice';

function ShopPage() {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const productStatus = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, productStatus]);

    // İçerik yükleme durumuna göre render edilecek
    if (productStatus === 'loading') {
        return <div>Loading...</div>;
    } else if (productStatus === 'failed') {
        return <div>Error: {error}</div>;
    }
    const displayedProducts = products.slice(0, 12);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };


    return (
        <>
            {/*======================Shop area Start==========================*/}
            <div className="shop-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <aside className="sidebar-widget mt-50">
                                <div className="shop-sidebar-category">
                                    <div className="sidebar-title">
                                        <h4 className='title-shop'><Link to="/">Home</Link></h4>
                                    </div>
                                    <div className="sidebar-title">
                                        <h4 className='title-shop'><Link to="/BlogPage">Blogs</Link></h4>
                                    </div>
                                    <div className="sidebar-title">
                                        <h4 className='title-shop'><Link to="/AboutUsPage">About Us</Link></h4>
                                    </div>
                                    <div className="sidebar-title">
                                        <h4 className='title-shop'><Link to="/ContactUs">Contact Us</Link></h4>
                                    </div>
                                </div>
                                <div className="widget_inner widget-background mt-50">
                                    <div className="widget_list widget_filter">
                                        <div className="sidebar-title">
                                            <h4 className="title-shop">Filter by Price</h4>
                                        </div>
                                        <form action="#">
                                            <div id="slider-range" />
                                            <button type="submit">Filter</button>
                                            <input type="text" name="text" id="amount" />
                                        </form>
                                    </div>
                                    <div className="widget_list widget_categories mt-20">
                                        <div className="sidebar-title">
                                            <h4 className="title-shop">Categories</h4>
                                        </div>
                                        <ul>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#">Categories1 (6)</a>
                                                <span className="checkmark" />
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#">Categories2(10)</a>
                                                <span className="checkmark" />
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#">Categories3 (4)</a>
                                                <span className="checkmark" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget_list widget_categories mt-20">
                                        <div className="sidebar-title">
                                            <h4 className="title-shop">Manufacturer</h4>
                                        </div>
                                        <ul>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#">Brake Parts(6)</a>
                                                <span className="checkmark" />
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#">Accessories (10)</a>
                                                <span className="checkmark" />
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#">Engine Parts (4)</a>
                                                <span className="checkmark" />
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#">hermes(10)</a>
                                                <span className="checkmark" />
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#">louis vuitton(8)</a>
                                                <span className="checkmark" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget_list widget_categories mt-20">
                                        <div className="sidebar-title">
                                            <h4 className="title-shop">Select by Color</h4>
                                        </div>
                                        <ul>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#">Black (6)</a>
                                                <span className="checkmark" />
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#"> Blue (8)</a>
                                                <span className="checkmark" />
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#">Brown (10)</a>
                                                <span className="checkmark" />
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#"> Green (6)</a>
                                                <span className="checkmark" />
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#">Pink (4)</a>
                                                <span className="checkmark" />
                                            </li>
                                            <li>
                                                <input type="checkbox" />
                                                <a href="#">White (2)</a>
                                                <span className="checkmark" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Shop Banner Start */}
                                <div className="single-banner text-center mt-50 mb-30">
                                    <a href="#"><img src="https://www.keychron.com/cdn/shop/files/Keycaps_898cd711-e8c2-4cb3-bd02-63e4d85afcf2.jpg?v=1699327576&width=460" alt="" className="img-fluid" /></a>
                                </div>
                                {/* Shop Banner End */}
                            </aside>
                        </div>
                        <div className="col-lg-9 order-first order-lg-last">
                            {/* Shop Banner Start */}
                            <div className="single-banner mt-50 mb-50">
                                <a href="#"><img src="https://www.keychron.com/cdn/shop/files/Keyboard-buying-guide.jpg?v=1699252459&width=1920" alt="" className="img-fluid" /></a>
                            </div>
                            {/* Shop Banner End */}

                            {/* Shop Wrapper Start */}
                            <div className="row shop-wrapper grid_3">

                                {displayedProducts.map((product) => (
                                    <div key={product.id} className="col-lg-4 col-md-4 col-sm-6 col-12 mb-20">
                                        {/* Single-Product-Start */}
                                        <div className="item-product pt-0">
                                            <div className="product-thumb">
                                                <a href={`product-details/${product.id}`}>
                                                    <img src={product.image} alt={product.title} className="img-fluid" />
                                                </a>

                                                <div className="action-link">
                                                    <a className="wishlist-add same-link" href="wishlist.html" title="Add to wishlist"><i className="zmdi zmdi-favorite-outline zmdi-hc-fw" /></a>
                                                </div>
                                            </div>
                                            <div className="product-caption">
                                                <div className="product-name">
                                                    <a href={`product-details/${product.id}`}>{product.title}</a>
                                                </div>

                                                <div className="price-box">
                                                    <span className="regular-price">${product.price}</span>

                                                </div>
                                                <div className="cart">
                                                    <button onClick={() => handleAddToCart(product)} title="Add to cart">
                                                        <i className="zmdi zmdi-shopping-cart-plus zmdi-hc-fw" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single-Product-End */}
                                    </div>))}


                            </div>
                            {/* Shop Wrapper End */}
                            {/* Pagınatıonda kullan */}
                            {/* <div className="toolbar-shop toolbar-bottom">
                                <div className="page-amount">
                                    <p>Showing 1-10 of 30 results</p>
                                </div>
                                <div className="pagination">
                                    <ul>
                                        <li className="previous"><a href="#"><i className="fa fa-angle-left" /> Previous</a></li>
                                        <li className="current">1</li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li className="next"><a href="#">Next <i className="fa fa-angle-right" /></a></li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* Pagınatıon End */}
                        </div>
                    </div>
                </div>
            </div>

            {/*======================Shop area End==========================*/}

        </>
    )
}

export default ShopPage