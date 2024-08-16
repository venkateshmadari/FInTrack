import { lusitana } from "@/app/ui/fonts";
export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none `}
    >
      <p className="text-4xl ml-2  text-black ">✺</p>
      <p className="text-3xl ml-2 text-black ">FinTrack</p>
    </div>
  );
}
