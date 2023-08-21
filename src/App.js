import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import World from "./component/World";

function App() {
  //변수
  const name = "Hong";
  let age = 30;

  //객체
  const naver={
    name : "네이버",
    url : "https://www.naver.com",
    target : "_blank"
  }

  return (
    <div className="App">
      {/* 컴포넌트 */}
     {/* Alt+방향키로 위치변경 (웹에서도 위치가 바뀐다)
         Alt+Shift+방향키로 복사 */}
     <Hello></Hello>
    {/* hello.js안에 world.js를 호출함 */}
     <Welcome></Welcome>

     {/* html안에 변수 호출 */}
     <h1>이름 : {name}, 나이 : {age}</h1>

     {/* 객체호출 {객체이름.속성} */}
     <h2><a href={naver.url} target={naver.target}>{naver.name}</a></h2>
    </div>
  );
}

export default App;
