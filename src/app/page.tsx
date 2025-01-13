import FooterComponent from '@/components/footer';
import GaleriaComponent from '@/components/gallery';
import HeaderComponent from '@/components/header';
import InfoComponent from '@/components/Info';
import LocalizationComponent from '@/components/localization';
import StartComponent from '@/components/start';

export default function Home() {
  return (
    <div className='relative w-full max-w-screen-2xl'>
      <HeaderComponent />
      <main className=''>
        <StartComponent />
        <InfoComponent />
        <GaleriaComponent />
        <LocalizationComponent />
      </main>
      <FooterComponent />
    </div>
  );
}