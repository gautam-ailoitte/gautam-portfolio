import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/app/context/ThemeContext';
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
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}