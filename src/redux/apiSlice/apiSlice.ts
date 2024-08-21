import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { urls } from '../../config';

const api = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:urls?.API_BASE_URL}),
    endpoints:(builder)=>({
        getItems: builder.query({
            query: () => '/',
          }),
          addItem: builder.mutation({
            query: (newItem) => ({
              url: 'items',
              method: 'POST',
              body: newItem,
            }),
          }),
          updateItem: builder.mutation({
            query: ({ id, ...updatedItem }) => ({
              url: `items/${id}`,
              method: 'PUT',
              body: updatedItem,
            }),
          }),
          deleteItem: builder.mutation({
            query: (id) => ({
              url: `items/${id}`,
              method: 'DELETE',
            }),
          }),
    }),
})

export const { useGetItemsQuery, useAddItemMutation, useUpdateItemMutation, useDeleteItemMutation } = api;



// Can we able to deal REST operation like post put delete in RTK Query 

// how to know if Post method got succeed or got error in RTK query 
// https://redux-toolkit.js.org/tutorials/rtk-query