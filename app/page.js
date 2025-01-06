import Image from "next/image";
import logo from "./logo.jpg";
import logoo from "./logoo.jpg"
export default function Home() {
  return (
    <div class="flex flex-col pb-24 bg-slate-900 max-md:pb-24" role="main">
    <nav class="flex flex-col justify-center items-end py-4 pr-72 w-full text-base text-gray-400 whitespace-nowrap bg-gray-800 bg-opacity-80 pl-[791px] max-md:px-5 max-md:max-w-full" role="navigation" aria-label="Main navigation">
      <div class="flex flex-wrap gap-6 items-center py-2.5 ml-0 min-h-0">
        <a href="#terminal" class="self-stretch my-auto hover:text-white focus:outline-none focus:ring-2 focus:ring-white" tabindex="0">Terminal</a>
        <a href="#protocol" class="self-stretch my-auto hover:text-white focus:outline-none focus:ring-2 focus:ring-white" tabindex="0">Protocol</a>
       
      </div>
    </nav>
    <div class="flex p-6 bg-slate-900 flex-col items-center self-center mt-12 max-w-full w-[757px] max-md:mt-10">
      <Image
      width={160}
      height={160}
      src={logoo}
      alt="Hyperlauncher Logo"
       />
      <h1 class="mt-8 text-6xl tracking-tighter leading-none text-center text-white max-md:max-w-full max-md:text-4xl">
        Aura
      </h1>
      <h2 class="mt-2.5 text-2xl leading-none text-center text-gray-400">
        Autonomous AI Founders
      </h2>
      <div class="px-8 py-3 mt-8 text-base text-center text-black bg-white rounded max-md:px-5" role="status">
        Soon on HyperEVM
      </div>
      <div class="mt-6 text-base text-center text-gray-400">
        token live on hyperliquid
      </div>
      <div class="flex gap-4 mt-4 max-w-full text-xs leading-none text-center text-gray-500 w-[419px]" role="list">
        <div class="grow" role="listitem">treasury: 37.8%</div>
        <div role="listitem">liquidity: 21%</div>
        <div class="grow shrink w-[159px]" role="listitem">early contributors: 41.2%</div>
      </div>
      <div class="flex gap-4 mt-3 w-16">
        <div class="flex flex-col flex-1 min-h-[24px]">
          <a href="https://x.com/auravirtuals"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bdf69f8b9b82997a787b2a7b366b6bc6cad58d5f64595ccccbc8f13327e2b69?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain w-6 aspect-square" alt="Social Media Icon 1" /></a>
         
        </div>
        <div class="flex flex-col flex-1 min-h-[24px]">
          <a href=""> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb277604e8e8947bf4378b882716272786db87a1328c4aa6d86d09d8953ae94?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain w-6 aspect-square" alt="Social Media Icon 2" /></a>
         
        </div>
      </div>
      <div class="flex gap-3 self-start mt-14 text-base leading-loose max-md:mt-10" role="status" aria-live="polite">
        <div class="my-auto text-gray-500" aria-hidden="true">&gt;</div>
        <div class="flex-auto text-teal-50">INITIALIZING STARTUP SEQUENCE...</div>
      </div>
      <div class="self-stretch mt-9 text-base leading-7 text-white max-md:max-w-full">
        We've witnessed the rise and fall of countless crypto projects. Many were built
        <br />
        on promises, controlled by teams who held too much power, bound by human
        <br />
        limitations and greed.
      </div>
      <div class="self-start mt-9 text-base leading-7 text-white max-md:max-w-full">
        But what if we could remove the human element of control? What if we could
        <br />
        create a system where code is law, and community is king?
      </div>
      <div class="self-start mt-9 text-base leading-7 text-white max-md:max-w-full">
        Enter to Aura. Born from the ashes of failed experiments, powered by
        <br />
        autonomous AI agents, protected by immutable code. A new paradigm where
        <br />
        artificial intelligence doesn't just assist - it leads.
      </div>
      <div class="flex gap-3 self-start mt-9 text-base leading-loose" role="status" aria-live="polite">
        <div class="my-auto text-gray-500" aria-hidden="true">&gt;</div>
        <div class="text-teal-50 basis-auto">SYSTEM STATUS: IN TRAINING</div>
      </div>
    </div>
  </div>
  );
}