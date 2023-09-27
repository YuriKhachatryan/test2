import { GetListParams, fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import { DataProvider } from 'react-admin';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const { access_token } = JSON.parse(localStorage.getItem('auth') || '{}');
  options.headers.set('Authorization', `Bearer ${access_token}`);

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = {
  getList: async (resource: string, params: GetListParams) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const { headers, json } = await httpClient(url);
    return {
      data: json,
      total: parseInt(headers.get('content-range')?.split('/').pop() || '0', 10),
    };
  },

  getOne: (resource: string, params: { id: any }) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json,
    })),

  create: async (resource: any, params: { data: any }) => {
    let requestBody: string | FormData = JSON.stringify(params.data);
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: requestBody,
    });

    return {
      data: { ...params.data, id: json.id },
    };
  },

  update: async (resource: any, params: any) => {
    let requestBody: string | FormData = JSON.stringify(params.data);
    console.log('====================================');
    console.log('ssssssssssssssssssssssssssssssssssss');
    console.log('====================================');
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'put',
      body: requestBody,
    });

    return {
      data: { ...params.data, id: json.id },
    };
  },

  delete: (resource: string, params: any) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
    }).then(({ json }) => ({ data: json })),
} as DataProvider;
