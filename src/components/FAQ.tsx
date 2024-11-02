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

// Example FAQ data array
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
    question: 'What exactly do you cover?',
    answer: (
        <>
          We reimburse 50% of trading losses incurred from the first seven trades in stocks and stock ETFs during regular market hours. The limit of coverage is determined by the level of coverage purchased.
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
