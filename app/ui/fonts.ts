// import { Inter } from 'next/font/google';
// Импортируйте шрифт Inter из следующего модуля/font/Google - это будет ваш основной шрифт

import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
// Затем укажите, какое подмножество вы хотели бы загрузить. В данном случае "латынь":

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });

