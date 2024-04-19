import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./Components/Landing";
import Latest from "./pages/Latest";
import Saved from './pages/Saved';
import Notification from "./pages/Notification";
import Carts from "./pages/Carts";
import MyLearning from "./pages/MyLearning";
import Trending from "./pages/Trending";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/carts" element={<Carts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
