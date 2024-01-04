export const ingredientMobileStyle = {
  control: (provided: any) => ({
    ...provided,
    border: 0,
    boxShadow: "none",
    width: "184px",
    backgroundColor: "#F5F5F5",
  }),
  option: (provided: any) => ({
    ...provided,
    width: "184px",
  }),
  menu: (provided: any) => ({
    ...provided,
    maxHeight: "170px",
    overflow: "auto",
    width: "184px",
    backgroundColor: "#F5F5F5",
  }),
  indicatorSeparator: () => ({ display: "none" }),
};

export const measureMobileStyle = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    border: 0,
    boxShadow: "none",
    backgroundColor: "#F5F5F5",
    width: "80px",
  }),
  option: (baseStyles: any) => ({
    ...baseStyles,
    width: "80px",
  }),
  menu: (baseStyles: any) => ({
    ...baseStyles,
    width: "80px",
    overflow: "auto",
    maxHeight: "170px",
    backgroundColor: "#F5F5F5",
    textAlign: "center",
  }),
  indicatorSeparator: () => ({ display: "none" }),
};

const ingredientTabletAndDesktopStyle = {
  control: (provided: any) => ({
    ...provided,
    border: 0,
    boxShadow: "none",
    width: "398px",
    backgroundColor: "#F5F5F5",
  }),
  option: (provided: any) => ({
    ...provided,
    width: "398px",
  }),
  menu: (provided: any) => ({
    ...provided,
    maxHeight: "170px",
    overflow: "auto",
    width: "398px",
    backgroundColor: "#F5F5F5",
  }),
  indicatorSeparator: () => ({ display: "none" }),
};

const measureTabletAndDesktopStyle = {
  control: (baseStyles: any) => ({
    ...baseStyles,
    border: 0,
    boxShadow: "none",
    backgroundColor: "#F5F5F5",
    width: "80px",
  }),
  option: (baseStyles: any) => ({
    ...baseStyles,
    width: "80px",
  }),
  menu: (baseStyles: any) => ({
    ...baseStyles,
    width: "80px",
    overflow: "auto",
    maxHeight: "170px",
    backgroundColor: "#F5F5F5",
    textAlign: "center",
  }),
  indicatorSeparator: () => ({ display: "none" }),
};

export const ingredientStyle = window.innerWidth >= 768 ? ingredientTabletAndDesktopStyle : ingredientMobileStyle;
export const measureStyle = window.innerWidth >= 768 ? measureTabletAndDesktopStyle : measureMobileStyle;