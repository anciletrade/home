import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// FAQ data array
const faqs = [
  {
    question: 'Are you a broker?',
    answer: (
        <>
          No. Our users connect their brokerage accounts to our platform and trades directly on our platform. All trades are still executed at their broker.

        </>
    ),
  },
    {
        question: 'How does trade insurance work?',
        answer: (
            <>
                To protect yourself from trading losses, simply purchase coverage before you start trading for the day. If you incur losses, you will be reimbursed for 50% of your trade losses, up to your selected coverage limit
            </>
        ),
    },
    {
        question: 'Which trades are eligible for coverage?',
        answer: (
            <>
                Coverage applies to your first seven trades of the day in stocks and ETFs during regular market hours (9:30 AM - 4:00 PM EST). Pre-market and after-hours trading are not covered.
            </>
        ),
    },
    {
        question: 'How do I receive my reimbursement?',
        answer: (
            <>
                Losses are calculated after market close (4:00 PM EST), and reimbursements are deposited into your Ancile account before the start of the next trading day. You can withdraw the funds to your bank account at any time.
            </>
        ),
    },
    {
        question: 'Do I need to file a claim?',
        answer: (
            <>
                No claims process is required. Our system automatically tracks your eligible trades and calculates losses, eliminating the need for any paperwork.
            </>
        ),
    },
    {
        question: 'Can I use this with my existing brokerage account?',
        answer: (
            <>
                Yes, Ancile integrates seamlessly with major brokerages through our API. Simply connect your brokerage account to start trading with protection.
            </>
        ),
    },
    {
        question: 'What happens if I make more than seven day trades?',
        answer: (
            <>
                Only your first seven trades of the day are eligible for coverage. Losses from any subsequent trades will not be covered.
            </>
        ),
    },
    {
        question: 'How are trading losses calculated?',
        answer: (
            <>
                Trading losses are calculated based on the realized losses from your closed positions. We assess the cumulative profit/loss from your first seven trades of the day to determine your reimbursement amount.
            </>
        ),
    },
  {
    question: 'What if I don\'t use all seven trades?',
    answer: (
        <>
            Coverage applies to any number of trades up to seven. You will be reimbursed for 50% of your total realized losses from whatever number of trades you make, up to your coverage limit.
        </>
    ),
  },
  {
    question: 'Do you provide cover for option and cryptocurrency trades?',
    answer: (
        <>
          At this time, coverage is only available for trades in stocks and stock ETFs. We are actively working to extend coverage to other asset classes.

        </>
    ),
  },
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
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 6 },
          }}
      >
        <Typography
            component="h2"
            variant="h4"
            sx={{
              color: 'text.primary',
              width: { sm: '100%', md: '60%' },
              textAlign: { sm: 'left', md: 'center' },
            }}
        >
          Frequently asked questions
        </Typography>
        <Box sx={{ width: '100%' }}>
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
                      sx={{ maxWidth: { sm: '100%', md: '70%' } }}
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
