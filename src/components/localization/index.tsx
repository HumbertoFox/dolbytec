export default function LocalizationComponent() {
    return (
        <section
            className='w-full min-h-[calc(100vh-144px)] flex flex-col items-center justify-start gap-5 text-center py-24 cursor-default'
            id='localizacao'
        >
            <h5 className='text-lg md:text-2xl'>
                Localização
            </h5>
            <p className='text-sm md:text-xl p-1'>
                Av. Fagundes Varela,
                445 - Loja 8 Interna,
                Galeria Santorine - Jardim Atlântico,
                Olinda - PE,
                CEP - 53140-080 - BR.
            </p>
            <iframe
                className='w-full p-2 md:p-0'
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31609.584551392778!2d-34.839952!3d-7.9784690000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab3d76e79ee0c5%3A0x70be8439e6a5d425!2sGaleria%20Santorini!5e0!3m2!1spt-BR!2sus!4v1736717271439!5m2!1spt-BR!2sus'
                loading='lazy'
                width={1536}
                height={500}
                title='Localização da Dolbytec'
            />
        </section>
    );
}