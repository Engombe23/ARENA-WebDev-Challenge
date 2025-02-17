'use client'

import Link from "next/link";
import Image from "next/image";

const Navbar = () => (
  <div className="container">
    <nav className="flex justify-between items-center p-6 shadow-md" style={{backgroundColor: '#FFA50B'}}>  
      <div className="navbar">
        <Image src={"/arena-logo.png"} alt="Logo" width={100} height={100} className="navbar-image" layout="intrinsic"/>
        <Image src={"/arena.png"} alt="Arena" width={200} height={100} className="navbar-image" layout="intrinsic"/>
      </div>
      <ul className="flex space-x-6">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/venues"}>Venues</Link></li>
      </ul>
    </nav>
  </div>
  
);

export default Navbar;