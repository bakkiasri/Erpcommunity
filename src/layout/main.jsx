import Sidemenu from "./sidemenu";
import BG from "../assets/BG.png";
import Navbars from "./navbar";
function Layout({ children }) {
  return (
    <div
      className="flex min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* Sidebar */}
      <Sidemenu className="flex" />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-auto ml-0 lg:ml-58">
        <div className="p-0 flex-1 overflow-y-auto">
          <Navbars />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
