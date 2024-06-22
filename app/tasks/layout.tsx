export const metadata = {
  title: "todo app dashBoard",
  description: "Descrição do meu app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
