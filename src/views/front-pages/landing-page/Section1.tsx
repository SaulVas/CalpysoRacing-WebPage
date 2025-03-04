// MUI Imports
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { Theme } from "@mui/material/styles";

// Third-party Imports
import classnames from "classnames";
import { useEffect, useState } from "react";

// schemas
import Image from "next/image";

const Section1 = () => {
  // Hooks
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const isMobileScreen = useMediaQuery("(max-width:500px)");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[700px] w-full overflow-hidden">
        {/* Background Image using Next.js Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={
              isMobileScreen
                ? "/images/vlt-finish-mobile.jpg"
                : "/images/vlt-finish.jpg"
            }
            alt="VLT Finish"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: isSmallScreen ? "center" : "bottom",
            }}
            quality={100}
          />

          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        {/* Text Content */}
        <div
          className={classnames(
            "absolute h-full flex flex-col justify-center z-20", // Added z-index to place text above overlay
            isSmallScreen ? "w-full px-6 text-center" : "w-1/2 ps-16"
          )}
        >
          <Typography
            className={classnames(
              "font-extrabold text-4xl md:text-5xl mb-4 text-white transition-all duration-1000 transform",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
            component="h1"
          >
            Calypso Racing
          </Typography>
          <Typography
            className={classnames(
              "font-medium text-lg text-white transition-all duration-1000 delay-300 transform",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            Pushing a modified Mumm 30 born in 1997 to it's limits offshore.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Section1;
