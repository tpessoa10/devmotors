import { PostProps } from '@/utils/post.type'
import style from './style.module.scss'
import { getItemBySlug } from '@/utils/actions/get-data'

export default function Page({params: {slug}}: {
    params: { slug: string}
}){
    const { object }: PostProps = getItemBySlug(slug)
    return(
        <div>
            Página {slug}
        </div>
    )
}