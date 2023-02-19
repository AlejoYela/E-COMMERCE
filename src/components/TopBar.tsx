import Link from "next/link";
import Image from "next/image";

export function TopBar(){
    return (<div>
        <ul>
            <li>
                <Link href="#">+38 (050) 12 34 567</Link>
            </li>
            <li>
                <Link href="#">Ukraine, Kyiv,Khreshchatyk 1</Link>
            </li>
            <li>
                <Link href="#">All week 24/7</Link>
            </li>
        </ul>

        <ul>
            <li>
                <Link href="#"><Image src="/ico-small-facebook.svg" width={14} height={14} alt={""}></Image></Link>
            </li>
            <li>
                <Link href="#"><Image src="/ico-small-twitter.svg" width={14} height={14} alt={""}></Image></Link>
            </li>
            <li>
                <Link href="#"><Image src="/ico-small-instagram.svg" width={14} height={14} alt={""}></Image></Link>
            </li>
            <li>
                <Link href="#"><Image src="/ico-small-pinterest.svg" width={14} height={14} alt={""}></Image></Link>
            </li>
        </ul>
  </div>);
}