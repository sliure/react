import "./App.css";
import FuncButton from "./components/FuncButton";
import FuncDiv from "./components/FuncDiv";
import ClassButton from "./components/ClassButton";
import ClassDiv from "./components/ClassDiv";
import Greetings from "./components/Greeting";
import Cards from "./components/Cards";
import Avatar from "./components/Avatar";

function App() {
  return (
    <div>
      <div>
        <FuncButton title="Press me!" />
        <FuncDiv />
      </div>
      <div>
        <ClassButton title="Please press me!" />
        <ClassDiv />
      </div>
      <div>
        <Greetings />
        <Greetings name="Kamile" />
      </div>
      <div className="container">
        <Cards
          imageUrl={"https://a-z-animals.com/media/green-anole-2.jpg"}
          title="Lizard"
          subtitle="
          Lizards are a diverse group of reptiles characterized by their scaly skin, elongated bodies, and ability to adapt to a wide range of habitats."
        />
        <Cards
          imageUrl={
            "https://s1.15min.lt/static/cache/MTkyMHgxMDgwLCw2MTY2NTMsb3JpZ2luYWwsLGlkPTU2MTUzOCZkYXRlPTIwMTIlMkYwOSUyRjE4LDIxNDY3MTE0MzU=/panda-50581b69046f4.jpg"
          }
          title="Panda"
          subtitle="The panda is a beloved and iconic animal known for its adorable appearance and unique black-and-white markings."
        />
      </div>
      <div className="avatar">
        <Avatar name="Kamile" surname="Toleikyte" />
        <Avatar name="Tadas" surname="Koverkis" />
        <Avatar name="Iveta" surname="Ivetaite" />
      </div>
    </div>
  );
}

export default App;
