"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { CONFIG } from "@/lib/config";
import { compartirLiga } from "@/lib/compartir";
import { construirMensaje, linkWhatsApp, resolverVendedor } from "@/lib/whatsapp";
import type { Invitacion } from "@/lib/tipos";

interface TarjetaInvitacionProps {
  invitacion: Invitacion;
  /** Vendedor referido (?v=slug): los botones de WhatsApp le escriben a esa persona. */
  vendedorSlug?: string | null;
  className?: string;
}

/**
 * Una tarjeta que no vende un producto: invita a conseguir más descuento,
 * unirse a la distribución o compartir el catálogo. Los textos viven en
 * `lib/config.ts` (campo `invitacion`).
 */
export function TarjetaInvitacion({ invitacion, vendedorSlug, className }: TarjetaInvitacionProps) {
  const [copiado, setCopiado] = useState(false);
  const vendedor = resolverVendedor(CONFIG, vendedorSlug);
  const numero = vendedor ? vendedor.whatsapp : CONFIG.marca.whatsappPrincipal;
  const nombreVendedor = vendedor?.nombre.split(" ")[0];

  async function compartir() {
    if ((await compartirLiga()) === "copiado") {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    }
  }

  return (
    <motion.aside
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
      aria-label={invitacion.titulo}
      className={`@container no-print relative flex flex-col justify-center overflow-hidden rounded-[20px] p-6 text-white sm:p-9 ${className ?? ""}`}
      style={{
        background: "linear-gradient(145deg, var(--marca), color-mix(in srgb, var(--marca) 72%, #000))",
        boxShadow: "var(--shadow)",
      }}
    >
      {/* Brillo suave con el color secundario de la marca */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
        style={{
          background: "radial-gradient(circle, color-mix(in srgb, var(--marca-2) 55%, transparent), transparent 68%)",
          opacity: 0.55,
        }}
      />

      <div className="relative">
        <h3 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{invitacion.titulo}</h3>
        <p className="mt-3 max-w-xl text-base leading-snug text-white/80">{invitacion.texto}</p>

        <ul className="mt-8 flex flex-col gap-4">
          {invitacion.acciones.map((a) => (
            <li
              key={a.titulo}
              className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 @lg:flex-row @lg:items-center @lg:gap-5 @lg:py-6"
            >
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full"
                style={{
                  background: "color-mix(in srgb, var(--marca-2) 24%, transparent)",
                  color: "var(--marca-2)",
                }}
              >
                <Icon name={a.icono} size={24} />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-lg font-semibold leading-snug">{a.titulo}</p>
                <p className="mt-0.5 text-[15px] leading-snug text-white/75">{a.texto}</p>
              </div>

              {a.mensaje ? (
                <a
                  href={linkWhatsApp(numero, construirMensaje(a.mensaje, "", nombreVendedor))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-marca btn-wa w-full !px-5 !py-3 text-[15px] @lg:w-auto @lg:shrink-0"
                >
                  <MessageCircle size={18} /> {a.boton}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={compartir}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-white/10 @lg:w-auto @lg:shrink-0"
                >
                  <Icon name={copiado ? "lucide:check" : "lucide:share-2"} size={18} />
                  {copiado ? "¡Liga copiada!" : a.boton}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
}
