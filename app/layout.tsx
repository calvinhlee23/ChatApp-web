export const metadata = {
  title: "ChatApp - Home",
  description: "This is Home to ChatApp",
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
