import Layout from '../components/layout'
import { css, Global } from '@emotion/react';
import reset from '../styles/reset';

export default function MyApp({ Component, pageProps }:any) {
    return (
        <>
            <Global styles={css`${reset}`} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>

    )
}