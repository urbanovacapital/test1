import '../styles/globals.css';

export const metadata = {
  title: 'Urbanova Capital',
  description: 'Invierte en propiedades reformadas con alta rentabilidad.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}