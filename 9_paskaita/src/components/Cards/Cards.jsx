import { useState, useEffect } from "react";
import Card from "../Card/Card";
import LoadScreen from "../LoadScreen/LoadScreen";

const Cards = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me/")
      .then((resp) => resp.json())
      .then((response) => {
        setPhotos(response);
        setLoading(false); // Data is ready, set loading to false
      })
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    const updatedPhotos = photos.filter((photo) => photo.id !== id);
    setPhotos(updatedPhotos);
  };

  return (
    <div>
      {loading ? (
        <LoadScreen />
      ) : (
        photos.map((photo) => (
          <Card
            key={photo.id}
            id={photo.id}
            url={photo.image}
            title={photo.title}
            price={photo.price}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default Cards;


