import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

/**
 * @param {string} url
 */
export function render(url) {
  const html = renderToString(
    <StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </StrictMode>,
  );
  return { html };
}
