import { client, checkError } from './client';

export async function fetchCountries() {
  const resp = await client.from('countries').select();
  return checkError(resp);
}
