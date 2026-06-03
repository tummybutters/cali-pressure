export type GalleryJob = {
  id: string;
  title: string;
  description: string;
  collage: string;
  before: string;
  after: string;
  tags: string[];
  flipCollage?: boolean;
};

// Each entry describes one real California Pressure Washing job from the
// before/after library (see GROUND_TRUTH.md). File names map directly to
// files under public/gallery/.
export const gallery: GalleryJob[] = [
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
    id: "job-14",
    title: "Tile-bordered walkway refresh",
    description:
      "Before and after view of a garden walkway cleaned from dull concrete to a brighter, even finish.",
    collage: "/client-images/gallery-tile-walkway-collage.jpg",
    before: "/client-images/gallery-tile-walkway-collage.jpg",
    after: "/client-images/gallery-tile-walkway-collage.jpg",
    tags: ["Walkway", "Concrete Cleaning"],
  },
  {
    id: "job-15",
    title: "Entry wall and patio detail",
    description:
      "Entry corner and wall cleaned from mildew staining to a brighter, cared-for finish.",
    collage: "/client-images/gallery-entry-wall-collage.jpg",
    before: "/client-images/gallery-entry-wall-collage.jpg",
    after: "/client-images/gallery-entry-wall-collage.jpg",
    tags: ["Entry", "House Wash"],
    flipCollage: true,
  },
  {
    id: "job-08",
    title: "Garden path cleaning",
    description:
      "Stepping stone walkway refreshed — grime and buildup cleared for a brighter, cleaner path.",
    collage: "/client-images/gallery-solar-roof-collage.jpg",
    before: "/client-images/gallery-solar-roof-collage.jpg",
    after: "/client-images/gallery-solar-roof-collage.jpg",
    tags: ["Walkway", "Residential"],
  },
  {
    id: "job-09",
    title: "Tile patio cleaning",
    description:
      "Terracotta tile patio cleaned from built-up staining to a fresher, more even finish.",
    collage: "/client-images/gallery-stone-house-collage.jpg",
    before: "/client-images/gallery-stone-house-collage.jpg",
    after: "/client-images/gallery-stone-house-collage.jpg",
    tags: ["Patio", "Concrete Cleaning"],
    flipCollage: true,
  },
  {
    id: "job-10",
    title: "Ground-mounted solar panel cleaning",
    description:
      "Ground-mounted solar array cleaned from dust and buildup to restore panel efficiency.",
    collage: "/client-images/gallery-commercial-collage.jpg",
    before: "/client-images/gallery-commercial-collage.jpg",
    after: "/client-images/gallery-commercial-collage.jpg",
    tags: ["Solar", "Commercial"],
  },
  {
    id: "job-11",
    title: "Commercial concrete cleaning",
    description:
      "Tire marks and surface grime cleared from a commercial concrete area.",
    collage: "/client-images/gallery-roof-collage.jpg",
    before: "/client-images/gallery-roof-collage.jpg",
    after: "/client-images/gallery-roof-collage.jpg",
    tags: ["Commercial", "Concrete Cleaning"],
  },
  {
    id: "job-12",
    title: "Walkway and lawn-edge concrete",
    description:
      "Residential path brightened from dull buildup to a cleaner finish beside the lawn.",
    collage: "/client-images/gallery-exterior-clean.jpg",
    before: "/client-images/gallery-exterior-clean.jpg",
    after: "/client-images/gallery-exterior-clean.jpg",
    tags: ["Walkway", "Residential"],
  },
  {
    id: "job-13",
    title: "Exterior surface detail",
    description:
      "Fresh photo-set detail showing the cleaner finish after an exterior surface wash.",
    collage: "/client-images/gallery-house-detail.jpg",
    before: "/client-images/gallery-house-detail.jpg",
    after: "/client-images/gallery-house-detail.jpg",
    tags: ["House Wash", "Detail"],
  },
];
