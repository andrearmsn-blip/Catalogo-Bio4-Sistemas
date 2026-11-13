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
          className="no-print px-5 py-5 text-center text-2xl font-extrabold uppercase tracking-[0.2em] text-white sm:py-6 sm:text-4xl"
          style={{ background: "linear-gradient(90deg, #c8102e, #9d0b22)" }}
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
