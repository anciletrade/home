import * as React from "react";
import { Box, Grid, Card, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import BoltIcon from "@mui/icons-material/Bolt";
import ShieldIcon from "@mui/icons-material/Shield";
import LinkIcon from "@mui/icons-material/Link";

const items = [
  {
    icon: <ShieldIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Daily Coverage Flexibility",
    description:
      "Choose protection when you need it. Coverage starts at market open and continues until market close. Select from three tiers based on your trading style.",
  },
  {
    icon: <BoltIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Same-Day Settlement",
    description:
      "No complex claims process. Your daily P&L is calculated at market close and reimbursements are processed automatically.",
  },
  {
    icon: <WaterfallChartIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Clear Trading Rules",
    description:
      "Maximum 7 trades per day. Supports stocks, futures, currencies, and ETFs. Simple, transparent protection.",
  },
  {
    icon: <LinkIcon sx={{ fontSize: 40, color: "primary.main" }} />,
    title: "Trade With Any Broker",
    description:
      "Connect your existing brokerage account. We support major brokers and automatically track your protected trades.",
  },
];

export default function Features() {
  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 12 } }}>
      <Box textAlign="center" mb={5}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Features
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
        >
          Our innovative trading loss insurance helps you manage risk while
          keeping your strategy flexible.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {items.map(({ icon, title, description }, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 2,
                  height: "300px",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: 3,
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Box mb={2}>{icon}</Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", flexGrow: 1 }}
                >
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {description}
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
