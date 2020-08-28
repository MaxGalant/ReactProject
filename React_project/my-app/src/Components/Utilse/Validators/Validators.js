export const RequireField = (value) => {
  if (!value) {
    return "Fill is requred";
  } else return undefined;
};
export const MaxLengthCreator = (Max_length) => (value) => {
  if (value && value.length > Max_length) {
    return "Max length is " + `${Max_length}` + " symbols";
  } else return undefined;
};
