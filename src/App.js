import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist";
import localEsMessages from "./locales/es";
import localEnMessages from "./locales/en";

const App = () => {
    const [locale, setLocale] = useState(
        navigator.language.startsWith("es") ? "es-ES" : "en-US"
    );
    const messages = locale.startsWith("es") ? localEsMessages : localEnMessages;
  
    const toggleLocale = () => {
        setLocale(prev => (prev.startsWith("es") ? "en-US" : "es-ES"));
    };
  
    return (
        <IntlProvider key={locale} locale={locale} messages={messages}>
            <div className="container mt-3">
                <button className="btn btn-primary mb-3" onClick={toggleLocale}>
                    {locale.startsWith("es") ? "Switch to English" : "Cambiar a español"}
                </button>
                <JobsList />
            </div>
        </IntlProvider>
    );
};

export default App;