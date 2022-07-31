import { Image, useTheme } from "@aws-amplify/ui-react";
import Logo from "./components/Logo.png";

export function Header() {
  const { tokens } = useTheme();

  return (
    <Image
      alt="logo"
      src= {Logo}
      padding={tokens.space.medium}
    />
  );
}
