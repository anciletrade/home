import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Link
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// FAQ data array
const faqs = [
  {
    question: "How does trading protection work?",
    answer: (
      <>
        Coverage is based on your cumulative daily trading losses, calculated at
        market close. We cover 50% of your net P&L across all protected trades
        that day, not individual trade results. For example, if you end the day
        down $2,000 across your first seven trades, with Plus coverage we'll
        reimburse $1,000. Only your first seven trades of the day are counted
        toward coverage.
      </>
    )
  },
  {
    question: "What trades are eligible for coverage?",
    answer: (
      <>
        Day trades only - positions opened and closed same day. We cover stocks,
        futures, currencies, and stock ETFs. Your first seven trades of the day
        are covered. Only trades placed after coverage activation are protected.
      </>
    )
  },
  {
    question: "When do I receive reimbursement?",
    answer: (
      <>
        Reimbursements are processed automatically and paid by 9 PM Eastern Time
        on the same trading day. We calculate your net daily P&L at market close
        and reimburse 50% of losses up to your tier limit. No claims process
        required.
      </>
    )
  },
  {
    question: "What's the maximum coverage available?",
    answer: (
      <>
        <p style={{ marginTop: "-.3rem" }}>Three tiers available:</p>
        <ul>
          <li>Starter: $8/day, up to $500 coverage </li>
          <li>Pro: $12/day, up to $1,000 coverage</li>
          <li>Plus: $18/day, up to $3,000 coverage</li>
        </ul>
      </>
    )
  },
  {
    question: "Is coverage calculated per trade?",
    answer: (
      <>
        <p style={{ marginTop: "-.3rem" }}>
          No. Coverage is based on your cumulative P&L from your first seven
          trades of the day. For example:
        </p>
        <ul>
          <li>Trade 1: +$500</li>
          <li>Trade 2: -$800</li>
          <li>Trade 3: +$200</li>
          <li>Trade 4-7: Various P&L</li>
          <li>Trade 8+: Not counted</li>
          <li>Net P&L (from trades 1-7): -$100</li>
          <li>Reimbursement: $50 (50% of net loss)</li>
        </ul>
      </>
    )
  },
  {
    question: "When does coverage start and end?",
    answer: (
      <>
        Coverage begins immediately after premium payment and continues until
        market close. Only trades placed after coverage activation are
        protected.
      </>
    )
  },
  {
    question: "What if I trade more than seven times?",
    answer: (
      <>
        Only your first seven trades of the day count toward your daily P&L
        calculation. Any trades beyond the first seven won't be included in
        coverage calculations, regardless of their profit or loss.
      </>
    )
  },
  {
    question: "How is my daily P&L calculated?",
    answer: (
      <>
        <p style={{ marginTop: "-.3rem" }}>
          We calculate your cumulative net P&L across your first seven qualified
          trades made after coverage activation until market close. This means:
        </p>
        <ul>
          <li>Winning and losing trades are netted together</li>
          <li>Coverage applies to overall daily loss</li>
          <li>First seven trades only - Settlement by 9 PM ET</li>
        </ul>
      </>
    )
  }
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 }
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: "text.primary",
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" }
        }}
      >
        Frequently asked questions
      </Typography>
      <Box sx={{ width: "100%" }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}d-content`}
              id={`panel${index}d-header`}
            >
              <Typography component="h3" variant="subtitle2">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ maxWidth: { sm: "100%", md: "70%" } }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
