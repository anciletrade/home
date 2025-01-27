import * as React from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const tiers = [
  {
    title: "Starter",
    price: "8",
    description: ["Cover 50% of trading losses", "up to $500"],
    buttonText: "Get Started",
    buttonVariant: "outlined",
    buttonColor: "primary",
  },
  {
    title: "Pro",
    subheader: "Recommended",
    price: "12",
    description: ["Cover 50% of trading losses", "up to $1000"],
    buttonText: "Start now",
    buttonVariant: "contained",
    buttonColor: "secondary",
  },
  {
    title: "Plus",
    price: "18",
    description: ["Cover 50% of trading losses", "up to $3000"],
    buttonText: "Get Started",
    buttonVariant: "outlined",
    buttonColor: "primary",
  },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Pricing
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Flexible Pricing Options To Suit Your Needs. <br />
          Our coverage levels and premium prices are easy to understand.
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
        sx={{ alignItems: "center", justifyContent: "center", width: "100%" }}
      >
        {tiers.map((tier, index) => (
          <Grid item xs={12} sm={6} md={4} key={tier.title}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2, // Staggered animation
              }}
            >
              <Card
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  minHeight: "350px",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      mb: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Typography component="h3" variant="h6">
                      {tier.title}
                    </Typography>
                    {tier.title === "Level 2" && (
                      <Chip icon={<AutoAwesomeIcon />} label={tier.subheader} />
                    )}
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography component="h3" variant="h2">
                      ${tier.price}
                    </Typography>
                    <Typography component="h3" variant="h6">
                      &nbsp; per day
                    </Typography>
                  </Box>

                  <Divider
                    sx={{ my: 2, opacity: 0.8, borderColor: "divider" }}
                  />

                  {tier.description.map((line) => (
                    <Box
                      key={line}
                      sx={{
                        py: 1,
                        display: "flex",
                        gap: 1.5,
                        alignItems: "center",
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{ width: 20, color: "primary.main" }}
                      />
                      <Typography variant="subtitle2" component="span">
                        {line}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>

                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as "outlined" | "contained"}
                    color={tier.buttonColor as "primary" | "secondary"}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
