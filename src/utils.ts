export const dateStringToDate = (dateString: string): Date => {
  // Converts from date in string form ("28/10/2018") to Date object
  const dateParts = dateString.split('/').map(value => {
    return parseInt(value);
  });
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
