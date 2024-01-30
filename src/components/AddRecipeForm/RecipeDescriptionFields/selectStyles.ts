export const selectStyles = {
    control: (baseStyles: any) => ({
      ...baseStyles,
      border: 0,
      boxShadow: "none",
      backgroundColor: "#F5F5F5",
    }),
    option: (baseStyles: any) => ({
      ...baseStyles,
    }),
    menu: (baseStyles: any) => ({
      ...baseStyles,
      maxHeight: "170px",
      overflow: "auto",
      backgroundColor: "#F5F5F5",
    }),
    indicatorSeparator: () => ({ display: "none" }),
  };
