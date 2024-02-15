import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { RecipesList } from "../RecipesList";

describe("<RecipesList/>", () => {
  test("render a list of recipes", () => {
    const recipes = [
      {
        _id: "1",
        title: "Recipe 1",
        description: "Description 1",
        time: "30",
        thumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
        category: "category1",
        area: "area1",
        instructions: "instructions1",
        preview: "preview1",
        favorites: ["favorites"],
        youtube: "youtube1",
        tags: ["tags1"],
        ingredients: [
          {
            id: "id1",
            measure: "measure1",
          },
        ],
      },
    ];
    const onClick = jest.fn();

    render(
      <Router>
        <RecipesList recipes={recipes} onClick={onClick} />
      </Router>
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Recipe 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("30 min")).toBeInTheDocument();
  });
});
