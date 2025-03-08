import { navMenu } from '@/constants';
import { logo } from '@/assets';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { AlignJustify } from 'lucide-react';
import { ClassValue } from 'clsx';
export default function Header() {
  return (
    <header className='grid h-16 grid-cols-1 items-center md:h-20 lg:h-24'>
      <div className='container flex items-center justify-between lg:grid lg:grid-cols-[4fr_1fr_1fr]'>
        <div className='flex items-center gap-20'>
          <a
            href=''
            className=''
          >
            <img
              src={logo}
              width={68}
              height={68}
            />
          </a>
          <nav className='max-lg:hidden'>
            <ul className='flex gap-8'>
              {navMenu.map(({ href, label }, index) => (
                <li key={index}>
                  <a
                    className='hover:text-clrBrightBlue underline-offset-8 hover:underline'
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className=''></div>
        </div>
        <div></div>
        <div className='flex justify-end max-lg:hidden'>
          <Button className='bg-clrButton hover:bg-clrDarkIndigo text-foreground cursor-pointer rounded-none px-8 py-6'>
            Get A Quote
          </Button>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size='icon'
              className='bg-clrButton text-foreground hover:bg-clrDarkIndigo lg:hidden'
            >
              <AlignJustify className='' />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className='bg-clrDarkIndigo border-foreground/20 w-56 backdrop-blur-3xl'
            align='end'
          >
            <MobileNav />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}

type MobileNavProps = {
  className?: ClassValue;
};
function MobileNav() {
  return (
    <div className='w-full'>
      <ul className='flex flex-col gap-2 pl-4'>
        {navMenu.map(({ href, label }, index) => (
          <li key={index}>
            <a
              className='hover:text-clrBrightBlue underline-offset-8 hover:underline'
              href={href}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
