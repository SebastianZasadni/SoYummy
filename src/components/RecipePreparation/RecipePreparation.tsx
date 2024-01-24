import nlp from "compromise";
import { useSelector } from "react-redux";
import { selectRecipe } from "../../redux/recipes/selectors";
import css from "./RecipePreparation.module.css";

const formatRecipeInstructions = (text: string) => {
  const doc = nlp(text);
  const sentences = doc.sentences().out("array");

  return sentences.map((sentence: string, index: number) => {
    return { id: index + 1, text: sentence.trim() };
  });
};

interface Instruction {
  id: number;
  text: string;
}

export const RecipePreparation = () => {
  const recipe = useSelector(selectRecipe);
  const { instructions, thumb } = recipe;

  const formatedInstructions: Instruction[] = instructions
    ? formatRecipeInstructions(instructions)
    : [];

  return (
    <div className={css.recipePreparationWrapper}>
      <div className={css.recipePreparationBox}>
        <h1 className={css.recipePreparationHeading}>Recipe Preparation</h1>
        <ul className={css.recipePreparationList}>
          {formatedInstructions.map((instruction: Instruction) => {
            const { id, text } = instruction;
            return (
              <li className={css.recipePreparationListItem} key={id}>
                <div className={css.instructionStep}>{id}</div>
                <p className={css.instructionText}>{text}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <img src={thumb} className={css.recipeImage} />
    </div>
  );
};
