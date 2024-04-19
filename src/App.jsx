import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./Components/Landing";
import Latest from "./pages/Latest";
import Saved from './pages/Saved';
import Notification from "./pages/Notification";
import Carts from "./pages/Carts";
import MyLearning from "./pages/MyLearning";
import Trending from "./pages/Trending";
import Aboutus from './pages/Aboutus'
import Login from "./pages/Login";
import UserProfilePage from "./pages/UserProfile";
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
          <Route path="/about" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shamly" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
