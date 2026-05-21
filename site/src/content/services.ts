export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  bullets: string[];
  bestFor: string[];
  result: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  iconKey:
    | "concrete"
    | "sealing"
    | "roof"
    | "house"
    | "solar"
    | "window";
};

export const services: Service[] = [
  {
    slug: "concrete-cleaning",
    title: "Concrete Cleaning",
    iconKey: "concrete",
    short:
      "Remove dirt, grime, oil stains and built-up residue from driveways, sidewalks and patios.",
    long:
      "Our most-requested service. Hot-water surface cleaning lifts years of embedded grime, tire marks, algae and stubborn oil drips — restoring the original color of your concrete instead of just rinsing the surface.",
    bullets: [
      "Driveways, walkways, patios and pool decks",
      "Specialty removal: oil, slurry tracking, rust, algae",
      "Even finish with no zebra-striping",
    ],
    bestFor: ["Driveways", "Walkways", "Patios", "Oil stains"],
    result: "The curb-appeal reset most homes need first.",
    image: "/client-images/concrete-cleaning-driveway.jpg",
    imageAlt: "Concrete driveway before and after pressure washing",
    imageFit: "contain",
  },
  {
    slug: "concrete-sealing",
    title: "Concrete Sealing",
    iconKey: "sealing",
    short:
      "Protect and enhance your concrete surfaces with long-lasting sealants that resist stains and weather.",
    long:
      "Sealing locks in the clean and makes the next wash dramatically easier. We finish freshly cleaned concrete with a protective sealer that repels oil, water and UV damage, with matte or wet-look finish options depending on the surface and style.",
    bullets: [
      "Recommended after every deep clean",
      "Repels oil, water and stains for 2–3 years",
      "Choice of matte or wet-look finish",
    ],
    bestFor: ["Freshly washed concrete", "Stamped concrete", "Pool decks", "Patios"],
    result: "A protected finish in the look you prefer.",
    image: "/client-images/concrete-sealing-wet-look.jpg",
    imageAlt: "Wet-look sealed stamped concrete walkway",
  },
  {
    slug: "roof-wash",
    title: "Roof Wash",
    iconKey: "roof",
    short:
      "Safely remove moss, algae and debris to extend the life of your roof and improve appearance.",
    long:
      "We use a low-pressure soft-wash system designed specifically for tile, shingle and composite roofs. It kills the black algae streaks and moss at the root so they don't grow back for years — without the blasting force that can crack tile or strip granules.",
    bullets: [
      "Soft-wash — safe for tile, shingle and composite",
      "Kills algae and moss at the root",
      "Improves curb appeal and extends roof life",
    ],
    bestFor: ["Tile roofs", "Shingle roofs", "Algae streaks", "Moss"],
    result: "A safer roof refresh without blasting force.",
    image: "/client-images/roof-wash-collage.jpg",
    imageAlt: "Tile roof before and after roof wash service",
    imageFit: "contain",
  },
  {
    slug: "house-wash",
    title: "House Wash",
    iconKey: "house",
    short:
      "Soft washing that eliminates dirt, mold and mildew for a spotless, like-new exterior.",
    long:
      "From stucco to siding, our house wash process cleans the entire exterior envelope — fascia, soffits, eaves, gutters and walls — using the right chemistry and water pressure for each surface.",
    bullets: [
      "Stucco, siding, brick and wood-safe methods",
      "Removes mildew, spider webs, bird droppings, dust",
      "Pre-listing prep and annual refresh",
    ],
    bestFor: ["Stucco", "Siding", "Eaves", "Pre-sale prep"],
    result: "The whole exterior looks cared for again.",
    image: "/client-images/house-wash.jpg",
    imageAlt: "Stone home exterior before and after house wash service",
    imageFit: "contain",
  },
  {
    slug: "solar-cleaning",
    title: "Solar Cleaning",
    iconKey: "solar",
    short:
      "Maximize energy efficiency with professional solar panel cleaning that removes dust and buildup.",
    long:
      "Dust, pollen, bird droppings and marine haze all cut panel output. We use de-ionized water and soft brushes to clean panels safely — no abrasive chemicals, no scratches, and no streaks to block the sun.",
    bullets: [
      "Pure-water rinse — no spotting or residue",
      "Soft bristle wash — will not void panel warranty",
      "Boost output and protect your investment",
    ],
    bestFor: ["Dust", "Pollen", "Bird droppings", "Marine haze"],
    result: "Clear panels, clean glass, and no abrasive chemicals.",
    image: "/client-images/solar-cleaning-collage.jpg",
    imageAlt: "Solar panels before and after solar cleaning",
    imageFit: "contain",
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    iconKey: "window",
    short:
      "Streak-free, spotless windows inside and out for a clearer, brighter view.",
    long:
      "Inside and out, we hand-clean every pane — frames and tracks included — and finish with a pure-water rinse so your windows dry crystal-clear with no spots or streaks.",
    bullets: [
      "Interior + exterior hand clean",
      "Frame, sill and track detail included",
      "Perfect for pre-sale, post-construction or spring clean",
    ],
    bestFor: ["Interior panes", "Exterior panes", "Tracks", "Frames"],
    result: "Sharper light through the parts of the home people notice.",
    image: "/client-images/window-cleaning.jpg",
    imageAlt: "Window cleaning with a squeegee on glass",
    imageFit: "contain",
  },
];

export function findService(slug: string) {
  return services.find((s) => s.slug === slug);
}
