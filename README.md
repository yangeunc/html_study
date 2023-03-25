<h1>반응형 웹디자인&웹퍼블리셔 양성과정 버전기록</h1>
<p>ex) 날짜 - 제목 -요약</P>
<h2>23.02.13 시작 - HTML</h2>
<p>H1~H6, P , br, inline, block</p>
<p>H1~H3은 검색키워드로 활용가능하다. H4~H6 꼭 필요한 경우만 이용하거나 권장안함</P>
<p>block과 inline태그는 의미에 맞게 외부/내부 구조로 구성해서 사용해야 한다. (의미 중첩되지 않도록)</p>
<hr>
<h2>23.02.14 시작 - 문서태그</h2>
<p><strong>strong</strong>, <em>em</em>, hr, blockquote, q, code, address, sub, sup, del,</p>
<p>gnb, lnb, snb, fnb, breadcrumbs</p>
<blockquote cite="https://ynweb.notion.site/UI-UX-A-23-1-27-6-2-cada53e4cda44b9ab4f417fc8eb9ecab">유나쌤 블로그 참고 - https://ynweb.notion.site/UI-UX-A-23-1-27-6-2-cada53e4cda44b9ab4f417fc8eb9ecab</blockquote>
<h2>23.02.15 - ul,ol</h2>
<ul>
  <li>ul, ol, li 순서있는 목록 없는 목록 구분 확실히 해야함</li>
  <li>li의 형제태그는 li만 올 수 있으니 나머지 태그는 그 자식, 자손태그에 삽입해야한다</li>
  <li>p,태그를 사용할 때 ul과li의 사이가 아닌 li안에 넣어서 사용해야 한다</li>
</ul>
<dl>
  <dt>dl,dt,dd</dt>
  <dd>dt는 제목 dd는 내용이다 항상 dt가 먼저오고 그다음 dd가 와야 한다 </dd>
  <dd>최소 1:1 비율</dd>
  <dd>dl 안에는 dt와 dd만 올 수 있다</dd>
  <dd>다른 태그들을 쓰려면 dt와 dd안에 써야한다</dd>
</dl>
<div class="study">
  <h2>23.02.16 - HTML - 시맨틱태그, 그룹태그 </h2>
  <ul>
    <dt><strong>div, section, aside, article, main</strong></dt>
    <dd>div는 2개 이상 묶어주는 그룹태그이다</dd>
    <dd>section은 문서의 독립적인 구획을 나타낸다</dd>
    <dd>aside는 사이드에 배치되어있다</dd>
    <dd>article은 독립적으로 다른곳에 배치해놔도 어떤것인지 알 수 있다</dd>
    <dd>main은 화면 전체를 </dd>
  </ul>
  </div>
  <h2>23.02.17</h2>
  <p>하이퍼링크-문서와 문서를 연결하여 이동할 수 있는 모든 링크를 뜻한다</p>
  <p>절대경로와 상대경로 링크를 제작하기 위해서는 문서에서다른문서(파일, 이미지, 동영상)로 이동하는 방법을 정의하는절대경로와 상대경로에 대해서 알아야 합니다</p>
  <dl>
    <dt>절대경로</dt>
    <dd>최초의 시작점, 파일이 존재하기 위해서 있어야 하는 시발점, http://</dd>
    <dt>상대경로</dt>
    <dd><기준경로를 기준으로 경로를 구성/dd>
    <dd>상대경로에는 같은위치/하위경로/상위경로가 있는데 상대경로에서'기준위치'를 정했다면 찾고자 하는 파일이 '기준위치'에서 어디에 있는지 확인해야 한다.</dd>
      <dd>같은위치 : 화장지.jpg</dd>
      <dd>하위경로 : 선반/수건.jpg</dd>
      <dd>상위경로 : ../거실/핸드폰.jpg</dd>
  </dl>
      <dl>
        <dt>링크태그a</dt>
        <dd>href 속성 안 값은 목적지 주소를 정확히 입력해야 한다</dd>
        <dd>메일, 전화번호를 작성할 수도 있다</dd>
        <dd>a href ="#pst1 이벤트 /a </dd>
        <dd>id는 #으로 표시 id는 위치의 명을 정하고 href는 그위치로 가는 링크경로를 정해준다</dd>
      </dl>
      <dl><dl/>
<h2>23.02.18</h2>
<p>태그 배운것들 복습하기</p>
<p>어려운 부분은 반복복습하기</p>
<h2>23.02.19</h2>
<p>링크태그 사용할 때 위치나 태그 위치 잘 보고 쓰기</p>
<p>항상 태그 다 적고나면 검사하기</p>
<h2>23.02.20</h2>
<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>태그명</th>
      <th>의미</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">block</td>
      <td>&lt;tr&gt;</td>
      <td>가로행 태그</td>
    </tr>
    <tr>
      <td>&lt;td&gt;</td>
      <td>내용(열) 태그</td>
    </tr>
    <tr>
      <td>&lt;th&gt;</td>
      <td>제목(열) 태그</td>
    </tr>
  </tbody>
</table>
<h2>23.02.21-HTML-form</h2>
<form action="#" method="get">
<fieldset>
<legend>form 퀴즈</legend>
<span>1. 다음 중 label for와 연관된 input 속성은?</span><br>
<label><input type="radio" name"quiz" value="id">1. id</label><br>
<label><input type="radio" name="quiz" value="class">2. class</label><br>
<label><input type="radio" name="quiz" value="name">3. name</label><br>
</fieldset>
  <fieldset>
   <legned>type 퀴즈</legend>
   <span>2. 다음 중 관심사 2개를 선택하려면 어떤 type이 쓰여야 하는지 고르세요</span><br>
   <label><input type="radio" name"quiz" value="id">1. checkbox</label><br>
   <label><input type="radio" name="quiz" value="class">2. radio</label><br>
   <label><input type="radio" name="quiz" value="name">3. choose</label><br>
  </fieldset>
</form>
<h2>23.02.23</h2>
<p>class는 .으로 표시하고 아이디는 #으로 표시한다(아이디가 있으면 아이디가 기준이다</p>
<p>body는 생략가능하다</p>
<p>중복되는 태그는 한번만 쓴다 ex)p,p,p,li,class 등</p>
<p>공백으로 부모 자식 자손 나타내고 뒤에 값을 줄 때 공백주는거 잊지않기</p>
<h2>23.02.24</h2>
<p>폰트사이즈는 rem으로 한다</p>
<ul>
  <li>글자 조정</li>
  <li>line-height - 행간 1.5;</li>
  <li>letter-spacing - 자간 -0.002em; 피그마에서-2%랑 같다</li>
  <li>word-spacing - 단어와 단어 사이 간격</li>
  <li>weight - 굵기 style-italic - 기울기</li>
  <li>line-through - 취소선</li>
  <li>line-decoration - 밑줄</li>
</ul>
<p>skip은 사라지게 하는거</p>
<p>active는 활성화</p>
<p>border-top:1px solid #aaa;
   border-bottom:1px solid #aaa;<br>
   border:1px solid #aaa;
   border-left:none; border-right:none;<br>
   선 추가 삭제 편한방법은 두번째꺼
   </p>
   <p>margin은 요소와 요소사이</p>
   <p>padding은 블록안의 간격</p>
<h2>23.02.26</h2>
<p>css 문법</p>
<p>선택자-{속성:값;}이고 한글이나 공백이 들어갈경우 “”표시해준다</p>
<p>선택자</p>
<p>class는 .으로 표시 (body는 생략 가능)</p>
<p>id는 #으로 표시</p>
<p>만약 태그중에 따로 디자인 하고 싶은 부분이 있으면 class로 이름을 만들어준다</p>
<p>div class의 이름이 두개인 경우에는 공백으로 구분해주고 하나는 공통이름 나머지는 구분용 이름이다</p>
<p>인접형제 선택자</p>
<p>특정태그위 다음 “형제“ 요소를 선택</p>
<p>ex)h1+p</p>
<p>형제선택자</p>
<p>특정태그 다음에 오는 모든 ”형제“를 선택</p>
<p>ex)h1~p</p>
<h2>23.02.27 FLOAT</h2>
<p>부모안에서 형제들이 좌우로 이동한다</p>
<p>Float의 위치를 조정하려면 형제가 아닌 부모의 크기를 조절해서 위치를 조정한다</p>
<p>블록요소의 흐름을 변경하기 위해 사용하는 레이아웃 배치 CSS속성이다</p>
<p>부유개념이라는건 자식한테서 부모가 떨어졌다고 생각해서 부모의 높이가 0이 되어버린다<br>
-해결방법은 높이를 강제부여하거나(height:100px;)<br>
-자식높이재인식(overflow:hidden;)<br>
-가상자식생성({clear:both; display:block; content:'';}</p>
<p>clear:both;라는건 앞의 이전형제의 값을 지우고 다시 시작한다는 뜻,float는 모든형제한테 다 </p>
<h2>23.02.28</h2>
<p>*는 모든자식선택자이다</p>
<p>margin:0 uto;는 좌우에 남은 여백을 자동으로 처리 어느화면크기로 봐도 가운데에 있다</p>
<p>text-align:center;은 가운데정렬</p>
<p>line-height:100px;은 수직가운데 정렬 (1줄일 경우만 가능하다)</p>
<h2>23.03.03</h2>
<p>position-태그의 순서와 상관없이 새롭게 누군가의 위치로 배치할 때 사용한다</p>
<p>position:relative;는 자기자신의위치를 기준으로 움직이고, absolute의 기준으로 부모 위치를 잡을 때도 사용한다</p>
<p>position:absolute;는 부모 위치를 기준으로 상대적으로 위치를 움직인다-부모 기준은 가장 가까운 부모  기준 position값을 인식한다</p>
<p>position:fixed;는 body를 기준으로 위치가 정해진다</p>
<h2>23.03.04</h2>
<p>말 줄임 표시하기</p>
<p>white- space:nowrap; ->한줄처리</p>
<p>overflow:hidden; -> 정해진 크기 안에서만 보이기</p>
<p>text-overflow:ellipsis; -> 외부처리를 말줄임…</p>
<h2>23.03.05</h2>
<p>놓친부분 복습하기</p>

<p>p:nth-child(1) 자식중에1번째</p>
<p>p:first-child 첫번째 자식</p>
<p>p:last-child 마지막 자식</p>
<p>p:last-of-child(5) 뒤에서부터 5번째 자식</p>

<p>p:nth-of-type(2) 같은 태그에서 두번째</p>
<p>p:nth-last-type(2) 뒤에서 2번째 요소</p>

<p>p:nth-child(even) 짝수번째 대상</p>
<p>p:nth-child(odd) 홀수번째 대상</p>

<p>p:nth-child(3n) 3의 배수</p>
<p>p:nth-child(2n) 2의 배수</p>

<p>p:nth-child(2n+1) 1부터 시작해서 2칸 건너서 3</p>
<p>p:nth-child(3n+1) 1부터 시작해서 3칸 건너서 4</p>
<p>child를 활용해 구분선등을 넣을 수 있다</p>
<h2>23.03.06</h2>
<p>FLEX레이아웃</p>
<p>항상 container(부모)와 item(자식)으로 구분해서 이용한다</p>
<p>메인축 -> item이 정렬된 방향</p>
<p>교차축 -> item을 가로지르는 방향</p>
<p>메인축이 수평이라면 교차축은 수직이고 메인축이 수직이면 교차축은 수평이라고 생각하면된다.</p>
<p>항상 display:flex; 가장 먼저 쓰기</p>
<p>메인축 -> justify <br> 교차축 -> align <br> 교차축이 2줄이면 content 한줄이면 items</p>
<h2>23.03.07</h2>
<p>배운것들 복습하기</p>
<p>hover는 마우스를 올려놓았을때 변하는 값을 설정할 수 있다.<br> ex) header a lnb:hover:color:red;</p>
<p>transform:translate:는 대칭으로 움직일 수 있게 해준다 <br> position으로 대상을 가운데로 보낼때 사용하고 <br>position:absolute; left:50%; top:50%;
transform:translate(-50%, -50%); 정해진 값이다.</p>
<p>왼쪽 상단이 기준이니까 반을 이동한다고 생각하면 된다.</p>
<p>position주면 부유하는 성격때문에 a가 제대로 인식이 안되니까 z-index의 값을 최대로 줘서 header는 항상 위에 있게끔 해준다 <br><em>
fixed absolute sticky 사용할 때 z-index</em></p>
<h2>23.03.08</h2>
<p>스프라이트 이미지</p>
<p>스프라이트 이미지는 작은 아이콘 이미지를 한번에 관리하기 위해서 만드는 이미지이다.

스프라이트 이미지는 이미지태그가 아닌 css 백그라운드 이미지 선언으로 불러와야 한다.

img태그로 삽입하는 이미지는 스스로 크기를 인식하고 px로 이미지가 표시된다.

css background-image 삽입이미지는 해당 크기만큼 화면에 표시되지 않고 배경이 처리된 요소의 크기만큼만 일부 보이게 된다.

의미있는 스프라이트 이미지 처리 시 의미글자는 이미지가 들어간 요소안에 작성하고 text-indent로 숨긴다.</p>

<h2>놓친 부분 복습</h2>
<p>배경이미지-background-image:url()</p>
<p>두개이상 연결하려면 뒤에 ,url()</p>
<p>배경색상보다 배경이미지가 우선순위이다</p>
<p>이미지 반복-background-repeat:no-repeat;</p>
<p>이미지 고정-background-attachment:fixed; or scroll;</p>
<p>이미지 크기-background-size:contain;(이미지를 가리지 않는 선에서 크게 성정<br>100%; 가로너비100% 설정<br>cover; 가로세로비를 비교하여 빈공간이 생기지 않도록 크게 설정<br>1400px; 강제크기 입력</p>
<p>배경 통합 속성</p>
<p>background:color image repeat attachment position순으로 작성 원하는 값만 골라서 작성할 수 있다</p>
<p>마우스 올렸을때 색 변경</p>
<p>hover{color:# ; }</p>
<p>배경을 투명하게 -> background:rgba{0,0,0,0.8} 최대값1</p>
<p>개발자도구</p>
<p>개발자도구로 오류를 찾아내고 어떤 부분이 잘못되었는지 확인할 수 있다<br>중간선이 그어져 있는 것은 우선순위가 밀려서 표시가 안나는 거고 <br>느낌표가 있으면 오타가 있다는거</p>
<p>개발자도구에서 실험해보거나 확인해보고 싶은 값을 먼저 볼 수 </p>
<p>미디어쿼리</p>
<p>min-width:400px - 단위쓰고 ;쓰지않기, 400이상일때  </p>
<p>max-width:900px - 900이하일때</p>
<p>@media screen and (min or max) {선택자 {background값} }</p>
<p>이전값은 유지가 되고 바꾸고 싶은 값을 적으면 된다</p>
<p>넓이 값은  %로 주기 ex)25%; ,75% 33,33%; 100%는 한개 계산법은 100 나누기 값하면 된다</p>
<p>값을 줄 때 부모의 넓이보다 작거나 큰지 확인하고 가변형 값 주기</p>
<p>GIT</p>
<p>30일차 노션 확인</p>
<h2>23.03.14</h2/>
<p>Git 터미널 작성 방법</p>
<p>제일 먼저 정보를 등록한다</p>
<p>git config --local user.name "-"</p>
<p>git config --local user.email "-"</p>
<p>git config --list로 등록되었는지 확인하기</p>
<p>파일이나 폴더 생성</p>
<p>git init 저장소 만들고</p>
<p>git add . 파일 스테이지에 올릴준비</p>
<p>git status 스테이징 확인</p>
<p>git commit -m '메시지' 커밋하고 </p>
<p>git log로 내가 수정하고 추가한 내용 맞는지 확인하고</p>
<p>git push origin main or <br>
git pull origin main</p>
<p>push는 올리는거 pull은 가져오는거</p>
<p>만약 pull,push 했는데 연결이 안된다면 pull로 가져와서 수정하고 다시 push하거나
주소 연결이 잘 되어있는지 확인하면된다</p> 
<h2>강력한 CSS 전처리기 = SASS&SCSS</h2>
<p>- SCSS는 곧바로 HTML로 적용한 결과를 볼 수 없습니다.
- SCSS는 컴파일을 통해 CSS로 변환하여 HTML로 연결할 수 있습니다.</p>
<p>변수는 저장소이고 style1.scss를 style1.css로 변환해서index</p>
<p>Git 터미널 작성 방법</p>
<p>제일 먼저 정보를 등록한다</p>
<p>git config --local user.name "-"</p>
<p>git config --local user.email "-"</p>
<p>git config --list로 등록되었는지 확인하기</p>
<p>파일이나 폴더 생성</p>
<p>git init 저장소 만들고</p>
<p>git add . 파일 스테이지에 올릴준비</p>
<p>git status 스테이징 확인</p>
<p>git commit -m '메시지' 커밋하고 </p>
<p>git log로 내가 수정하고 추가한 내용 맞는지 확인하고</p>
<p>git push origin main or <br>
git pull origin main</p>
<p>push는 올리는거 pull은 가져오는거</p>
<p>만약 pull,push 했는데 연결이 안된다면 pull로 가져와서 수정하고 다시 push하거나
주소 연결이 잘 되어있는지 확인하면된다</p> 
<h2>강력한 CSS 전처리기 = SASS&SCSS</h2>
<p>- SCSS는 곧바로 HTML로 적용한 결과를 볼 수 없습니다.
- SCSS는 컴파일을 통해 CSS로 변환하여 HTML로 연결할 수 있습니다.</p>
<p>변수는 저장소이고 style1.scss를 style1.css로 변환해서index</p>
<h2>JAVASCRIPT -script(명령어)</h2>
<ul>
        <li>HTML + CSS = 정적Javascript = 동적</li>
        <li>스크립트를 작성하려면 ?1.목표 설정하기 2.흐름도 만들기 3.각 단계를 코드로 표현하기</li>
</ul>
<p>객체지향프로그램이란 마우스를 갖다대었을때 동적기능이 나타나는 그객체를 지향한다</p>
<p> ECMA Script2015/6 = ES5, ES6 (버전명이다)</p>
<p>JS의 HTML 기본 작성 구조(head or body)<br>
HEAD - meta,title,link밑으로 작성된다<br>
BDOY - 닫히기 직전 위치</p>
<h2>원시데이터</h2>
<p>참조를 이루지 않고 특정 변수에 바로 데이터값이 저장되어있는 경우를 뜻합니다.<br>
- 각 원시데이터 특징에 따라 한 가지 값만 담을 수 있습니다.<br>
- String, Number, Boolean, Null, Undefined, Symbol(ES6) 총 6개로 이루어져 있습니다.<br>
- String(문자) ex)네이버 아이디로그인 창<br>
- number(숫자) ex)은행 비밀번호<br>
- boolean(논리형)<br>
- null(없음) ex)썻다가 지웠을때<br>
- undefined(정의되지 않음) ex)입력하지 않았을때</p>
<h2>참조데이터</h2>
<p>- 객체, 배열, 함수 등과 같은 Object 형식의 타입입니다.<br>
- 변수의 크기가 동적으로 변합니다.<br>
- 원시 데이터와 다르게 여러 속성의 모음을 저장할 수 있습니다.<br>
- 원시 데이터 타입을 제외한 나머지는 모두 참조 데이터입니다.</p>
<h2>(ES5) 변수(데이터 저장소) 선언 var </h2>
<p>ES5 이전버전부터 사용하던 변수 지정방법입니다.<br>
- 데이터를 저장하는 장소 or 읽고 쓰고 할 수 있는 장소<br>
- 변수는 한번에 한가지 값만 저장할 수 있습니다.<br>
- 새로운 값을 대입하면 기존 값은 삭제되게 됩니다.<br>
다른 연산자 등을 이용하면 다른 결과를 낼 수도 있습니다</p>
<p>=는 같다라는뜻이 아니고 대입한다는 뜻, method는 실행대상 ,대입은 우측값을 왼쪽에 대입한다</p>
<p>typeof는 이데이터가 무슨값인지 알려준다</p>
<h2>변수 LET</h2>
<p>- 기존 변수 선언 키워드 var 의 단점을 해결한 새로운 ES6 이후의 변수 선언 키워드 let<Br>
- 특정 데이터를 저장할 때 사용한다.<Br>
- 한번 선언된 변수명은 중복 사용할 수 없다.<Br>
실수로 잘못된 변수를 만들었을 때(중복했을때) 잡아주지만 var는 잡아주지 않는다.<Br>
ex) 이름 나이 성별 주소 비밀번호 (바뀔 수 있으니까)</p>
<h2>상수 CONST</h2>
<p>- 변하지 않는 값 상수를 담는다.  값을 바로 대입해준다<br>
- 선언과 동시에 대입 값을 작성해야 한다.<br>
- 초기 데이터 외에 다른 데이터를 대입할 수 없다.<br>
- 중복된 상수명은 사용할 수 없다.<br>
ex) 아이디 (바꿀 수 없음)</p>
<p>console.log(a) 읽는방법은 뒤에서부터 읽기 문자a를 console창에 표시해라<p>
<p>window.alert(10) 10을 윈도우팝업창에 표시해라</p>
<p>console.log('안녕하세요'length)안녕하세요문자의 길이를 콘솔에 표시해라</p>
<p>변수(클래스dom)</p>
<p>const first = document.getElementsByClassName('first')[0]<br>
[index]내가 몇번째 class를 가지고올건지 쓰는위치 0,1,2,3순서이다</p>
<p>console.log(inner.HTML) 안에 내용확인하는 속성</p>
<p>ex)btn[1].innerHTML = 'cafe'btn글자를 cafe로 바꿔라</p>
<h2>주말 복습하기</h2>
<p>@mixin 믹스인 <br>
- @mixin layout{margin:0 auto; width:1200px;} <br>
- 선택자에 @include layout을 써준다</p>
<h2>GRID</h2>
<p>
- 그리드는 반응형웹에 특화된 레이아웃입니다.
- FireFox 브라우저에서 테스트 시 쉽게 확인할 수 있습니다.(FF 개발자도구(F12) 활용)
- Flex는 1차원 웹디자인이 가능하며 Grid는 2차원 레이아웃을 사용합니다.</p>
<p>ex) display:grid <br>
grid-template-rows:repeat(4,100px); 4개 100px</p>
<p>grid-template-columns:repeat(4,1fr); - 1fr은 일정한 비율로 맞춰준다</p>
<p>max-width:calc(100% - 30px); - 양옆 15여백</p>
