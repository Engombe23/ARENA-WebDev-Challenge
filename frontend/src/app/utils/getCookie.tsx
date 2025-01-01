export const getCookie = (name: any) => {
  const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith(name + '='))
      ?.split('=')[1];
  return cookieValue || '';
};
