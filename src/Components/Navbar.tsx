import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const Navbar = () => {
  const { pathname } = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <h1 className="font-bold text-xl text-blue-600">MyApp</h1>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={clsx(
                  "hover:text-blue-600",
                  pathname === item.path && "text-blue-600 font-semibold"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
