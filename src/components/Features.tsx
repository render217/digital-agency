import { featureData } from '@/constants';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
export default function Features() {
  return (
    <section className='py-10 md:py-16'>
      <div className='container'>
        <h2 className='mx-auto max-w-[300px] text-center text-2xl font-semibold md:max-w-[400px] md:text-3xl md:leading-[42px]'>
          {featureData.title}
        </h2>
        <ul className='flex flex-row flex-wrap justify-center gap-10 py-10 md:py-16'>
          {featureData.features.map(({ icon, text, title }, index) => (
            <Card
              key={index}
              className='bg-clrDeepCove max-w-xs border-2 border-purple-400/30 text-center md:rotate-[5deg]'
            >
              <CardHeader className='mx-auto'>
                <figure>
                  <img
                    src={icon}
                    alt=''
                  />
                </figure>
              </CardHeader>
              <CardTitle className='text-xl'>{title}</CardTitle>
              <CardContent className='pb-8'>
                <CardDescription className='md:text-lg'>{text}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
