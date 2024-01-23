import axios from "axios";
import Joi from "joi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
} from "react";
import css from "./UserInfoModal.module.css";
import { setIsUserInfoModal } from "../../redux/global/slice";
import { updateUsername, uploadImage } from "../../redux/auth/operations";
import Notiflix from "notiflix";

export const UserInfoModal = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const modalRef = useRef<HTMLFormElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const iconHumanInputRef = useRef<SVGSVGElement | null>(null);
  const iconPenInputRef = useRef<SVGSVGElement | null>(null);
  const dispatch: AppDispatch = useDispatch();

  const nameSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
  });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files && e.target.files[0];
    if (image) {
      setImage(image);
      const url = URL.createObjectURL(image);
      setImageUrl(url);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const username = e.currentTarget.value;
    const validateName = nameSchema.validate({ name: username });
    if (validateName.error) {
      inputRef.current && (inputRef.current.style.border = "1px solid #E74A3B");
      iconHumanInputRef.current &&
        (iconHumanInputRef.current.style.stroke = "#E74A3B");
      iconPenInputRef.current &&
        (iconPenInputRef.current.style.stroke = "#E74A3B");
    } else {
      inputRef.current && (inputRef.current.style.border = "1px solid #8baa36");
      iconHumanInputRef.current &&
        (iconHumanInputRef.current.style.stroke = "#8baa36");
      iconPenInputRef.current &&
        (iconPenInputRef.current.style.stroke = "#8baa36");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { username } = form;
    const usernameValue = username.value;
    const validateName =
      usernameValue && nameSchema.validate({ name: usernameValue });
    const validateError = validateName.error;
    if (validateError?.details[0].type === "string.min") {
      return Notiflix.Notify.warning(
        "Your name must be at least 3 characters long "
      );
    }
    if (!validateName.error && usernameValue) {
      await dispatch(updateUsername({ username: usernameValue }));
    }
    if (image) {
      const data = new FormData();
      data.append("image", image);
      const res = await axios.post(
        "https://soyummy-api.onrender.com/api/upload",
        data
      );
      const thumb = res.data;
      await dispatch(uploadImage({ image: thumb }));
      setImageUrl(null);
      setImage(null);
    }
    form.reset();
  };

  const handleModalEscapeExit = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Escape") {
      dispatch(setIsUserInfoModal(false));
    }
  };

  const handleModalExit = () => {
    dispatch(setIsUserInfoModal(false));
  };

  useEffect(() => {
    modalRef.current && modalRef.current.focus();
  }, []);

  return (
    <form
      className={css.formUserInfoModal}
      ref={modalRef}
      onKeyDown={handleModalEscapeExit}
      tabIndex={0}
      onSubmit={handleSubmit}
    >
      <svg className={css.iconExit} onClick={handleModalExit}>
        <use href="/assets/icons.svg#icon-exit" />
      </svg>
      <label className={css.imageLabel}>
        {imageUrl ? (
          <img src={imageUrl} className={css.userImage} />
        ) : (
          <div className={css.iconPlusBox}>
            <svg className={css.iconPlus}>
              <use href="/assets/icons.svg#icon-plus" />
            </svg>
          </div>
        )}
        <svg className={css.iconHuman}>
          <use href="/assets/icons.svg#icon-human" />
        </svg>
        <input
          name="image"
          type="file"
          className={css.imageInput}
          onChange={handleImageChange}
        />
      </label>
      <label className={css.nameLabel}>
        <input
          type="text"
          ref={inputRef}
          className={css.nameInput}
          name="username"
          placeholder="Change your name"
          onChange={handleNameChange}
        />
        <svg className={css.iconHumanInput} ref={iconHumanInputRef}>
          <use href="/assets/icons.svg#icon-human" />
        </svg>
        <svg className={css.iconPenInput} ref={iconPenInputRef}>
          <use href="/assets/icons.svg#icon-pen" />
        </svg>
      </label>
      <button type="submit" className={css.button}>
        Save changes
      </button>
    </form>
  );
};
