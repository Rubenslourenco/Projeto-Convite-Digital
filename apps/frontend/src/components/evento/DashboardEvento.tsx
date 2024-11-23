import { Evento } from "@/core";
import InformacoesEventoProps from "@/components/evento/informacoesEvento";
import AcessarVuaQrCode from "@/components/evento/AcessarviaQrCode";

export interface DashboardEventoProps {
  evento: Evento;
}

export default function DashboardEvento(props: DashboardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEventoProps evento={props.evento} className="flex-1" />
        <AcessarVuaQrCode evento={props.evento} />
      </div>
    </div>
  );
}
