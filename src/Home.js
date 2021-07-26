import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primeday/PD18/AAFeedback/Bruno/1500x300_Starts_Banner_v2._CB474351192_.gif"
                    alt="" />

                <div className="home_row">
                    <Product
                        title='titl1'
                        price={2.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnyV4J9T4JWOwmAi5OYRjozpyxY6rLRY5w&usqp=CAU"
                        rating={5}
                    />
                    <Product
                        title='titl1'
                        price={2.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnyV4J9T4JWOwmAi5OYRjozpyxY6rLRY5w&usqp=CAU"
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product
                        title='titl1'
                        price={2.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnyV4J9T4JWOwmAi5OYRjozpyxY6rLRY5w&usqp=CAU"
                        rating={5}
                    />
                    <Product
                        title='titl1'
                        price={2.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnyV4J9T4JWOwmAi5OYRjozpyxY6rLRY5w&usqp=CAU"
                        rating={5}
                    />
                    <Product
                        title='titl1'
                        price={2.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnyV4J9T4JWOwmAi5OYRjozpyxY6rLRY5w&usqp=CAU"
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product
                        title='titl1'
                        price={2.99}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnyV4J9T4JWOwmAi5OYRjozpyxY6rLRY5w&usqp=CAU"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
