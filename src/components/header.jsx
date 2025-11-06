import React from "react";

function Header() {
    return (
        <>
<header className="bg-gray-900">
  <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5 flex">
        <img src="/src/images/logo.png" alt="Kilometer Tracker" className="h-10 w-auto" />
        <h4 className="text-lg/10 font-semibold text-white">Kilometer Tracker</h4>
      </a>
    </div>
    <el-popover-group className="hidden lg:flex lg:gap-x-15">
    <a href="#" className="text-md/6 font-semibold text-white">About</a>
      <a href="#" className="text-md/6 font-semibold text-white">HowToUse</a>
      <a href="#" className="text-md/6 font-semibold text-white">FAQ</a>
      <a href="#" className="text-md/6 font-semibold text-white">Contact</a>
    </el-popover-group>
    {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" className="text-sm/6 font-semibold text-white"><span aria-hidden="true">&rarr;</span></a>
    </div> */}
  </nav>
</header>
        </>
    )
}

export default Header