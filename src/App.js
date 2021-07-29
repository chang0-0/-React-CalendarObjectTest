import "./App.scss";
import cn from "classnames";
import Calendar from "./components/Calendar";
import React, { Component } from "react";
import Movie from "./Movie";

const movies = [
  {
    title: "완벽한 타인",
    poster:
      "http://www.newsinstar.com/data/photos/20180937/art_15367158497873_e15bff.jpg",
  },
  {
    title: "보헤미안 랩소디",
    poster:
      "http://image.cine21.com/resize/cine21/poster/2018/0518/12_06_54__5afe434e1f297[H800-].PNG",
  },
  {
    title: "창궐",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9te4ZPkCjmfMbzua__AogoVkO8_pSQg_k9HLioQM6B2lPPnix7w",
  },
  {
    title: "암수살인",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpaFaBzed4mShvSJPVD2vQf4W618DFT8OFa-KNAPTuJLTWi5x",
  },
  {
    title: "미쓰백",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53iAJpVivS5RAVVNB_MoEs_a6sTOcbv2tA2XhNgz6ovcj6Yeq",
  },
];

//객체 map 형태로 출력.
//배열을 객체안에 넣어서 배열 내부 출력 불가.
const subjects = {
  array1: [1, 2, 3, 4, 5],
  subject: 3,
};

//movie는 어떻게 출력되는지 모르겠음. Movie 태그 생성 이유를 모르겠음.

function App() {
  //배열을 순차적으로 출력.
  const menus = ["Menu1", "Menu2", "Menu3", "Menu4"];

  const menus2 = {
    array1: [1, 2, 3, 4, 5],
    array2: [1, 2, 3, 4, 5],
  };

  const testObject = [
    { array1: 1, array2: 2 },
    { array1: 1, array2: 2 },
  ];

  const testlist = testObject.map((test, index) => <li key={index}>{test}</li>);

  // const menuList2 = menus2.map((menu2, index) => (
  //   <li key={index} value={menu2.array1}>
  //     {menu2.value}
  //   </li>
  // ));

  const menuList = menus.map((menu, index) => <li key={index}>{menu}</li>);

  //날짜를 만들어내는 함수를 지속적으로 기억하기 위해서 UseCallback 사용

  //날짜 요일 출력 2차원 배열 출력
  return (
    <div className={cn("App")}>
      <Calendar />

      {/* 이거 정상 출력됨. 이런식으로 반복해서 하면될듯 */}
      {testObject.map((test, index) => (
        <li className={cn("cn")}>
          {test.array1}
          {test.array2}
        </li>
      ))}
      {Object.keys(subjects).map((keyName, i) => (
        <li
          className="travelcompany-input"
          key={i}
          array1={subjects.array1.length}
        >
          <span
            className="input-label"
            key={i}
            Name={subjects[keyName]}
            a={subjects.array1}
          >
            key: {i} Name: {subjects[keyName]}
          </span>
        </li>
      ))}
      {movies.map((movie) => {
        console.log(movie);
        var a = <Movie title={movie.title} poster={movie.poster} />;

        return a;
      })}
      <ul>{menuList}</ul>
    </div>
  );
}

export default App;
