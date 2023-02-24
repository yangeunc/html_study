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
   border-bottom:1px solid #aaa;
   border:1px solid #aaa;
   border-left:none; border-right:none;
   선 추가 삭제 편한방법은 두번째꺼
   </p>
   <p>margin은 요소와 요소사이</p>
   <p>padding은 블록안의 간격</p>
