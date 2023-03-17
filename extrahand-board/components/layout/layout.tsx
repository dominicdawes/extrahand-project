import Head from 'next/head'
import { PropsWithChildren } from 'react';
import css from "./layout.module.css"

export interface LayoutProps extends PropsWithChildren {
    title: string;
}

export const Layout: React.FC<LayoutProps> = ({title, children})=> (
    <>
        <Head>  
            <title>ExtraHand Jobs | {title}</title>
        </Head>
            <div className={css.container}>
            <header className={css.header}>
                <h1>
                    <span className={css['header-brand']}>ExtraHand</span> Jobs
                </h1>
            </header>
            <main className={css.main}>{children}</main>
            <footer className={css.footer}>Dominic @ Dev Project</footer>
        </div>
    </>
)