export const getThirdWeek = () => {
  const date = new Date();
  date.setDate(date.getDate() + 21);

  return date;
};
