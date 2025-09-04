import { PostProps } from '@/utils/post.type'
import style from './style.module.scss'
import { getItemBySlug } from '@/utils/actions/get-data'
import { Hero } from '@/components/hero'
import { Phone } from 'lucide-react'
import { Container } from '@/components/container'

export default async function Page({ params: { id } }: {
    params: { id: string }
}) {
    const { object }: PostProps = await getItemBySlug(id)
    return (
        <div>
            <Hero icon={<Phone size={24} color="#fff" />}
                bannerUrl={object[0].metadata.banner.url} buttonUrl={object[0].metadata.button.url} buttonTitle={object[0].metadata.button.title} heading={object[0].metadata.description.text} />
            <Container>
                <section className={style.about}>
                    <article className={style.innerAbout}>
                        {object[0].metadata.description.title}
                    </article>
                </section>
            </Container>
        </div>
    )
}