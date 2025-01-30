import { useTheme } from "@mui/material";
import { logoBlack, logoWhite } from "../assets";

type Props = {};

const Logo = ({}: Props) => {
    const theme = useTheme();
  return (
      <img
        style={{ width: "100%" }}
        src={theme.palette.mode === "dark" ? logoWhite : logoBlack}
      />
  );
};

export default Logo;
