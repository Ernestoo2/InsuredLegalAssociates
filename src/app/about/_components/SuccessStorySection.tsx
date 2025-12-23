import Image from "next/image";

export type SuccessStoryProps = {
  mainImageSrc: string;
  mainHeading: string;
  subHeading: string;
  personImageSrc: string;
  testimonial: string;
  personName: string;
  personTitle: string;
};

export default function SuccessStorySection({
  mainImageSrc,
  mainHeading,
  subHeading,
  personImageSrc,
  testimonial,
  personName,
  personTitle,
}: SuccessStoryProps) {
  return (
    <section className="relative w-full py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10 items-start">
        {/* Left: Main image with heading overlay */}
        <div className="flex ">
          <Image
            src={mainImageSrc}
            alt="Success Story"
            width={200}
            height={100}
            className=" w-200 h-90 object-center object-cover" 
          />
          <div className="w-full flex flex-col -ml-20 justify-center items-start p-8">
            <span className="text-[#253043] text-sm mb-2 font-medium">{subHeading}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E2E45] max-w-lg leading-tight">
              {mainHeading}
            </h2>
          </div>
        </div>
        {/* Right: Person image and testimonial */}
        <div className="w-full flex flex-row-reverse gap-6 items-center justify-between">
          <div className="w-1/2 my-6  overflow-hidden mb-4">
            <Image
              src={personImageSrc}
              alt={personName}
              width={100}
              height={100}
              className="w-90 h-90 object-cover"
            />
          </div>
          <div className="w-2/3">
            <p className="text-[#253043] text-base mb-2">{testimonial}</p>
            <span className="block font-semibold text-[#1E2E45]">{personName} <span className="font-normal text-[#253043]">- {personTitle}</span></span>
          </div>
        </div>
      </div>
    </section>
  );
} 