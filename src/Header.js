import { Image, useTheme } from "@aws-amplify/ui-react";
import Logo from "./components/Logo.png";
import Logo_dark_red from "./components/logo_dark_red.png";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Image
      alt="logo"
      src= {Logo_dark_red}
      padding={tokens.space.medium}
    />
  );
}
