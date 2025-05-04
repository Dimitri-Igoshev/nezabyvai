import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { set } from "react-hook-form";

export interface ISearch {
	query: string;
	birthday: string;
	deathday: string;
}

const INITIAL_STATE: ISearch = {
	query: "",
	birthday: "",
	deathday: "",
};

const searchSlice = createSlice({
	name: "search",
	initialState: INITIAL_STATE,
	reducers: {
		setSearchQuery: (state, action: PayloadAction<string>) => {
			set(state, "query", action.payload);
		},
		setSearchBirthday: (state, action: PayloadAction<string>) => {
			set(state, "birthday", action.payload);
		},
		setSearchDeathday: (state, action: PayloadAction<string>) => {
			set(state, "deathday", action.payload);
		},
	},
});

export const { setSearchQuery, setSearchBirthday, setSearchDeathday } =
	searchSlice.actions;

export default searchSlice.reducer;
