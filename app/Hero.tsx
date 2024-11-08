import SectionTemplate from "./components/SectionTemplate";

export default function Hero() {
  return (
    <>
      <SectionTemplate
        backgroundColor="#043873"
        textColor="white"
        buttonBgColor="#4F9CF9"
        buttonTextColor="white"
        layout="left"
        heading="Get More Done with whitepace"
        paragraph={
          <>
            Project management software that enables your teams to collaborate,
            plan, <br /> analyze and manage everyday tasks.
          </>
        }
        buttonText="Try Whitepace free"
        imageSize={{ width: 824, height: 549 }}
        contentSize={{ width: 656, height: 361 }}
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
      />
    </>
  );
}
