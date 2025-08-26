import Sidemenu from "./sidemenu";
function Layout({ children }) {
  return (
    <div className="flex h-screen">
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
