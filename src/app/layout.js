import './globals.css';

export const metadata = {
  title: 'Flower Animation',
  description: 'Beautiful flower with motivational message',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}