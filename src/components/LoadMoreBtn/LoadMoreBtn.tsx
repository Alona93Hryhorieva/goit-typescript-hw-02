import React from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick();
  };

  return (
    <button onClick={handleClick} className={css.loadMore}>
      Load more
    </button>
  );
}
// без тс
// import css from "./LoadMoreBtn.module.css";

// export default function LoadMoreBtn({ onClick }) {
//   const handleClick = (event) => {
//     event.preventDefault();
//     onClick();
//   };

//   return (
//     <button onClick={handleClick} className={css.loadMore}>
//       Load more
//     </button>
//   );
// }
