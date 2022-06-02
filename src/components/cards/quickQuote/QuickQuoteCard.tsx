import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Alert, CircularProgress, Grid, Snackbar } from "@mui/material";
import { BoxProps } from "@mui/system";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import DashboardCard from "../../DashboardCard";
import CustomButton from "../../inputs/CustomButton";
import CustomDatePicker from "../../inputs/CustomDatePicker";
import CustomTextField from "../../inputs/CustomTextField";
import LocationTextField from "../../inputs/LocationTextField";
import { fetchPendingQuotesPage } from "../pendingQuotes/pendingQuotesSlicer";
import { createQuickQuote } from "./quickQuoteSlicer";

export default function QuickQuoteCard({
  onExpand,
  ...props
}: Omit<BoxProps, "children"> & { onExpand?: () => void }) {
  const dispatch = useAppDispatch();
  const quoteStatus = useAppSelector((state) => state.quickQuote.status);
  const quoteError = useAppSelector((state) => state.quickQuote.error);
  const quote = useAppSelector((state) => state.quickQuote.quote);

  const { control, handleSubmit, register, reset } = useForm();
  const [isAlertOpen, setIsAlertOpen] = useState<"error" | "success" | false>();
  const [formError, setFormError] = useState<string>();

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };
  const handleFormError = (errors: { [key: string]: any }) => {
    setFormError(Object.values(errors)[0].message);
    setIsAlertOpen("error");
  };

  const onSubmit = (data: FieldValues) => {
    if (quoteStatus === "loading") return;
    dispatch(
      createQuickQuote({
        departureDate: data.departureDate,
        returnDate: data.returnDate,
        originId: data.origin.id,
        destinationId: data.destination.id,
        name: data.name,
        people: data.people,
        transportation: data.transportation,
      })
    );
  };

  useEffect(() => {
    if (!quote) return;
    dispatch(fetchPendingQuotesPage({ page: 0, limit: 10 }));
    reset({
      people: "",
      departureDate: quote.departureDate,
      returnDate: quote.returnDate,
      origin: {},
      destination: {},
      name: "",
      transportation: "",
    });
  }, [quote, dispatch, reset]);

  useEffect(() => {
    setFormError("");
    if (quoteStatus === "error") {
      setIsAlertOpen("error");
    } else if (!!quote) {
      setIsAlertOpen("success");
    } else {
      setIsAlertOpen(false);
    }
  }, [quoteStatus, quote]);

  return (
    <DashboardCard
      icon={faAnglesRight}
      title="Quick quote"
      onExpand={onExpand}
      contentProps={{ p: 3 }}
      {...props}
    >
      <Snackbar
        open={!!isAlertOpen}
        autoHideDuration={6000}
        transitionDuration={0}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={isAlertOpen === "error" ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {isAlertOpen === "error"
            ? formError ?? quoteError
            : "Quote created successfully"}
        </Alert>
      </Snackbar>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2 }}>
        <Grid item xs={12} sm={6}>
          <LocationTextField
            label="FROM"
            name="origin"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Origin is required",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocationTextField
            label="DESTINATION"
            name="destination"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Destination is required",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomDatePicker
            control={control}
            name="departureDate"
            label="DEPART DATE"
            rules={{
              required: {
                value: true,
                message: "Departure date is required",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomDatePicker
            control={control}
            name="returnDate"
            label="RETURN DATE"
            rules={{
              required: {
                value: true,
                message: "Return date is required",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            label="PEOPLE"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            {...register("people", {
              required: {
                value: true,
                message: "Please enter the number of people",
              },
              valueAsNumber: true,
              min: {
                value: 1,
                message: "Please enter a valid number of people",
              },
              validate: (value) => value > 0,
            })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            label="TRANSPORTATION"
            {...register("transportation", {
              required: {
                value: true,
                message: "Please enter the transportation",
              },
            })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomTextField
            label="NAME"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter the name",
              },
            })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomButton onClick={handleSubmit(onSubmit, handleFormError)}>
            {quoteStatus === "loading" ? (
              <CircularProgress sx={{ color: "white" }} />
            ) : (
              "Create a quote"
            )}
          </CustomButton>
        </Grid>
      </Grid>
    </DashboardCard>
  );
}
