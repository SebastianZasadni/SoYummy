import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChooseYourBreakfast } from "../components/ChooseYourBreakfast/ChooseYourBreakfast";
import { BrowserRouter as Router } from "react-router-dom";

describe("<ChooseYourBreakfast/>", () => {
  const renderChooseYourBreakfast = () => {
    render(
      <Router>
        <ChooseYourBreakfast />
      </Router>
    );
  };
  test("renders text content", () => {
    //Arange - set up test data, test conditions and test environment, e.g. render
    renderChooseYourBreakfast();
    //Act - run logic that should be tested(e.g. execute function, button click)
    
    //Assert - compare execution result with expected results
    const spanElement = screen.getByText("Delicious and healthy");
    const paragraphElement = screen.getByText(
      "way to enjoy a variety of fresh ingredients in one satisfying meal"
    );
    expect(spanElement).toBeInTheDocument;
    expect(paragraphElement).toBeInTheDocument;
  });
  test("navigate to /category/breakfast on button click", async () => {
    //Arange - set up test data, test conditions and test environment, e.g. render
    renderChooseYourBreakfast();
    //Act - run logic that should be tested(e.g. execute function, button click)
    const buttonElement = screen.getByText("See recipes");
    userEvent.click(buttonElement);
     //Assert - compare execution result with expected results
    await waitFor(() => {
      expect(window.location.pathname).toBe("/category/breakfast");
    });
  });
});
