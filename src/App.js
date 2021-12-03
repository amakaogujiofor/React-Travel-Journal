import "./App.css";
import Header from "./Header";
import Blog from "./Blog";
import Data from "./Data";

function App() {
  console.log(Data);
  const Posts = Data.map((data) => {
    return <Blog key={data.id} {...data} />;
  });
  return (
    <div className="app">
      <Header />
      {Posts}
    </div>
  );
}

export default App;
