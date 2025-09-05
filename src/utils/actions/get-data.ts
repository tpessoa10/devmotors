import { redirect } from "next/navigation"

export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}233e05a0-838d-11f0-a68f-abd1b8e9138c/objects/68af7d93a116be3a9e5f2d02?
            pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`, { next: { revalidate: 120 } })
        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }
        return res.json()
    } catch (err) {
        throw new Error("Failed to fetch data")
    }
}

export async function getSubMenu() {
    try {
        const res = await fetch('https://api.cosmicjs.com/v3/buckets/devmotors-production-233e05a0-838d-11f0-a68f-abd1b8e9138c/objects?pretty=true&query=%7B%22type%22%3A%22pages%22%7D&limit=10&skip=0&read_key=s9q0JMaTXLeLfHxIQlL0JTNW6dJhtTiv9E4pFH28SMf5QfkM8D&depth=1&props=slug%2Ctitle%2Cmetadata%2Cid%2Ctype&sort=-order', { next: { revalidate: 120 } })
        if (!res.ok) {
            throw new Error("Failed to fetch menu data")
        }
        return res.json()
    } catch (err) {
        console.log('erro ', err)
        throw new Error("Failed to fetch menu data")
    }
}

export async function getItemById(id: string) {
  const url = `https://api.cosmicjs.com/v3/buckets/devmotors-production-233e05a0-838d-11f0-a68f-abd1b8e9138c/objects/${id}?read_key=${process.env.READ_KEY}&props=slug,title,metadata,type&depth=1`;

  console.log("URL:", url);

  try {
    const res = await fetch(url, { next: { revalidate: 120 } });
    if (!res.ok) throw new Error("Failed get item by id");

    const data = await res.json();
    console.log("data", data);

    return data.object ?? null; // ⚡ atenção: aqui é "object" (singular)
  } catch (err) {
    console.error(err);
    redirect("/")
    return null;
  }
}

//objects?pretty=true&query=%7B%22type%22%3A%22
//pages%22%7D&limit=10&skip=0&read_key=s9q0JMaTXLeLfHxIQlL0JTNW6dJhtTiv9E4pFH28SMf5QfkM8D&depth=1&props=slug%2Ctitle&sort=-order