import {FormControl, Paper, styled} from "@mui/material";

export const StyledFormControlFilePickerForm = styled(FormControl)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
}));

export const StyledSelectedFilePaperForm = styled(Paper)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    padding: "0.4rem 0.8rem",
    overflow: "auto"
}));