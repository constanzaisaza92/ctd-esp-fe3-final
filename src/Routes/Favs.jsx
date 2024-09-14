import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const [{ theme }] = useContextGlobal();
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    const favs = localStorage.getItem("favs");
    setFavs(favs ? JSON.parse(favs) : []);
  }, []);

  return (
    <main className={theme}>
      <h1 className="title">Dentists Favs</h1>
      <div className="card-grid">
        {favs?.map(fav => <Card key={fav.id} {...fav} />)}
      </div>
    </main>
  );
};

export default Favs;
