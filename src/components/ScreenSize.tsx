export default function ScreenSize() {
  return (
    <div className='fixed top-0 left-1/2 -translate-x-1/2 transform'>
      <div className='text-foreground bg-background px-8 py-1'>
        <div className='block sm:hidden'>XS</div>
        <div className='hidden sm:block md:hidden'>SM</div>
        <div className='hidden md:block lg:hidden'>MD</div>
        <div className='hidden lg:block xl:hidden'>LG</div>
        <div className='hidden xl:block 2xl:hidden'>XL</div>
        <div className='hidden 2xl:block'>2XL</div>
      </div>
    </div>
  );
}
