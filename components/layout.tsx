import Header from './header'
import { useRouter } from 'next/router'

export default function Layout({ children }:any) {
    const router = useRouter();
    return (
        <div className={router.pathname == '/' ? 'main' : 'sub'}>
            <Header />
            <div id={"container"}>{children}</div>
        </div>
    )
}