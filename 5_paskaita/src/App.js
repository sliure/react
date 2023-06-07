// Sukurkite šiuos komponentus:
// Posts;
// Post;
// Pagrindiniame komponente (App.js), turi būti randamas <Posts/>, komponentas, kuris savyje laikys <Post/> komponentą. kuris atvaizduos duomenis (props: title ir body). <Posts/> komponentas, informaciją pasiims iš čia:
// URI https://jsonplaceholder.typicode.com/posts
// Būtina naudoti: useState, useEffect

import Posts from "./components/Posts/Posts";
import Photos from "./components/Photos/Photos";

const App = () => {
  return (
    <div>
      <Photos />
    </div>
  );
};

export default App;
