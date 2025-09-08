import { PostProps } from '@/utils/post.type'
import style from './style.module.scss'
import { getItemById } from '@/utils/actions/get-data'
import { Hero } from '@/components/hero'
import { Phone } from 'lucide-react'
import { Container } from '@/components/container'
import { CosmicObject } from '@/utils/menu.type'
import Image from 'next/image'
import { Metadata } from 'next'

export async function generateMetadata({ params: { id } }: { params: { id: string } }): Promise<Metadata> {
    try {
        const object: CosmicObject = await getItemById(id)
            .catch(() => {
                return {
                    title: "DevMotors - Oficina de carros"
                }
            })
        return {
            title: `DevMotors - ${object.title}`,
            description: `${object.metadata.description.text}`,
            keywords:['devmotors', 'troca de óleo'],
            openGraph: {
                images: [`${object.metadata.banner.url}`]
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: true,
                    noimageindex: true
                }
            }
        }
    } catch (err) {
        return {
            title: "DevMotors - Oficina de carros"
        }
    }
}

export default async function Page({ params: { id } }: { params: { id: string } }) {

    const object: CosmicObject = await getItemById(id);

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
                        <Image priority sizes='(max-width:700px) 100vw, (max-width:1024px) 75vw, 50vw' fill src={object.metadata.banner.url} quality={100} alt={object.title} className={style.imageAbout} />
                    </div>
                </section>
            </Container>
        </div>
    );
}