import { FC } from "react";
import { Providers } from "./providers";
import { RoutesProvider } from "./routes";
import { Notify } from "shared/ui/notify";

export const App: FC = () => {
  return (
    <Providers>
      <RoutesProvider />
      <Notify />
    </Providers>
  );
};
