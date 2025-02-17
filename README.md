before open the project:
npm install

to execute the project:
npm run dev

to execute the fake api:
npm run start-server

Llamada a componentes, Ejemplos:

> > Components > Card:

      <Card
        id={id}
        name={spanishName}
        img={clowReverse}
        text={meaning}
        alt={meaning}
      />

> > Components > ReadingCard:

      <ReadingCard
        id={id}
        name={spanishName}
        kanji={kanji}
        img={clowCard}
        text={meaning}
      />
