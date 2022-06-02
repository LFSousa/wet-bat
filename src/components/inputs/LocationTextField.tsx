import { Autocomplete } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import locationsRepository from "../../repositories/LocationsRepository";
import Location from "../../repositories/models/Location";
import CustomTextField from "./CustomTextField";
import throttle from "lodash.throttle";
import { Control, Controller } from "react-hook-form";

export default function LocationTextField({
  name,
  control,
  rules,
  label,
}: {
  name: string;
  control: Control;
  rules?: any;
  label: string;
}) {
  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<Location[]>([]);

  const fetch = useMemo(
    () => throttle((search: string) => locationsRepository.search(search), 500),
    []
  );

  useEffect(() => {
    if (inputValue.length < 3) {
      setOptions([]);
      return;
    }
    fetch(inputValue)?.then((locations) => {
      setOptions(locations);
    });
  }, [inputValue, fetch]);

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={options}
          autoComplete
          getOptionLabel={(option) => {
            return Object.keys(option).length
              ? `${option.name} - ${option.municipality} ${option.iata}`
              : "";
          }}
          isOptionEqualToValue={(option, val) => option?.id === val?.id}
          includeInputInList
          filterSelectedOptions
          onChange={(_, newValue) => {
            field.onChange(newValue);
          }}
          onInputChange={(_, newInputValue) => {
            setInputValue(newInputValue);
          }}
          renderInput={(params) => (
            <CustomTextField
              {...params}
              InputProps={{
                ...params.InputProps,
                disableUnderline: true,
                sx: {
                  borderRadius: 0,
                },
              }}
              InputLabelProps={{
                shrink: true,
              }}
              label={label}
            />
          )}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option.id}>
                {option.name} - {option.municipality} {option.iata}
              </li>
            );
          }}
        />
      )}
    />
  );
}
