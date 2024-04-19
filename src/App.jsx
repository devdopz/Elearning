import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./components/Landing";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Latest from "./pages/Latest";
import MyLearning from "./pages/MyLearning";
import Notifications from "./pages/Notifications";
import Trending from "./pages/Trending";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
