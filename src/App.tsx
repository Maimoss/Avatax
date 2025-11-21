import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import { AvatarProvider } from "./context/AvatarContext";
import { ColorProvider } from "./context/ColorContext";

function App() {
  return (
    <BrowserRouter>
      <AvatarProvider>
        <ColorProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </ColorProvider>
      </AvatarProvider>
    </BrowserRouter>
  );
}

export default App;
