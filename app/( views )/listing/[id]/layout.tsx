export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full px-4 py-4">
        <div className="max-w-7xl mx-auto items-center justify-between">
            {children}
        </div>
    </div>
  )
}