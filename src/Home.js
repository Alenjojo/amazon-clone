import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase.js";

function Home() {
  const [items, setItems] = useState([]);
  const [banners, setBanner] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    if (user) {
      getItems();
      getBanner();
    } else {
      setItems([]);
      setBanner([]);
    }
  }, [user]);

  const getItems = () => {
    const itemRef = collection(db, "items");
    getDocs(query(itemRef, orderBy("price", "asc"))).then((snapshot) =>
      setItems(
        snapshot.docs.map((doc) => ({
          data: doc.data(),
        }))
      )
    );
  };

  const getBanner = () => {
    const bannerRef = collection(db, "banner");
    getDocs(bannerRef).then((snapshot) =>
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
