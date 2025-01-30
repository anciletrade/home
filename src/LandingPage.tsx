import Divider from "@mui/material/Divider";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Layout from "./Layout";

const LandingPage = () => {
  return (
    <Layout showAppBar>
      <>
        <Hero />
        <div>
          <Features />
          <Divider />
          <HowItWorks />
          <Divider />
          <Pricing />
          <Divider />
          <FAQ />
          <Divider />
        </div>
      </>
    </Layout>
  );
}

export default LandingPage;