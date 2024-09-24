import Link from "next/link";

export default function Header() {
    return (
        <nav className="justify-center">
            <div>
                <div className="text-center">
                    <ul>
                        <li>
                            <Link href="/">
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}