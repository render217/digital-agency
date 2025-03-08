import { portofolioData } from '@/constants';
import { Button } from '@/components/ui/button';
export default function Portofolio() {
  return (
    <section className='py-10 md:py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-8 overflow-hidden max-md:place-items-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 md:items-center'>
            <div className='flex flex-col items-center text-center md:items-start md:text-left'>
              <p className='text-clrBrightBlue mb-4 capitalize'>
                {portofolioData.subtitle}
              </p>
              <h2 className='mb-4 max-w-[300px] text-2xl font-semibold md:max-w-[400px] md:text-3xl md:leading-[42px] lg:mx-0'>
                {portofolioData.title}
              </h2>
            </div>
            <div className='text-clrRegentGrey mx-auto flex w-full justify-end text-center md:mx-0 md:text-left'>
              <p className='max-w-lg lg:text-xl'>{portofolioData.text}</p>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-24'>
            {portofolioData.cards.map(({ imgSrc, subtitle, title }, index) => (
              <figure
                key={index}
                className='group relative max-w-fit cursor-pointer'
              >
                <img
                  src={imgSrc}
                  alt=''
                  className=''
                />
                <figcaption className='from-clrRegentGrey absolute bottom-0 w-full space-y-2 bg-gradient-to-b to-gray-500/40 p-4 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-100'>
                  <h3 className='text-sm'>{subtitle}</h3>
                  <p>{title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className='mt-10 flex justify-center'>
          <Button className='bg-clrButton hover:bg-clrDarkIndigo text-foreground cursor-pointer rounded-none px-8 py-6'>
            Discover More Works
          </Button>
        </div>
      </div>
    </section>
  );
}
