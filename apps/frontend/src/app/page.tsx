import LogoGrande from "@/components/template/LogoGrande";
import Link from "next/link"; // Update the path to the correct module

export default function Home() {
  return (
    <div
      className="
        h-screen flex flex-col items-center justify-center gap-10
        bg-[url('/background-elementos.svg')] bg-cover
        "
    >
      <div className=" flex flex-col items-center gap-4 ">
        <LogoGrande />
        <p className=" text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Crie gerencie o convite do seu evento de forma rapida e facil. sem
          complicação
        </p>
      </div>
      <Link href="/evento" className=" botao azul text-lg uppercase">
        Crie o seu evento
      </Link>
    </div>
  );
}
