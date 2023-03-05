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
