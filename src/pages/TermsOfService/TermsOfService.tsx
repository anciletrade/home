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

interface TermsSection {
  title: string;
  items: string[];
}

const terms: TermsSection[] = [
  {
    title: "Eligibility",
    items: [
      "You must be at least 18 years old to use the App. By using the App, you confirm that you are at least 18 years old and have the legal capacity to enter into these Terms.",
      "You are responsible for ensuring that your use of the App complies with all applicable laws and regulations."
    ]
  },
  {
    title: "Services",
    items: [
      "Trade Insurance: The App provides insurance for day traders, covering 50% of daily trading losses up to the selected insurance limit.",
      "Brokerage Account Integration: Users must connect their brokerage accounts to the App to use our services. Trades are executed via API integrations with the user’s brokerage account.",
      "Platform Wallet: Users can deposit funds into the platform wallet to pay premiums and withdraw reimbursements. Reimbursements for eligible trading losses are calculated and credited to the wallet at the end of each trading day.",
      "We are not a Broker-Dealer or Registered Investment Advisor (RIA). We provide tools and services to assist with trading but do not offer financial or investment advice."
    ]
  },
  {
    title: "User Responsibilities",
    items: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted under your account.",
      "You agree to provide accurate and complete information during registration and when connecting your brokerage account.",
      "You are solely responsible for your trading activities, decisions, and any losses incurred."
    ]
  },
  {
    title: "Payments and Fees",
    items: [
      "Premiums for trade insurance coverage are deducted from your platform wallet daily. If sufficient funds are not available, coverage will be temporarily suspended until funds are replenished.",
      "Reimbursements for eligible trading losses are credited to your platform wallet based on the selected coverage level.",
      "You may withdraw funds from your platform wallet to your bank account at any time, subject to standard processing times."
    ]
  },
  {
    title: "Prohibited Activities",
    items: [
      "Use the App for any unlawful purpose.",
      "Provide false or misleading information.",
      "Attempt to access or interfere with the App’s systems or data.",
      "Use the App in a manner that violates the rights of others or these Terms."
    ]
  },
  {
    title: "Termination",
    items: [
      "We may terminate or suspend your access to the App at any time for any reason, including violations of these Terms or applicable laws.",
      "You may terminate your account at any time by contacting us at support@anciletrading.com.",
      "Upon termination, any funds in your platform wallet will be returned to you, subject to verification and processing requirements."
    ]
  },
  {
    title: "Limitation of Liability",
    items: [
      "To the maximum extent permitted by law, Ancile Trading shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the App or services.",
      "Our total liability for any claim arising under these Terms shall not exceed the total premiums paid by you in the 30 days preceding the claim."
    ]
  },
  {
    title: "Disclaimer of Warranties",
    items: [
      "The App and services are provided 'as is' and 'as available' without warranties of any kind, either express or implied. We do not guarantee uninterrupted access or error-free functionality."
    ]
  },
  {
    title: "Changes to These Terms",
    items: [
      "We may update these Terms from time to time. Any changes will be posted on this page with the updated effective date. Your continued use of the App constitutes acceptance of the revised Terms."
    ]
  },
  {
    title: "Governing Law",
    items: [
      "These Terms are governed by and construed in accordance with the laws of the United States. Any disputes arising under these Terms shall be resolved exclusively in the court."
    ]
  },
  {
    title: "Contact us",
    items: [
      "If you have any questions or concerns about these Terms, please contact us at:",
      "Ancile Trading Email: support@anciletrading.com"
    ]
  }
];

const TermsOfService = ({}: Props) => {
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
                Ancile Terms of Service
              </Typography>
              <Typography>Effective Date: December 24, 2024</Typography>
            </Stack>
            <Divider />
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Introduction
            </Typography>
            <Typography>
              Welcome to Ancile Trading ("we," "our," or "us"). These Terms of
              Service ("Terms") govern your access to and use of our application
              ("the App") and services. By accessing or using the App, you agree
              to comply with and be bound by these Terms. If you do not agree to
              these Terms, please do not use the App.
            </Typography>
            <Divider />
            {terms.map((section, index) => (
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

export default TermsOfService;
