import React, { useState } from "react";
import { ExternalLink } from "../external-link";
import { Button } from "../button";
import { Rating } from "../rating";
import { Icon } from "../icon";
import styles from "./Card.module.css";

export function Card({
  title,
  description,
  imgUrl,
  meetUrl,
  gameUrl,
  id,
  onDeleteGame = () => {},
  onEditGame = () => {},
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  function removeHandler() {
    const shouldRemove = confirm("Are you sure to delete this game?");
    if (shouldRemove) {
      onDeleteGame(id);
    }
  }

  const cardClasses = `${styles.tpCard} ${isFlipped ? styles.tpCardFlipped : ""}`;

  return (
    <div className={cardClasses}>
      <div className={styles.tpCardFrontSide}>
        <div className={styles.tpCardImage} onClick={() => setIsFlipped(true)}>
          <img src={imgUrl} alt={title} />
          <div className={styles.tpCardFrontSideRating}>
            {/* Assuming Rating component itself handles its styling now */}
            <Rating initialRating={3} readonly />
          </div>
        </div>
        <header className={styles.tpCardHeader}>
          <h2>{title}</h2>
          <div>
            <button
              className={styles.tpCardHeaderOptionsButton}
              onClick={() => setIsFlipped(true)}
            >
              <Icon iconKey="dotsVertical" style={{ width: "4px" }} />
            </button>
          </div>
        </header>
        <div className={styles.tpCardDescription}>{description}</div>
        <nav className={styles.tpCardNav}>
          <ExternalLink url={meetUrl} type="success">
            Meet
          </ExternalLink>
          <ExternalLink url={gameUrl} type="primary">
            Play
          </ExternalLink>
        </nav>
      </div>
      <div className={styles.tpCardBackSide}>
        <header>
          <h2>{title}</h2>
          <p>Feel free to rate it.</p>
        </header>
        <main>
          <div className={styles.textAlignRenter}>
            <Rating />
          </div>
        </main>
        <footer>
          <Button onClick={() => setIsFlipped(false)}>&larr; Back</Button>
          <Button type="danger" onClick={() => removeHandler()}>
            Remove
          </Button>
          <Button onClick={() => onEditGame(id)}>
            <Icon
              iconKey="edit"
              style={{
                width: "16px",
                height: "16px",
                marginRight: "4px",
              }}
            />
            Edit
          </Button>
        </footer>
      </div>
    </div>
  );
}
