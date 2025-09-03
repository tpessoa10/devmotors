export async function getDataHome() {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}233e05a0-838d-11f0-a68f-abd1b8e9138c/objects/68af7d93a116be3a9e5f2d02?
            pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`, {next: {revalidate: 120}})
        if(!res.ok){
            throw new Error("Failed to fetch data")
        }
        return res.json()
    } catch(err){
        throw new Error("Failed to fetch data")
    }
}

export async function getSubMenu() {
    try {
        const res = await fetch('https://api.cosmicjs.com/v3/buckets/devmotors-production-233e05a0-838d-11f0-a68f-abd1b8e9138c/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=s9q0JMaTXLeLfHxIQlL0JTNW6dJhtTiv9E4pFH28SMf5QfkM8D&depth=1&props=slug,title,', {next: {revalidate: 120}})
        if(!res.ok){
            throw new Error("Failed to fetch menu data")
        }
        return res.json()
    } catch(err){
        console.log('erro ', err)
        throw new Error("Failed to fetch menu data")
    }
}

export async function getItemBySlug(itemSlug:string) {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

    const queryParams = new URLSearchParams({
        query: JSON.stringify({
            slug: itemSlug
        }),
        props: 'slug, title, content, metadata',
        read_key: process.env.READ_KEY as string
    })

    const url = `${baseUrl}?${queryParams.toString}`

    try{
        const res = await fetch(url, {next:{revalidate: 120}})
        if(!res.ok){
            throw new Error("Failed get item by slug")
        }
        return res.json()
    }catch(err){
        throw new Error("Failed get item by slug")
    }
}

//objects?pretty=true&query=%7B%22type%22%3A%22
//pages%22%7D&limit=10&skip=0&read_key=s9q0JMaTXLeLfHxIQlL0JTNW6dJhtTiv9E4pFH28SMf5QfkM8D&depth=1&props=slug%2Ctitle&sort=-order