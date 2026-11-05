"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { FotoProducto } from "./FotoProducto";

interface CarruselProductoProps {
  /** Fotos en orden: la primera es el producto solo; las siguientes, el producto en uso. */
  imagenes: string[];
  alt: string;
  className?: string;
}

/**
 * Las fotos de la tarjeta, deslizables (con el dedo, con las flechas o con
 * los puntitos). Si el producto tiene una sola foto, se ve igual que siempre.
 */
export function CarruselProducto({ imagenes, alt, className }: CarruselProductoProps) {
  const fotos = imagenes.filter(Boolean);
  const pista = useRef<HTMLDivElement>(null);
  const [actual, setActual] = useState(0);

  if (fotos.length <= 1) {
    return <FotoProducto src={fotos[0]} alt={alt} className={className} />;
  }

  function ir(i: number) {
    const el = pista.current;
    if (!el) return;
    const destino = Math.max(0, Math.min(fotos.length - 1, i));
    el.scrollTo({ left: destino * el.clientWidth, behavior: "smooth" });
  }

  return (
    <div className={`group relative overflow-hidden ${className ?? ""}`}>
      <div
        ref={pista}
        onScroll={(e) => {
          const el = e.currentTarget;
          setActual(Math.round(el.scrollLeft / Math.max(el.clientWidth, 1)));
        }}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {fotos.map((src, i) => (
          <div key={src} className="h-full w-full shrink-0 snap-center">
            <FotoProducto
              src={src}
              alt={i === 0 ? alt : `${alt}, foto ${i + 1} de ${fotos.length}`}
              className="h-full w-full"
            />
          </div>
        ))}
      </div>

      {/* Flechas (en computadora, al pasar el mouse) */}
      {actual > 0 && (
        <button
          type="button"
          onClick={() => ir(actual - 1)}
          aria-label="Foto anterior"
          className="no-print absolute left-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink opacity-0 shadow-md transition group-hover:opacity-100 focus-visible:opacity-100 sm:grid"
        >
          <Icon name="lucide:chevron-left" size={20} />
        </button>
      )}
      {actual < fotos.length - 1 && (
        <button
          type="button"
          onClick={() => ir(actual + 1)}
          aria-label="Foto siguiente"
          className="no-print absolute right-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink opacity-0 shadow-md transition group-hover:opacity-100 focus-visible:opacity-100 sm:grid"
        >
          <Icon name="lucide:chevron-right" size={20} />
        </button>
      )}

      {/* Puntitos: cuántas fotos hay y en cuál vas */}
      <div className="no-print absolute inset-x-0 bottom-3 flex justify-center">
        <div className="flex items-center gap-1.5 rounded-full bg-black/35 px-2.5 py-1.5 backdrop-blur-sm">
          {fotos.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => ir(i)}
              aria-label={`Ver foto ${i + 1} de ${fotos.length}`}
              aria-current={i === actual}
              className="h-1.5 rounded-full bg-white transition-all"
              style={{ width: i === actual ? 18 : 6, opacity: i === actual ? 1 : 0.6 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
