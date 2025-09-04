"use client"

import Link from "next/link"
import styles from "./styles.module.scss"
import { X, Menu } from "lucide-react"
import { useEffect, useState } from "react"
import { CosmicResponse } from "@/utils/menu.type"

interface SubMenuProps {
    menu: CosmicResponse
}


export function Submenu({ menu }: SubMenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 728) {
                setIsOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)

        return window.removeEventListener("resize", handleResize)
    }, [])

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    console.log('menu ', menu)

    return (
        <section className={styles.submenu}>
            <div className={styles.submenuIcon} onClick={toggleMenu}>
                <Menu size={34} color="#121212" />
                Menu
            </div>
            <ul className={`${styles.ul} ${isOpen ? styles.open : ''}`}>

                {isOpen && (
                    <button className={styles.closeButton} onClick={toggleMenu}>
                        <X size={54} color="#121212" />
                    </button>
                )}

                {menu.objects.map(item => (
                    <li key={item.slug}>
                        <Link href={`/post/${item.id}`}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}