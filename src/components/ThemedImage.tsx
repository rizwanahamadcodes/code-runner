import { useTheme } from "next-themes";

type ThemedImageProps = Omit<React.ComponentPropsWithoutRef<"div">, "src"> & {
    lightModeImgSrc: string;
    darkModeImgSrc: string;
};

const ThemedImage = (props: ThemedImageProps) => {
    const { lightModeImgSrc, darkModeImgSrc, className, ...otherProps } = props;
    const { theme } = useTheme();
    const imageSrc = theme == "light" ? lightModeImgSrc : darkModeImgSrc;

    return <img className={className} src={imageSrc} {...otherProps} />;
};

export default ThemedImage;
