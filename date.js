const today = new Date();
let options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};
exports.getDate = () => {
  return today.toLocaleDateString("en-US", options);
};

exports.getDay = () => {
  options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-US", options);
};
