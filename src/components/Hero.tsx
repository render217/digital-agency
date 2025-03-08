import { heroBanner, heroBannerVector } from '@/assets';
import { heroData } from '@/constants';
import { Button } from './ui/button';
export default function Hero() {
  return (
    <section className='py-10 md:py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_0.8fr]'>
          <div className='text-center lg:text-left xl:max-w-2xl'>
            <p className='text-clrBrightBlue bg-clrDarkIndigo border-foreground/20 mx-auto mb-4 max-w-max rounded-md px-2 py-1 text-sm capitalize backdrop-blur-3xl lg:mx-0'>
              {heroData.subTitle}
            </p>
            <h1 className='mb-4 text-4xl leading-tight font-semibold md:mb-8 md:text-6xl lg:mb-6 lg:text-6xl xl:mb-8'>
              {heroData.title}
            </h1>
            <p className='text-clrRegentGrey border-l-clrBrightBlue border-l-4 pl-5 md:text-xl xl:max-w-xl xl:leading-relaxed'>
              {heroData.text}
            </p>
            <div className='mt-6 md:mt-10 xl:mt-12'>
              <Button
                variant={'outline'}
                className='border-foreground hover:bg-clrDarkIndigo rounded-none bg-transparent px-6 py-6'
              >
                Our portofolio
              </Button>
            </div>
          </div>
          <figure className='relative mx-auto mt-8 max-w-sm overflow-hidden md:mt-0 md:hidden lg:block lg:max-w-max'>
            <img
              src={heroBanner}
              alt=''
              className='invisible'
            />
            <img
              src={heroBanner}
              className='absolute inset-0 top-5 lg:top-16 xl:top-8'
              alt=''
            />
            <img
              className='absolute inset-0 -top-16 -z-10 object-contain lg:-top-10 xl:-top-28'
              src={heroBannerVector}
            />
          </figure>
        </div>
      </div>
    </section>
    // <section>
    //   <div className='container py-10'>
    //     <div className='grid grid-cols-1 md:grid-cols-[1fr_0.8fr] lg:px-[5%]'>
    //       <div className='mx-auto max-w-md space-y-6 text-center md:mx-0 md:text-left xl:max-w-lg xl:space-y-10'>
    //         <p className='text-clrBrightBlue bg-clrDarkIndigo border-foreground/20 mb-2 w-fit rounded-full px-2 py-1 text-xs capitalize max-md:mx-auto'>
    //           {heroData.subTitle}
    //         </p>
    //         <h1 className='text-4xl font-semibold md:leading-tight lg:text-5xl'>
    //           {heroData.title}
    //         </h1>
    //         <p className='text-clrRegentGrey border-l-clrBrightBlue mb-8 border-l-4 pl-4 lg:ml-8'>
    //           {heroData.text}
    //         </p>
    //         <Button
    //           variant={'outline'}
    //           className='border-foreground hover:bg-clrDarkIndigo mt-4 cursor-pointer rounded-none bg-transparent px-6 py-6 font-normal'
    //         >
    //           Our portofolio
    //         </Button>
    //       </div>
    //       <figure className='relative mt-8 overflow-hidden max-md:mx-auto max-md:max-w-sm md:mt-0'>
    //         <img
    //           src={heroBanner}
    //           alt=''
    //           className='invisible'
    //         />
    //         <img
    //           src={heroBanner}
    //           className='absolute inset-0'
    //           alt=''
    //         />
    //         <img
    //           className='absolute inset-0 -top-10 -z-10 object-contain'
    //           src={heroBannerVector}
    //         />
    //       </figure>
    //     </div>
    //   </div>
    // </section>
  );
}

{
  /* <figure className='relative h-[342px] w-[400px] overflow-hidden'>
            <img
              src={heroBanner}
              className='absolute inset-0'
              alt=''
            />
            <img
              className='absolute inset-0 -top-20 -z-10 object-contain'
              src={heroBannerVector}
            />
          </figure> */
}
