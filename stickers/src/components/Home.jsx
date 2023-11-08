import React from "react";

function Home() {
  return (
    <div>
      <ul>
        <li>color for background</li>
        <li>add new card</li>
        <li>information about cards</li>
      </ul>
      <h3>Description</h3>
      <p>
        Стикеры должны представлять собой прямоугольники, в которых можно
        набирать текст.
      </p>
      <p>
        Пользователь может перетягивать стикеры в любое место окна браузера,
        изменять их размеры, цвет фона, цвет и размер текста.
      </p>
      <p>
        При перезагрузке страницы все стикеры и все изменения, произошедшие с
        ними, должны сохраняться.
      </p>
    </div>
  );
}

export default Home;
