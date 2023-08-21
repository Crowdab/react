//javascript에서 변수설정 var(변수), >>> let(변수), const(상수)
//ES6 이후, 보안하기 위해 추가변수 선언 방식이 let과 const이다.
// let : 일반적인 변수 const : 상수

import World from "./World";

const Hello = function(){
    return(
        <div>
        <h2>Hello</h2>
        <World></World>
        </div>
    )
}

export default Hello;