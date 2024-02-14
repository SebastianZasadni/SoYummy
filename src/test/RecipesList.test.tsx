import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { RecipesList } from "../components/RecipesList/RecipesList";

describe("RecipesList", () => {
  test("should render a list of recipes with their respective information", () => {
    const recipes = [
      {
        _id: "1",
        title: "Recipe 1",
        description: "Description 1",
        time: "30",
        thumb: "image1.jpg",
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
      {
        _id: "2",
        title: "Recipe 2",
        description: "Description 2",
        time: "45",
        thumb: "image2.jpg",
        category: "category2",
        area: "area2",
        instructions: "instructions2",
        preview: "preview2",
        favorites: ["favorites"],
        youtube: "youtube2",
        tags: ["tags2"],
        ingredients: [
          {
            id: "id2",
            measure: "measure2",
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

    expect(screen.getByText("Recipe 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("30 min")).toBeInTheDocument();
    expect(screen.getByText("Recipe 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
    expect(screen.getByText("45 min")).toBeInTheDocument();
  });
});
