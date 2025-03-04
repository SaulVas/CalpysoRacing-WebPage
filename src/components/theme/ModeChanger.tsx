// React Imports
import { useEffect } from "react";

// MUI Imports
import { useColorScheme } from "@mui/material/styles";

// Third-party Imports
import { useMedia } from "react-use";

// Hook Imports
import { useSettings } from "@core/hooks/useSettings";

// Types
import type { Mode } from "@core/types";

const ModeChanger = () => {
  // Hooks
  const { setMode } = useColorScheme();
  const { settings } = useSettings();
  const isDark = useMedia("(prefers-color-scheme: dark)", false);

  useEffect(() => {
    setMode("dark" as Mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.mode]);

  return null;
};

export default ModeChanger;
