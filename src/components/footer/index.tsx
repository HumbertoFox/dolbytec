import Image from 'next/image';
import Link from 'next/link';
import {
    Instagram,
    Mail,
    MessageCircle
} from 'react-feather';

export default function FooterComponent() {
    return (
        <footer className='flex flex-col-reverse justify-evenly gap-3 text-sm md:text-base py-2 bg-[#1b1b39] md:flex-row cursor-default'>
            <div className='flex flex-col items-center justify-center'>
                <p>Desenvolvido por:</p>
                <Link
                    href='https://betofoxnet-info.vercel.app/'
                    target='_blank'
                >
                    <Image
                        src='/images/logo_BFN.png'
                        alt='Logo BetoFoxNet_Info'
                        width={70}
                        height={70}
                    />
                </Link>
            </div>
            <address className='flex flex-col items-center justify-center'>
                <p>Endereço:</p>
                <p>Av. Fagundes Varela, 445 - Loja 8 Interna,</p>
                <p>Galeria Santorine - Jardim Atlântico,</p>
                <p>Olinda - PE, CEP - 53140-080 - BR.</p>
            </address>
            <div className='flex flex-col items-center justify-center gap-1'>
                <p>Contato:</p>
                <Link
                    className='flex items-center gap-2 hover:text-green-400 duration-300'
                    href='https://wa.me/5581988339798'
                    target='_blank'
                >
                    <MessageCircle />
                    <p>WhatsApp: (81) 9 8833-9798</p>
                </Link>
                <Link
                    className='flex items-center gap-2 hover:text-blue-400 duration-300'
                    href='mailto:cleciosalba@gmail.com'
                    target='_blank'
                >
                    <Mail />
                    <p>Email: cleciosalba@gmail.com</p>
                </Link>
                <Link
                    className='flex gap-2 hover:text-fuchsia-400 duration-300'
                    href='https://www.instagram.com/dolbytec/'
                    target='_blank'
                >
                    <p>Siga-nos</p>
                    <Instagram className='text-fuchsia-600 hover:text-fuchsia-400 duration-300' />
                </Link>
            </div>
        </footer>
    );
}