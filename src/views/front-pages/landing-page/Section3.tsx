// React Imports
import { useEffect, useRef, useState } from "react";

// MUI Imports
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Third-party Imports
import classnames from "classnames";
import Link from "next/link";

// Hook Imports
import { useIntersection } from "@/hooks/useIntersection";

import styles from "./styles.module.css";

// Styles Imports
import frontCommonStyles from "@views/front-pages/styles.module.css";

// Data
const galleryPreviewImages = [
  "/images/gallery_preview/image1.jpg",
  "/images/gallery_preview/image2.jpg",
  "/images/gallery_preview/image3.jpg",
  "/images/gallery_preview/image4.jpg",
  "/images/gallery_preview/image5.jpg",
  "/images/gallery_preview/image6.jpg",
];

// Helper function to shuffle array
const shuffleArray = (array: string[]) => {
  // Create a copy of the array to avoid mutating the original
  const shuffled = [...array];

  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const Section3 = () => {
  // Refs
  const skipIntersection = useRef(true);
  const ref = useRef<null | HTMLDivElement>(null);

  // Hooks
  const { updateIntersections } = useIntersection();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Shuffle images on component mount
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    setShuffledImages(shuffleArray(galleryPreviewImages));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (skipIntersection.current) {
          skipIntersection.current = false;

          return;
        }

        updateIntersections({ [entry.target.id]: entry.isIntersecting });
      },
      { threshold: 0.35 }
    );

    ref.current && observer.observe(ref.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Display only 3 images on mobile, 6 on desktop
  const displayImages = isMobile ? shuffledImages.slice(0, 3) : shuffledImages;

  return (
    <section
      id="gallery"
      ref={ref}
      className={classnames("plb-[20px] bg-backgroundDefault")}
    >
      <div
        className={classnames(
          "flex flex-col gap-12  ",
          frontCommonStyles.layoutSpacing
        )}
      >
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex flex-col items-center gap-y-1 justify-center flex-wrap">
            <div className="flex items-center gap-x-2">
              <Typography
                color="text.primary"
                variant="h4"
                className="text-center"
              >
                <span className="relative z-[1] font-extrabold">
                  Explore our moments
                </span>{" "}
                captured in time
              </Typography>
            </div>
            <Typography className="text-center">
              Browse through our collection of memorable moments.
            </Typography>
          </div>
        </div>
        <div>
          <Grid container spacing={5}>
            {displayImages.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 "
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="flex justify-center ">
          <Link href="/gallery" passHref>
            <Button variant="contained" color="primary" size="large">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section3;
