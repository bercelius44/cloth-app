import { Routes, Route } from "react-router-dom";

import HomePage from "./routes/home/home.component";
import NavBar from "./routes/nav-bar/nav-bar.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <div>
      <h2>Shop page</h2>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
