
interface PrivacySection {
  title: string;
  items: string[];
}

export const privacyPolicy: PrivacySection[] = [
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

interface TermsSection {
  title: string;
  items: string[];
}

export const terms: TermsSection[] = [
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