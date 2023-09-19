import "./CloseButton.css";
import { FaTimes } from "react-icons/fa";

export default function CloseButton({ onClickFunction }) {
  return <FaTimes className="close-recipe" onClick={onClickFunction} />;
}
