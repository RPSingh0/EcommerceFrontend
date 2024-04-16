import {MenuOpen} from "@mui/icons-material";
import {IconButton} from "@mui/material";

function OpenMenu({toggleHeader}) {
    return (
        <IconButton
            size={"large"}
            edge={"start"}
            color={"inherit"}
            aria-label={"open drawer"}
            onClick={() => toggleHeader(true)}
        >
            <MenuOpen/>
        </IconButton>
    );
}

export default OpenMenu;