import axios from "axios";

const url = "https://disease.sh/v3/covid-19";

export const fetchData = async (country) => {
  const endpoint = country ? `${url}/countries/${country}` : `${url}/all`;
  try {
    const { data: { cases, recovered, deaths, updated } } = await axios.get(endpoint);
    return {
      confirmed: { value: cases },
      recovered: { value: recovered },
      deaths: { value: deaths },
      lastUpdate: new Date(updated),
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/historical/all?lastdays=30`);
    return Object.keys(data.cases).map((date) => ({
      confirmed: data.cases[date],
      deaths: data.deaths[date],
      date,
    }));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const { data } = await axios.get(`${url}/countries`);
    return data.map((country) => country.country);
  } catch (error) {
    console.log(error);
  }
};