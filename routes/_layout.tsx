import { PageProps } from "fresh";
import { HeaderNavigation } from "../components/HeaderNavigation.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div className="h-screen grid grid-cols-[2fr_3fr] text-neutral-500">
      <div className="border-r flex flex-col">
        <div className="grow grid place-items-center grid-rows-[2fr_auto_3fr]">
          <div></div>
          <div className="flex flex-col items-center">
            <img src="/logo.svg" alt="" className="size-40" />
            <h1 className="text-4xl font-bold text-neutral-700">BLOG</h1>
            <p className="py-[14px]">燃烧才会有光亮，哪怕只有一瞬的光亮也好。</p>
          </div>
          <div></div>
        </div>
        <div className="py-[30px] flex flex-col items-center gap-1 text-xs">
          <div>
            本站前端运行在 <a href="https://fresh.deno.dev/">Fresh</a> 上，
            后端由 <a href="https://dotnet.microsoft.com/en-us/apps/aspnet">ASP.NET Core</a> 强力驱动
          </div>
          <div>Copyright © 2025 XU HUI</div>
        </div>
      </div>
      <div>
        <header className="h-[60px] border-b bg-white fixed top-0 right-0 w-3/5">
          <HeaderNavigation />
        </header>

        <main className="grow h-screen overflow-x-auto">
          <div className="pt-[90px] pb-[30px] px-[30px]">
            <Component />
          </div>
        </main>
      </div>
    </div>
  );
}
