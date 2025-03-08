import { logo } from '@/assets';
import { navMenu, socialLinks } from '@/constants';

export default function Footer() {
  return (
    <footer className='py-10 md:py-16'>
      <div className='container'>
        <figure className='flex justify-center'>
          <img
            src={logo}
            className=''
            alt=''
            width={164}
          />
        </figure>
        <nav>
          <ul className='my-10 flex flex-wrap items-center justify-center gap-8'>
            {navMenu.map(({ href, label }, index) => (
              <li key={index}>
                <a
                  href={href}
                  className='hover:text-clrBrightBlue text-clrRegentGrey text-lg hover:underline hover:underline-offset-8'
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex flex-wrap items-center justify-center gap-8'>
          <div className='bg-clrRegentGrey h-0.5 w-full flex-1'></div>
          {socialLinks.map(({ Icon }, index) => (
            <div
              key={index}
              className='border-clrRegentGrey w-fit rounded-full border-2 p-2'
            >
              <Icon className='text-clrRegentGrey' />
            </div>
          ))}
          <div className='bg-clrRegentGrey h-0.5 w-full flex-1'></div>
        </div>
      </div>
    </footer>
  );
}
