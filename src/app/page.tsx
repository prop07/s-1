import React from "react";
import FeatureArticles from "../components/ui/FeatureArticles";
import MediaGalary from "../components/ui/MediaGalary";
import HomeCarousel from "../components/ui/HomeCarousel";

const slides = [
  {
    image: "https://picsum.photos/1000/600?random=1",
    alt: "First slide description",
  },
  {
    image: "https://picsum.photos/1000/600?random=2",
    alt: "Second slide description",
  },
  {
    image: "https://picsum.photos/1000/600?random=3",
    alt: "Second slide description",
  },
  {
    image: "https://picsum.photos/1000/600?random=4",
    alt: "Second slide description",
  },
  {
    image: "https://picsum.photos/1000/600?random=5",
    alt: "Second slide description",
  },
  // Add more slides as needed
];

const Home = () => {
  return (
    <div>
      <HomeCarousel slides={slides} />
      <FeatureArticles />
      <MediaGalary />
    </div>
  );
};

export default Home;