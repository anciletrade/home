import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { service_one, service_two, service_three } from "../assets";
import { motion } from "framer-motion";

const HowItWorks: React.FC = () => {
  return (
    <Box
      id="how_it_works"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        background: "linear-gradient(180deg, #042241 0%, #021a32 100%)",
        padding: "40px 20px",
        color: "#fff",
        textAlign: "center"
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 }
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ marginBottom: "5%" }}
        >
          How it Works
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {/* Step 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <img src={service_one} alt="Sign Up and Connect Account" />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Connect Your Account
              </Typography>
              <Typography variant="body1">
                Link your existing brokerage account securely to Ancile. Keep
                trading with your preferred broker through our protected
                platform.
                <br /> Integration takes less than 2 minutes.
              </Typography>
            </div>
          </Grid>

          {/* Step 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <img src={service_two} alt="Purchase Coverage" />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Activate Protection
              </Typography>
              <Typography variant="body1">
                Select you coverage tier before market activity. Protection
                activates immediately after payment and covers your first seven
                trades of the day.
                <br /> Perfect for day trading stocks, futures, currencies and
                ETFs. Coverage lasts until market close - trade assures knowing
                you're protected.
              </Typography>
            </div>
          </Grid>

          {/* Step 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <img src={service_three} alt="Trade Away!" />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Trade Protected.
              </Typography>
              <Typography variant="body1">
                Open position with confidence through our platform. We track
                your first seven trades and calculate your cumulative P&L at
                market close. <br />
                No per-trade stress - focus on your strategy knowing 50% of net
                losses are covered. Automatic reimbursement by 9PM ET, no claims
                needed.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
