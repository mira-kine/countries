import { checkError, client } from './client';

export async function getCountries() {
  const response = await client.from('countries').select('*, iso2');
  return checkError(response);
}
