import { useState } from "react";
import { Country } from "../../components/CountrySettings/types";
import { CountriesList } from "../../components/CountrySettings/List";
import { SelectedCountry } from "../../components/CountrySettings/SelectedCountry";
import { ThemeProvider, Mode } from "../../theme";
import { SettingsButton } from "./components/SettingsButton";

export const PerformanceCustomHook = ({
  countries,
}: {
  countries: Country[];
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [savedCountry, setSavedCountry] = useState<Country>(countries[0]);
  const [mode, setMode] = useState<Mode>("light");

  return (
    <ThemeProvider value={{ mode }}>
      <h1>Country settings</h1>
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
      <SettingsButton />
      <div className="content">
        <CountriesList
          countries={countries}
          onCountryChanged={(c) => setSelectedCountry(c)}
          savedCountry={savedCountry}
        />
        <SelectedCountry
          country={selectedCountry}
          onCountrySaved={() => setSavedCountry(selectedCountry)}
        />
      </div>
    </ThemeProvider>
  );
};
