'use client';

import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { Instagram } from 'react-feather';

export default function StartComponent() {
    useEffect(() => {
        gsap.fromTo('.start_text', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2
        });
        gsap.fromTo('.instagram_icon', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 1
        });
        gsap.fromTo('.start_image', {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: 1
        });
    }, []);
    return (
        <section className='relative w-full h-screen flex flex-col-reverse justify-center items-center gap-6 cursor-default md:flex-row'>
            <div className='absolute w-full h-screen bg-[url("/images/img_bg_start.png")] bg-cover opacity-40 -z-10' />
            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <Image
                    className='opacity-0 start_image'
                    src='/images/img_start.jpg'
                    alt='Imagem Bancada Dolbytec'
                    width={700}
                    height={700}
                />
            </div>
            <div className='w-full md:w-1/2 flex flex-col justify-center items-center gap-8 text-center'>
                <p className='text-base md:text-2xl opacity-0 start_text'>
                    Reparo de placa de vídeo, notebooks e all In one.
                </p>
                <h1 className='text-xl md:text-4xl font-bold opacity-0 start_text'>
                    Seja bem-vindo a Dolbytec
                </h1>
                <p className='max-w-lg text-center text-sm md:text-lg opacity-0 start_text'>
                    Trabalhamos com reparo de alto nível de Placas de vídeo,
                    Notebooks e All in one com laboratório equipado para procedimentos
                    inovadores e garantir um conserto seguro do seu equipamento.
                </p>
                <div className='flex gap-2 text-base md:text-2xl items-center pb-4 md:pb-0'>
                    <p className='opacity-0 start_text'>
                        Sega-nos
                    </p>
                    <Link
                        className='text-fuchsia-600 hover:text-fuchsia-400 duration-300'
                        href='https://www.instagram.com/dolbytec/'
                        target='_blank'
                    >
                        <Instagram className='w-6 h-6 md:w-8 md:h-8 opacity-0 instagram_icon' />
                    </Link>
                </div>
            </div>
        </section>
    );
}