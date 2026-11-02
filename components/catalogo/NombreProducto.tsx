import type { Producto } from "@/lib/tipos";

/**
 * El nombre del producto. Si el producto tiene `variante` (ej. "hogar"),
 * esa parte final del nombre se muestra en cursiva: Kenko Café <i>hogar</i>.
 */
export function NombreProducto({ producto }: { producto: Pick<Producto, "nombre" | "variante"> }) {
  const { nombre, variante } = producto;
  if (variante && nombre.endsWith(variante)) {
    return (
      <>
        {nombre.slice(0, nombre.length - variante.length)}
        <em className="italic">{variante}</em>
      </>
    );
  }
  return <>{nombre}</>;
}
