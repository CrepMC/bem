export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <script src='http://localhost:8097'></script>
      <script src='http://192.168.1.183:8097'></script>
      <body>{children}</body>
    </html>
  );
}
