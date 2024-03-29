import './globals.css';
import { Urbanist } from 'next/font/google';

import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'FashionTrek | Frontier',
  description: 'FashionTrek Store - The place for all your purchases',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
