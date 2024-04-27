import {Controller} from "react-hook-form";
import {FormControl, Paper, Rating, styled, TextField, Typography} from "@mui/material";
import {Circle} from "@mui/icons-material";

const StyledFormControlFilePicker = styled(FormControl)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
}));

const StyledSelectedFilePaper = styled(Paper)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    padding: "0.4rem 0.8rem",
    overflow: "auto"
}))

export function TextFieldWithController({
    control,
    name,
    id,
    label,
    type = "text",
    defaultValue,
    required = true,
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
                required: required ? requiredMessage : false
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

export function InputRating({
    control, name, id, defaultValue, disabled
}) {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({field}) => (
                <Rating
                    {...field}
                    id={id}
                    name={name}
                    disabled={disabled}
                    value={Number(field.value)}
                />
            )}
        />
    );
}

export function InputFileUploadSingleImage({
    control, image, setImage, name, id, label, disabled, error, helperText
}) {
    const handleInputChange = (event) => {
        const files = event.target.files;
        setImage(Array.from(files));
    };

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={image}
            render={({field}) => (
                <StyledFormControlFilePicker>
                    <TextField
                        {...field}
                        id={id}
                        name={name}
                        variant={"outlined"}
                        type={"file"}
                        label={label}
                        onChange={(event) => {
                            field.onChange(event);
                            handleInputChange(event);
                        }}
                        disabled={disabled}
                        error={error}
                        helperText={helperText}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    {image.length > 0 &&
                        <StyledSelectedFilePaper>
                            {image.map(f =>
                                <Typography variant={"subtitle2"} noWrap key={f.name}>
                                    <Circle sx={{height: 10}}/> {f.name}
                                </Typography>)}
                        </StyledSelectedFilePaper>
                    }
                </StyledFormControlFilePicker>
            )}/>
    );
}