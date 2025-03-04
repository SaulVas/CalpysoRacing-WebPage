"use client";

// React Imports
import { useState, useRef, useEffect } from "react";

// MUI Imports
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Third-party Imports
import classnames from "classnames";

// Icon Imports
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Helper function to get all gallery images
function useGalleryImages() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // This will be executed on the client side
    async function loadImages() {
      try {
        // Fallback to a static array of images from the public folder
        const imageCount = 66; // Adjust based on how many images you have
        const imageArray = Array.from(
          { length: imageCount },
          (_, i) => `/images/gallery/img${i + 1}.jpg`
        );

        // Shuffle the images array using Fisher-Yates algorithm
        const shuffledImages = [...imageArray];
        for (let i = shuffledImages.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledImages[i], shuffledImages[j]] = [
            shuffledImages[j],
            shuffledImages[i],
          ];
        }

        setImages(shuffledImages);
      } catch (error) {
        console.error("Error loading gallery images:", error);
        setImages(Array(16).fill("/images/gallery/img1.jpg"));
      }
    }

    loadImages();
  }, []);

  return images;
}

export default function GalleryWrapper() {
  // State
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs
  const modalRef = useRef<HTMLDivElement>(null);

  // Hooks
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Get gallery images dynamically
  const galleryImages = useGalleryImages();

  // Handle image click to open fullscreen view
  const openFullscreen = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";

    // Hide header when in fullscreen
    const header = document.querySelector("header");
    if (header) {
      header.style.display = "none";
    }
  };

  // Handle close fullscreen view
  const closeFullscreen = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsAnimating(false);
      document.body.style.overflow = "auto";

      // Show header again when exiting fullscreen
      const header = document.querySelector("header");
      if (header) {
        header.style.display = "";
      }
    }, 300);
  };

  // Navigate to next/previous image
  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return;

    setIsAnimating(true);
    setTimeout(() => {
      if (direction === "next") {
        setSelectedImage((selectedImage + 1) % galleryImages.length);
      } else {
        setSelectedImage(
          (selectedImage - 1 + galleryImages.length) % galleryImages.length
        );
      }
      setIsAnimating(false);
    }, 300);
  };

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "Escape") {
        closeFullscreen();
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Close when clicking outside the image
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeFullscreen();
      }
    };

    if (selectedImage !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-backgroundDefault pt-20  sm:pt-44">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col gap-8 mb-12">
          <div className="flex flex-col items-center gap-y-2">
            <Typography variant="h3" className="text-center font-bold">
              Our Gallery
            </Typography>
            <Typography variant="body1" className="text-center max-w-2xl">
              Explore our collection of memorable moments captured throughout
              our journey. Click on any image to view it in full screen.
            </Typography>
          </div>
        </div>

        <Grid container spacing={4}>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <div
                className="relative w-full overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
                onClick={() => openFullscreen(index)}
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300">
          <div
            ref={modalRef}
            className={classnames(
              "relative max-w-[90vw] max-h-[90vh] transition-transform duration-300",
              isAnimating ? "scale-95 opacity-80" : "scale-100 opacity-100"
            )}
          >
            <img
              src={galleryImages[selectedImage]}
              alt={`Gallery image ${selectedImage + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />

            <IconButton
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
              onClick={closeFullscreen}
              aria-label="Close fullscreen view"
            >
              <CloseIcon />
            </IconButton>

            <IconButton
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => navigateImage("prev")}
              aria-label="Previous image"
            >
              <ArrowBackIcon />
            </IconButton>

            <IconButton
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => navigateImage("next")}
              aria-label="Next image"
            >
              <ArrowForwardIcon />
            </IconButton>

            <Typography className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-1 rounded-full text-white">
              {selectedImage + 1} / {galleryImages.length}
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
}
