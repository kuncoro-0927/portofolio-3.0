export type Certificate = {
  name: string;
  year: string;
  provider: string;
  image: string;
};

export const certificateData: Certificate[] = [
  {
    name: "Junior Web Developer",
    year: "Expires January 2028",
    provider: "BNSP",
    image: "/images/certificates/logobnsp3.png",
  },
  {
    name: "Frontend - React",
    year: "Issued August 2025",
    provider: "MySkill",
    image: "/images/certificates/logomyskill.png",
  },
  {
    name: "Backend - Node js",
    year: "Issued August 2025",
    provider: "MySkill",
    image: "/images/certificates/logomyskill.png",
  },
  {
    name: "Best Project Award",
    year: "Issued August 2024",
    provider: "Infinite Learning",
    image: "/images/certificates/logoil2.jpeg",
  },
];
