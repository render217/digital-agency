import { testimonalsData } from '@/constants';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Testimonals() {
  return (
    <section className='py-10 md:py-16'>
      <div className='container'>
        <h2 className='mb-4 text-center text-2xl font-semibold md:text-3xl md:leading-[42px]'>
          {testimonalsData.title}
        </h2>
        <ul className='grid place-content-center gap-8 py-10 md:grid-cols-2 lg:grid-cols-3'>
          {testimonalsData.cards.map(
            (
              { author: { authorName, authorImage, authorJob }, text },
              index,
            ) => (
              <li
                key={index}
                className='bg-clrDarkIndigo max-w-sm space-y-7 rounded-xs p-8'
              >
                <p className=''>{text}</p>
                <div className='flex items-center gap-4'>
                  <Avatar>
                    <AvatarImage src={authorImage} />
                    <AvatarFallback className='text-sm'>
                      {authorName.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className=''>
                    <h3 className='font-semibold'>{authorName}</h3>
                    <p className='text-clrRegentGrey text-sm'>{authorJob}</p>
                  </div>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
