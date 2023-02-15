import Link from "next/link";

export default function Tab() {
    return(
        <div id="tab">
            <h3>Brouse by Category
                <svg className="icon_Arrow" version="1.0" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 20 11">
                    <path d="M10,11c-0.133,0-0.259-0.055-0.349-0.152L0.127,0.795c-0.179-0.191-0.167-0.491,0.026-0.669
	C0.345-0.052,0.645-0.04,0.825,0.152L10,9.83l9.174-9.678c0.179-0.191,0.48-0.204,0.673-0.026c0.193,0.177,0.205,0.477,0.026,0.669
	L10.35,10.848C10.26,10.945,10.133,11,10,11L10,11z"></path>
                </svg>
            </h3>
            <ul>
                <li>
                    <Link href="/work">ALL</Link>
                </li>
                <li>
                    <Link href="/work?graphic">GRAPHIC</Link>
                </li>
                <li>
                    <Link href="/work?advertising">ADVERTISING</Link>
                </li>
                <li>
                    <Link href="/work?print">PRINT</Link>
                </li>
            </ul>
        </div>
    )
}

