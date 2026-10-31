import type { Config } from "./tipos";

// Configuración generada con el wizard (/configurar).
export const CONFIG: Config = {
  marca: {
    negocio: "Bio4: tu vida en plenitud",
    descripcion: "Café funcional para quienes buscan sabor gourmet y energía sostenida en su día.",
    logo: undefined, // pon "/logo.png" cuando subas tu logo a la carpeta public
    primario: "#9d174d",
    secundario: "#d9a441",
    fondo: "claro",
    whatsappPrincipal: "525543681089",
    ciudad: "Guadalajara, MX",
    enlace: "",
  },
  vendedores: [
    { slug: "elizabeth", nombre: "Elizabeth Estrada ", whatsapp: "526181334237" },
    { slug: "aranzazu", nombre: "Aranzazú Burgos", whatsapp: "523331577373" },
    { slug: "patricia", nombre: "Patricia Camarena", whatsapp: "523321685819" },
  ],
  categorias: ["Para tu casa", "Talleres", "Servicios"],
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. ¿Me pueden dar más información y precio?",
};
