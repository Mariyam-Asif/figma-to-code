import SectionTemplate from "./components/SectionTemplate";

 export default function Customization(){
    return (
 <SectionTemplate
 backgroundColor="white"
 textColor="black"
 buttonBgColor="#4F9CF9"
 buttonTextColor="white"
 layout="right" 
 heading="Customise it to your needs"
 paragraph={
   <>
     Customise the app with plugins, custom themes, and multiple text editors (Rich <br/>Text or
     Markdown). Or create your own scripts and plugins using the Extension <br /> API.
   </>
 }
  buttonText="Let's Go"
 headingStyles={{
   fontSize: "72px",
   fontWeight: "700",
   lineHeight: "87.14px",
   tracking: "-0.02em"
}}   
paragraphStyles={{
   fontSize:"18px",
   fontWeight: "400",
   lineHeight: "30px",
   tracking: "-0.02em"
}}
gap="98px"
 imageSize={{ width: 714, height: 532.09 }} 
 contentSize={{ width: 669, height: 411 }} 
/>
)
}