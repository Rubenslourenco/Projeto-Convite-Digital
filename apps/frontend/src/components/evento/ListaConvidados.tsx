import { Convidado } from "../../../../../packages/core/src";
import { ConvidadoItem } from "./ConvidadoItem";

export interface ListaConvidadoProps {
  convidados: Convidado[];
}

export default function ListaConvidados(props: ListaConvidadoProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {props.convidados.map((convidado) => (
          <ConvidadoItem key={convidado.id} convidado={convidado} />
        ))}
      </ul>
    </div>
  );
}
