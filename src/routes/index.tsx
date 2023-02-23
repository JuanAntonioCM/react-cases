import { createBrowserRouter } from "react-router-dom";
import { Country } from "../components/CountrySettings/types";
import { NativeHooksPage } from "../pages/native-hooks";
import { PerformanceCustomHook } from "../pages/performace-custom-hook";
import { rawCountries } from "../data/raw-data";

const getCountriesFromRawData = (raw: any[]): Country[] => {
  return raw.map((value: any) => ({
    __typename: "country",
    name: String(value.name.common),
    id: String(value.cca2).toLowerCase(),
    independent: Boolean(value.independent),
    unMember: Boolean(value.unMember),
    flagUrl: `https://flagcdn.com/${String(value.cca2).toLowerCase()}.svg`,
    region: String(value.region),
    capital: value.capital.length ? String(value.capital[0]) : "",
    subregion: String(value.subregion),
  }));
};

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <NativeHooksPage />,
  },
  {
    path: "/custom-hooks",
    element: (
      <PerformanceCustomHook
        countries={getCountriesFromRawData(rawCountries)}
      />
    ),
  },
]);
