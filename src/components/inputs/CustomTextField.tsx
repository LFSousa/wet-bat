import { TextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";

const CustomTextField = forwardRef((props: TextFieldProps, ref: any) => {
  return (
    <TextField
      variant="filled"
      fullWidth
      InputProps={{
        disableUnderline: true,
        sx: {
          borderRadius: 0,
        },
      }}
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
      ref={ref}
    />
  );
});

export default CustomTextField;
