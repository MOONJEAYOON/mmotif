import Layout from '../components/layout'
import { PortfolioProvider } from "../context/context";
import { prefix } from "../config/config";
import { css, Global } from '@emotion/react';
import reset from '../styles/reset';

export default function MyApp({ Component, pageProps }:any) {
    return (
        <PortfolioProvider value={ { prefix } }>
            <Global styles={css`${reset}`} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </PortfolioProvider>

    )
}