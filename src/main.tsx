import { createRoot } from "react-dom/client";
import { init as initTMA } from "@telegram-apps/sdk-react";
import { App } from "@/app/App";
import { isTMA } from "@telegram-apps/sdk-react";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

function main() {
  if (isTMA()) {
    initTMA();
  }
  root.render(<App />);
}

main();
