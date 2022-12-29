import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="http://techslides.com/demos/sample-videos/small.mp4"
          channel="abzazuet"
          description="Yoooooo"
          song="99 problems"
          likes={12}
          shares={134}
          messages={122}
        />
        <Video
          url="http://techslides.com/demos/sample-videos/small.mp4"
          channel="abzazuet"
          description="Yoooooo"
          song="99 problems"
          likes={12}
          shares={134}
          messages={122}
        />
      </div>
    </div>
  );
}

export default App;
