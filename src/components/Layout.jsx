import React from "react";

const Layout = () => {
  return (
    <div className="container bg-gray-700 mx-auto">
      <div className="flex flex-row flex-wrap">
        <aside className="w-full sm:w-1/3 md:w-1/4 px-2 bg-red-400">
          <div className="sticky top-0 p-4 w-full flex flex-col">
            hxnCodes
            <ul className="flex flex-col overflow-hidden">
              <li>abc</li>
              <li>def</li>
              <li>ghi</li>
            </ul>
          </div>
        </aside>
        <main
          role="main"
          className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 bg-amber-400"
        >
          Main Content
        </main>
      </div>
      <footer className="mt-auto bg-emerald-600">Footer</footer>
    </div>
  );
};

export default Layout;
