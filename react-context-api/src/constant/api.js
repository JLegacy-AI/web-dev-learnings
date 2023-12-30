const BASE_URL_API = "https://fakestoreapi.com";

export const getLimitProductsAPI = (limit) => {
  return `${BASE_URL_API}/products?limit=${limit}`;
};

export const getProductDetailAPI = (id) => {
  return `${BASE_URL_API}/products/${id}`;
};
