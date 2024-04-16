import {Controller} from "react-hook-form";
import {FormControl, TextField} from "@mui/material";

export function TextFieldWithController({
    control,
    name,
    id,
    label,
    type = "text",
    defaultValue,
    requiredMessage,
    disabled,
    error,
    helperText
}) {

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={{
                required: requiredMessage
            }}
            render={({field}) => (
                <FormControl fullWidth>
                    <TextField
                        {...field}
                        id={id}
                        name={name}
                        type={type}
                        label={label}
                        variant={"outlined"}
                        disabled={disabled}
                        error={error}
                        helperText={helperText}
                    />
                </FormControl>
            )}/>
    );
}

export function MultilineTextFieldWithController({
    control,
    name,
    id,
    label,
    defaultValue,
    rows,
    requiredMessage,
    disabled,
    error,
    helperText
}) {

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={{
                required: requiredMessage
            }}
            render={({field}) => (
                <FormControl fullWidth>
                    <TextField
                        {...field}
                        id={id}
                        name={name}
                        label={label}
                        multiline
                        rows={rows}
                        variant={"outlined"}
                        disabled={disabled}
                        error={error}
                        helperText={helperText}
                    />
                </FormControl>
            )}/>
    );
}