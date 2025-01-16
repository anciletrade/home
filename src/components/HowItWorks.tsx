import React from 'react';
import { Box, Typography, Grid2, Container } from '@mui/material';
import {service_one, service_two, service_three} from "../assets";
import { motion } from 'motion/react';

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
        <Box
          sx={{
            // width: { sm: '100%', md: '60%' },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography
            style={{ marginBottom: "5%" }}
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            How it Works
          </Typography>
          <br />
          <Grid2 container spacing={6} justifyContent="center">
            {/* Step 1 */}
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <motion.img
                  animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
                  transition={{
                    delay: 0.5,
                    ease: [0.34, 1.56, 0.64, 1],
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  src={service_one}
                />
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Sign Up and Connect Account
                </Typography>
                <Typography variant="body1">
                  Sign up and connect your trading account. You can connect
                  multiple accounts from various brokers and streamline your
                  trading. All qualify trades must be done on our platform.
                </Typography>
              </Box>
            </Grid2>

            {/* Step 2 */}
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <motion.img
                  animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
                  transition={{
                    delay: 0.5,
                    ease: [0.34, 1.56, 0.64, 1],
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  src={service_two}
                />
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Purchase Coverage
                </Typography>
                <Typography variant="body1">
                  After setting up an account, you can deposit up to $500 to
                  your account. Premium will be deducted from the balance on
                  your account and reimbursements will be made to this balance.
                  You can withdraw funds from your balance to your bank account
                  at any time. You can choose any of the three coverage levels.
                </Typography>
              </Box>
            </Grid2>

            {/* Step 3 */}
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <motion.img
                  animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
                  transition={{
                    delay: 0.5,
                    ease: [0.34, 1.56, 0.64, 1],
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                  src={service_three}
                />
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Trade Away!
                </Typography>
                <Typography variant="body1">
                  Trade with confidence. You are covered!
                </Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
