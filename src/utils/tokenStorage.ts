export const getToken: () => string | undefined = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
};

export const setToken: (token: string) => void = (token) => {
  localStorage.setItem("token", token);
};

export const checkToken = () => {
  const token = getToken();
  if (!token) {
    return false;
  }
  return token;
};
