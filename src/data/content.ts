/* ------------------------------------------------------------------ */
/*  EVERYTHING SWEET LIVES HERE — edit this file to personalise        */
/*  • PHOTOS  → replace the `src` URLs with real photos of Sandhya     */
/*  • QUOTES / REASONS / LETTER → tweak any words any time             */
/* ------------------------------------------------------------------ */

export const HER_NAME = "Sandhya";

export interface PhotoSlot {
  src: string;
  caption: string;
  tag: string;
}

export const PHOTOS: PhotoSlot[] = [
  {
    src: "/photo1.jpg",
    caption: "always the perfect frame",
    tag: "moment 01",
  },
  {
    src: "/photo2.jpg",
    caption: "just you and me",
    tag: "moment 02",
  },
];

export const QUOTES: string[] = [
  "In your smile, I found my favourite place in the whole world.",
  "Every love story is beautiful — but ours will always be my favourite chapter.",
  "Home was never a place. It was always, always you.",
  "You're my favourite notification, my favourite hello, my favourite everything.",
  "I look at you and see the rest of my life, smiling right back at me.",
  "Loving you is the easiest thing I have ever done.",
];

export const REASONS: string[] = [
  "The way you laugh with your whole face",
  "How you make ordinary evenings feel like festivals",
  "Your kindness — soft, but quietly fierce",
  "The way you say my name like it matters",
  "How you dance when you think no one is watching",
  "Your dreams — you plan your life in full colour",
  "The impossible peace of your hand in mine",
  "Because you are you. Just you. All of you.",
];

export const LETTER = {
  greeting: "My dearest Sandhya,",
  body: [
    "Some feelings are too big for sentences, but let me try anyway.",
    "Before you, I thought home was a place. Now I know it is a person — it is you. It is the sound of your laugh in the middle of an ordinary day, and the way the whole world goes quiet and warm when you look at me.",
    "You are the softest thought I have, and the strongest. Thank you for choosing me, again and again, for making every small day worth celebrating.",
    "I loved you yesterday. I love you today. And I already love every tomorrow you are in.",
  ],
  signoff: "yours — entirely, endlessly,",
};

export const MARQUEE_WORDS = [
  "forever",
  "always",
  "my heart",
  "soft mornings",
  "your laugh",
  "golden hour",
  "sunday hugs",
  "her smile",
  "endless",
  "us",
];
