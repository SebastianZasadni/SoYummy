import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { LoginForm } from "../components/LoginForm/LoginForm";

describe("LoginForm", () => {
  test("should render a form with email and password inputs and a submit button", () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const submitButton = screen.getByRole("button", { name: "Sign in" });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("should validate email input on change and display appropriate validation message and icon", () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "invalidemail" } });

    const validationMessage = screen.getByText("Enter a valid email");
    const errorIcon = screen.getByAltText("error-icon");

    expect(validationMessage).toBeInTheDocument();
    expect(errorIcon).toBeInTheDocument();
  });
});
