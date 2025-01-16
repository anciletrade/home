import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MuiChip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import BoltIcon from "@mui/icons-material/Bolt";
import ShieldIcon from "@mui/icons-material/Shield";
import LinkIcon from "@mui/icons-material/Link";

const items = [
  {
    icon: <ShieldIcon />,
    title: "Daily Coverage Flexibility",
    description:
      "Choose protection when you need it. Coverage starts at market open and continues until market close. Select from our three tiers based on your trading size and style.",
    imageLight: 'url("/coverage.jpeg")',
    imageDark: 'url("/coverage.jpeg")',
    imageSize: "cover",
  },
  {
    icon: <BoltIcon />,
    title: "Same-Day Settlement",
    description:
      "No complex claims process. Your daily P&L is calculated at market close and reimbursements are processed automatically. 50% coverage up to your tier limit.",
    imageLight: 'url("/same_Day.jpeg")',
    imageDark: 'url("/same_Day.jpeg")',
    imageSize: "cover",
  },
  {
    icon: <WaterfallChartIcon />,
    title: "Clear Trading Rules",
    description:
      "Maximum 7 trades per day. All trades must be opened and closed same day. Supports stocks, futures, currencies and stock ETFs. Simple, transparent protection.",
    imageLight: 'url("/trading.jpeg")',
    imageDark: 'url("/trading.jpeg")',
    imageSize: "cover",
  },
  {
    icon: <LinkIcon />,
    title: "Trade With Any Broker",
    description:
      "Connect your existing brokerage account and trade through our platform. We support major brokers and automatically track your protected trades.",
    imageLight: 'url("/integrations.svg")',
    imageDark: 'url("/integrations.svg")',
    imageSize: "contain",
  },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          "linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))",
        color: "hsl(0, 0%, 100%)",
        borderColor: theme.palette.primary.light,
        "& .MuiChip-label": {
          color: "hsl(0, 0%, 100%)",
        },
        ...theme.applyStyles("dark", {
          borderColor: theme.palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: MobileLayoutProps) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "none" },
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 2, overflow: "auto" }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: 280,
            backgroundImage: "var(--items-imageLight)",
            ...theme.applyStyles("dark", {
              backgroundImage: "var(--items-imageDark)",
            }),
          })}
          style={
            items[selectedItemIndex]
              ? ({
                  "--items-imageLight": items[selectedItemIndex].imageLight,
                  "--items-imageDark": items[selectedItemIndex].imageDark,
                } as any)
              : {}
          }
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: "text.primary", fontWeight: "medium" }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const [isMouseOver, setIsMouseOver] = React.useState(false);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (selectedItemIndex >= items.length - 1) {
        setSelectedItemIndex(0);
      } else {
        setSelectedItemIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000);

    if(isMouseOver){
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [selectedItemIndex, isMouseOver]);

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: "100%", md: "60%" } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Features
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: { xs: 2, sm: 4 } }}
        >
          We're excited to introduce our innovative trading loss insurance
          product. Every trader knows having a bad day is part of the trading
          journey. Our mission is to make those bad days better.
        </Typography>
      </Box>
      <Box
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 2,
              height: "100%",
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: "100%",
                    width: "100%",
                    "&:hover": {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: "action.selected",
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "left",
                      gap: 1,
                      textAlign: "left",
                      textTransform: "none",
                      color: "text.secondary",
                    },
                    selectedItemIndex === index && {
                      color: "text.primary",
                    },
                  ]}
                >
                  {icon}

                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            width: { xs: "100%", md: "70%" },
            height: "var(--items-image-height)",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
            className="hjdbjkd"
          >
            <Box
              sx={(theme) => ({
                m: "auto",
                width: `100%`,
                height: 500,
                backgroundSize: items[selectedItemIndex]
                  ? items[selectedItemIndex].imageSize
                  : "",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: "var(--items-imageLight)",
                ...theme.applyStyles("dark", {
                  backgroundImage: "var(--items-imageDark)",
                }),
                borderRadius: "5px",
              })}
              style={
                items[selectedItemIndex]
                  ? ({
                      "--items-imageLight": items[selectedItemIndex].imageLight,
                      "--items-imageDark": items[selectedItemIndex].imageDark,
                    } as any)
                  : {}
              }
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
