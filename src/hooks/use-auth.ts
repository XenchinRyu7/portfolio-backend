export function useAuth() {
  const user = localStorage.getItem('user');
  return !!user;
}
