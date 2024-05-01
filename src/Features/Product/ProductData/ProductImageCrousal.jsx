import {useEffect, useState} from "react";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {useSingleProductContext} from "../../../Contexts/SingleProductContext.jsx";
import {
    FullHeightWidthWaveSkeleton,
    StyledImageButtonStepperContainerProductData,
    StyledImagePaperContainerProductData,
    StyledLeftButtonImageProductData,
    StyledMobileStepperImageProductData,
    StyledRightButtonImageProductData
} from "./ProductDataRComponents.jsx";

function ProductImageCrousal() {

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
        <StyledImagePaperContainerProductData>
            {!isLoadingProductDetails && !singleProductError &&
                <StyledImageButtonStepperContainerProductData>
                    <StyledLeftButtonImageProductData size="small" onClick={handleBack} disableRipple>
                        <ArrowBack/>
                    </StyledLeftButtonImageProductData>
                    <StyledRightButtonImageProductData size="small" onClick={handleNext} disableRipple>
                        <ArrowForward/>
                    </StyledRightButtonImageProductData>
                    <StyledMobileStepperImageProductData
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
                </StyledImageButtonStepperContainerProductData>
            }
            {isLoadingProductDetails && <FullHeightWidthWaveSkeleton/>}
        </StyledImagePaperContainerProductData>
    );
}

export default ProductImageCrousal;