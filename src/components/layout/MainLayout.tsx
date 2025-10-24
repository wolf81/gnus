import Background from "./Background"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen flex justify-center">
      <div className="relative w-full max-w-[80rem] p-6 rounded-2xl">
        <Background />
        {children}
      </div>
    </div>
  )
}