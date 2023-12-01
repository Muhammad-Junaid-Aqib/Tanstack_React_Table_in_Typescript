// import { extendTheme } from "@chakra-ui/react";
import { createTheme } from '@mui/material/styles';
import styles from "./style";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = createTheme({
  styles,
  config,
});

export default theme;