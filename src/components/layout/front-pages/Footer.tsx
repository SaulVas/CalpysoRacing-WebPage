"use client";

// MUI Imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

// Third-party Imports
import classnames from "classnames";

// Type Imports
import type { Mode } from "@core/types";

// Component Imports
import Link from "@components/Link";
import Logo from "@components/layout/shared/Logo";

// Hooks Imports
import { useImageVariant } from "@core/hooks/useImageVariant";

// Util Imports
import { frontLayoutClasses } from "@layouts/utils/layoutClasses";

// Styles Imports
import frontCommonStyles from "@views/front-pages/styles.module.css";
import useVerticalNav from "@menu/hooks/useVerticalNav";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = ({ mode }: { mode: Mode }) => {
  // Vars
  const footerImageLight = "/images/front-pages/footer-bg-light.png";
  const footerImageDark = "/images/front-pages/footer-bg-dark.png";

  // Hooks
  const dashboardImage = useImageVariant(
    mode,
    footerImageLight,
    footerImageDark
  );

  const { isBreakpointReached } = useVerticalNav();

  // Add theme hook
  const theme = useTheme();

  // Use CSS variable for color like in Logo.tsx
  const logoColor =
    theme.palette.mode === "dark"
      ? "var(--mui-palette-common-white)"
      : "var(--mui-palette-text-primary)";

  return (
    <footer
      className={classnames(
        "relative bg-backgroundDefault",
        frontLayoutClasses.footer
      )}
    >
      <div className="bg-[#211B2C]">
        <div className={classnames("plb-6", frontCommonStyles.layoutSpacing)}>
          <Grid container rowSpacing={10} columnSpacing={12}>
            <Grid item xs={12}>
              <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6">
                <Link href="/">
                  <Logo />
                </Link>

                <Typography
                  className="max-w-[300px] text-center sm:text-left"
                  sx={{
                    color: logoColor,
                    opacity: theme.palette.mode === "dark" ? 0.78 : 0.87,
                  }}
                >
                  Pushing the boundaries of offshore racing.
                </Typography>
                <p className="text-white text-[13px]">
                  <span>{"© All images are property of Alex Turnbull"}</span>
                </p>
                <a
                  href="https://www.instagram.com/calypso_racing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors flex items-center justify-center"
                >
                  <InstagramIcon fontSize="medium" />
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
