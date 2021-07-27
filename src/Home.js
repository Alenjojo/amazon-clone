import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/launches21/1500x600_shop-now._CB663404287_.jpg"
                    alt="" />

                <div className="home_row">
                    <Product
                        id={0}
                        title='Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Black)'
                        price={15.92}
                        image="https://m.media-amazon.com/images/I/61-DjUz7JxL._AC_UY327_QL65_.jpg"
                        rating={3}
                    />
                    <Product
                        id={1}
                        title='ASUS ROG Strix G17 (2021), 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7 5800H, GeForce RTX 3050 4GB Graphics, Gaming Laptop (8GB/1TB SSD/Windows 10/Original Black/2.4 Kg), G713QC-HX052T'
                        price={499.19}
                        image="https://m.media-amazon.com/images/I/71fkB1F3cVL._AC_UY327_QL65_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={2}
                        title='Fitbit Inspire HR Health and Fitness Tracker with Heart Rate (Black)'
                        price={12.99}
                        image="https://m.media-amazon.com/images/I/61fPdr7lutL._AC_UY327_QL65_.jpg"
                        rating={4}
                    />
                    <Product
                        id={3}
                        title='Surf Excel Matic Front Load Liquid Detergent Refill Pouch -Super Saver Pack
                         Designed For 100% Tough Stain Removal In Front load Machines, 2 L'
                        price={22.70}
                        image="https://m.media-amazon.com/images/I/71AfKPJFjoL._AC_UL480_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id={4}
                        title='Quaker Oats Pouch, 1000 g'
                        price={32.9}
                        image="https://m.media-amazon.com/images/I/71JRvM2PITL._AC_UL480_QL65_.jpg"
                        rating={2}
                    />
                </div>
                <div className="home_row">
                    <Product
                        id={5}
                        title='Acer Predator X35 1800R Curved 35 Inch UltraWide QHD Gaming Monitor I G-SYNC Ultimate
                         I Quantum Dot I 200Hz I VESA Display HDR 1000 I Adjustable Stand I Display Port, HDMI Port & USB 3.0 HUB '
                        price={72.40}
                        image="https://m.media-amazon.com/images/I/61PG4UvgJxS._AC_UL480_QL65_.jpg"
                        rating={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
