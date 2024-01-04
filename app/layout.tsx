import './globals.css';
import './data-tables-css.css';
import './satoshi.css';

import Header from '../components/Header';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const isAuthenticated = false;

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="bg-gray-main">

            <div className="flex h-screen overflow-hidden">
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

                <Header />

                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
              </div>
            </div>
        </div>
      </body>
    </html>
  );
}
