import { brandLogos } from '@/assets';
export default function Brand() {
  return (
    <section className='bg-clrDeepCove py-10 md:py-16'>
      <div className='container'>
        <div className='grid grid-cols-2 items-center justify-between gap-8 md:grid-cols-4'>
          {brandLogos.map((logo, index) => (
            <figure
              key={index}
              className='mx-auto'
            >
              <img
                src={logo}
                alt=''
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
