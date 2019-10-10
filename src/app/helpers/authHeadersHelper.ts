
export function createAuthHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
  };
}
