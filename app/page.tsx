import Customization from "./customization";
import Extension from "./extension";
import Management from "./management";
import Hero from "./Hero";
import Work from "./work";
import Sponsors from "./sponsors";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Management />
      <Extension />
      <Customization />
      <Work />
      <Sponsors />
    </div>
  );
}
