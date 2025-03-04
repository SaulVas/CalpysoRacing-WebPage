"use client";

// React Imports
import { useEffect } from "react";

// Type Imports
import type { SystemMode } from "@core/types";

// Component Imports
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import OurTeam from "./OurTeam";
import { useSettings } from "@core/hooks/useSettings";
const LandingPageWrapper = () => {
  // Hooks
  const { updatePageSettings } = useSettings();

  // For Page specific settings
  useEffect(() => {
    return updatePageSettings({
      skin: "default",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-backgroundPaper">
      <Section1 />
      <Section2 />
      <Section3 />
      <OurTeam />
    </div>
  );
};

export default LandingPageWrapper;
