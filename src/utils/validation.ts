export const validationError = (
  iconErrorRef: React.RefObject<HTMLDivElement>,
  iconSuccessRef: React.RefObject<HTMLDivElement>,
  iconLittleSecureRef: React.RefObject<HTMLDivElement>,
  iconRef: React.RefObject<HTMLDivElement>,
  validationRef: React.RefObject<HTMLDivElement>,
  inputRef: React.RefObject<HTMLDivElement>
): void => {
  iconLittleSecureRef.current
    ? (iconLittleSecureRef.current.style.display = "none")
    : null;
  iconErrorRef.current ? (iconErrorRef.current.style.display = "block") : null;
  iconSuccessRef.current
    ? (iconSuccessRef.current.style.display = "none")
    : null;
  iconRef.current ? (iconRef.current.style.stroke = "#E74A3B") : null;
  validationRef.current && window.innerWidth > 768
    ? (validationRef.current.style.display = "block")
    : null;
  validationRef.current
    ? (validationRef.current.style.color = "#E74A3B")
    : null;
  inputRef.current ? (inputRef.current.style.color = "#E74A3B") : null;
  inputRef.current
    ? (inputRef.current.style.border = "1px solid #E74A3B")
    : null;
};

export const validationLittleSecure = (
  iconLittleSecureRef: React.RefObject<HTMLDivElement>,
  iconSuccessRef: React.RefObject<HTMLDivElement>,
  iconErrorRef: React.RefObject<HTMLDivElement>,
  iconRef: React.RefObject<HTMLDivElement>,
  validationRef: React.RefObject<HTMLDivElement>,
  inputRef: React.RefObject<HTMLDivElement>
): void => {
  iconLittleSecureRef.current
    ? (iconLittleSecureRef.current.style.display = "block")
    : null;
  iconSuccessRef.current
    ? (iconSuccessRef.current.style.display = "none")
    : null;
  iconErrorRef.current ? (iconErrorRef.current.style.display = "none") : null;
  iconRef.current ? (iconRef.current.style.stroke = "#F6C23E") : null;
  validationRef.current && window.innerWidth > 768
    ? (validationRef.current.style.display = "block")
    : null;
  validationRef.current
    ? (validationRef.current.style.color = "#F6C23E")
    : null;
  inputRef.current ? (inputRef.current.style.color = "#F6C23E") : null;
  inputRef.current
    ? (inputRef.current.style.border = "1px solid #F6C23E")
    : null;
};

export const validationCorrect = (
  iconSuccessRef: React.RefObject<HTMLDivElement>,
  iconErrorRef: React.RefObject<HTMLDivElement>,
  iconLittleSecureRef: React.RefObject<HTMLDivElement>,
  iconRef: React.RefObject<HTMLDivElement>,
  validationRef: React.RefObject<HTMLDivElement>,
  inputRef: React.RefObject<HTMLDivElement>
): void => {
  iconLittleSecureRef.current
    ? (iconLittleSecureRef.current.style.display = "none")
    : null;
  iconSuccessRef.current
    ? (iconSuccessRef.current.style.display = "block")
    : null;
  iconErrorRef.current ? (iconErrorRef.current.style.display = "none") : null;
  iconRef.current ? (iconRef.current.style.stroke = "#8baa36") : null;
  validationRef.current && window.innerWidth > 768
    ? (validationRef.current.style.display = "block")
    : null;
  validationRef.current
    ? (validationRef.current.style.color = "#8baa36")
    : null;
  inputRef.current ? (inputRef.current.style.color = "#8baa36") : null;
  inputRef.current
    ? (inputRef.current.style.border = "1px solid #8baa36")
    : null;
};
