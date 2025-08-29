import { Hero } from "@/components/hero";
import { Submenu } from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { Phone } from 'lucide-react';


export default async function Home() {
  const { object }:HomeProps = await getDataHome()
  return (
    <div>
      <Submenu/>   
      <Hero icon={<Phone size={24} color="#fff"/>}
       bannerUrl={object.metadata.banner.url} buttonUrl={object.metadata.cta_button.url} buttonTitle={object.metadata.cta_button.title} heading={object.metadata.heading}/>     
    </div>
  );
}
