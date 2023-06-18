"use client"

import Link from 'next/link'
import styles from './Navbar.module.css'
import { useState } from 'react'

import { MenuOutlined, MenuOpenOutlined } from '@mui/icons-material'

export default function Navbar() {
    const [toggleNav, setToggleNav] = useState(false)

    return <nav className={styles.container}>
        <div className="flex justify-between items-center gap-x-2 flex-wrap">
            <p className='tracking-widest text-teal font-semibold'><Link href='/'>Portfolio</Link></p>
            <button className='md:hidden' onClick={() => setToggleNav(prev => !prev)}>
                {toggleNav ? <MenuOpenOutlined /> : <MenuOutlined />}
            </button>
            <ul className={`tracking-wide hidden md:block ${toggleNav ? styles.verticalView : null}`}>
                <li><Link href='/projects'>Projects</Link></li>
                <li><Link href='/experience'>Experience</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </div>
    </nav>
}