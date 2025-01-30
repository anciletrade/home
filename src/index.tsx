import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import LoadingScreen from "./components/LoadingScreen";

const LandingPage = lazy(() => import("./LandingPage"));
const TermsOfService = lazy(
  () => import("./pages/TermsOfService/TermsOfService")
);
const PrivacyPolicy = lazy(
  () => import("./pages/PrivacyPolicy/PrivacyPolicy")
);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
        <Router>
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* Add a callback route if using Hosted UI */}
            <Route path="*" element={<LandingPage />} />
        </Routes>
        </Router>
    </Suspense>
  </React.StrictMode>
);
