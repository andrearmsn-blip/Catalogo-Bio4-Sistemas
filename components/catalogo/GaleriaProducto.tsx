"use client";

import { useState, type ReactNode } from "react";
import { FotoProducto } from "./FotoProducto";

interface GaleriaProductoProps {
  /** Fotos en orden: la primera es el producto solo; las siguientes, el producto en uso. */
  imagenes: string[];
  alt: string;
  /** Lo que va encima de la foto grande (ej. la etiqueta de escasez). */
  children?: ReactNode;
}

/** Foto grande con miniaturas para cambiar de foto (solo si hay más de una). */
export function GaleriaProducto({ imagenes, alt, children }: GaleriaProductoProps) {
  const [indice, setIndice] = useState(0);
  const fotos = imagenes.filter(Boolean);
  const actual = fotos[Math.min(indice, Math.max(fotos.length - 1, 0))];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <FotoProducto
          key={actual ?? "sin-foto"}
          src={actual}
          alt={alt}
          className="aspect-square rounded-3xl border border-line"
        />
        {children}
      </div>

      {fotos.length > 1 && (
        <div className="flex gap-3">
          {fotos.map((src, i) => {
            const activa = i === Math.min(indice, fotos.length - 1);
            return (
              <button
                key={src}
                type="button"
                onClick={() => setIndice(i)}
                aria-label={`Ver foto ${i + 1} de ${fotos.length}`}
                aria-current={activa}
                className="h-20 w-20 overflow-hidden rounded-xl border-2 transition sm:h-24 sm:w-24"
                style={{
                  borderColor: activa ? "var(--marca)" : "var(--line)",
                  opacity: activa ? 1 : 0.8,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
