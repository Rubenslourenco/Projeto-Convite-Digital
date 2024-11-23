import { Evento } from "@/core";
import InformacoesEventoProps from "@/components/evento/informacoesEvento";
import AcessarVuaQrCode from "@/components/evento/AcessarviaQrCode";
import Estatistica from "@/components/shared/Estatistica";
import { Convidado } from "@/core";
import ListaConvidados from "@/components/evento/ListaConvidados";

export interface DashboardEventoProps {
  evento: Evento;
  presentes: Convidado[];
  ausentes: Convidado[];
  totalGeral: number;
}

export default function DashboardEvento(props: DashboardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEventoProps evento={props.evento} className="flex-1" />
        <AcessarVuaQrCode evento={props.evento} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatistica
          texto="Expectativa de Convidados:"
          valor={props.evento.publicoEsperado}
          imagem="/icones/acompanhantes.svg"
        />
        <Estatistica
          texto="Confirmações:"
          valor={props.presentes.length}
          imagem="/icones/convidados.svg"
        />
        <Estatistica
          texto="Total Confirmados:"
          valor={props.totalGeral}
          imagem="/icones/confirmados.svg"
        />
      </div>

      <button className="botao azul self-end mt-12">
        <span>Atualizar Lista de Convidados</span>
      </button>

      <span className="flex py-2 text-1 font-bold text-white/80">
        Convidados que confirmaram PRESENÇA
      </span>
      <ListaConvidados convidados={props.presentes} />
      <span className="flex py-2 text-1 font-bold text-white/80">
        Convidados que confimaram AUSENCIA
      </span>
      <ListaConvidados convidados={props.ausentes} />
    </div>
  );
}
