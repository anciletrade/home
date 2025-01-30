import { dotPulse } from "ldrs";

import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

type Props = {};
dotPulse.register();

const LoadingScreen = (props: Props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
      style={{
        backgroundColor: "hsl(220, 30%, 7%)"
      }}
    >
       <l-dot-pulse size="43" speed="1.3" color={"#0972d3"}  ></l-dot-pulse>
    </Box>
  );
};

export default LoadingScreen;
