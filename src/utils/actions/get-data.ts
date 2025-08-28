export async function getDataHome() {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}233e05a0-838d-11f0-a68f-abd1b8e9138c/objects/68af7d93a116be3a9e5f2d02?
            pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`)
        if(!res.ok){
            throw new Error("Failed to fetch data")
        }
        return res.json()
    } catch(err){
        throw new Error("Failed to fetch data")
    }
}