import {Box, CircularProgress, IconButton, MobileStepper, Paper, Skeleton, styled} from "@mui/material";
import {useEffect, useState} from "react";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {useSingleProductContext} from "../../Contexts/SingleProductContext.jsx";


const StyledLeftButton = styled(IconButton)(({theme}) => ({
    position: "absolute",
    top: "50%",
    left: "3%",
    transform: "translate(0, -50%)",
    color: "white",
    backgroundColor: theme.palette.grey["700"],
}));

const StyledRightButton = styled(IconButton)(({theme}) => ({
    position: "absolute",
    top: "50%",
    right: "3%",
    transform: "translate(0, -50%)",
    color: "white",
    backgroundColor: theme.palette.grey["700"],
}));

const StyledMobileStepper = styled(MobileStepper)(() => ({
    position: "absolute",
    bottom: "3%",
    left: "50%",
    transform: "translate(-50%, 0)",
    background: "none"
}));

function SingleProductProductImagesCarousel() {

    const {isLoadingProductDetails, singleProductData, singleProductError} = useSingleProductContext();
    const name = singleProductData?.data?.name;
    const imagesList = singleProductData?.data?.product?.productImages;
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = imagesList?.length;

    const preloadImages = () => {
        imagesList?.forEach((url) => {
            const img = new Image();
            img.src = url;
        });
    };

    useEffect(() => {
        preloadImages();
    }, [imagesList]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep === maxSteps - 1 ? 0 : prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1);
    };

    return (
        <Paper sx={{
            padding: "1rem",
            position: "relative",
            overflow: "hidden",
            height: "50dvh"
        }}>
            {!isLoadingProductDetails && !singleProductError &&
                <Box sx={{overflow: "hidden", position: "relative", width: "100%", height: "100%"}}>
                    <StyledLeftButton size="small" onClick={handleBack} disableRipple>
                        <ArrowBack/>
                    </StyledLeftButton>
                    <StyledRightButton size="small" onClick={handleNext} disableRipple>
                        <ArrowForward/>
                    </StyledRightButton>
                    <StyledMobileStepper
                        variant="dots"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        backButton={<></>}
                        nextButton={<></>}
                    />
                    <img src={imagesList[activeStep]}
                         alt={`${name}-image-${activeStep + 1}`}
                         height={"100%"}
                         width={"100%"}
                         style={{objectFit: "contain"}}
                    />
                </Box>
            }
            {
                isLoadingProductDetails &&
                <Skeleton animation={"wave"} variant="rectangular" sx={{height: "100%", width: "100%"}} />
            }
        </Paper>
    );
}

export default SingleProductProductImagesCarousel;