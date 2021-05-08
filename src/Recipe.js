import React, { useState } from "react";
import style from "./recipe.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Recipe = ({ title, calories, image, ingredients, digest }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt="" />
      <Button variant="primary" onClick={handleShow}>
        More details
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <list>
              <b>Ingredients</b>{" "}
              {ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </list>
          </div>

          <p>
            {" "}
            <b>Calories</b> {calories}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
      <list>
        <b>Ingredients</b>{" "}
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </list>
      <list>
        <b>Digest</b>{" "}
        {digest.map((digest) => (
          <li>{digest.label}</li>
        ))}
      </list>
      <p>
        {" "}
        <b>Calories</b> {calories}
      </p>
    </div>
  );
};

export default Recipe;
