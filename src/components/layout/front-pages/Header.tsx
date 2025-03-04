"use client";

// React Imports
import { useState } from "react";

// Next-Auth Imports
import { useSession } from "next-auth/react";

// MUI Imports
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import type { Theme } from "@mui/material/styles";

// Third-party Imports
import classnames from "classnames";

// Next Imports
import Link from "@/components/Link";

// Component Imports
import Logo from "@components/layout/shared/Logo";

// Util Imports
import { frontLayoutClasses } from "@layouts/utils/layoutClasses";

// Styles Imports
import styles from "./styles.module.css";

const Header = () => {
  // Hooks
  const isBelowLgScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  // Detect window scroll
  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true,
  });

  return (
    <header className={classnames(frontLayoutClasses.header, styles.header)}>
      <div
        className={classnames(frontLayoutClasses.navbar, styles.navbar, {
          [styles.headerScrolled]: trigger,
        })}
      >
        <div
          className={classnames(
            frontLayoutClasses.navbarContent,
            styles.navbarContent
          )}
        >
          {isBelowLgScreen ? (
            <div className="flex items-center justify-between gap-2 sm:gap-4">
              <Link href="/">
                <Logo />
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-10">
              <Link href="/">
                <Logo />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
