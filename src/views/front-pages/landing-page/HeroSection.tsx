// MUI Imports
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { Theme } from "@mui/material/styles";

// Third-party Imports
import classnames from "classnames";

// Type Imports

import frontCommonStyles from "@views/front-pages/styles.module.css";

import type { SystemMode } from "@core/types";

import InformationCard from "@/components/cards/front-pages/landing-page/InformationCard";

// Styles Imports
import styles from "./styles.module.css";

// schemas

const HeroSection = ({ mode }: { mode: SystemMode }) => {
  // Hooks
  const { mode: muiMode } = useColorScheme();
  const _mode = (muiMode === "system" ? mode : muiMode) || mode;

  // Add these new hooks
  const isBelowLgScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  return (
    <section
      id="home"
      className="overflow-hidden pbs-[75px] pb-[50px] -mbs-[75px] relative"
    >
      <div
        className={classnames(
          "pbs-[88px] overflow-hidden",
          frontCommonStyles.layoutSpacing
        )}
      >
        <div className="md:max-is-[650px] mbs-0 mbe-16 mli-auto text-center relative">
          <Typography
            className={classnames(
              "font-extrabold sm:text-[42px] text-3xl mbe-4 leading-[48px]",
              styles.heroText
            )}
          >
            Connecting Students with Expert Tutors
          </Typography>
          <Typography className="font-medium mbe-6" color="text.primary">
            Making Tutoring Affordable for Students and Rewarding for Tutors.
          </Typography>
        </div>
      </div>
      <div
        className={classnames(
          "relative text-center flex-col md:flex-row",
          frontCommonStyles.layoutSpacing,
          styles.cardsContainer
        )}
      >
        <InformationCard title="Students" />
        <InformationCard title="Tutors" />
      </div>
    </section>
  );
};

export default HeroSection;
