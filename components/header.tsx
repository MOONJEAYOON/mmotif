import Link from 'next/link'
import { useRouter } from 'next/router'
import Tab from '../components/tab'

export default function Header() {
    const router = useRouter();
    return (
        <>
            <div id="header">
                <div className="header">
                    <h1 className="logo">
                        <Link href="/">
                        <svg version="1.1" id="레이어_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 101.9 97">
                            <g id="XMLID_4_">
                                <path id="XMLID_5_" className="st0" fill="#ffffff" d="M58.4,0l-7.5,22.9L43.5,0h-11l12.9,39.7l-1.1,3.4L30.4,0h-11L0,60l8.9,6.4l16.1-49.6l0,0
		l1.1,3.3l0,0L10.6,67.6l8.8,6.4l12-37l0,0l0,0l7.5,23.1h0.1L31.5,83l8.9,6.3L69.3,0L58.4,0L58.4,0z"></path>
                                <polygon id="XMLID_9_" className="st0" fill="#ffffff" points="93,66.4 101.9,60 82.5,0.1 82.5,0 71.5,0 42.3,90.5 51,96.8 50.9,97 51.1,96.9
		51.2,96.9 51.2,96.9 51.2,96.9 51.2,96.9 51.2,97 51.2,97 51.3,96.7 59.8,90.6 56.5,80.4 57.6,76.9 61.6,89.2 70.4,83 63,60.2
		63,60.2 63,60.2 70.4,37.2 82.4,74.2 91.3,67.7 75.9,20.2 76.9,16.9 	"></polygon>
                            </g>
                        </svg>
                        </Link>
                    </h1>
                    <button data-label="Menu" className="menu-toggle">
                        <span className="icon-bars"></span>
                    </button>
                </div>

                <div id="nav">
                    <div className="nav_wrap">
                        <ul className="menu">
                            <li>
                                <Link href="/about">about</Link>
                            </li>
                            <li>
                                <Link href="/work">work project</Link>
                            </li>
                            <li>
                                <Link href="/contact">contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    router.pathname === '/work'
                    ? <Tab />
                    : null
                }
            </div>
        </>
    )
}