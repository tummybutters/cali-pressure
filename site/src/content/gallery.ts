export type GalleryJob = {
  id: string;
  title: string;
  description: string;
  collage: string;
  before: string;
  after: string;
  tags: string[];
};

// Each entry describes one real California Pressure Washing job from the
// before/after library (see GROUND_TRUTH.md). File names map directly to
// files under public/gallery/.
export const gallery: GalleryJob[] = [
  {
    id: "job-01",
    title: "Backyard walkway, slurry and grime",
    description:
      "Paver-bordered concrete walkway transformed from darkened grime to even, bright finish.",
    collage: "/gallery/job-01-collage.jpg",
    before: "/gallery/job-01-before.jpg",
    after: "/gallery/job-01-after.jpg",
    tags: ["Walkway", "Concrete Cleaning"],
  },
  {
    id: "job-02",
    title: "Side entry walkway restoration",
    description:
      "Aged, blackened concrete brought back to near-white cream, ready for company.",
    collage: "/gallery/job-02-collage.jpg",
    before: "/gallery/job-02-before.jpg",
    after: "/gallery/job-02-after.jpg",
    tags: ["Walkway", "Algae Removal"],
  },
  {
    id: "job-03",
    title: "Front entry path and brick column",
    description:
      "Years of foot traffic and grime lifted from a front path bordered by brick and geraniums.",
    collage: "/gallery/job-03-collage.jpg",
    before: "/gallery/job-03-before.jpg",
    after: "/gallery/job-03-after.jpg",
    tags: ["Walkway", "Residential"],
  },
  {
    id: "job-04",
    title: "Two-car residential driveway",
    description:
      "Tire-tracked soiling replaced with a uniformly clean surface across the full driveway apron.",
    collage: "/gallery/job-04-collage.jpg",
    before: "/gallery/job-04-before.jpg",
    after: "/gallery/job-04-after.jpg",
    tags: ["Driveway", "Concrete Cleaning"],
  },
  {
    id: "job-05",
    title: "Two-car driveway with heavy oil",
    description:
      "Heavy tire and oil streaks removed from a full front driveway in front of a stucco home.",
    collage: "/gallery/job-05-collage.jpg",
    before: "/gallery/job-05-before.jpg",
    after: "/gallery/job-05-after.jpg",
    tags: ["Driveway", "Oil Stain"],
  },
  {
    id: "job-06",
    title: "Front entry slab restoration",
    description:
      "Severe mildew and staining cleared from a front-door concrete slab and entry step.",
    collage: "/gallery/job-06-collage.jpg",
    before: "/gallery/job-06-before.jpg",
    after: "/gallery/job-06-after.jpg",
    tags: ["Entry", "Mildew"],
  },
  {
    id: "job-07",
    title: "Narrow side-yard walkway",
    description:
      "Dark-stained side walkway between brick wall and agapanthus planting restored to bright gray.",
    collage: "/gallery/job-07-collage.jpg",
    before: "/gallery/job-07-before.jpg",
    after: "/gallery/job-07-after.jpg",
    tags: ["Walkway", "Residential"],
  },
  {
    id: "job-08",
    title: "Gated patio courtyard",
    description:
      "Rose-bordered courtyard patio washed behind a wrought-iron gate — heavy soiling to fresh finish.",
    collage: "/gallery/job-08-collage.jpg",
    before: "/gallery/job-08-before.jpg",
    after: "/gallery/job-08-after.jpg",
    tags: ["Patio", "Residential"],
  },
  {
    id: "job-09",
    title: "Curved driveway edge",
    description:
      "Curve of a driveway past a brick column and rosemary bush cleared of green growth and dirt.",
    collage: "/gallery/job-09-collage.jpg",
    before: "/gallery/job-09-before.jpg",
    after: "/gallery/job-09-after.jpg",
    tags: ["Driveway", "Algae"],
  },
  {
    id: "job-10",
    title: "Garage apron color correction",
    description:
      "Rust- and oil-discolored driveway apron evened out to a consistent concrete tone.",
    collage: "/gallery/job-10-collage.jpg",
    before: "/gallery/job-10-before.jpg",
    after: "/gallery/job-10-after.jpg",
    tags: ["Driveway", "Rust Removal"],
  },
  {
    id: "job-11",
    title: "Paver walkway and deck-side slab",
    description:
      "Patchy grime cleared from a walkway of pavers and concrete alongside a wood deck.",
    collage: "/gallery/job-11-collage.jpg",
    before: "/gallery/job-11-before.jpg",
    after: "/gallery/job-11-after.jpg",
    tags: ["Walkway", "Patio"],
  },
  {
    id: "job-12",
    title: "Deep mold and rust slab",
    description:
      "Close-up of severe mold and rust staining on a concrete slab — dramatic lift to clean surface.",
    collage: "/gallery/job-12-collage.jpg",
    before: "/gallery/job-12-before.jpg",
    after: "/gallery/job-12-after.jpg",
    tags: ["Specialty", "Mold Removal"],
  },
  {
    id: "job-13",
    title: "Full 2-car driveway (top/bottom)",
    description:
      "Top-and-bottom before/after of an entire two-car driveway cleaned end-to-end.",
    collage: "/gallery/job-13-collage.jpg",
    before: "/gallery/job-13-before.jpg",
    after: "/gallery/job-13-after.jpg",
    tags: ["Driveway", "Full Wash"],
  },
];
