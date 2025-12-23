export type ServicesProps = {
  id: string;
  title: string;
  description: string;
  detail: string;
  price: string;
  imageLeft: string;
  imageRight: string;
};

export const services: ServicesProps[] = [
  {
    id: "education-lawyer",
    title: "Education Lawyer & Consultation",
    description:
      "Expert legal guidance for students, parents, and educational institutions. We help you navigate complex education laws, resolve disputes, and protect your educational rights.",
    detail:
      "Our education law specialists provide comprehensive support for issues such as student rights, disciplinary actions, special education, and institutional compliance. We work closely with clients to ensure fair treatment and the best possible outcomes in all educational matters.",
    price: "$500.99",
    imageLeft: "/Assets/justice1.png",
    imageRight: "/Assets/justice2.png",
  },
  {
    id: "business-law",
    title: "Business Law",
    description:
      "Comprehensive legal solutions for businesses of all sizes. From startups to established corporations, we safeguard your interests and help you grow with confidence.",
    detail:
      "Our business law team assists with company formation, contract drafting and review, mergers and acquisitions, regulatory compliance, and dispute resolution. We are committed to providing practical legal advice that supports your business objectives.",
    price: "$200.99",
    imageLeft: "/Assets/justice2.png",
    imageRight: "/Assets/justice1.png",
  },
  {
    id: "private-investigator",
    title: "Private Investigator",
    description:
      "Discreet and professional investigative services for individuals and businesses. We uncover the facts you need to make informed decisions.",
    detail:
      "Our licensed private investigators specialize in background checks, fraud investigations, surveillance, and asset searches. We use advanced techniques and maintain strict confidentiality to deliver reliable results for our clients.",
    price: "$500.99",
    imageLeft: "/Assets/justice1.png",
    imageRight: "/Assets/justice2.png",
  },
  {
    id: "family-law",
    title: "Family Law",
    description:
      "Compassionate legal support for families facing challenging times. We guide you through family law matters with care and expertise.",
    detail:
      "Our family law practice covers divorce, child custody, adoption, domestic violence, and property settlements. We prioritize your well-being and work diligently to achieve fair and lasting solutions for you and your loved ones.",
    price: "$500.99",
    imageLeft: "/Assets/justice2.png",
    imageRight: "/Assets/justice1.png",
  }
];


export const servicesP: ServicesProps[] = [
  {
    id: "education-lawyer-2",
    title: "Academic Rights Advocacy",
    description:
      "Safeguarding the interests of students, teachers, and institutions in academic disputes and policy matters.",
    detail:
      "We provide expert representation in cases involving academic misconduct, expulsion, discrimination, and appeals. Our team ensures your voice is heard and your rights are protected throughout the educational process.",
    price: "$520.00",
    imageLeft: "/Assets/justice1.png",
    imageRight: "/Assets/justice2.png",
  },
  {
    id: "business-law-2",
    title: "Corporate Compliance & Strategy",
    description:
      "Helping businesses navigate legal regulations and implement effective compliance strategies for sustainable growth.",
    detail:
      "Our services include regulatory compliance audits, contract management, and risk assessment. We partner with you to develop strategies that minimize legal exposure and support your business objectives.",
    price: "$250.00",
    imageLeft: "/Assets/justice1.png",
    imageRight: "/Assets/justice2.png",
  },
  {
    id: "private-investigator-2",
    title: "Forensic Investigation Services",
    description:
      "Delivering discreet and thorough investigations for individuals and organizations seeking clarity and evidence.",
    detail:
      "Our investigators specialize in background checks, fraud detection, surveillance, and digital forensics. We provide detailed reports and maintain strict confidentiality for all our clients.",
    price: "$550.00",
    imageLeft: "/Assets/justice1.png",
    imageRight: "/Assets/justice2.png",
  },
  {
    id: "family-law-2",
    title: "Child & Family Advocacy",
    description:
      "Supporting families through legal transitions with a focus on the well-being of children and family unity.",
    detail:
      "We offer compassionate guidance in custody disputes, adoption, guardianship, and family mediation. Our goal is to achieve fair, lasting solutions that prioritize the needs of every family member.",
    price: "$520.00",
    imageLeft: "/Assets/justice1.png",
    imageRight: "/Assets/justice2.png",
  },
];