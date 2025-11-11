import { useState } from "react";

export const NewCard = () => {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [buttonText, setButtontext] = useState("");

  const submitCard = (e) => {
    e.preventDefault();
    const data = {
      title,
      tag,
      buttonText,
    };

    fetch("/api/cards/add/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  return (
    <>
      <h1>New card</h1>
      <a
        href="/"
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          border: "1px solid black",
          padding: "1rem",
          borderRadius: "1rem",
        }}
      >
        X
      </a>
      <form
        onSubmit={submitCard}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          name="title"
          placeholder="Ingrese el titulo de la tarjeta"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          name="tag"
          placeholder="Ingrese la etiqueta de la tarjeta"
          onChange={(e) => setTag(e.target.value)}
        />
        <input
          type="text"
          name="buttonText"
          placeholder="Ingrese el texto del botón"
          onChange={(e) => setButtontext(e.target.value)}
        />

        <input type="submit" value={"enviar"} />
      </form>
    </>
  );
};
