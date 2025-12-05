import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AppContext from "./apputils/AppContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContext>
      <GoogleOAuthProvider clientId="841316020944-tc0q9n9b72kkv4c20a19q4cmt7paf8rn.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </AppContext>
  </StrictMode>
);
