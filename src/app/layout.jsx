import './globals.css';
import { Inter } from 'next/font/google';
import ClientProviders from '@/app/context/ClientProviders';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gautam Kumar | Software Developer',
  description: 'Personal portfolio of Gautam Kumar, a software developer specializing in Flutter and mobile application development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}