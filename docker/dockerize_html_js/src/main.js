"strict";

const printDateTimeWithTimeZone = () => {
  let date = new Date();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return `Today is ${date.toLocaleDateString()}. And the current time in the ${timezone} zone is ${date.toLocaleTimeString()}`;
};
