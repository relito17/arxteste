interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="px-4 py-2 bg-gradient-to-r from-[#FF6A00]/10 to-[#f9d342]/10 rounded-full border border-[#FF6A00]/20">
        <span className="text-sm font-medium gradient-text">{title}</span>
      </div>
    </div>
  );
};

export default SectionTitle;