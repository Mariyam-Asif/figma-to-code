import SectionTemplate from "./components/SectionTemplate";
export default function Extension() {
  return (
    <SectionTemplate
      backgroundColor="#043873"
      textColor="white"
      buttonBgColor="#4F9CF9"
      buttonTextColor="white"
      layout="left"
      heading="Use as Extension"
      paragraph={
        <>
          Use the web clipper extension, available on Chrome and Firefox, to
          save web pages <br /> or take screenshots as notes.
        </>
      }
      buttonText="Let's Go"
      headingStyles={{
        fontSize: "72px",
        fontWeight: "700",
        lineHeight: "87.14px",
        tracking: "-0.02em",
      }}
      paragraphStyles={{
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "30px",
        tracking: "-0.02em",
      }}
      gap="98px"
      imageSize={{ width: 686, height: 479 }}
      contentSize={{ width: 697, height: 294 }}
    />
  );
}
