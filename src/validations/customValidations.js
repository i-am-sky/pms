export const nameValidation = (pName) => {
  const regex = /^[a-zA-Z]{3,}(\s?\w)*$/;
  let message;
  if (pName.length <= 0) {
    message = "please enter the name";
  } else if (!pName.match(regex)) {
    message = `product name should have more than 3 charecters`;
  } else {
    message = "";
  }
  return message;
};

export const priceValidation = (pPrice) => {
  let message;
  if (Number(pPrice) <= 0.01) {
    message = "price cannot be less than 0.01";
  } 
   else {
    message = "";
  }
  return message;
};

export const descriptionValidation = (description) => {
  const regex = /^(\w+\s+){4,}(\w+).$/;
  let message;
  if (description.length <= 0) {
    message = "please enter the description";
  } else if (!description.match(regex)) {
    message = `description should have atleast 5 words`;
  } else {
    message = "";
  }
  return message;
};

export const productCodeValidation = (productCode) => {
  const regex = /^[a-zA-Z]{3,4}-[0-9]{2,4}$/;
  let message;
  if (productCode.length <= 0) {
    message = "please enter the product code";
  } else if (!productCode.match(regex)) {
    message = "please enter the product code in correct format";
  } else {
    message = "";
  }
  return message;
};

export const releaseDateValidation = () => {
  let message = "";
  return message;
};

export const urlValidation = (url) => {
  let message;
  const regex =
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
  if (url.length <= 0) {
    message = "please enter the url";
  } else if (!url.match(regex)) {
    message = "please enter the url in correct format";
  } else {
    message = "";
  }
  return message;
};

export const ratingValidation = (rating) => {
  let message;
  const regex = /^([1-5])|([1-5]\.[0-9])$/;
  if (rating.length <= 0) {
    message = "please enter product rating";
  } else if (rating && 1.0 <= Number(rating) && Number(rating) <= 5.0) {
    message = "";
  } else {
    message = "product rating must be between 1 and 5";
  }
  return message;
};
