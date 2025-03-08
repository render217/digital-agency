import { Button } from '@/components/ui/button';
import { ctaData } from '@/constants';

export default function Cta() {
  return (
    <section className='bg-clrDeepCove relative py-10 sm:pl-24 md:py-16'>
      <div className='container grid grid-cols-1 items-center gap-8 sm:grid-cols-2'>
        <div className='mx-auto text-center sm:mx-0 sm:text-left'>
          <p className='text-clrBrightBlue mb-4'>{ctaData.subText}</p>
          <h2 className='max-w-[300px] text-2xl font-semibold md:max-w-[400px] md:text-3xl md:leading-[42px]'>
            {ctaData.title}
          </h2>
        </div>
        <div className='flex justify-center sm:justify-end'>
          <Button className='bg-clrButton hover:bg-clrDarkIndigo text-foreground cursor-pointer rounded-none px-8 py-6'>
            Discover More Works
          </Button>
        </div>
      </div>
      <img
        className='absolute top-0 hidden sm:left-0 sm:block'
        src={ctaData.image}
      />
      <img
        className='absolute inset-0 h-full w-full object-cover opacity-5'
        src={ctaData.backgroundImage}
      />
    </section>
  );
}
