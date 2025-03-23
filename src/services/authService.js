export const loginUser = async (username, password) => {
  return new Promise((resolve) => {
    console.log(username, password);
    setTimeout(() => {
      resolve({ token: 'fake-jwt-token' });
    }, 1000);
  });
};
