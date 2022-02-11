import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 
 
export const foodApi = createApi({
  reducerPath: 'foodApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/'}),
  endpoints: (builder) => ({
    getAllFood: builder.query({
      query: () => `api/json/v1/1/search.php?f=a`,
    }),
  }),
}) 
 
export const { useGetAllFoodQuery } = foodApi