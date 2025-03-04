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
      <div>
        <img
          src={dashboardImage}
          alt="footer bg"
          className="absolute inset-0 is-full bs-full object-cover -z-[1]"
        />
        <div className={classnames("plb-6", frontCommonStyles.layoutSpacing)}>
          <Grid container rowSpacing={10} columnSpacing={12}>
            <Grid item xs={12} lg={8}>
              <div className="flex flex-col sm:flex-row items-center gap-6">
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
                  Making tutoring affordable for students and rewarding for
                  tutors.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} lg={4}>
              <div className="flex flex-row gap-4">
                {["Home", "Features", "Team", "FAQ", "Contact Us"].map(
                  (item, index) => (
                    <Typography
                      key={index}
                      component={Link}
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      sx={{
                        color: logoColor,
                        opacity: theme.palette.mode === "dark" ? 0.78 : 0.87,
                      }}
                    >
                      {item}
                    </Typography>
                  )
                )}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="bg-[#211B2C]">
        <div
          className={classnames(
            "flex flex-wrap items-center justify-center sm:justify-between gap-4 plb-[15px]",
            frontCommonStyles.layoutSpacing
          )}
        >
          <p className="text-white text-[13px]">
            <span>{"© All images are property of Alex Turnbull"}</span>
          </p>
          {!isBreakpointReached && (
            <div className="flex items-center gap-4">
              <Link
                href="/pages/misc/terms-of-service"
                target="_blank"
                className="text-primary"
              >
                Terms of Service
              </Link>
              <Link
                href="/pages/misc/privacy-policy"
                target="_blank"
                className="text-primary"
              >
                Privacy Policy
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
