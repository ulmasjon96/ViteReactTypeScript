import Navbar from "../Components/Navbar";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">{children}</main>
      <footer className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} My App
      </footer>
    </div>
  );
};
