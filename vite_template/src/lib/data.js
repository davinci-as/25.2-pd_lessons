const age = 26;

export const getData = async () => {
  return new Promise((done) => {
    setTimeout(async () => {
      const originalCards = [
        {
          tag: "content-01",
          title: "prueba de titulo 1",
          buttonText: "Call To Action 1",
          className: age > 18 ? "green" : "red",
        },
        {
          tag: "content-02",
          title: "prueba de titulo 2",
          buttonText: "Call To Action 2",
          className: age <= 18 ? "green" : "red",
        },
        {
          tag: "content-01",
          title: "prueba de titulo 2",
          buttonText: "Call To Action 2",
          className: age <= 18 ? "green" : "red",
        },
      ];
      done(originalCards);
    }, 4000);
  });
};
