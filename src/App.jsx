import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayOut";
import HomePage from "./pages/HomePage";
import ChiSiamo from "./pages/ChiSiamo";
import ListaDeiPost from "./pages/ListaDeiPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="ChiSiamo" element={<ChiSiamo />} />
          <Route path="ListaDeiPost" element={<ListaDeiPost />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
