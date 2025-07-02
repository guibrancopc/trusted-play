import React from "react";
import { Rating as ReactRating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// import { Icon } from "../icon"; // Icons are handled differently now

export function Rating({ initialRating, readonly }) {
  // const starSize = `${size || 30}px`; // Sizing is handled by the new library's styles or via maxWidth

  return (
    <>
      <div className="tp-rating">
        <ReactRating
          value={initialRating} // Changed from initialRating
          readOnly={readonly} // Changed from readonly
          style={{ maxWidth: 150 }} // Example: Set a max width for the rating component (5 stars * 30px)
          // emptySymbol and fullSymbol are replaced by itemStyles or default styles
          // For default stars, no specific itemStyles are needed unless customizing shapes/colors
        />
      </div>
      <style jsx>{`
        .tp-rating {
          margin-bottom: 16px;
          line-height: 1; // Prevents extra space if the library itself doesn't manage line height well
        }

        /* .tp-rating__icon styling might be obsolete or need adjustment
           depending on the new library's DOM structure.
           For now, commenting out as direct icon manipulation is removed.
        .tp-rating__icon {
          margin: 0 5px;
        }
        */
      `}</style>
    </>
  );
}
