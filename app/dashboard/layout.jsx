import UserNav from "./components/user-nav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex max-h-screen overflow-hidden bg-gray-100">
      {/*Side Panel*/}
      <aside className="w-64 overflow-y-auto border-r bg-white ">
        Side Panel
      </aside>
      <div className="bg-white-500 flex flex-1 flex-col">
        {/*Dashboard Heder*/}
        <header className="bg-white-400 flex h-16 items-center justify-between gap-4 border -b px-6 shadow-sm">
          <h1 className="text-2xl font-bold text-blue-700">MFlix Dashboard</h1>
          <UserNav />
        </header>

        {/*Dashboard Page*/}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
