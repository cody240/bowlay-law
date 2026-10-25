// Google Business Profile reviews, copied verbatim (checked 2026-10-25). Update this list
// when new reviews come in; the Reviews component renders whatever is here.
export type Review = { name: string; rating: number; text: string };

export const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Bowlay+Law+reviews';

export const reviews: Review[] = [
  {
    name: 'Wais S.',
    rating: 5,
    text: 'Working with Cody Bowlay-Williams at Bowlay Law was hands-down the best decision my family and I could have made. We needed legal representation for a complex case in Contra Costa County involving tenant rights violations, wrongful eviction, and thorough lease agreement reviews. Cody took the stress off our shoulders immediately. He was exceptionally knowledgeable, clear, responsive, and fought hard for us every step of the way. If you need a dedicated, trustworthy attorney in the Bay Area who truly knows tenant protection laws and advocates fiercely for his clients, I highly recommend Bowlay Law!',
  },
  {
    name: 'Lina A.',
    rating: 5,
    text: 'I’ve worked with many attorneys over the years, and Cody stands out for the way he treats people—with respect, compassion, and their best interests at heart. He helped us with our case this past year and was honest, responsive, and communicative every step of the way. Navigating a legal matter can be overwhelming, but having someone you trust in your corner makes all the difference. Cody truly cares about the people he represents, and I highly recommend him to anyone looking for thoughtful, dependable legal counsel.',
  },
];
