import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { visuallyHidden } from "@mui/utils";
import { styled, useTheme } from "@mui/material/styles";
import { ancile_home, ancile_home_light } from "../assets";
import Axios from "../util/axios";

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: "fit-content",
  marginTop: theme.spacing(8),
  borderRadius: theme.shape.borderRadius,
  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",
  borderColor: theme.palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundImage: `url(${"/static/screenshots/material-ui/getting-started/templates/dashboard.jpg"})`,
  backgroundSize: "cover",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage: `url(${"/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg"})`,
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: theme.palette.grey[700],
  }),
}));

const MotionTypography = motion(Typography);
const MotionStyledBox = motion(StyledBox);

export default function Hero() {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleRequest = async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        setResponseMessage("Invalid email format. Please provide a valid email address.");
        return;
      }
      const response = await Axios.post(`/waitlist`, { email });

      if (response.status === 200) {
        setResponseMessage(response.data.message || "You have successfully joined our waitlist!");
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setResponseMessage("Failed to submit email. Please try again later.");
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
        ...theme.applyStyles("dark", {
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
        }),
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
        >
          <MotionTypography
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.34, 1.56, 0.64, 1], delay: 1 }}
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }}
          >
            Trading&nbsp;is&nbsp;Risky.&nbsp;
            <MotionTypography
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.34, 1.56, 0.64, 1], delay: 1.5 }}
              variant="h1"
              sx={(theme) => ({
                fontSize: "inherit",
                color: "primary.main",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              {" "}
              Be Safe!
            </MotionTypography>
          </MotionTypography>
          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              width: { sm: "100%", md: "80%" },
            }}
          >
            Our trade loss insurance empowers traders to navigate the ups and
            downs with ease. Elevate your trading experience!
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            sx={{ pt: 2, width: { xs: "100%", sm: "350px" } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{
                minWidth: "fit-content",
              }}
              onClick={handleRequest}
            >
              Join waitlist
            </Button>
          </Stack>
          {responseMessage && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", mt: 2 }}
            >
              {responseMessage}
            </Typography>
          )}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: "center" }}
          >
            By clicking &quot;Join waitlist&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        <MotionStyledBox
          id="image"
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          animate={{
            opacity: 1,
            boxShadow: [
              "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
              "0 0 18px 12px hsla(220, 100%, 75%, 0.4)",
              "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
            ],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: [0.34, 1.56, 0.64, 1],
            },
          }}
        >
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: [0.34, 1.56, 0.64, 1], delay: 0.5 }}
            src={
              theme.palette.mode === "dark" ? ancile_home : ancile_home_light
            }
            style={{ width: "100%", height: "auto" }}
            alt="Ancile Home"
          />
        </MotionStyledBox>
      </Container>
    </Box>
  );
}
