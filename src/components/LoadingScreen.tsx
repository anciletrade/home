import { spiral } from "ldrs";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

type Props = {};
spiral.register();

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
      <l-spiral size="100" speed="0.9" color={"hsl(210, 98%, 48%)"}></l-spiral>
    </Box>
  );
};

export default LoadingScreen;
