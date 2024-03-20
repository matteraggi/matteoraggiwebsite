import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import Wrapper from "./components/Wrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
      <Wrapper>
        <App />
      </Wrapper>
  </BrowserRouter>
);
