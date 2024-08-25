const formatDateAndTime = (date = Date.now()) => {
  const newDate = new Date(date);

  const dateOptions = { day: "2-digit", month: "long", year: "numeric" };

  const formattedDate = newDate.toLocaleDateString("en-GB", dateOptions);
  const formattedTime = newDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return {
    time: formattedTime,
    date: formattedDate,
  };
};

export default formatDateAndTime;
