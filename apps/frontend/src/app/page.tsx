import Pagina from "@/components/template/pagina";
import { Evento } from "@/core";
export default function Home() {
  const e: Partial<Evento> = {};
  return (
    <div className="w-full">
      <Pagina>
        <div>Inicio</div>
      </Pagina>
    </div>
  );
}
