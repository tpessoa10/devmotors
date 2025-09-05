import { PostProps } from '@/utils/post.type'
import style from './style.module.scss'
import { getItemById } from '@/utils/actions/get-data'
import { Hero } from '@/components/hero'
import { Phone } from 'lucide-react'
import { Container } from '@/components/container'
import { CosmicObject } from '@/utils/menu.type'
import Image from 'next/image'

export default async function Page({ params: { id } }: { params: { id: string } }) {
    console.log('dadad', id)

    const object:CosmicObject = await getItemById(id);
    console.log('ob', object)

    if (!object) {
        return <p style={{ paddingTop: '100px' }}>Não existe</p>;
    }

    return (
        <div>
            <Hero
                icon={<Phone size={24} color="#fff" />}
                bannerUrl={object.metadata.banner.url}
                buttonUrl={object.metadata.button.url}
                buttonTitle={object.metadata.button.title}
                heading={object.title}
            />
            <Container>
                <section className={style.about}>
                    <article className={style.innerAbout}>
                        <h1>{object.metadata.description.title}</h1>
                        <p>{object.metadata.description.text}</p>
                    </article>
                    <div className={style.bannerAbout}>
                        <Image fill src={object.metadata.banner.url} quality={100} alt={object.title} className={style.imageAbout}/>
                    </div>
                </section>
            </Container>
        </div>
    );
}