import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { LoginForm } from "../LoginForm";

describe("<LoginForm/>", () => {
  const renderLoginForm = () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  };

  test("should render a form with email and password inputs and a submit button", () => {
    renderLoginForm();

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: "Sign in" });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("should change validation message and icon when email is wrong", () => {
    renderLoginForm();

    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    const validationMessageError = screen.getByText("Enter a valid email");
    const errorIcon = screen.getByAltText("error-icon");
    expect(validationMessageError).toBeInTheDocument();
    expect(errorIcon).toBeInTheDocument();
  });
  test("should change validation message and icon when email is correct", () => {
    renderLoginForm();

    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "test@test.pl" } });
    const validationMessageSuccess = screen.getByText("Your email is valid");
    const successIcon = screen.getByAltText("success-icon");
    expect(validationMessageSuccess).toBeInTheDocument();
    expect(successIcon).toBeInTheDocument();
  });
});
