'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {
    useEffect,
    useRef
} from 'react';

export default function InfoComponent() {
    const infoRef = useRef(null);
    const imgtopRef = useRef(null);
    const imgbottomRef = useRef(null);
    const texth2Ref = useRef(null);
    const textptopRef = useRef(null);
    const texth3Ref = useRef(null);
    const textpbottonRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const info = infoRef.current;
        const imgTop = imgtopRef.current;
        const imgBottom = imgbottomRef.current;
        const textH2 = texth2Ref.current;
        const textPtop = textptopRef.current;
        const textH3 = texth3Ref.current;
        const textPbotton = textpbottonRef.current;

        gsap.fromTo(imgTop, {
            opacity: 0,
            y: 200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: info,
                start: 'top center',
            },
        });
        gsap.fromTo(textH2, {
            opacity: 0,
            y: 200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: info,
                start: 'top center',
            },
        });
        gsap.fromTo(textPtop, {
            opacity: 0,
            y: -200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: info,
                start: 'top center',
            },
        });

        gsap.fromTo(imgBottom, {
            opacity: 0,
            y: -200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: info,
                start: 'top center',
            },
        });
        gsap.fromTo(textH3, {
            opacity: 0,
            y: 200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: info,
                start: 'top center',
            },
        });
        gsap.fromTo(textPbotton, {
            opacity: 0,
            y: -200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: info,
                start: 'top center',
            },
        });
    }, []);
    return (
        <section
            className='w-full flex flex-col justify-evenly items-center h-screen cursor-default'
            id='info'
            ref={infoRef}
        >
            <div className='w-full h-[50vh] flex flex-col items-center justify-between pt-0 md:pt-24 md:flex-row'>
                <div className='w-2/4 flex flex-col justify-center items-center gap-8 text-center'>
                    <h2
                        className='max-w-2xl text-xl md:text-3xl font-bold opacity-0'
                        ref={texth2Ref}
                    >
                        Seu notebook não liga não da sinal de vida?
                    </h2>
                    <p
                        className='max-w-lg text-sm md:text-lg opacity-0'
                        ref={textptopRef}
                    >
                        Acabou essa história que queimou a placa mãe do notebook é o fim,
                        com conhecimento em eletrônica fazemos o possível e o impossível para repararmos o aparelho.
                    </p>
                </div>
                <div className='w-2/4 flex justify-center items-center'>
                    <Image
                        className='opacity-0'
                        src='/images/galeria/note_02.jpg'
                        alt='Imagem Bancada notebooks Dolbytec'
                        width={500}
                        height={500}
                        ref={imgtopRef}
                    />
                </div>
            </div>
            <div className='w-full h-[50vh] flex flex-col items-center justify-between bg-[#1b1b39] md:flex-row'>
                <div className='w-2/4 flex flex-col justify-center items-center gap-8 text-center'>
                    <h3
                        className='max-w-2xl text-xl md:text-3xl font-bold opacity-0'
                        ref={texth3Ref}
                    >
                        Já somos referencia nacional em reparo de placas de vídeo.
                    </h3>
                    <p
                        className='max-w-lg text-sm md:text-lg opacity-0'
                        ref={textpbottonRef}
                    >
                        Lembra uma época que placa de vídeo não tinha reparo?
                        Isso mudou,
                        a maioria das placas que chegam aqui tem reparo
                        sim com valor justo e garantia de 90 dias.
                    </p>
                </div>
                <div className='w-2/4 flex justify-center items-center'>
                    <Image
                        className='opacity-0'
                        src='/images/img_video.jpg'
                        alt='Imagem Bancada placas de vídeos Dolbytec'
                        width={500}
                        height={500}
                        ref={imgbottomRef}
                    />
                </div>
            </div>
        </section>
    );
}