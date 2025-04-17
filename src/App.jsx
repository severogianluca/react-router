import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayOut";
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import ListaDeiPost from "./pages/ListaDeiPost";
import SinglePost from "./pages/SinglePost";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/chiSiamo" element={<ChiSiamo />} />
          <Route path="/ListaDeiPost" element={<ListaDeiPost />} />
          <Route path="/ListaDeiPost/:id" element={<SinglePost/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
