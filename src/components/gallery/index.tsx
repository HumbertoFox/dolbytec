'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    Swiper,
    SwiperSlide,
} from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function GalleryComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const selectRef = useRef(null);
    const texth4Ref = useRef(null);
    const textpRef = useRef(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const galeriaRefs = Array.from({ length: 12 }, () => useRef(null));
    const images = [
        'bancada',
        'cuba_00',
        'cuba_01',
        'note_00',
        'note_01',
        'note_02',
        'video_00',
        'video_01',
        'video_02',
        'secretaria',
        'diagrama',
        'recebido'
    ];

    const handleImageClick = (imageName: string) => {
        setSelectedImage(imageName);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const select = selectRef.current;
        const texth4 = texth4Ref.current;
        const textp = textpRef.current;

        gsap.fromTo(texth4, {
            opacity: 0,
            y: 200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: select,
                start: 'top center',
            },
        });
        gsap.fromTo(textp, {
            opacity: 0,
            y: -200,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: select,
                start: 'top center',
            },
        });

        galeriaRefs.forEach((ref, index) => {
            const delay = index * 0.1;

            switch (index % 3) {
                case 0:
                    gsap.fromTo(ref.current, {
                        opacity: 0,
                        x: -200,
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        delay: delay,
                        scrollTrigger: {
                            trigger: select,
                            start: 'top center',
                            toggleActions: 'play none none none',
                        },
                    });
                    break;
                case 1:
                    gsap.fromTo(ref.current, {
                        opacity: 0,
                        x: -200,
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        delay: delay,
                        scrollTrigger: {
                            trigger: select,
                            start: 'top center',
                            toggleActions: 'play none none none',
                        },
                    });
                    break;
                case 2:
                    gsap.fromTo(ref.current, {
                        opacity: 0,
                        x: -200,
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        delay: delay,
                        scrollTrigger: {
                            trigger: select,
                            start: 'top center',
                            toggleActions: 'play none none none',
                        },
                    });
                    break;
                default:
                    break;
            }
        });
    }, [galeriaRefs]);
    return (
        <section
            className='min-h-screen flex flex-col items-center justify-start gap-5 text-center py-24'
            id='galeria'
            ref={selectRef}
        >
            <h4
                className='text-xl md:text-2xl opacity-0'
                ref={texth4Ref}
            >
                Galeria
            </h4>
            <p
                className='text-sm md:text-xl px-1 opacity-0'
                ref={textpRef}
            >
                Aqui mostramos o dia dia do nosso trabalho
                como equipamentos que chegam de outros estados,
                procedimento de reballing,
                atendimento e outros.
            </p>
            <div className='flex justify-center flex-wrap gap-5 imgs_galeria'>
                {images.map((imgName, index) => (
                    <div
                        className='cursor-pointer'
                        key={index}
                        onClick={() => handleImageClick(imgName)}
                    >
                        <Image
                            className='max-h-[275.63px] opacity-0'
                            src={`/images/galeria/${imgName}.jpg`}
                            width={490}
                            height={490}
                            alt={`Imagem ${imgName}`}
                            ref={galeriaRefs[index]}
                        />
                    </div>
                ))}
            </div>
            {isModalOpen && selectedImage && (
                <div className='fixed w-full min-h-screen inset-0 flex justify-center items-center backdrop-blur-md z-20'>
                    <div className='relative w-full h-full flex justify-center items-center'>
                        <button
                            className='absolute top-4 right-4 text-red-400 text-2xl hover:text-red-600 duration-300 z-10'
                            type='button'
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <Swiper
                            className='w-full h-full'
                            modules={[Navigation]}
                            spaceBetween={10}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                            initialSlide={images.indexOf(selectedImage)}
                        >
                            {images.map((imgName, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        className='w-11/12 h-auto m-auto'
                                        src={`/images/galeria/${imgName}.jpg`}
                                        width={800}
                                        height={800}
                                        alt={`Imagem ${imgName}`}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className='swiper-button-next z-10' />
                        <div className='swiper-button-prev z-10' />
                    </div>
                </div>
            )}
        </section>
    );
}