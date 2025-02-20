import { createRoot } from "react-dom/client";
import { init as initTMA } from "@telegram-apps/sdk-react";
import { App } from "./app/App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

function main() {
  initTMA();
  root.render(<App />);
}

main();
