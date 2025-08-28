import Sidemenu from "./sidemenu";
import BG from "../assets/BG.png";
function Layout({ children }) {
  return (
    <div
      className="flex min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* Sidebar */}
      <Sidemenu />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="p-0 flex-1 overflow-y-auto">{children} </div>
      </div>
    </div>
  );
}

export default Layout;
