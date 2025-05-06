import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://nazabyvai.ru/kek";

export const buralApi = createApi({
  reducerPath: "buralApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/tombs`,
    prepareHeaders: (headers, { getState }) => {
      // const token = store.getState().authReducer.token
      const token = localStorage.getItem("access-token");

      if (token) headers.set("Authorization", `Bearer ${token}`);

      return headers;
    },
  }),
  tagTypes: ["Bural"],
  endpoints: (builder) => ({
    getTombs: builder.mutation({
      query: (body) => ({
        url: `/search?query=${body?.query || ''}&birthdate=${body?.birthdate || ''}&deathdate=${body?.deathdate || ''}&limit=${body?.limit || 20}&offcet=${body?.offset || 0}`,
        method: "POST",
        body,
        cache: "no-store",
      }),
    }),
  }),
});

export const { useGetTombsMutation } = buralApi;
