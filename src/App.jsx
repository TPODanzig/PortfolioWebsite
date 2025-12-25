import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-(--bg) text-(--text)">
      <Header />

      <main className="flex-1 container mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}