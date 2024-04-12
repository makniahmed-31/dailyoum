export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-sky-500 ">
      {children}
    </div>
  );
}
