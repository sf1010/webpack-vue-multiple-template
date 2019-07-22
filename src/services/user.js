import { GET } from '@/tools/request';

export async function selectUserInfo() {
  return await GET('/selectUserInfo');
}
