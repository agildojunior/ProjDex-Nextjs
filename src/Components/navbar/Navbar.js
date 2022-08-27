import Link from 'next/link'

export default function Navbar() {
    return(
        <ul>
            <li>
                <Link href="#">
                    <a>link1</a>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <a>link2</a>
                </Link>
            </li>
        </ul>
    )
}