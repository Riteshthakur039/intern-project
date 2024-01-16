import { useMemo } from "react";
import { NavLink } from "react-router-dom";

const Flashcard = ({
  flashcardColor,
  flashcardTextAlign,
  flashcardFontWeight,
}) => {
  const flashcardStyle = useMemo(() => {
    return {
      color: flashcardColor,
      textAlign: flashcardTextAlign,
      fontWeight: flashcardFontWeight,
    };
  }, [flashcardColor, flashcardTextAlign, flashcardFontWeight]);

  return (
    <div className="relative" style={flashcardStyle}>
      <NavLink to="/Mathematics">Flashcard</NavLink>
    
    </div>
  );
};

export default Flashcard;
