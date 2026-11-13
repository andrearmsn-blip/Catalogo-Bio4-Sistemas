import { MarcaHeader } from "@/components/catalogo/MarcaHeader";
import { BarraAcciones } from "@/components/catalogo/BarraAcciones";
import { CatalogoGrid } from "@/components/catalogo/CatalogoGrid";
import { CONFIG } from "@/lib/config";
import { Pie } from "@/components/catalogo/Pie";

/**
 * El catálogo vivo. Si la liga trae ?v=<vendedor>, todos los botones
 * "Lo quiero" abren el WhatsApp de ese vendedor.
 */
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ v?: string }>;
}) {
  const { v } = await searchParams;
  return (
    <main className="min-h-screen">
      {CONFIG.aviso && (
        <div
          className="no-print px-5 py-2.5 text-center text-sm font-bold uppercase tracking-[0.18em] text-white sm:text-base"
          style={{ background: "linear-gradient(90deg, var(--marca-2), color-mix(in srgb, var(--marca-2) 78%, #000))" }}
        >
          {CONFIG.aviso}
        </div>
      )}
      <MarcaHeader />
      <BarraAcciones />
      <CatalogoGrid vendedorSlug={v ?? null} />
      <Pie />
    </main>
  );
}
