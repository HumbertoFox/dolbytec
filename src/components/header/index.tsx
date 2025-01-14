'use client';

import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import {
    useEffect,
    useRef
} from 'react';

export default function HeaderComponent() {
    const headerRef = useRef(null);
    const logoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const header = headerRef.current;
            const logo = logoRef.current;

            if (window.scrollY > 0) {
                gsap.to(header, {
                    backgroundColor: '#0c101c',
                    duration: 0.3,
                });
                gsap.to(logo, {
                    width: 120,
                    duration: 0.3,
                });
            } else {
                gsap.to(header, {
                    backgroundColor: 'transparent',
                    duration: 0.3,
                });
                gsap.to(logo, {
                    width: 220,
                    duration: 0.3,
                });
            };
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header
            className='w-full max-w-screen-2xl fixed z-10 bg-[#0c101c]'
            ref={headerRef}
        >
            <nav className='w-full flex justify-between items-center p-3'>
                <Link href='#'>
                    <Image
                        src={'/images/Logo_dolbytec.png'}
                        width={120}
                        height={120}
                        alt='Logo Dolbytec'
                        ref={logoRef}
                    />
                </Link>
                <ul className='flex justify-center items-center gap-5'>
                    <li className='hidden md:block border-b-2 border-b-transparent hover:border-b-2 hover:border-white duration-500'>
                        <Link
                            className='p-3'
                            href='#'
                        >
                            Início
                        </Link>
                    </li>
                    <li className='hidden md:block border-b-2 border-b-transparent hover:border-b-2 hover:border-white duration-500'>
                        <Link
                            className='p-3'
                            href='#info'
                        >
                            Serviços
                        </Link>
                    </li>
                    <li className='hidden md:block border-b-2 border-b-transparent hover:border-b-2 hover:border-white duration-500'>
                        <Link
                            className='p-3'
                            href='#galeria'
                        >
                            Galeria
                        </Link>
                    </li>
                    <li className='hidden md:block border-b-2 border-b-transparent hover:border-b-2 hover:border-white duration-500'>
                        <Link
                            className='p-3'
                            href='#localizacao'
                        >
                            Localização
                        </Link>
                    </li>
                    <li className='text-sm md:text-base border-b-2 border-b-transparent hover:border-b-2 hover:border-white duration-500'>
                        <Link
                            className='p-3'
                            href='https://www.sistema.dolbytec.com/sistema/index.php/mine'
                            target='_blank'
                        >
                            Área do Cliente
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}