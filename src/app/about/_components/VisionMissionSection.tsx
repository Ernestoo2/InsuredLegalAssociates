export type VisionMissionProps = {
  visionHeading: string;
  visionParagraphs: string[];
  missionHeading: string;
  missionParagraphs: string[];
};

export default function VisionMissionSection({
  visionHeading,
  visionParagraphs,
  missionHeading,
  missionParagraphs,
}: VisionMissionProps) {
  return (
    <section className="w-full py-16 bg-[#F6F6F2]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Vision */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <hr className="flex-1 border-t border-[#BDBDBD]" />
            <h3 className="text-2xl md:text-3xl font-bold text-[#1E2E45] whitespace-nowrap">{visionHeading}</h3>
            <hr className="flex-1 border-t border-[#BDBDBD]" />
          </div>
          {visionParagraphs.map((p, i) => (
            <p key={i} className="text-[#253043] text-base mb-4">{p}</p>
          ))}
        </div>
        {/* Mission */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <hr className="flex-1 border-t border-[#BDBDBD]" />
            <h3 className="text-2xl md:text-3xl font-bold text-[#1E2E45] whitespace-nowrap">{missionHeading}</h3>
            <hr className="flex-1 border-t border-[#BDBDBD]" />
          </div>
          {missionParagraphs.map((p, i) => (
            <p key={i} className="text-[#253043] text-base mb-4">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
} 