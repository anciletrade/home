import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { motion } from "motion/react";
import { visuallyHidden } from "@mui/utils";
import { styled, useTheme } from "@mui/material/styles";
import { ancile_home, ancile_home_light } from "../assets";
import Axios from "../util/axios";
import WaitlistWidget from "./WaitlistForm";
import TermsModal from "./TermsModal";

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

const MotionStyledBox = motion(StyledBox);

export default function Hero() {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleRequest = async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        setDialogMessage("Invalid email format. Please provide a valid email address.");
        setDialogOpen(true);
        return;
      }

      const response = await Axios.post(`/waitlist`, { email });

      if (response.status === 200) {
        setDialogMessage(response.data.message || "You have successfully joined the waitlist!");
      } else {
        setDialogMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setDialogMessage("Failed to submit email. Please try again later.");
    } finally {
      setDialogOpen(true);
    }
  };

  const handleClose = () => {
    setDialogOpen(false);
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
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",
            }}
          >
            Trading&nbsp;is&nbsp;Risky.&nbsp;
            <Typography
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
            </Typography>
          </Typography>
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
            // direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            spacing={1}
            sx={{ pt: 2, width: { xs: "100%"} }}
          >
            <WaitlistWidget/>
          </Stack>
          <Box>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: "-5px",  textAlign: "center", display: 'flex' }}
          >
            By clicking &quot;Join waitlist&quot; you agree to our&nbsp;
            {/* <Link href="#" color="primary">
              Terms & Conditions
            </Link> */}
            <TermsModal />
            .
          </Typography>
          </Box>
          
          
        
          
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
            initial={{ opacity: .5 }}
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

      {/* Dialog for notifications */}
      <Dialog open={dialogOpen} onClose={handleClose}>

        <DialogContent>
          <DialogContentText>{dialogMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
