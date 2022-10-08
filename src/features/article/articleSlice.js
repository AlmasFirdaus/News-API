import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  entitiesSaved: [],
};

const articleSavedPromise = (articleFetch) => {
  return new Promise((resolve, reject) => {
    if (articleFetch) {
      resolve({ articleFetch });
    } else {
      reject("No articles have been saved yet.");
    }
  });
};

export const articleSaved = createAsyncThunk("article/articleSaved", async ({ articleFetch }) => {
  try {
    const response = await articleSavedPromise(articleFetch);
    return response;
  } catch (err) {
    throw err;
  }
});

const articleUnSavedPromise = (filteredUnSave) => {
  return new Promise((resolve, reject) => {
    if (filteredUnSave) {
      resolve(filteredUnSave);
    } else {
      reject("No articles have been saved yet.");
    }
  });
};
export const articleUnSaved = createAsyncThunk("article/articleUnSaved", async ({ filteredUnSave }) => {
  try {
    const response = await articleUnSavedPromise(filteredUnSave);
    return response;
  } catch (err) {
    throw err;
  }
});

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(articleSaved.fulfilled, (state, action) => {
        state.isFetchPending = false;
        state.isFetchSuccess = true;
        const { articleFetch } = action.payload;

        if (!state.entitiesSaved.includes(articleFetch)) {
          const wrapArticle = [articleFetch];
          state.entitiesSaved.push(...wrapArticle);
        }
      })

      .addCase(articleUnSaved.pending, (state, action) => {
        state.isFetchPending = true;
        state.entitiesSaved = [];
      })
      .addCase(articleUnSaved.fulfilled, (state, action) => {
        state.isFetchPending = false;
        state.isFetchSuccess = true;
        state.entitiesSaved.push(...action.payload);
      });
  },
});

export default articleSlice.reducer;
