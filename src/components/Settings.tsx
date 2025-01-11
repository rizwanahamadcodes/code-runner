import programmingLanguages from "@/data/programmingLanguages";
import clsx from "clsx";
import Select from "./Select";
import Switch from "./Switch";
import ThemeToggler from "./ThemeToggler";
import { useSettingsContext } from "@/context/settingsContext";
import { themes } from "@/data/themes";

type SettingsProps = React.ComponentPropsWithoutRef<"div">;

const Settings = (props: SettingsProps) => {
    const { className } = props;

    const {
        currentProgrammingLanguage,
        setCurrentProgrammingLanguage,
        sync,
        toggleSync,
        theme,
        setTheme,
    } = useSettingsContext();

    return (
        <div className={clsx("space-y-3", className)}>
            <SettingsGroup>
                <SettingsGroupHeading>Compiler Settings</SettingsGroupHeading>
                <SettingRow>
                    <SettingKeyColumn>
                        <SettingHeading>Language</SettingHeading>
                        <SettingDescription>
                            System will pick a suitable editor theme based on
                            color mode
                        </SettingDescription>
                    </SettingKeyColumn>
                    <Select
                        value={currentProgrammingLanguage}
                        onChange={setCurrentProgrammingLanguage}
                        options={programmingLanguages}
                    />
                </SettingRow>
            </SettingsGroup>

            <SettingsGroup>
                <SettingsGroupHeading>Theme Settings</SettingsGroupHeading>
                <SettingsGroupBody>
                    <SettingRow>
                        <SettingKeyColumn>
                            <SettingHeading>Color Mode</SettingHeading>
                        </SettingKeyColumn>
                        <ThemeToggler size="sm" />
                    </SettingRow>
                    <SettingRow>
                        <SettingKeyColumn>
                            <SettingHeading>
                                Sync color mode and theme
                            </SettingHeading>
                            <SettingDescription>
                                System will pick a suitable editor theme based
                                on color mode
                            </SettingDescription>
                        </SettingKeyColumn>
                        <Switch
                            htmlFor="syncSwitch"
                            checked={sync}
                            onChange={toggleSync}
                            size="sm"
                        />
                    </SettingRow>

                    <SettingRow
                        className={clsx(sync ? "opacity-50 select-none" : "")}>
                        <SettingKeyColumn>
                            <SettingHeading>Editor Theme</SettingHeading>
                        </SettingKeyColumn>
                        <Select
                            value={theme}
                            onChange={setTheme}
                            options={themes}
                            disabled={sync}
                        />
                    </SettingRow>
                </SettingsGroupBody>
            </SettingsGroup>
        </div>
    );
};

type SettingsGroupProps = React.ComponentPropsWithRef<"div">;
export const SettingsGroup = (props: SettingsGroupProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <div className={clsx("", className)} {...otherProps}>
            {children}
        </div>
    );
};
type SettingsGroupBodyProps = React.ComponentPropsWithRef<"div">;

export const SettingsGroupBody = (props: SettingsGroupBodyProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <div className={clsx("space-y-1", className)} {...otherProps}>
            {children}
        </div>
    );
};
type SettingKeyColumnProps = React.ComponentPropsWithRef<"div">;

export const SettingKeyColumn = (props: SettingKeyColumnProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <div className={clsx("", className)} {...otherProps}>
            {children}
        </div>
    );
};
type SettingRowProps = React.ComponentPropsWithRef<"div">;

export const SettingRow = (props: SettingRowProps) => {
    const { children, className, ...otherProps } = props;

    return (
        <div
            className={clsx("flex items-start justify-between", className)}
            {...otherProps}>
            {children}
        </div>
    );
};
type SettingsGroupHeadingProps = React.ComponentPropsWithRef<"h3">;

export const SettingsGroupHeading = (props: SettingsGroupHeadingProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <h3
            className={clsx(
                "mb-0.5 text-1 text-gray-600 dark:text-gray-400 font-normal",
                className
            )}
            {...otherProps}>
            {children}
        </h3>
    );
};
type SettingHeadingProps = React.ComponentPropsWithRef<"h4">;
export const SettingHeading = (props: SettingHeadingProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <h4 className={clsx("", className)} {...otherProps}>
            {children}
        </h4>
    );
};

type SettingDescriptionProps = React.ComponentPropsWithRef<"p">;
export const SettingDescription = (props: SettingDescriptionProps) => {
    const { className, children, ...otherProps } = props;

    return (
        <p
            className={clsx(
                "text-0.75 text-gray-600 dark:text-gray-400",
                className
            )}
            {...otherProps}>
            {children}
        </p>
    );
};

export default Settings;
