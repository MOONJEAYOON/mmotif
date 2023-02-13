import Header from './header'
import MainContent from './mainContent'
import Aside from './aside'
import { useRouter } from 'next/router'
import { css, Global } from '@emotion/react';
import main from '../styles/main';
import contents from '../styles/contents';

export default function Layout({ children }:any) {
    const router = useRouter();
    console.log("==========router==========="+router.pathname);
    return (
        <>
            {
                router.pathname == '/'
                ? <Global styles={css`${main}`} />
                : <Global styles={css`${contents}`} />
            }
            <div id="wrap" className={router.pathname == '/' ? 'main' : 'sub'}>
                <Header />
                <div id={"container"}>{children}</div>
                {
                    router.pathname == '/'
                        ? <MainContent />
                        : null
                }

                <Aside />
            </div>

        </>

    )
}