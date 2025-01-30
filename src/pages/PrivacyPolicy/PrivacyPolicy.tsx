import { useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import Logo from "../../components/Logo";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  useTheme,
  Divider
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";

type Props = {};

interface PrivacySection {
  title: string;
  items: string[];
}

const privacyPolicy: PrivacySection[] = [
  {
    title: "Information We Collect",
    items: [
      "Personal Information: Name, email address, phone number, brokerage account connection details, and bank account information.",
      "Financial Information: Trade data from your connected brokerage account, including transaction details and daily profit/loss, premium payments, and reimbursement transactions.",
      "Technical Information: Device information (IP address, browser type, operating system), usage data (access times, navigation within the app).",
      "Third-Party Authentication Information: Basic profile information from Google, Apple, Amazon, or Facebook login providers."
    ]
  },
  {
    title: "How We Use Your Information",
    items: [
      "Service Provision: To provide and manage our trade insurance services, facilitate brokerage connections, and calculate reimbursements.",
      "Payments and Transactions: To process premium payments, reimbursements, deposits, and withdrawals.",
      "Improvement and Analytics: To analyze usage patterns, improve functionality, and monitor for fraudulent activities.",
      "Communication: To send notifications, updates, and respond to inquiries."
    ]
  },
  {
    title: "How We Share Your Information",
    items: [
      "Service Providers: With third-party vendors assisting in services like payment processing and API integrations.",
      "Legal Obligations: If required by law or in response to legal processes.",
      "Business Transfers: In case of a merger, acquisition, or sale of assets."
    ]
  },
  {
    title: "Data Security",
    items: [
      "We implement encryption and secure storage practices but cannot guarantee absolute security."
    ]
  },
  {
    title: "Your Rights and Choices",
    items: [
      "Access and Updates: Update personal information through account settings.",
      "Data Deletion: Request account and personal data deletion via support@anciletrading.com.",
      "Opt-Out Options: Unsubscribe from promotional communications via email instructions."
    ]
  },
  {
    title: "Third-Party Services",
    items: [
      "The app integrates with third-party services like Google, Apple, Amazon, Facebook, and brokerage APIs, each with their own privacy policies."
    ]
  },
  {
    title: "Children’s Privacy",
    items: [
      "The app is not intended for individuals under 18, and we do not knowingly collect information from children."
    ]
  },
  {
    title: "Changes to This Policy",
    items: [
      "Updates will be posted on this page. Continued use of the app constitutes acceptance of changes."
    ]
  },
  {
    title: "Contact Us",
    items: [
      "For privacy-related questions, contact support@anciletrading.com.",
      "Ancile Trading Email: support@anciletrading.com"
    ]
  }
];

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
              width: "120px",
              py: "2rem"
            }}
            onClick={() => navigate("/")}
          >
            <Logo />
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
              alignItems={`end`}
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
            {privacyPolicy.map((section, index) => (
              <Accordion
                key={index}
                expanded={expanded === index}
                onChange={handleChange(index)}
                sx={{
                  borderStyle: "none",
                  background: "transparent"
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body2">{section.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {section.items.map((item, subIndex) => (
                    <Typography key={subIndex} sx={{ pl: 2 }}>
                      {item}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default PrivacyPolicy;
