import { Evento } from "../../../../../packages/core/src";
import QRCode from "react-qr-code";

export interface AcessarviaQrCodeProps {
  evento: Evento;
}

export default function AcessarviaQrCode(props: AcessarviaQrCodeProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-zinc-800  px-10">
      <span className="text-sm font-light text-zinc-400">
        Acessar via Mobile
      </span>
      <QRCode
        value={JSON.stringify({
          id: props.evento.id,
          senha: props.evento.senha,
        })}
        className="w-32 h-32"
      />
    </div>
  );
}
