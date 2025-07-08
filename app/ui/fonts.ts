import { Inter, Lusitana } from 'next/font/google';
import Poppins from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    subsets: ['latin'], weight: ['400', '700'],
});


// Custom Poppins Webfont
export const poppins = Poppins({
    src: [
        {
            path: './localFonts/poppins-regular-webfont.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: './localFonts/poppins-regular-webfont.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'swap', // Optimizes font loading
});