import { Button, ButtonProps } from "@mui/material";

export default function CustomButton(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      color="secondary"
      fullWidth
      {...props}
      sx={{
        ...props.sx,
        borderRadius: 100,
        height: "100%",
      }}
    />
  );
}
