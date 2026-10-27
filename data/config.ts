export const siteConfig = {
  legalName: "RAVYAAN ADVISORY PRIVATE LIMITED",
  brandName: "RAVYAAN ADVISORY",
  descriptor: "Professional Services & Business Advisory",
  pillarsLine: "Finance | Tax | Advisory | Strategy | Digital",
  tagline: "Turning Business Complexity into Strategic Advantage.",
  promise: "We help businesses understand their numbers, navigate complexity, make better decisions and build the capabilities required for sustainable growth.",
  phoneDisplay: "+91 80870 89272",
  phoneHref: "+918087089272",
  officialEmail: "", // CLIENT TO SUPPLY: official email address
  founder: {
    name: "[FOUNDER NAME]", // CLIENT TO SUPPLY
    title: "Founder & Director",
    qualifications: [] as string[],
    experience: "",
    memberships: [] as string[],
    expertise: [] as string[],
    linkedIn: "",
    photo: "",
  },
  location: "Pune, Maharashtra, India",
  markets: ["India", "USA", "UAE", "Singapore", "Global Markets"],
  legalReviewRequired: true,
} as const;

export const audience = [
  ["Entrepreneurs", "Business owners looking for professional advice and decision support."],
  ["Startups", "Businesses requiring structured finance, taxation, compliance and growth support."],
  ["MSMEs", "Growing businesses requiring accounting, tax, MIS, CFO and business advisory."],
  ["Established Businesses", "Companies requiring financial improvement, strategic planning and transformation."],
  ["International Businesses", "Businesses requiring India-focused finance, accounting and business support."],
  ["Promoters & Management Teams", "Decision-makers requiring financial analysis and strategic business advice."],
] as const;
