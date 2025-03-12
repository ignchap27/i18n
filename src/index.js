import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";
import localEsMessages from "./locales/es";
import localEnMessages from "./locales/en";
import App from "./App";

const browserLocale = navigator.language || navigator.userLanguage;
const isSpanish = browserLocale.startsWith("es");
const locale = isSpanish ? "es-ES" : "en-US";
const messages = isSpanish ? localEsMessages : localEnMessages;

ReactDOM.render(
    <App/>, document.getElementById("root")
);