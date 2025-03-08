import {
  avatars,
  completedIcon,
  grahicDesign,
  happyClientIcon,
  lightBulbIcon,
  logo,
  magicStick,
  portofolios,
  rocketIcon,
  shapeVector,
  uxuiIcon,
} from '@/assets';

import { Facebook, Twitter, Github } from 'lucide-react';

export const navMenu = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Pricing',
    href: '#',
  },
  {
    label: 'Portofolio',
    href: '#',
  },
  {
    label: 'Case Studies',
    href: '#',
  },
  {
    label: 'About',
    href: '#',
  },
];

export const heroData = {
  subTitle: 'Digital Agency',
  title: 'Providing brilliant ideas for your business',
  text: 'The center of any administration is connected to the advantage it offers to the purchasers. In this manner in purchasing advertising.',
};

export const featureData = {
  title: 'Creative solutions deliver profits to your door',
  features: [
    {
      icon: uxuiIcon,
      title: 'UX/UI DESIGN',
      text: 'User interface (UI) design is the process designers use to build interfaces in software or computerized devices.',
    },
    {
      icon: grahicDesign,
      title: 'GRAPHIC DESIGN',
      text: 'Graphic design is a craft where professionals create visual content to communicate messages.',
    },
    {
      icon: magicStick,
      title: 'PHOTO RETOUCHING',
      text: 'In photography, to retouch is to remove certain defects from an image. This can be minor objects such.',
    },
  ],
};

export const achievementData = {
  title: 'Setting the Standard in Device Programming.',
  text: 'The center of any administration is connected to the advantage it offers to the purchasers. In this manner in purchasing advertising.',
  achievements: [
    {
      icon: happyClientIcon,
      label: 'Happy Clients',
      value: '1200+',
    },
    {
      icon: completedIcon,
      label: 'Projects Completed',
      value: '1300+',
    },
    {
      icon: lightBulbIcon,
      label: 'Running Project',
      value: '180+',
    },
  ],
};

export const portofolioData = {
  title: 'Adding the word called success to your brand',
  text: 'The center of any administration is connected to the advantage it offers to the purchasers. In this manner in purchasing advertising.',
  subtitle: 'OUR PORTFOLIO',
  cards: [
    {
      title: 'App Development',
      subtitle: 'Product Design',
      imgSrc: portofolios[0],
    },
    {
      title: 'App Development',
      subtitle: 'Product Design',
      imgSrc: portofolios[1],
    },
    {
      title: 'App Development',
      subtitle: 'Product Design',
      imgSrc: portofolios[2],
    },
    {
      title: 'App Development',
      subtitle: 'Product Design',
      imgSrc: portofolios[3],
    },
    {
      title: 'App Development',
      subtitle: 'Product Design',
      imgSrc: portofolios[4],
    },
    {
      title: 'App Development',
      subtitle: 'Product Design',
      imgSrc: portofolios[5],
    },
  ],
};

export const testimonalsData = {
  title: 'What Clients Say',
  cards: [
    {
      author: {
        authorName: 'Sabrina M. Caldwell',
        authorImage: avatars[0],
        authorJob: 'Product Designer',
      },
      text: 'We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth.',
    },
    {
      author: {
        authorName: 'Patrick D. Gilchrist',
        authorImage: avatars[1],
        authorJob: 'Graphic Designer',
      },
      text: 'We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth.',
    },
    {
      author: {
        authorName: 'Helen W. Fisher',
        authorImage: avatars[2],
        authorJob: 'UI Designer',
      },
      text: 'We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth.',
    },
  ],
};

export const ctaData = {
  subText: "Let's Talk?",
  title: 'Sharing you and your company with the world',
  image: rocketIcon,
  backgroundImage: shapeVector,
};

export const footerData = {
  logo: logo,
  links: [
    {
      label: 'Home',
      href: '#',
    },
    {
      label: 'Feature',
      href: '#',
    },
    {
      label: 'Blog',
      href: '#',
    },
    {
      label: 'Pricing',
      href: '#',
    },
    {
      label: 'Testimonal',
      href: '#',
    },
  ],
};

export const socialLinks = [
  {
    label: 'Facebook',
    Icon: Facebook,
  },
  {
    label: 'X',
    Icon: Twitter,
  },
  {
    label: 'Google',
    Icon: Github,
  },
];
