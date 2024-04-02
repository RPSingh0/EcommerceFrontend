import {MenuOpen} from "@mui/icons-material";
import {IconButton} from "@mui/material";

function OpenMenu() {
    return (
        <IconButton
            size={"large"}
            edge={"start"}
            color={"inherit"}
            aria-label={"open drawer"}
        >
            <MenuOpen/>
        </IconButton>
    );
}

export default OpenMenu;