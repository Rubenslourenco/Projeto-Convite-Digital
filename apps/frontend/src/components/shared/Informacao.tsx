export interface InformacaoProps {
  label: string;
  children: any;
}

export default function Informacao(props: InformacaoProps) {
  return (
    <div className="flex-1 flex flex-col items-start border border-zinc-800 px-6 pu-3 rounded-lg">
      <span className="text-zinc-400 font-bold">{props.label}</span>
      <div className="text-x1">{props.children}</div>
    </div>
  );
}
