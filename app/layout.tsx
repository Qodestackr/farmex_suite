'use client';
import './globals.css';
import './data-tables-css.css';
import './satoshi.css';
import { useState, useEffect } from 'react';
import Loader from '../components/common/Loader';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Headerzz from '../components/Headerzz';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 0); // Simulation
  }, []);

  const isAuthenticated = false;

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex h-screen overflow-hidden">
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* {isAuthenticated ? (
                  <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  />
                ) : (
                  <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    // isDashboard={false}
                  />
                )} */}
                <Headerzz />

                {/* <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  /> */}

                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
