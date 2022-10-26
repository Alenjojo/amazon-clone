import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";

function Home() {
  const [items, setItems] = useState([]);
  const [banners, setBanner] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    // db.collection("items").doc().set(
    //   {
    //     name: "Acer Predator X35 1800R Curved 35 Inch UltraWide QHD Gaming Monitor I G-SYNC Ultimate I Quantum Dot I 200Hz",
    //     price: "89999",
    //     rating: "5",
    //     img: "https://m.media-amazon.com/images/I/61PG4UvgJxS._AC_UL480_QL65_.jpg",
    //   },
    //   []
    // );
    if (user) {
      getItems();
      getBanner();
    } else {
      setItems([]);
      setBanner([]);
    }
  }, [user]);

  const getItems = () => {
    db.collection("items")
      .orderBy("price", "asc")
      .onSnapshot((snapshot) =>
        setItems(
          snapshot.docs.map((doc) => ({
            data: doc.data(),
          }))
        )
      );
  };

  const getBanner = () => {
    db.collection("banner").onSnapshot((snapshot) =>
      setBanner(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      )
    );
  };

  return (
    <div className="home">
      <div className="home_container">
        {banners?.map((banner) => (
          <img className="home_image" src={banner.data.img} alt="" />
        ))}

        <div className="home_row">
          {items?.slice(0, 2).map((item) => (
            <Product
              id={item.data.id}
              title={item.data.name}
              price={item.data.price}
              image={item.data.img}
              rating={item.data.rating}
            />
          ))}
        </div>
        <div className="home_row">
          {items?.slice(2, 5).map((item) => (
            <Product
              id={item.data.id}
              title={item.data.name}
              price={item.data.price}
              image={item.data.img}
              rating={item.data.rating}
            />
          ))}
        </div>
        <div className="home_row">
          {items?.slice(5, 6).map((item) => (
            <Product
              id={item.data.id}
              title={item.data.name}
              price={item.data.price}
              image={item.data.img}
              rating={item.data.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
