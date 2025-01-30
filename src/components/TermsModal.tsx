import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Stack,
  useTheme,
  Divider
} from "@mui/material";
import { terms } from "../util/data";
import Backdrop from "@mui/material/Backdrop";

export default function TermsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  return (
    <div>
      <Typography
        variant="caption"
        color="text.secondary"
        onClick={handleOpen}
        sx={{ textDecoration: "underline" }}
      >
        Terms & Conditions
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Box
          sx={{
            maxHeight: "60vh",
            width: { xs: "95%", sm: "80%" },
            overflowY: "scroll",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: theme.palette.background.paper,
            borderRadius: "10px",
            ":focus-visible": {
              outline: "none"
            }
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "start", sm: "end" }}
            justifyContent={`space-between`}
            px={`2rem`}
            mb={`1rem`}
            mt={`1rem`}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Ancile Terms of Service
            </Typography>
            <Typography>Effective Date: December 24, 2024</Typography>
          </Stack>
          <Divider />
          <Typography
            px={`2rem`}
            mb={`1rem`}
            mt={`1rem`}
            variant="h5"
            sx={{ fontWeight: "bold" }}
          >
            Introduction
          </Typography>
          <Typography
            px={`2rem`}
            mb={`1rem`}
            sx={{ color: theme.palette.text.secondary }}
          >
            Welcome to Ancile Trading ("we," "our," or "us"). These Terms of
            Service ("Terms") govern your access to and use of our application
            ("the App") and services. By accessing or using the App, you agree
            to comply with and be bound by these Terms. If you do not agree to
            these Terms, please do not use the App.
          </Typography>
          <Divider />
          <List>
            {terms.map((section, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemText
                  primary={`${index + 1}. ${section.title}`}
                  secondary={
                    <List component="div" disablePadding>
                      {section.items.map((item, subIndex) => (
                        <ListItem key={subIndex} sx={{ pl: 4 }}>
                          <ListItemText
                            primary={`${index + 1}.${subIndex + 1} ${item}`}
                          />
                        </ListItem>
                      ))}
                    </List>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Modal>
    </div>
  );
}
