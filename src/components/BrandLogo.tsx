import ThemedImage from "./ThemedImage";
import codeRunnerLogoPrimary from "/logo/logo-primary.svg";
import codeRunnerLogoWhite from "/logo/logo-white.svg";

type BrandLogoProps = React.ComponentPropsWithoutRef<"a">;

const BrandLogo = (props: BrandLogoProps) => {
    const { ...otherProps } = props;

    return (
        <a {...otherProps}>
            <ThemedImage
                className="h-2.5"
                darkModeImgSrc={codeRunnerLogoWhite}
                lightModeImgSrc={codeRunnerLogoPrimary}
            />
        </a>
    );
};

export default BrandLogo;
