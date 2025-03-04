// React Imports
import { useEffect, useRef } from "react";

// MUI Imports
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Third-party Imports
import classnames from "classnames";

// Hook Imports
import { useIntersection } from "@/hooks/useIntersection";

// Styles Imports
import styles from "./styles.module.css";

import Image from "next/image";

function Section2() {
  // Refs
  const skipIntersection = useRef(true);
  const ref = useRef<null | HTMLDivElement>(null);

  // Hooks
  const { updateIntersections } = useIntersection();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  return (
    <section
      id="section2"
      ref={ref}
      className={classnames("py-8 bg-backgroundDefault w-full")}
    >
      <div className={classnames("flex flex-col w-full")}>
        {isMobile ? (
          <div className="flex justify-center w-full">
            <Card className="w-11/12 overflow-hidden shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <Typography
                      variant="h3"
                      className="font-bold mb-6 text-primary"
                    >
                      Our Mission
                    </Typography>
                    <Typography variant="body1" className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                      molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                      eleifend nibh porttitor. Ut in nulla enim.
                    </Typography>
                    <Typography variant="body1" className="mb-6">
                      Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                      Integer euismod lacus luctus magna. Quisque cursus, metus
                      vitae pharetra auctor, sem massa mattis sem, at interdum
                      magna augue eget diam. Vestibulum ante ipsum primis in
                      faucibus.
                    </Typography>
                  </div>
                  <div className="relative w-full h-[300px]">
                    <img
                      src={"/images/seb-side-eye.jpg"}
                      alt="Seb Side Eye"
                      className="w-full h-full object-cover rounded-[5px]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="flex justify-center w-full">
            <Card className="w-11/12 overflow-hidden shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-start gap-4">
                  <div className="relative w-1/3 h-[400px]">
                    <img
                      src={"/images/seb-side-eye.jpg"}
                      alt="Seb Side Eye"
                      className="w-full h-full object-cover rounded-[5px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 w-2/3">
                    <Typography
                      variant="h3"
                      className="font-bold mb-6 text-primary"
                    >
                      Our Mission
                    </Typography>
                    <Typography variant="body1" className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                      molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                      eleifend nibh porttitor. Ut in nulla enim.
                    </Typography>
                    <Typography variant="body1">
                      Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                      Integer euismod lacus luctus magna. Quisque cursus, metus
                      vitae pharetra auctor, sem massa mattis sem, at interdum
                      magna augue eget diam. Vestibulum ante ipsum primis in
                      faucibus.
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}

export default Section2;
