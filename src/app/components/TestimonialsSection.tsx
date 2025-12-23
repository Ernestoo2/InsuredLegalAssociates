import Image from "next/image";
import { FaStar } from "react-icons/fa";

export type Testimonial = {
  name: string;
  quote: string;
  imageSrc: string;
  rating: number;
  reviewCount: number;
};

const testimonial: Testimonial = {
  name: "Johnatan G.",
  quote:
    "Insured Legal Associates guided me through a complex business litigation. Their expertise, professionalism, and dedication ensured a favorable outcome for my company. I highly recommend their services to anyone facing legal challenges.",
  imageSrc: "/Assets/icon.png",
  rating: 4.8,
  reviewCount: 322,
};

export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="flex-1">
            <span className="block text-lg font-semibold text-[#253043] mb-1">Testimonials</span>
            <h2 className="text-2xl md:text-3xl font-bold text-left text-[#1E2E45] mb-4">Our Happy Client Say<br />About Us</h2>
          </div>
          <div className="w-full md:w-[340px] h-[90px] flex-shrink-0">
            <Image
              src="/Assets/image4.png"
              alt="Testimonial Icon"
              width={500}
              height={90}
              className="object-cover rounded"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
          <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={testimonial.imageSrc}
              alt={testimonial.name}
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          <div className="flex-1 bg-transparent p-0">
            <div className="flex items-center mb-4">
              <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2"><path d="M20 36H0C0 16.1178 8.88889 0 24 0V8.57143C15.1111 8.57143 10 19.2857 10 36ZM48 36H28C28 16.1178 36.8889 0 52 0V8.57143C43.1111 8.57143 38 19.2857 38 36Z" fill="#BDBDBD"/></svg>
              <p className="text-[#253043] text-base md:text-lg mb-0">{testimonial.quote}</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-semibold text-[#1E2E45]">{testimonial.name}</span>
              <span className="flex items-center ml-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`text-[#9A9162] ${i < Math.round(testimonial.rating) ? '' : 'opacity-30'}`} />
                ))}
              </span>
              <span className="text-[#253043] font-medium ml-2">{testimonial.rating}/5</span>
              <span className="text-[#BDBDBD] ml-2">{testimonial.reviewCount} Reviewed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 