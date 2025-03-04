// MUI Imports
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { Theme } from "@mui/material/styles";

// Third-party Imports
import classnames from "classnames";

// schemas
import Image from "next/image";

const Section1 = () => {
  // Hooks
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[700px] w-full overflow-hidden">
        {/* Background Image using Next.js Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={
              isSmallScreen
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
            className="font-extrabold text-4xl md:text-5xl mb-4 text-white"
            component="h1"
          >
            Calypso Racing
          </Typography>
          <Typography className="font-medium text-lg text-white">
            Pushing a renovated 1997 Mumm 30 to it's limits offshore.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Section1;
