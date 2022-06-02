import { Box, BoxProps, Toolbar } from "@mui/material";

export default function PageLayout(props: BoxProps) {
  return (
    <Box
      {...props}
      component="main"
      flexGrow={1}
      p={3}
      marginLeft={{ sm: "170px", xs: 0 }}
    >
      <Toolbar />
      {props.children}
    </Box>
  );
}
