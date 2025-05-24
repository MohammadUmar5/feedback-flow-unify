
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages SPA routing fix
const segmentCount = 1; // Change this if your repo name has slashes
if (location.search.slice(1)) {
  const search = location.search.slice(1).replace(/&/g, '~and~');
  if (search && search !== '{}') {
    history.replaceState(null, '', 
      location.pathname.slice(0, -1) + 
      (search.split('~and~').map(function(val) { 
        return val.replace(/~and~/g, '&'); 
      }).join('?').replace('?/', '/') || '') + 
      location.hash
    );
  }
}

const basename = import.meta.env.PROD ? '/your-repo-name' : '';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
