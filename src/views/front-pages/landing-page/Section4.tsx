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
import Chip from "@mui/material/Chip";

// Styles Imports

// Static content
const raceResults = [
  {
    date: "19/10/2023",
    race: "45TH Rolex Middle Sea Race",
    results: ["1st IRC5", "1st ORC 6", "2nd ORC overall"],
  },
  {
    date: "08/11/2024",
    race: "BOV Gozo Autumn Regatta",
    results: ["1st"],
  },
  {
    date: "23/11/2024",
    race: "Zhik Double Handed Figure of 8",
    results: ["2nd"],
  },
  {
    date: "07/12/2024",
    race: "Round Comino Race",
    results: ["1st"],
  },
  {
    date: "13/12/2024",
    race: "Medcomms Round Malta Race",
    results: ["1st"],
  },
];

function Section4() {
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
              <CardContent className="px-8 py-4">
                <div className="flex flex-col items-center">
                  <div className="mb-6">
                    <Typography
                      variant="h3"
                      className="font-bold mb-6 text-primary"
                    >
                      Recent Results
                    </Typography>
                    <div className="space-y-3 mb-4">
                      {raceResults.map((result, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center border-b pb-2 last:border-b-0"
                        >
                          <Typography variant="body1" className="flex-1 mx-4">
                            {result.race}
                          </Typography>
                          <div className="flex flex-col items-end">
                            {result.results.map((position, posIndex) => (
                              <Chip
                                key={posIndex}
                                size="small"
                                variant="tonal"
                                color="primary"
                                label={position}
                                className="m-1"
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative w-full h-[200px]">
                    <img
                      src={"/images/podium.jpg"}
                      alt="Seb Side Eye"
                      className="w-full h-full object-cover rounded-[5px]"
                    />
                  </div>
                  <Typography
                    variant="body2"
                    className="italic text-center mt-4"
                  >
                    Join us for our next race!
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="flex justify-center w-full">
            <Card className="w-11/12 overflow-hidden shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-start gap-4">
                  <div className="flex flex-col items-center justify-center gap-2 w-2/3">
                    <Typography
                      variant="h3"
                      className="font-bold mb-6 text-primary"
                    >
                      Recent Results
                    </Typography>
                    <div className="space-y-3 mb-4">
                      {raceResults.map((result, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center border-b pb-2 last:border-b-0"
                        >
                          <Typography variant="body1" className="font-medium">
                            {result.date}
                          </Typography>
                          <Typography variant="body1" className="flex-1 mx-4">
                            {result.race}
                          </Typography>
                          <div className="flex flex-col items-end">
                            {result.results.map((position, posIndex) => (
                              <Chip
                                key={posIndex}
                                size="small"
                                variant="tonal"
                                color="primary"
                                label={position}
                                className="m-1"
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Typography variant="body2" className="italic text-right">
                      Join us for our next race!
                    </Typography>
                  </div>
                  <div className="relative w-full h-[300px]">
                    <img
                      src={"/images/podium.jpg"}
                      alt="Seb Side Eye"
                      className="w-full h-full object-cover rounded-[5px]"
                    />
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

export default Section4;
