import css from "./layout.module.css"
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { PropsWithChildren } from 'react';

export const NotFoundLayout = ()=> (
    <>
        <Head>  
            <title>ExtraHand Jobs | 404</title>
        </Head>
        <div className={css.container}>
        <header className={css.header}>
            <h1>
                <span className={css["header-brand"]}>ExtraHand</span> Jobs
            </h1> 
        </header>
        <main className={css["not-found"]}>
            <Image src="/assets/scarecrow.png" alt="" width={655} height={395} />
            <div>
                <h2>I have bad news for you</h2>
                <p>
                    The page you are looking for might be 
                    removed or under maintenance
                </p>
                <Link href="/">
                    <button className={css["back-button"]}>back to home page</button>
                </Link>
            </div>
        </main>
        <footer className={css.footer}>Dominic @ Dev Project</footer>
        </div>
    </>
)