import { achievementData } from '@/constants';

export default function Achievements() {
  return (
    <section className='bg-clrDeepCove py-10 md:py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 place-items-center gap-8 overflow-hidden lg:grid-cols-2'>
          <div className='grid grid-cols-3 gap-4'>
            {achievementData.achievements.map(
              ({ icon, label, value }, index) => (
                <figure
                  key={index}
                  className='relative'
                >
                  <img
                    src={icon}
                    alt=''
                    className='size-full object-cover'
                  />
                  <div className='absolute inset-0 flex flex-col items-center justify-center space-y-2 text-center text-sm sm:text-base'>
                    <p>{label}</p>
                    <p>{value}</p>
                  </div>
                </figure>
              ),
            )}
          </div>

          <div className='-order-1 flex w-full flex-col text-center lg:order-2 lg:ml-20 lg:text-left'>
            <h2 className='mx-auto mb-4 max-w-[300px] text-2xl font-semibold md:max-w-[400px] md:text-3xl md:leading-[42px] lg:mx-0'>
              {achievementData.title}
            </h2>
            <p className='text-clrRegentGrey mx-auto max-w-lg lg:mx-0'>
              {achievementData.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
