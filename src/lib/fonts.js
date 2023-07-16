import { Chela_One, Noto_Sans_TC } from 'next/font/google';

export const chelaOne = Chela_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chelaOne',
});

export const notoSansTC = Noto_Sans_TC({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notoSansTC',
});