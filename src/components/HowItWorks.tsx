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
        textAlign: "center",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
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
              <motion.img
                whileInView={{ rotate: [0, -5, 5, -5, 5, 0] }}
                transition={{
                  delay: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 2,
                }}
                src={service_one}
                alt="Sign Up and Connect Account"
              />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Sign Up and Connect Account
              </Typography>
              <Typography variant="body1">
                Sign up and connect your trading account. You can connect
                multiple accounts from various brokers and streamline your
                trading. All qualified trades must be done on our platform.
              </Typography>
            </div>
          </Grid>

          {/* Step 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <motion.img
                whileInView={{ rotate: [0, -5, 5, -5, 5, 0] }}
                transition={{
                  delay: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 2,
                }}
                src={service_two}
                alt="Purchase Coverage"
              />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Purchase Coverage
              </Typography>
              <Typography variant="body1">
                After setting up an account, deposit up to $500. Premium will be
                deducted, and reimbursements will be made to your balance. You
                can withdraw funds to your bank account at any time. Choose any
                of the three coverage levels.
              </Typography>
            </div>
          </Grid>

          {/* Step 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <motion.img
                whileInView={{ rotate: [0, -5, 5, -5, 5, 0] }}
                transition={{
                  delay: 0.5,
                  ease: [0.34, 1.56, 0.64, 1],
                  duration: 2,
                }}
                src={service_three}
                alt="Trade Away!"
              />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Trade Away!
              </Typography>
              <Typography variant="body1">
                Trade with confidence. You are covered!
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
