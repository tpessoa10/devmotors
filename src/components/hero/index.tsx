import { strict } from 'assert';
import styles from './styles.module.scss'
import Image from 'next/image';
import { ReactNode } from 'react';

interface HeroProps{
    heading:string;
    buttonUrl:string;
    buttonTitle:string;
    bannerUrl:string;
    icon:ReactNode
}

export function Hero({heading, bannerUrl, buttonTitle, buttonUrl, icon}:HeroProps){
    return(
        <main className={styles.main}>
            <div className={styles.containerHero}>
                <h1 className={styles.title}>{heading}</h1>
                <a className={styles.link} target='_blank' href={buttonUrl}>
                    {icon}
                    {buttonTitle}
                </a>
            </div>
            <div className={styles.contentBanner}>
                <Image className={styles.banner} priority quality={100} fill src={bannerUrl} alt={heading}/>
            </div>
        </main>
    )
}