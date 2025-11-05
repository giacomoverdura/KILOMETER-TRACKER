import React from "react";

function Header() {
    return (
        <>
<header class="bg-gray-900">
  <nav aria-label="Global" class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5 flex">
        <img src="/src/images/logo.png" alt="Kilometer Tracker" class="h-10 w-auto" />
        <h4 class="text-lg/10 font-semibold text-white">Kilometer Tracker</h4>
      </a>
    </div>
    <el-popover-group class="hidden lg:flex lg:gap-x-12">
    <a href="#" class="text-sm/6 font-semibold text-white">Home</a>
      <a href="#" class="text-sm/6 font-semibold text-white">HowToUse</a>
      <a href="#" class="text-sm/6 font-semibold text-white">FAQ</a>
      <a href="#" class="text-sm/6 font-semibold text-white">Contact</a>
    </el-popover-group>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      {/* <a href="#" class="text-sm/6 font-semibold text-white"><span aria-hidden="true">&rarr;</span></a> */}
    </div>
  </nav>
</header>
        </>
    )
}

export default Header