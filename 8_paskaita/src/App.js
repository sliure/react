import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Photos from "./components/Photos/Photos";

const App = () => {
  return (
    <div>
      <Hero
        title={"Hello"}
        text={"text"}
        button={"Press me!"}
        image={
          "https://learn.canva.com/wp-content/uploads/2019/06/The-power-of-hero-image-design-featured-image.jpg"
        }
      />

      <div>
        <Portfolio title={"Portfolio"} descripcion={"Lorem lorem"} />
        <Photos
          text={"Something"}
          image={
            "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          }
        />
      </div>
    </div>
  );
};

export default App;
