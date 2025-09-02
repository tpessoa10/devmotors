import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/home/footer";
import { Services } from "@/components/home/services";
import { Submenu } from "@/components/home/submenu";
import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { MenuProps } from "@/utils/menu.type";
import { Phone } from 'lucide-react';


export default async function Home() {
  const { object }:HomeProps = await getDataHome()
  const menu: MenuProps = await getSubMenu()
  console.log('menu ', menu)
  return (
    <div>
      {menu.objects.length > 0 && (
        <Submenu menu={menu}/>
      )}   
      <Hero icon={<Phone size={24} color="#fff"/>}
       bannerUrl={object.metadata.banner.url} buttonUrl={object.metadata.cta_button.url} buttonTitle={object.metadata.cta_button.title} heading={object.metadata.heading}/>   
      <Container>
        <Services object={object}/>
        <Footer object={object}/>
      </Container>
    </div>
  );
}
