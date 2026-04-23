export type Testimonial = {
  quote: string;
  name: string;
  service?: string;
  location?: string;
};

// All quotes are pulled verbatim (trimmed for length) from the real Google
// Business reviews for California Pressure Washing LLC — see GROUND_TRUTH.md.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Ivan went above and beyond and cleaned an impossible stain on my driveway caused by me driving through our freshly slurried road. What a life saver — fair minded and hard working.",
    name: "Frank",
    service: "Driveway — slurry removal",
  },
  {
    quote:
      "Very professional, punctual, and effectively removed years of dirt stains. Highly recommend his services!",
    name: "Chris S.",
    service: "Driveway pressure wash",
  },
  {
    quote:
      "Exceeding my expectation from the moment I first reached out. Ivan was very knowledgeable, breaking down the different services and what worked best for my needs.",
    name: "Angel B.",
    service: "Concrete cleaning",
  },
  {
    quote:
      "Absolutely thrilled — Ivan made my driveway look brand new. His attention to detail and care for my property was impressive.",
    name: "Jack V.",
    service: "Driveway — brand new",
  },
  {
    quote:
      "Everything looks brand new. She had algae on walkways and oil marks on driveway. Very happy with Ivan and his quality of work — super nice and honest too.",
    name: "Judi A.",
    service: "House + driveway wash",
  },
  {
    quote:
      "Outstanding work from start to finish — professional, efficient and done with great attention to detail. Exceeded expectations.",
    name: "Will F.",
    service: "Residential wash",
  },
  {
    quote:
      "We had an unfortunate situation with our vehicle that spilled oil all over our driveway and in front of our house. Very kind man and definitely recommend.",
    name: "Morgan H-P.",
    service: "Oil stain removal",
  },
  {
    quote:
      "They tackled the tough challenge of removing stubborn oil stains from my driveway and pesky dog pee stains in the backyard.",
    name: "Valerie S.",
    service: "Stain specialty",
  },
  {
    quote:
      "I needed my house to be spotless before listing it on the market and California Pressure Washing helped me achieve that.",
    name: "Mya H.",
    service: "Pre-sale cleanup",
  },
  {
    quote:
      "We got our commercial space parking pressure washed today and are thrilled with the results. Highly recommended — thank you for all the extra effort.",
    name: "Patricia A.",
    service: "Commercial parking lot",
  },
  {
    quote:
      "Ivan was amazing! He was very helpful explaining the details of his service to my parents to ensure the job was going to be completed correctly.",
    name: "Delia R.",
    service: "Residential wash",
  },
  {
    quote:
      "Very friendly and professional. Made my driveway look brand new like I've never seen.",
    name: "Charlie O.",
    service: "Driveway clean",
  },
  {
    quote: "Iván did such an amazing job!!",
    name: "Esther H.",
    service: "Driveway clean",
  },
  {
    quote:
      "SoCal Pressure Washing did an excellent job on my house; they were able to make the driveway, fence, and walkway spotless. They were also very friendly and made sure to do quality work.",
    name: "Jason T.",
    service: "Full exterior wash",
  },
];
