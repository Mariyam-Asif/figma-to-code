import Image from "next/image";
import arrow from "@/public/arrow-vector.png";

type SectionTemplateProps = {
  backgroundColor: string;
  textColor: string;
  buttonBgColor: string;
  buttonTextColor: string;
  layout: "left" | "right";
  heading: string;
  paragraph: string | JSX.Element;
  buttonText: string;
  imageSize: { width: number; height: number };
  contentSize: { width: number; height: number };
  headingStyles: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    tracking: string;
  };
  paragraphStyles: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    tracking: string;
  };
  gap?: string;
};

export default function SectionTemplate({
  backgroundColor,
  textColor,
  buttonBgColor,
  buttonTextColor,
  layout,
  heading,
  paragraph,
  buttonText,
  imageSize,
  contentSize,
  headingStyles,
  paragraphStyles,
  gap = "0px",
}: SectionTemplateProps) {
  return (
    <div
      className={`py-[140px] px-4 md:px-[220px] flex items-center justify-center`}
      style={{ backgroundColor }}
    >
      <div
        className={`flex items-center justify-between ${
          layout === "right" ? "flex-row-reverse" : ""
        } `}
        style={{ color: textColor, gap }}
      >
        {/* Text content */}
        <div
          className="flex flex-col justify-center"
          style={{ width: contentSize.width, height: contentSize.height }}
        >
          <h2
            className="mb-6"
            style={{
              fontSize: headingStyles.fontSize,
              fontWeight: headingStyles.fontWeight,
              lineHeight: headingStyles.lineHeight,
              letterSpacing: headingStyles.tracking,
            }}
          >
            {heading}
          </h2>
          <p
            className="font-normal text-lg leading-[30px] tracking-[-0.02em] mb-[60px]"
            style={{
              fontSize: paragraphStyles.fontSize,
              fontWeight: paragraphStyles.fontWeight,
              lineHeight: paragraphStyles.lineHeight,
              letterSpacing: paragraphStyles.tracking,
            }}
          >
            {paragraph}
          </p>
          <div>
            <button
              className="flex items-center font-medium rounded-lg leading-[23px] tracking-[-0.02em] gap-[10px] py-5 px-10"
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            >
              {buttonText}
              <Image
                src={arrow}
                alt="Arrow icon indicating more information"
                className="w-[14px] h-[14px]"
              />
            </button>
          </div>
        </div>

        {/* Image content */}
        <div
          className="bg-[#C4DEFD]"
          style={{ width: imageSize.width, height: imageSize.height }}
        ></div>
      </div>
    </div>
  );
}
