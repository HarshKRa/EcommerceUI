import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../config/Api";
import { Product } from "../../Types/ProductType";

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId:Number, { rejectWithValue }) => {
    try {
      const response = await api.get(`products/${productId}`);

      const data = response.data;
      console.log("fetchProductById : ", data);
      return data;
    } catch (error: any) {
      console.log("Product fetch by id ", error);
      rejectWithValue(error.message);
    }
  }
);

export const searchProduct = createAsyncThunk(
  "products/searchProduct",
  async (query, { rejectWithValue }) => {
    try {
      const response = await api.get(`/serach`, {
        params: {
          query,
        },
      });

      const data = response.data;
      console.log("searchProduct data : ", data);
      return data;
    } catch (error: any) {
      console.log("Product fetch by id " , error);
      rejectWithValue(error.message);
    }
  }
);

export const fetchAllProducts = createAsyncThunk<any, any>(
  "products/fetchAllProducts",
  async (params, { rejectWithValue }) => {
    // console.log([...params]);
    try {
      console.log(params);
      const response = await api.get(`/products`, {
        params: {
          ...params,
          pageNumber: params.pageNumber || 0,
        },
      });

      const data = response.data;
      console.log("All product data : ", data.content);
      return data;
    } catch (error: any) {
      console.log("Params ", params);
      console.log("All product data error ", error);
      rejectWithValue(error.message);
    }
  }
);

interface productState {
  product: Product | null;
  products: Product[];
  totalPages: number;
  loading: boolean;
  error: string | null | undefined | any;
  searchProduct: Product[];
}

const initialState: productState = {
  product: null,
  products: [],
  totalPages: 0,
  loading: false,
  error: null,
  searchProduct: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });

    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.content;
    });

    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(searchProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(searchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
