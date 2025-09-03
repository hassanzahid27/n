import React from "react";
import Sidebar from "./dashboard/Sidebar";
import Navbar from "./dashboard/Navbar";

function layout({ children }) {
  return (
    <main className="h-screen  flex">
      <aside className="  lg:w-[300px] h-full max-h-screen overflow-y-auto">
        <Sidebar />
      </aside>

      <section className="  w-full h-screen flex-1 overflow-y-hidden">
        <header className="  ">
          {" "}
          <Navbar />
        </header>

        <div className="overflow-y-auto flex-1 max-h-[calc(100vh-102px)]">
          {children}
        </div>
      </section>
    </main>
  );
}

export default layout;
