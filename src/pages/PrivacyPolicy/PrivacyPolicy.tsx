import { useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import Logo from "../../components/Logo";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Stack,
  useTheme,
  Divider,
  Button
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useState } from "react";
import { privacyPolicy } from "../../util/data";

type Props = {};


const PrivacyPolicy = ({}: Props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [expanded, setExpanded] = useState<number | false>(0);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return (
    <Layout showAppBar={false}>
      <Box
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundImage:
            theme.palette.mode === "dark"
              ? "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)"
              : "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 26%), transparent)",
          zIndex: "-10"
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Box
              sx={{
                width: "120px",
                py: "2rem"
              }}
              onClick={() => navigate("/")}
            >
              <Logo />
            </Box>
            <Button
              variant="text"
              startIcon={<ArrowBackIosIcon />}
              sx={{ background: "transparent" }}
              onClick={() => navigate("/")}
            >
              Back Home
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem"
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "start", sm: "end" }}
              justifyContent={`space-between`}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Ancile Privacy Policy
              </Typography>
              <Typography>Effective Date: December 24, 2024</Typography>
            </Stack>
            <Divider />
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Introduction
            </Typography>
            <Typography>
              Ancile Trading ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy outlines how we collect, use,
              and safeguard your personal information when you use our
              application ("the App"). By using the App, you agree to the
              practices described in this policy. If you do not agree with this
              policy, please do not use the App.
            </Typography>
            <Divider />
            <List>
              {privacyPolicy.map((section, index) => (
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
        </Container>
      </Box>
    </Layout>
  );
};

export default PrivacyPolicy;
