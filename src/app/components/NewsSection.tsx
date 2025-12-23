import Image from "next/image";

export type NewsItem = {
  title: string;
  description: string;
  imageSrc: string;
  buttonLabel: string;
  buttonHref: string;
};

const news: NewsItem[] = [
  {
    title: "7 Cases Have Been Success",
    description: "Civil Litigation: Taylor v. Green (2021) - Achieved a favorable settlement for a client in a complex civil dispute, ensuring justice and compensation.",
    imageSrc: "/Assets/image1.png",
    buttonLabel: "Read now",
    buttonHref: "#"
  },
  {
    title: "7 Cases Have Been Success",
    description: "Employment Law: Lee v. RetailCo (2020) - Secured reinstatement and compensation for an employee wrongfully dismissed from their job.",
    imageSrc: "/Assets/lawyer3.png",
    buttonLabel: "Read now",
    buttonHref: "#"
  },
  {
    title: "7 Cases Have Been Success",
    description: "Family Law: Morgan v. Morgan (2019) - Helped a client achieve a fair divorce settlement and child custody arrangement.",
    imageSrc: "/Assets/image25.png",
    buttonLabel: "Read now",
    buttonHref: "#"
  },
  {
    title: "7 Cases Have Been Success",
    description: "Criminal Law: R v. Patel (2018) - Defended a client in a criminal trial, resulting in a not-guilty verdict and restored peace of mind.",
    imageSrc: "/Assets/image32.png",
    buttonLabel: "Read now",
    buttonHref: "#"
  },
];

export default function NewsSection() {
  return (
    <section className="w-full py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="block text-lg  text-[#253043] mb-1">News</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E2E45] leading-tight">The Latest News<br />And Blog From Insured Legal Associates</h2>
          </div>
          <a href="#" className="text-[#1E2E45] text-sm font-medium flex items-center gap-1 hover:underline">
            See more <span className="ml-1">&rarr;</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {news.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row overflow-hidden">
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-6 gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#1E2E45] mb-2">{item.title}</h3>
                  <p className="text-[#253043] text-sm mb-4">{item.description}</p>
                </div>
                <a
                  href={item.buttonHref}
                  className="inline-block bg-[#1E2E45] hover:bg-[#253043] text-white font-semibold px-6 py-2 rounded transition w-max"
                >
                  {item.buttonLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 