import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


function Navbar() {

    const cart = useSelector((state) => state.cart);  // Sepet bilgilerini al

    // Sepetteki toplam ürün sayısını hesapla
    const itemCount = Object.values(cart.items).reduce((total, item) => total + item.quantity, 0);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/home">VeynKeys</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/ShopPage">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/BlogPage">Blogs</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link active" to="/AboutUsPage">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/ContactUs">Contact Us</Link>
                            </li></ul>
                        <div className='d-flex'>
                            <Link className="nav-link active" to="/CartPage">
                                <div className="blockcart ">
                                    <img src="assets/images/cart/cart.png" alt="" className="img-fluid" />
                                    <span className="count">{itemCount}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar