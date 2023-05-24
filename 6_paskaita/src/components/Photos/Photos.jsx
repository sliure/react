//Sukurkite aplikaciją kuri ištraukia duomenis iš https://jsonplaceholder.typicode.com/photos ir atvaizduoja ją Photo.jsx komponente. Photo komponentas turi turėsi imageUrl ir title parametrus
import { useEffect, useState } from "react";
import Photo from "../Photo/Photo";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const photosExists = photos.length > 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((response) => {
        // Kai yra atnaujinamas state, kodas rerenderinas ir nuskaitomas iš naujo
        setPhotos(response);
      })
      .catch((error) => console.error(error));
    // useEffect hooksas, be dependency array kviečiamas kiekvieną render ciklą
    // useEffect hooksas, su tuščiu dependency array yra paleidžiamas tik vieną kartą
  }, []);

  console.log(photos.length > 1 ? photos[0].title : "");

  return (
    <div className="posts">
      <Photo title="Test" url="Hello world" />
      {photosExists && (
        <>
          <Photo title={photos[0].title} url={photos[0].url} />
          <Photo title={photos[1].title} url={photos[1].url} />
        </>
      )}
    </div>
  );
};

export default Photos;