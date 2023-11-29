import Accordtion from "./components/Accordtion";
import { Data } from "../src/components/Content";
import "./style.css";

function App() {
  return (
    <div>
      <div className="accordion">
        {Data.map(({ title, content }) => {
          return (
            <Accordtion
              title={title}
              content={content}
              key={Math.random() * 1000}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
