const isEmptyCheck = (data: any): boolean => {
  return (
    data === undefined ||
    data === null ||
    data === "" ||
    (typeof data === "string" && data.trim().length === 0) ||
    (typeof data === "object" && Object.keys(data).length === 0)
  );
};

export default isEmptyCheck;
