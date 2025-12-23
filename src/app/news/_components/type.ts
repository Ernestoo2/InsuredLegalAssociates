
export type NewsProps = {
  id: string;
  title: string;
  description: string;
  detail: string;
  image: string;
};

export const news: NewsProps[] = [
  {
    id: "news-1",
    title: "23 cases have been successfully",
    description: "Landmark Ruling: Smith v. Jones (2021) - Our firm successfully defended a client in a high-profile property dispute, setting a precedent for future real estate cases.",
    detail: `Smith v. Jones (2021): In this landmark property dispute, our legal team represented a homeowner facing an unlawful claim to their property. Through diligent research and persuasive advocacy, we secured a favorable judgment, ensuring our client retained ownership and establishing a new standard for similar cases in the region. The case was closely watched by the legal community, as it clarified the rights of property owners against fraudulent claims. Our client expressed immense relief and gratitude, noting that the outcome not only protected their home but also set a positive example for others in similar situations.`,
    image: "/Assets/newsImage.png",
  },
  {
    id: "news-2",
    title: "23 cases have been successfully",
    description: "Business Victory: Johnson Ltd. v. Alpha Corp (2022) - We protected a small business from an unfair contract termination, preserving jobs and business continuity.",
    detail: `Johnson Ltd. v. Alpha Corp (2022): Our client, a local business, faced sudden contract termination by a major supplier. We challenged the termination in court, demonstrating breach of contract and negotiating a settlement that allowed our client to continue operations and safeguard their employees. The case highlighted the importance of fair business practices and contractual obligations, and our efforts ensured that the livelihoods of dozens of employees were protected. The client praised our team for our tenacity and commitment to justice.`,
    image: "/Assets/justicebal.png",
  },
  {
    id: "news-3",
    title: "23 cases have been successfully",
    description: "Family Law Success: Brown v. Brown (2020) - Achieved a fair custody arrangement for a parent in a complex divorce.",
    detail: `Brown v. Brown (2020): In a highly contested divorce, our team advocated for the best interests of the child, resulting in a shared custody agreement that provided stability and support for both parents and the child. The proceedings were emotionally charged, but our compassionate approach and thorough preparation helped both parties reach a resolution that prioritized the child's well-being. Our client was grateful for our guidance and the positive outcome for their family.`,
    image: "/Assets/justice1.png",
  },
  {
    id: "news-4",
    title: "23 cases have been successfully",
    description: "Employment Rights: Patel v. TechWorks (2019) - Secured compensation for wrongful dismissal and workplace discrimination.",
    detail: `Patel v. TechWorks (2019): Representing an employee dismissed without cause, we proved workplace discrimination and negotiated a substantial compensation package, reinforcing fair employment practices in the industry. The case brought attention to the importance of diversity and inclusion in the workplace, and our client was able to move forward with renewed confidence. Our advocacy not only secured justice for our client but also encouraged positive changes within the company.`,
    image: "/Assets/Maskgroup.png",
  },
  {
    id: "news-5",
    title: "23 cases have been successfully",
    description: "Criminal Defense: R v. Evans (2018) - Defended a client against false fraud allegations, resulting in a full acquittal.",
    detail: `R v. Evans (2018): Our client was wrongfully accused of fraud. Through meticulous investigation and expert testimony, we demonstrated their innocence, leading to a not-guilty verdict and restoration of their reputation. The trial was a challenging ordeal, but our unwavering support and strategic defense ensured that justice prevailed. The client and their family expressed deep appreciation for our dedication and professionalism throughout the process.`,
    image: "/Assets/justice2.png",
  },
];

export type LongestCaseProps = {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
};

export const longestCase: LongestCaseProps[] = [
  {
    id : "Long-1",
    title: "The Case of Gani Theft of Money at the bank",
    description: "Banking Fraud: Gani v. National Bank (2017) - A complex, multi-year case involving alleged embezzlement, resolved with a favorable settlement for our client.",
    details:  `Gani v. National Bank (2017): This case spanned several years and involved intricate financial investigations into alleged embezzlement at a major bank. Our client, a senior bank employee, was accused of orchestrating a sophisticated scheme to divert funds. We meticulously analyzed thousands of financial records, worked with forensic accountants, and uncovered evidence that pointed to procedural errors rather than intentional wrongdoing. After lengthy negotiations and multiple court hearings, we secured a favorable settlement that cleared our client's name and allowed them to rebuild their career. The case set a benchmark for how financial institutions handle internal investigations and employee rights.`,
    image: "/Assets/justicebal.png",
  },
  {
    id : "Long-2",
    title: "Mysterious Murder Cases in Manala City",
    description: "Homicide Defense: R v. Manala (2016) - Provided defense in a high-profile murder case, resulting in a reduced sentence after uncovering new evidence.",
    details:  `R v. Manala (2016): In one of the most talked-about cases in Manala City, our client was charged with murder in a case that drew significant media attention. Our defense team worked tirelessly to investigate the circumstances, uncovering new evidence that cast doubt on the prosecution's timeline. Through expert witness testimony and a compelling narrative, we were able to negotiate a reduced sentence for our client. The case highlighted the importance of thorough legal defense and the impact of new evidence in criminal proceedings. Our client and their family were deeply grateful for our relentless pursuit of justice.`,
    image: "/Assets/justice2.png",
  }
]