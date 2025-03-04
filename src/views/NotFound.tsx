"use client";

// Next Imports
import Link from "next/link";
import { useRouter } from "next/navigation";

// MUI Imports
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Third-party Imports
import classnames from "classnames";
import { motion } from "framer-motion";

// Type Imports
import type { SystemMode } from "@core/types";

// Hook Imports
import { useImageVariant } from "@core/hooks/useImageVariant";

// Styled Components
const MaskImg = styled("img")({
  blockSize: "auto",
  maxBlockSize: 355,
  inlineSize: "100%",
  position: "absolute",
  insetBlockEnd: 0,
  zIndex: -1,
});

const AnimatedTypography = styled(motion(Typography))({});

const NotFound = ({ mode }: { mode: SystemMode }) => {
  // Vars
  const darkImg = "/images/pages/misc-mask-dark.png";
  const lightImg = "/images/pages/misc-mask-light.png";
  const router = useRouter();

  // Hooks
  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down("md"));
  const miscBackground = useImageVariant(mode, lightImg, darkImg);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-center min-bs-[100dvh] relative p-6 overflow-x-hidden bg-gradient-to-b from-transparent to-primary-50 dark:to-primary-900/10">
      <Grid container spacing={4} className="max-w-7xl mx-auto">
        <Grid item xs={12} md={6} className="flex flex-col justify-center">
          <motion.div
            className="flex flex-col gap-4 text-center md:text-start"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <AnimatedTypography
              variants={itemVariants}
              className="font-bold text-8xl md:text-9xl"
              color="primary"
              sx={{
                textShadow:
                  "2px 2px 8px rgba(var(--mui-palette-primary-mainChannel) / 0.3)",
              }}
            >
              404
            </AnimatedTypography>

            <AnimatedTypography
              variants={itemVariants}
              variant="h4"
              className="font-medium"
            >
              Oops! Page Not Found
            </AnimatedTypography>

            <AnimatedTypography
              variants={itemVariants}
              className="mb-6 text-lg"
            >
              The page you're looking for doesn't exist or has been moved.
            </AnimatedTypography>

            <Box
              component={motion.div}
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <Button
                href="/"
                component={Link}
                variant="contained"
                size="large"
                className="px-6"
              >
                Back To Home
              </Button>

              <Button
                onClick={handleGoBack}
                variant="outlined"
                size="large"
                className="px-6"
              >
                Go Back
              </Button>
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      {!hidden && (
        <MaskImg
          alt="mask"
          src={miscBackground}
          className={classnames("opacity-80", {
            "scale-x-[-1]": theme.direction === "rtl",
          })}
        />
      )}

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-primary-200/30 dark:bg-primary-800/20"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0.7,
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
