import { ReactNode, useState } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && (
        <div className="absolute bottom-full mb-2 px-2 py-1 text-sm text-neutral-200 bg-zinc-700 rounded">
          {text}
        </div>
      )}
      {children}
    </div>
  );
}
