import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = event =>{
    event.preventDefault();
    let favs = localStorage.getItem("favs");
    favs = favs ? JSON.parse(favs) : [];
    if (!favs.find(fav => fav.id === id)) {
      localStorage.setItem("favs", JSON.stringify([...favs, { name, username, id }]));
    }
  }

  return (
    <Link to={`/dentista/${id}`}>
      <div className="card">
        <img src="/images/doctor.jpg" />
          <p className="name">{name}</p>
          <p className="username">{username}</p>
          <button onClick={addFav} className="favButton">⭐</button>
      </div>
    </Link>
  );
};

export default Card;
