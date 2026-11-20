import './globals.css';

export const metadata = {
  title: 'Kernel Labs · Own your intelligence',
  description:
    'Specialized models on proprietary data, deployed anywhere and owned by you.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
