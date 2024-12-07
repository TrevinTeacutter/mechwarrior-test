import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Figtree } from 'next/font/google';

import { getServerEnv } from '@/lib/utils/env';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mechwarrior Test',
  description: 'Pet Mechwarrior Project',
};

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

const { HOT_JAR_SITE_ID, HOT_JAR_VERSION } = getServerEnv();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} antialiased`}>
      <Analytics />
      <SpeedInsights />
      <body>
        <main>{children}</main>
      </body>
      <Script
        id="hotjar"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${HOT_JAR_SITE_ID},hjsv:${HOT_JAR_VERSION}};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
        }}
      />
    </html>
  );
}
