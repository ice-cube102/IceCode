export type SiteLang = 'ko' | 'en';
export type ProgLang = 'python' | 'javascript' | 'typescript' | 'java' | 'c' | 'cpp' | 'csharp';
export type TopicId = 'step0' | 'step1' | 'step2' | 'step3' | 'step4' | 'step5' | 'step6' | 'step7' | 'step8' | 'step9' | 'step10' | 'step11' | 'step12' | 'step13' | 'step14' | 'step15' | 'step16' | 'step17' | 'step18' | 'step19' | 'step20';

export const UI_STRINGS = {
  ko: {
    title: 'IceCode',
    languageToLearn: '학습할 언어',
    curriculum: '학습 목차',
    learnTab: '개념 학습',
    practice: '실습하기',
    startPractice: '문제 풀기',
    typeCode: '여기에 코드를 입력하세요...',
    runCode: '코드 실행',
    output: '실행 결과',
    hint: '힌트 보기',
    nextStep: '다음 단계로',
    correct: '정답입니다!',
    incorrect: '틀렸습니다. 다시 시도해보세요.',
    close: '닫기',
    cheatMessage: '이런 꼼수를 쓰다니...',
    logout: '로그아웃',
  },
  en: {
    title: 'IceCode',
    languageToLearn: 'Languages',
    curriculum: 'Curriculum',
    learnTab: 'Learn',
    practice: 'Practice',
    startPractice: 'Solve Problem',
    typeCode: 'Type your code here...',
    runCode: 'Run Code',
    output: 'Output',
    hint: 'Show Hint',
    nextStep: 'Next Step',
    correct: 'Correct!',
    incorrect: 'Incorrect. Try again.',
    close: 'Close',
    cheatMessage: 'No cheating allowed...',
    logout: 'Logout',
  }
};

export const PROGRAMMING_LANGUAGES = [
  { id: 'python', name: 'Python' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'java', name: 'Java' },
  { id: 'c', name: 'C' },
  { id: 'cpp', name: 'C++' },
  { id: 'csharp', name: 'C#' },
];

export const TOPICS: { id: TopicId; title: Record<SiteLang, string> }[] = [
  { id: 'step0', title: { ko: '0단계: 환경 세팅', en: 'Step 0: Setup' } },
  { id: 'step1', title: { ko: '1단계: 출력과 변수', en: 'Step 1: Output & Variables' } },
  { id: 'step2', title: { ko: '2단계: 자료형과 연산', en: 'Step 2: Types & Math' } },
  { id: 'step3', title: { ko: '3단계: 조건문', en: 'Step 3: Conditionals' } },
  { id: 'step4', title: { ko: '4단계: 반복문', en: 'Step 4: Loops' } },
  { id: 'step5', title: { ko: '5단계: 함수', en: 'Step 5: Functions' } },
  { id: 'step6', title: { ko: '6단계: 배열/리스트', en: 'Step 6: Arrays/Lists' } },
  { id: 'step7', title: { ko: '7단계: 딕셔너리/객체', en: 'Step 7: Dictionaries/Objects' } },
  { id: 'step8', title: { ko: '8단계: 클래스와 객체지향', en: 'Step 8: Classes & OOP' } },
  { id: 'step9', title: { ko: '9단계: 예외 처리', en: 'Step 9: Error Handling' } },
  { id: 'step10', title: { ko: '10단계: 모듈과 비동기', en: 'Step 10: Modules & Async' } },
  { id: 'step11', title: { ko: '11단계: 고급 자료구조', en: 'Step 11: Advanced Data Structures' } },
  { id: 'step12', title: { ko: '12단계: 알고리즘 기초', en: 'Step 12: Basic Algorithms' } },
  { id: 'step13', title: { ko: '13단계: 디자인 패턴', en: 'Step 13: Design Patterns' } },
  { id: 'step14', title: { ko: '14단계: 동시성과 멀티스레딩', en: 'Step 14: Concurrency & Multithreading' } },
  { id: 'step15', title: { ko: '15단계: 네트워크와 API', en: 'Step 15: Network & API' } },
  { id: 'step16', title: { ko: '16단계: 데이터베이스 연동', en: 'Step 16: Database Integration' } },
  { id: 'step17', title: { ko: '17단계: 테스트와 디버깅', en: 'Step 17: Testing & Debugging' } },
  { id: 'step18', title: { ko: '18단계: 프레임워크 기초', en: 'Step 18: Framework Basics' } },
  { id: 'step19', title: { ko: '19단계: 배포와 CI/CD', en: 'Step 19: Deployment & CI/CD' } },
  { id: 'step20', title: { ko: '20단계: 마스터 프로젝트', en: 'Step 20: Master Project' } },
];

export interface Quiz {
  question: Record<SiteLang, string>;
  hints: Record<SiteLang, string[]>;
  validate: (code: string) => { passed: boolean; message: Record<SiteLang, string>; output: string; isCheat?: boolean };
}

export interface Lesson {
  content: string;
  quiz?: Quiz;
}

const pass = (out: string) => ({ passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: out });
const fail = (ko: string, en: string, out: string = 'Error', isCheat = false) => ({ passed: false, message: { ko, en }, output: out, isCheat });

export const LESSON_CONTENT: Record<SiteLang, Partial<Record<ProgLang, Partial<Record<TopicId, Lesson>>>>> = {
  ko: {
    python: {
      step0: {
        content: `
# 0단계: Python 환경 세팅

코딩을 시작하기 전에 컴퓨터가 파이썬 코드를 이해할 수 있도록 **번역기(인터프리터)**를 설치해야 합니다.

### 1. Python 설치하기
1. 공식 홈페이지인 [python.org](https://www.python.org/) 에 접속합니다.
2. \`Downloads\` 메뉴에 마우스를 올리고 운영체제에 맞는 최신 버전을 다운로드합니다.
3. 다운로드한 파일을 실행합니다.
4. **🚨 [매우 중요] 설치 첫 화면 하단에 있는 \`Add Python to PATH\` 체크박스를 반드시 클릭하세요!**
   - 이 체크박스를 누르지 않으면 컴퓨터가 파이썬이 어디에 설치되었는지 몰라서 터미널에서 실행할 수 없습니다. 초보자들이 가장 많이 겪는 오류 1위입니다.
5. \`Install Now\`를 클릭하여 설치를 완료합니다.

### 2. VS Code (코드 에디터) 설치하기
코드를 메모장에 적을 수도 있지만, 색상도 칠해주고 오류도 찾아주는 똑똑한 메모장인 VS Code를 사용합니다.
1. [code.visualstudio.com](https://code.visualstudio.com/) 에 접속하여 다운로드 후 설치합니다.
2. VS Code를 켜고 왼쪽 블록 모양 아이콘(Extensions)을 클릭합니다.
3. 검색창에 \`Python\`을 검색하고 Microsoft에서 만든 확장 프로그램을 설치합니다.

### 3. 설치가 잘 되었는지 확인하기
1. VS Code 상단 메뉴에서 \`Terminal\` -> \`New Terminal\`을 클릭합니다.
2. 화면 아래에 나타난 터미널(까만 창)에 아래 명령어를 똑같이 입력하고 Enter를 누릅니다.
   \`\`\`bash
   python --version
   \`\`\`
3. \`Python 3.12.x\` 처럼 버전 숫자가 나오면 성공입니다! 만약 \`'python'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램... 이 아닙니다\` 라는 빨간 글씨가 뜬다면, 1번 과정에서 \`Add Python to PATH\` 체크를 깜빡한 것이니 파이썬을 지우고 다시 설치해야 합니다.
`
      },
      step1: {
        content: `
# 1단계: 출력과 변수

프로그래밍의 가장 기본은 컴퓨터에게 명령을 내리고, 그 결과를 화면으로 확인하는 것입니다.

### 1. 출력 (print)
\`print()\` 명령어는 괄호 안의 내용을 화면에 보여줍니다.
- **텍스트(문자)**를 출력할 때는 반드시 따옴표(\`'\` 또는 \`"\`)로 양끝을 감싸야 합니다.
- **숫자**는 따옴표 없이 그냥 적습니다.

\`\`\`python
print("안녕하세요!") # 텍스트 출력 (따옴표 필수)
print(100)          # 숫자 출력 (따옴표 없음)
\`\`\`

**💡 초보자가 가장 많이 하는 실수**
\`print(안녕하세요)\` 처럼 따옴표를 빼먹으면 컴퓨터는 "안녕하세요"라는 글자가 아니라, "안녕하세요"라는 이름의 **변수**를 찾으려고 하다가 에러(\`NameError\`)를 냅니다.

---

### 2. 변수 (Variables)
변수는 데이터를 담아두는 **상자**입니다. \`=\` 기호를 사용하여 상자에 이름을 붙이고 데이터를 넣습니다.
수학에서 \`=\`은 "양쪽이 같다"는 뜻이지만, 프로그래밍에서는 **"오른쪽의 값을 왼쪽 이름의 상자에 집어넣어라"**는 뜻입니다. (이를 대입 연산자라고 부릅니다)

\`\`\`python
age = 20          # age라는 상자를 만들고 20을 넣음
name = "IceCode"  # name이라는 상자에 "IceCode"라는 글자를 넣음

print(age)        # 상자 안의 내용(20)을 출력
print("age")      # 따옴표가 있으므로 텍스트 "age" 자체를 출력
\`\`\`

**⚠️ 변수 이름 짓기 규칙 (매우 중요)**
1. **숫자로 시작할 수 없습니다.** (\`1name = "Kim"\` ❌ 에러 발생)
2. **띄어쓰기를 할 수 없습니다.** 단어를 구분할 때는 밑줄(\`_\`)을 사용합니다. 이를 스네이크 케이스(snake_case)라고 부릅니다. (\`my name = "Kim"\` ❌ / \`my_name = "Kim"\` ⭕)
3. 파이썬이 이미 사용하고 있는 예약어(\`if\`, \`for\`, \`print\` 등)는 이름으로 쓸 수 없습니다.
`,
        quiz: {
          question: { ko: '변수 score에 숫자 100을 저장하고, print()를 사용하여 score 변수의 값을 출력하세요.', en: 'Store 100 in variable score and print it.' },
          hints: {
            ko: [
              '변수를 만들 때는 `이름 = 값` 형태를 사용합니다.', 
              '`score = 100` 을 먼저 작성하세요.', 
              '그 다음 줄에 `print(score)` 를 작성하면 됩니다. 따옴표를 쓰면 안 됩니다!'
            ],
            en: ['Use `name = value` to create a variable.', 'Write score = 100 first.', 'Then write print(score) on the next line.']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('print(100)') && !c.includes('score')) return fail('꼼수 쓰지 마세요!', 'No cheating!', '', true);
            if (!code.includes('score')) return fail('score라는 이름의 변수를 만들어야 합니다.', 'Use the score variable.');
            if (!code.includes('print')) return fail('print() 명령어가 필요합니다.', 'print() is required.');
            if (c.includes('score=100') && c.includes('print(score)')) return pass('100');
            if (c.includes('print("score")') || c.includes("print('score')")) return fail('변수를 출력할 때는 따옴표를 쓰지 않습니다. 따옴표를 쓰면 글자 자체가 출력됩니다.', 'Do not use quotes for variables.');
            return fail('변수에 값을 저장하고 출력하는 코드를 정확히 작성해주세요.', 'Check your code.');
          }
        }
      },
      step2: {
        content: `
# 2단계: 자료형과 연산

컴퓨터는 데이터의 종류(자료형)를 엄격하게 구분합니다. 숫자 10과 글자 "10"은 사람 눈에는 같아 보여도 컴퓨터에게는 완전히 다른 데이터입니다.

### 1. 자료형 (Data Types)
- **문자열 (String, \`str\`):** 텍스트 데이터. 반드시 따옴표로 감쌉니다. (예: \`"Hello"\`, \`"123"\`)
- **정수 (Integer, \`int\`):** 소수점이 없는 숫자. (예: \`10\`, \`-5\`)
- **실수 (Float, \`float\`):** 소수점이 있는 숫자. (예: \`3.14\`)
- **불리언 (Boolean, \`bool\`):** 참(\`True\`) 또는 거짓(\`False\`). **첫 글자는 반드시 대문자**로 적어야 합니다.

**💡 꿀팁:** 데이터의 종류가 헷갈릴 때는 \`type()\` 함수를 사용해보세요.
\`print(type(10))\` -> \`<class 'int'>\` 출력됨

---

### 2. 산술 연산자
숫자를 계산할 때 사용하는 기호들입니다.
- \`+\` : 더하기
- \`-\` : 빼기
- \`*\` : 곱하기
- \`/\` : 나누기 (파이썬에서 나누기 결과는 딱 떨어져도 항상 실수(float)가 됩니다. 예: 4 / 2 = 2.0)
- \`//\` : 몫 (나눗셈의 몫만 구합니다. 소수점 아래는 버립니다)
- \`%\` : 나머지 (나눗셈의 나머지만 구합니다. 짝수/홀수 판별에 아주아주 많이 쓰입니다!)
- \`**\` : 거듭제곱 (예: \`2 ** 3\` 은 2의 3제곱인 8)

\`\`\`python
a = 10
b = 3
print(a + b) # 13
print(a / b) # 3.3333333333333335
print(a % b) # 1 (10을 3으로 나눈 나머지)
\`\`\`

**⚠️ 주의할 점: 문자열의 연산**
파이썬에서는 문자열끼리 더하거나, 문자열에 숫자를 곱할 수도 있습니다!
\`\`\`python
print("Hello" + "World") # HelloWorld (글자가 이어붙음)
print("Hi" * 3)          # HiHiHi (글자가 3번 반복됨)
# print("Age: " + 20)    # ❌ 에러! 글자와 숫자는 더할 수 없습니다.
\`\`\`
`,
        quiz: {
          question: { ko: '변수 a에 15를, 변수 b에 4를 저장하세요. 그리고 a를 b로 나눈 **나머지**를 출력하세요.', en: 'Store 15 in a, 4 in b. Print the remainder of a divided by b.' },
          hints: {
            ko: [
              '나머지를 구하는 연산자는 `%` 입니다.', 
              '`a = 15` 와 `b = 4` 를 먼저 작성하세요.', 
              '마지막 줄에 `print(a % b)` 를 작성하세요.'
            ],
            en: ['The remainder operator is `%`.', 'Write a = 15 and b = 4.', 'Write print(a % b).']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('print(3)') && !c.includes('%')) return fail('꼼수 쓰지 마세요!', 'No cheating!', '', true);
            if (!c.includes('%')) return fail('나머지를 구하는 연산자 % 를 사용하세요.', 'Use the % operator.');
            if (c.includes('a=15') && c.includes('b=4') && c.includes('print(a%b)')) return pass('3');
            return fail('변수 a, b를 만들고 나머지를 출력하세요.', 'Check your code.');
          }
        }
      },
      step3: {
        content: `
# 3단계: 조건문 (If / Elif / Else)

특정 조건이 맞을 때만 코드를 실행하고 싶을 때 \`if\`문을 사용합니다. "만약 ~라면 ~해라" 라는 뜻이죠.

### 1. 비교 연산자
조건을 만들 때 사용하는 기호들입니다. 결과는 항상 참(\`True\`) 또는 거짓(\`False\`)이 됩니다.
- \`A == B\` : A와 B가 **같다** (🚨 주의: \`=\` 한 개는 변수에 값을 넣을 때 쓰고, \`==\` 두 개는 비교할 때 씁니다! 가장 많이 하는 실수입니다.)
- \`A != B\` : A와 B가 **다르다**
- \`A > B\` : A가 B보다 **크다** (초과)
- \`A < B\` : A가 B보다 **작다** (미만)
- \`A >= B\` : A가 B보다 **크거나 같다** (이상)
- \`A <= B\` : A가 B보다 **작거나 같다** (이하)

### 2. 논리 연산자
여러 조건을 섞을 때 사용합니다.
- \`and\` : 양쪽 조건이 **모두** 참이어야 참
- \`or\` : 양쪽 조건 중 **하나라도** 참이면 참
- \`not\` : 참과 거짓을 **반대로** 뒤집음

---

### 3. 조건문 구조
\`\`\`python
age = 18

if age >= 20:
    # 조건이 참(True)일 때 실행됨
    print("성인입니다.")
elif age >= 13:
    # 위의 조건이 거짓이고, 이 조건이 참일 때 실행됨
    print("청소년입니다.")
else:
    # 위의 모든 조건이 거짓일 때 실행됨
    print("어린이입니다.")
\`\`\`

**🚨 파이썬 조건문 작성 시 핵심 규칙 2가지**
1. **콜론(\`:\`) 필수:** \`if 조건식:\` 처럼 조건이 끝나는 부분에는 반드시 콜론을 찍어야 합니다. "이제부터 실행할 코드가 나온다"는 신호입니다.
2. **들여쓰기(Indentation) 필수:** 파이썬은 띄어쓰기 4칸(또는 Tab 1번)으로 코드가 어디에 속하는지 구분합니다. \`if\`문 아래에 실행할 코드는 반드시 들여쓰기를 해야 합니다. 들여쓰기가 틀리면 \`IndentationError\`가 발생합니다.
`,
        quiz: {
          question: { ko: '변수 x에 10을 저장하세요. 만약 x가 5보다 크거나 같다면 "Pass"를 출력하는 코드를 작성하세요.', en: 'Store 10 in x. If x is greater than or equal to 5, print "Pass".' },
          hints: {
            ko: [
              '크거나 같다는 비교 연산자는 `>=` 입니다.', 
              '`if x >= 5:` 를 작성하고 다음 줄로 넘어가세요. (콜론 잊지 마세요!)', 
              '다음 줄에서 Tab 키를 눌러 들여쓰기를 한 후 `print("Pass")` 를 작성하세요.'
            ],
            en: ['Greater than or equal is `>=`.', 'Write if x >= 5: and go to next line.', 'Indent and write print("Pass").']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('print("Pass")') && !c.includes('if')) return fail('꼼수 쓰지 마세요!', 'No cheating!', '', true);
            if (!code.includes('if')) return fail('if문이 필요합니다.', 'if statement required.');
            if (!c.includes('>=')) return fail('크거나 같다는 연산자 >= 를 사용하세요.', 'Use >= operator.');
            if (c.includes('x=10') && c.includes('ifx>=5:') && c.includes('print("Pass")')) return pass('Pass');
            if (c.includes('ifx>=5print')) return fail('if문 끝에 콜론(:)이 빠졌거나 들여쓰기가 잘못되었습니다.', 'Missing colon or indentation error.', 'SyntaxError');
            return fail('조건문 구조와 들여쓰기, 콜론(:)을 확인하세요.', 'Check syntax and indentation.');
          }
        }
      },
      step4: {
        content: `
# 4단계: 반복문 (Loops)

동일한 코드를 100번, 1000번 실행해야 할 때 복사 붙여넣기를 할 수는 없겠죠? 이럴 때 반복문을 사용합니다.

### 1. for 문
반복할 횟수가 정해져 있거나, 데이터의 갯수만큼 반복할 때 주로 사용합니다. \`range()\` 함수와 찰떡궁합입니다.

\`\`\`python
# range(3)은 0, 1, 2 라는 숫자를 만들어냅니다.
# 변수 i에 0, 1, 2가 순서대로 들어가며 총 3번 반복됩니다.
for i in range(3):
    print(i)
\`\`\`
**💡 range() 더 알아보기**
- \`range(5)\` : 0부터 4까지 (5번)
- \`range(1, 5)\` : 1부터 4까지 (1, 2, 3, 4)
- \`range(1, 10, 2)\` : 1부터 9까지 2씩 건너뛰며 (1, 3, 5, 7, 9)

### 2. while 문
조건이 참(\`True\`)인 동안 계속해서 무한히 반복합니다.

\`\`\`python
count = 0
while count < 3:
    print(count)
    count = count + 1 # 이 코드가 없으면 영원히 반복되는 '무한 루프'에 빠집니다!
\`\`\`

### 3. 반복문 제어하기 (break / continue)
- \`break\` : 반복문을 즉시 **완전히 빠져나갑니다.** (탈출)
- \`continue\` : 아래 코드를 무시하고 **다음 반복으로 바로 넘어갑니다.** (스킵)

\`\`\`python
for i in range(5):
    if i == 2:
        continue # i가 2일 때는 아래 print를 무시하고 3으로 넘어감
    if i == 4:
        break    # i가 4가 되면 반복문을 아예 종료함
    print(i)     # 결과: 0, 1, 3 출력됨
\`\`\`
`,
        quiz: {
          question: { ko: 'for문과 range(2)를 사용하여 "Hello"를 2번 출력하세요.', en: 'Use for and range(2) to print "Hello" twice.' },
          hints: {
            ko: [
              '`for i in range(2):` 를 작성하세요. (끝에 콜론 필수!)', 
              '다음 줄에서 Tab 키를 눌러 들여쓰기를 하세요.', 
              '`print("Hello")` 를 작성하세요.'
            ],
            en: ['Write for i in range(2):', 'Indent the next line.', 'Write print("Hello").']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('print("Hello")print("Hello")') && !c.includes('for')) return fail('꼼수 쓰지 마세요!', 'No cheating!', '', true);
            if (!code.includes('for')) return fail('for문이 필요합니다.', 'for loop required.');
            if (!code.includes('range(2)')) return fail('range(2)를 사용해야 2번 반복됩니다.', 'Use range(2).');
            if (c.includes('for') && c.includes('range(2):') && c.includes('print("Hello")')) return pass('Hello\nHello');
            return fail('for문 구조와 들여쓰기, 콜론(:)을 확인하세요.', 'Check syntax and indentation.');
          }
        }
      },
      step5: {
        content: `
# 5단계: 함수 (Functions)

코드를 짜다 보면 똑같은 코드를 여러 곳에서 계속 써야 할 때가 있습니다. 이럴 때 코드를 하나의 블록으로 묶어 이름을 붙여두면 아주 편리한데, 이것이 바로 **함수**입니다.

### 1. 함수 정의(만들기)와 호출(사용하기)
- \`def\` (define의 약자) 키워드를 사용하여 함수를 만듭니다.
- 함수 이름 뒤에 괄호 \`()\`와 콜론 \`:\`을 붙입니다.
- 함수를 사용할 때는 이름 뒤에 괄호를 붙여서 부릅니다. (호출)

\`\`\`python
# 1. 함수 정의 (만들기)
def say_hello():
    print("안녕하세요!")

# 2. 함수 호출 (사용하기)
say_hello() 
say_hello() # 여러 번 부를 수 있습니다.
\`\`\`

### 2. 매개변수 (Parameters)
함수 외부에서 내부로 데이터를 전달할 때 사용하는 '입구' 역할의 변수입니다.
\`\`\`python
def greet(name): # name이 매개변수
    print(name + "님 환영합니다!")

greet("철수") # "철수님 환영합니다!" 출력
greet("영희") # "영희님 환영합니다!" 출력
\`\`\`

### 3. 반환값 (Return)
함수가 일을 다 마치고 그 결과를 다시 밖으로 돌려줄 때 \`return\`을 사용합니다.
**🚨 주의:** \`print\`는 화면에 보여주기만 할 뿐, 데이터로 남지 않습니다. 계산 결과를 다른 곳에서 또 쓰려면 반드시 \`return\`을 해야 합니다.

\`\`\`python
def add_numbers(a, b):
    result = a + b
    return result # 계산 결과를 돌려줌. return을 만나면 함수는 즉시 종료됨.

sum_value = add_numbers(10, 20) # 돌려받은 30을 변수에 저장
print(sum_value)
\`\`\`
`,
        quiz: {
          question: { ko: '이름이 "my_func" 이고, 호출되면 "Done"을 출력하는 함수를 정의하고, 그 함수를 호출하세요.', en: 'Define a function "my_func" that prints "Done", then call it.' },
          hints: {
            ko: [
              '`def my_func():` 로 함수 만들기를 시작하세요.', 
              '들여쓰기 후 `print("Done")` 을 작성하세요.', 
              '들여쓰기를 없애고(맨 앞으로 와서) `my_func()` 를 적어 함수를 실행(호출)하세요.'
            ],
            en: ['Start with def my_func():', 'Indent and write print("Done").', 'Remove indent and write my_func() to call it.']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('print("Done")') && !c.includes('def')) return fail('꼼수 쓰지 마세요!', 'No cheating!', '', true);
            if (!code.includes('def')) return fail('def 키워드로 함수를 정의해야 합니다.', 'Use def to define function.');
            if (!c.includes('my_func():')) return fail('함수 이름 뒤에 괄호와 콜론(): 이 필요합니다.', 'Missing (): after function name.');
            if (c.includes('defmy_func():') && c.includes('print("Done")') && code.split('my_func').length > 2) return pass('Done');
            return fail('함수를 정의한 후, 마지막에 my_func()를 적어 호출해야 합니다.', 'Define and then call the function.');
          }
        }
      },
      step6: {
        content: `
# 6단계: 리스트 (Lists)

지금까지는 변수 하나에 데이터 하나만 넣었습니다. 하지만 학생 30명의 점수를 저장하려면 변수 30개가 필요할까요? 이럴 때 여러 데이터를 기차처럼 쭉 이어서 저장하는 **리스트**를 사용합니다.

### 1. 리스트 만들기
대괄호 \`[]\` 안에 데이터를 쉼표(\`,\`)로 구분하여 넣습니다. 숫자, 문자열 섞어서 넣어도 됩니다.
\`\`\`python
fruits = ["apple", "banana", "cherry"]
numbers = [10, 20, 30, 40, 50]
mixed = [1, "Hello", True]
\`\`\`

### 2. 인덱싱 (Indexing) - 데이터 꺼내기
리스트 안의 특정 데이터에 접근할 때는 순서 번호(인덱스)를 사용합니다.
**🚨 [매우 중요] 컴퓨터는 숫자를 1이 아니라 0부터 셉니다!**
\`\`\`python
fruits = ["apple", "banana", "cherry"]
print(fruits[0]) # "apple" 출력 (첫 번째)
print(fruits[1]) # "banana" 출력 (두 번째)
print(fruits[-1]) # "cherry" 출력 (마이너스는 뒤에서부터 셉니다. -1은 맨 마지막!)
# print(fruits[3]) # ❌ IndexError: 리스트 범위를 벗어났다는 에러 발생
\`\`\`

### 3. 슬라이싱 (Slicing) - 데이터 잘라내기
\`[시작번호 : 끝번호]\` 형태로 리스트의 일부분만 잘라낼 수 있습니다. (끝번호는 포함되지 않습니다)
\`\`\`python
numbers = [0, 1, 2, 3, 4, 5]
print(numbers[1:4]) # [1, 2, 3] 출력 (인덱스 1부터 3까지)
\`\`\`

### 4. 리스트 다루기 (메서드)
- \`append(값)\` : 리스트 **맨 끝에** 데이터를 추가합니다.
- \`pop()\` : 리스트 **맨 끝의** 데이터를 뽑아내서 삭제합니다.
- \`len(리스트)\` : 리스트 안에 데이터가 **몇 개** 있는지 길이를 알려줍니다.

\`\`\`python
arr = [1, 2]
arr.append(3)
print(arr) # [1, 2, 3]
print(len(arr)) # 3
\`\`\`
`,
        quiz: {
          question: { ko: '변수 arr에 [10, 20, 30] 리스트를 저장하고, 인덱싱을 사용하여 두 번째 값(20)을 출력하세요.', en: 'Store [10, 20, 30] in arr, and print the second value (20) using indexing.' },
          hints: {
            ko: [
              '`arr = [10, 20, 30]` 을 작성하여 리스트를 만드세요.', 
              '컴퓨터는 0부터 셉니다. 첫 번째는 0, 두 번째는 1입니다.', 
              '`print(arr[1])` 을 작성하세요.'
            ],
            en: ['Write arr = [10, 20, 30].', 'The index of the second value is 1.', 'Write print(arr[1]).']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('print(20)') && !c.includes('arr[')) return fail('꼼수 쓰지 마세요!', 'No cheating!', '', true);
            if (!c.includes('arr=[10,20,30]')) return fail('arr 리스트를 정확히 만드세요.', 'Create the arr list correctly.');
            if (c.includes('print(arr[1])')) return pass('20');
            return fail('인덱싱을 사용하여 두 번째 값을 출력하세요. (인덱스는 0부터 시작합니다)', 'Use indexing to print the second value.');
          }
        }
      },
      step7: {
        content: `
# 7단계: 딕셔너리 (Dictionaries)

리스트가 데이터를 순서대로 나열한다면, 딕셔너리는 **이름표(Key)를 붙여서 데이터를 저장**합니다. 실제 사전처럼 단어(Key)를 찾으면 뜻(Value)이 나오는 구조입니다.

### 1. 딕셔너리 만들기
중괄호 \`{}\`를 사용하며, \`이름표: 값\` 형태로 저장합니다.
\`\`\`python
person = {
    "name": "IceCode",
    "age": 20,
    "is_student": True
}
\`\`\`

### 2. 데이터 꺼내기 및 수정하기
리스트는 \`[0]\` 처럼 숫자를 썼지만, 딕셔너리는 \`["이름표"]\`를 사용합니다.
\`\`\`python
print(person["name"]) # "IceCode" 출력

# 값 수정하기
person["age"] = 21

# 새로운 데이터 추가하기
person["city"] = "Seoul"
\`\`\`

**⚠️ 주의할 점: 없는 Key 찾기**
딕셔너리에 없는 이름표를 찾으려고 하면 에러(\`KeyError\`)가 발생합니다.
이럴 때는 \`.get()\` 메서드를 사용하면 안전합니다.
\`\`\`python
# print(person["phone"]) # ❌ KeyError 발생
print(person.get("phone")) # None (없다는 뜻) 출력
print(person.get("phone", "번호 없음")) # 없으면 "번호 없음" 출력
\`\`\`
`
      },
      step8: {
        content: `
# 8단계: 클래스와 객체지향 (Classes & OOP)

클래스는 **객체(Object)를 만들어내는 붕어빵 틀(설계도)**입니다. 게임을 만들 때 '몬스터'라는 틀을 만들어두면, 슬라임, 오크, 드래곤 등 수많은 몬스터를 쉽게 찍어낼 수 있습니다.

### 1. 클래스 만들기
\`class\` 키워드를 사용합니다. 클래스 이름은 보통 **대문자로 시작**합니다. (PascalCase)
\`\`\`python
class Dog:
    # __init__ 은 붕어빵이 구워질 때(객체가 생성될 때) 자동으로 실행되는 초기화 함수입니다.
    # self는 만들어진 붕어빵 자신을 의미합니다. (필수!)
    def __init__(self, name, age):
        self.name = name # 내(self) 이름은 전달받은 name으로 설정
        self.age = age

    # 클래스 안의 함수를 '메서드(Method)'라고 부릅니다.
    def bark(self):
        print(self.name + "가 멍멍 짖습니다!")
\`\`\`

### 2. 객체(인스턴스) 생성 및 사용
\`\`\`python
# Dog 클래스(틀)를 이용해 my_dog라는 객체(붕어빵)를 만듭니다.
my_dog = Dog("바둑이", 3)

# 객체의 데이터(속성) 확인
print(my_dog.name) # "바둑이"

# 객체의 행동(메서드) 실행
my_dog.bark() # "바둑이가 멍멍 짖습니다!"
\`\`\`
`
      },
      step9: {
        content: `
# 9단계: 예외 처리 (Error Handling)

프로그램을 실행하다 보면 에러가 발생해서 프로그램이 픽 꺼져버리는 경우가 있습니다. 이를 방지하고 "에러가 나면 이렇게 대처해!" 라고 알려주는 것이 예외 처리입니다.

### 1. try - except
\`try\` 블록 안에는 실행할 코드를 넣고, 에러가 발생하면 \`except\` 블록이 실행됩니다.
\`\`\`python
try:
    # 에러가 발생할 위험이 있는 코드
    result = 10 / 0
    print(result)
except ZeroDivisionError:
    # 0으로 나누는 에러가 발생했을 때 실행됨
    print("수학적으로 0으로 나눌 수 없습니다!")
except Exception as e:
    # 그 외의 모든 에러를 잡아서 e라는 변수에 담음
    print("알 수 없는 에러 발생:", e)
\`\`\`

### 2. finally
에러가 발생하든 안 하든 **무조건 마지막에 실행**되어야 하는 코드를 넣습니다. (예: 열어둔 파일 닫기)
\`\`\`python
try:
    print("작업 시작")
except:
    print("에러 발생")
finally:
    print("작업 종료 (무조건 실행됨)")
\`\`\`
`
      },
      step10: {
        content: `
# 10단계: 모듈과 패키지 (Modules & Packages)

내가 모든 코드를 다 짤 필요는 없습니다. 다른 똑똑한 사람들이 미리 만들어둔 코드를 가져다 쓰는 방법을 배웁니다.

### 1. 모듈 가져오기 (import)
파이썬 파일 하나하나를 모듈이라고 부릅니다. \`import\` 키워드로 가져옵니다.
\`\`\`python
import math # 수학 관련 기능이 모인 모듈 가져오기

print(math.pi) # 3.141592...
print(math.ceil(2.3)) # 3 (올림)
\`\`\`

### 2. 특정 기능만 가져오기 (from ~ import)
모듈 전체가 아니라 필요한 것만 쏙 빼올 수 있습니다.
\`\`\`python
from random import randint # random 모듈에서 randint 함수만 가져옴

# random.randint() 라고 안 쓰고 바로 쓸 수 있음
dice = randint(1, 6) # 1부터 6 사이의 랜덤한 정수 뽑기
print("주사위 결과:", dice)
\`\`\`

### 3. 외부 패키지 설치 (pip)
파이썬에 기본으로 없는 엄청난 기능들(데이터 분석, 인공지능 등)은 인터넷에서 다운받아 씁니다. 터미널에서 \`pip install 패키지이름\` 명령어를 사용합니다.
\`\`\`bash
# 터미널에 입력 (파이썬 코드 아님!)
pip install requests
\`\`\`
`
      }
    },
    javascript: {
      step0: {
        content: `
# 0단계: JavaScript 환경 세팅

JavaScript는 웹 브라우저(크롬, 엣지 등)에 내장되어 있어 별도의 설치 없이 브라우저 개발자 도구(F12)의 Console 탭에서 바로 실행할 수 있습니다. 
하지만 본격적인 백엔드 개발이나 React 같은 프레임워크를 사용하려면 **Node.js**가 필요합니다.

### 1. Node.js 설치
Node.js는 브라우저 밖(내 컴퓨터)에서도 JavaScript를 실행할 수 있게 해주는 마법 같은 환경입니다.
1. [nodejs.org](https://nodejs.org/) 에 접속합니다.
2. 화면에 보이는 두 개의 버튼 중 **LTS(Long Term Support, 안정적 버전)**를 다운로드하고 설치합니다. (설치 중 나오는 체크박스는 기본값으로 두고 Next만 누르면 됩니다.)

### 2. 설치 확인
VS Code 터미널을 열고 다음 명령어를 입력합니다:
\`\`\`bash
node -v
\`\`\`
\`v20.11.0\` 처럼 버전 정보가 출력되면 정상적으로 설치된 것입니다.
`
      },
      step1: {
        content: `
# 1단계: 출력과 변수

### 1. 출력 (console.log)
데이터를 화면(콘솔)에 출력하는 명령어입니다. 파이썬의 print와 같습니다.
\`\`\`javascript
console.log("안녕하세요!"); // 문자열 출력 (따옴표 필수)
console.log(100);           // 숫자 출력
\`\`\`
**💡 주의:** 자바스크립트는 문장이 끝날 때 세미콜론(\`;\`)을 붙이는 것이 규칙입니다. (안 붙여도 실행은 되지만, 붙이는 습관을 들이는 것이 좋습니다.)

### 2. 변수 (Variables)
데이터를 저장하는 공간입니다. JavaScript에서는 변수를 만들 때 \`let\` 또는 \`const\` 키워드를 앞에 붙여야 합니다.
- **\`let\`**: 저장된 데이터를 나중에 다른 값으로 **변경할 수 있는** 상자입니다.
- **\`const\`**: 한 번 저장하면 절대 **변경할 수 없는** 상자입니다. (상수, Constant)

\`\`\`javascript
let age = 20;
age = 21; // let으로 만들었으므로 값 변경 가능 (에러 안남)

const name = "Alice";
// name = "Bob"; // ❌ 에러! const는 값을 바꿀 수 없습니다.

console.log(age);
\`\`\`
`,
        quiz: {
          question: { ko: 'let을 사용하여 변수 x에 10을 저장하고, console.log()로 x를 출력하세요.', en: 'Use let to store 10 in x, and console.log(x).' },
          hints: {
            ko: [
              '`let x = 10;` 을 작성하세요.', 
              '다음 줄에 `console.log(x);` 를 작성하세요.', 
              '세미콜론(;)을 끝에 붙여주세요.'
            ],
            en: ['Write let x = 10;', 'Write console.log(x); on the next line.', 'Do not forget the semicolon (;).']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('console.log(10)') && !c.includes('x')) return fail('꼼수 쓰지 마세요!', 'No cheating!', '', true);
            if (!code.includes('console.log')) return fail('console.log() 명령어가 없습니다.', 'Missing console.log()');
            if (!code.includes('let')) return fail('let 키워드를 사용하여 변수를 선언해야 합니다.', 'Use let keyword.');
            if (c.includes('letx=10') && c.includes('console.log(x)')) return pass('10');
            return fail('let x = 10; 과 console.log(x); 를 작성하세요.', 'Check your code.');
          }
        }
      },
      step2: {
        content: `
# 2단계: 자료형과 연산

### 1. 자료형 (Data Types)
- **문자열 (String):** 텍스트 데이터. 따옴표(\`'\` 또는 \`"\`, 또는 백틱 \`\`\`)로 감싸야 합니다.
- **숫자 (Number):** 자바스크립트는 정수와 실수를 구분하지 않고 모두 Number 타입으로 취급합니다.
- **불리언 (Boolean):** 참과 거짓. 소문자로 작성합니다. (\`true\`, \`false\`)

### 2. 산술 연산자
- \`+\` : 더하기
- \`-\` : 빼기
- \`*\` : 곱하기
- \`/\` : 나누기
- \`%\` : 나머지 (파이썬과 동일하게 짝수/홀수 판별 등에 쓰입니다)

\`\`\`javascript
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
\`\`\`

**⚠️ 주의할 점: 문자열과 숫자의 더하기**
자바스크립트는 문자와 숫자를 더하려고 하면, 숫자를 몰래 문자로 바꿔서 이어 붙여버립니다!
\`\`\`javascript
console.log("Age: " + 20); // "Age: 20" 출력됨 (파이썬은 에러가 나지만 JS는 허용함)
console.log("10" + 20);    // "1020" 출력됨 (수학적 30이 아님!)
\`\`\`
`,
        quiz: {
          question: { ko: '변수 a에 15를, 변수 b에 4를 저장하세요. 그리고 a를 b로 나눈 **나머지**를 출력하세요.', en: 'Store 15 in a, 4 in b. Print the remainder of a divided by b.' },
          hints: {
            ko: [
              '나머지를 구하는 연산자는 `%` 입니다.', 
              '`let a = 15;` 와 `let b = 4;` 를 먼저 작성하세요.', 
              '`console.log(a % b);` 를 작성하세요.'
            ],
            en: ['The remainder operator is `%`.', 'Write let a = 15; let b = 4;', 'Write console.log(a % b);']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('console.log(3)') && !c.includes('%')) return fail('꼼수 쓰지 마세요!', 'No cheating!', '', true);
            if (!c.includes('%')) return fail('나머지를 구하는 연산자 % 를 사용하세요.', 'Use the % operator.');
            if (c.includes('leta=15') && c.includes('letb=4') && c.includes('console.log(a%b)')) return pass('3');
            return fail('변수 a, b를 만들고 나머지를 출력하세요.', 'Check your code.');
          }
        }
      },
      step3: {
        content: `
# 3단계: 조건문

조건에 따라 다른 코드를 실행합니다. 괄호 \`()\` 안에 조건을 적고, 중괄호 \`{}\` 안에 실행할 코드를 적습니다.

### 1. 비교 연산자
- **\`===\` : 같다 (매우 중요!)** 자바스크립트에서는 \`==\` 대신 반드시 \`===\` 기호 3개짜리를 써야 안전합니다. (\`==\`는 "10"과 10을 같다고 판단하는 버그성 기능이 있습니다.)
- \`!==\` : 다르다
- \`>\`, \`<\`, \`>=\`, \`<=\` : 크다, 작다, 크거나 같다, 작거나 같다

### 2. 논리 연산자
- \`&&\` : AND (양쪽 모두 참이어야 참)
- \`||\` : OR (양쪽 중 하나라도 참이면 참. 엔터키 위의 원화 표시 키를 Shift 누르고 칩니다)
- \`!\` : NOT (참/거짓 반전)

### 3. if / else if / else
\`\`\`javascript
let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}
\`\`\`
- 조건식은 반드시 소괄호 \`()\`로 감싸야 합니다.
- 실행할 코드는 반드시 중괄호 \`{}\`로 감싸야 합니다. 파이썬처럼 들여쓰기로 구분하지 않습니다.
`,
        quiz: {
          question: { ko: '변수 n이 10입니다. n이 5보다 크면 "Yes"를 출력하는 if문을 작성하세요.', en: 'n is 10. If n > 5, print "Yes".' },
          hints: {
            ko: [
              '`let n = 10;` 을 작성하세요.', 
              '`if (n > 5) {` 를 작성하세요.', 
              '중괄호 안에 `console.log("Yes");` 를 작성하고 다음 줄에서 `}` 로 중괄호를 닫으세요.'
            ],
            en: ['Write let n = 10;', 'Write if (n > 5) {', 'Write console.log("Yes"); inside the braces.']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('console.log("Yes")') && !c.includes('if')) return fail('꼼수 쓰지 마세요!', 'No cheating!', '', true);
            if (!code.includes('if')) return fail('if문이 필요합니다.', 'if statement required.');
            if (!c.includes('(n>5)')) return fail('조건식은 소괄호 () 안에 작성해야 합니다.', 'Condition must be in ().', 'SyntaxError');
            if (!c.includes('{') || !c.includes('}')) return fail('실행할 코드는 중괄호 {} 안에 작성해야 합니다.', 'Code block must be in {}.', 'SyntaxError');
            if (c.includes('if(n>5){console.log("Yes")')) return pass('Yes');
            return fail('조건문 구조를 다시 확인해주세요.', 'Check if statement structure.');
          }
        }
      },
      step4: {
        content: `
# 4단계: 반복문

### 1. for 문
반복 횟수가 명확할 때 사용합니다. \`(초기화; 조건식; 증감식)\` 구조를 가집니다.
\`\`\`javascript
// 1. let i = 0; (시작점)
// 2. i < 3; (이 조건이 참일 때만 반복)
// 3. i++ (한 번 반복이 끝날 때마다 i를 1씩 증가시킴)
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2 출력
}
\`\`\`

### 2. while 문
조건이 참인 동안 반복합니다.
\`\`\`javascript
let count = 0;
while (count < 3) {
    console.log(count);
    count++; // count를 1 증가시킴. 없으면 무한 반복!
}
\`\`\`
`,
        quiz: {
          question: { ko: 'for문을 사용하여 0부터 1까지 두 번 출력하세요. (console.log(i) 사용)', en: 'Use for loop to print 0 and 1.' },
          hints: {
            ko: [
              '`for (let i = 0; i < 2; i++) {` 를 작성하세요.', 
              '중괄호 안에 `console.log(i);` 를 작성하세요.', 
              '`}` 로 중괄호를 닫으세요.'
            ],
            en: ['Write for (let i = 0; i < 2; i++) {', 'Write console.log(i); inside the braces.', 'Close the braces.']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('console.log(0)console.log(1)') && !c.includes('for')) return fail('꼼수 쓰지 마세요!', 'No cheating!', '', true);
            if (!code.includes('for')) return fail('for문이 필요합니다.', 'for loop required.');
            if (!c.includes('i<2') && !c.includes('i<=1')) return fail('조건식이 잘못되었습니다. 2번 반복되도록 설정하세요.', 'Incorrect loop condition.');
            if (c.includes('for(leti=0;i<2;i++){console.log(i)')) return pass('0\n1');
            return fail('for문의 (초기화; 조건식; 증감식) 구조를 확인하세요.', 'Check for loop structure.');
          }
        }
      },
      step5: {
        content: `
# 5단계: 함수

코드를 재사용하기 위해 묶어놓은 블록입니다.

### 1. 일반 함수 선언
\`function\` 키워드를 사용합니다.
\`\`\`javascript
function sayHello(name) {
    return "Hello " + name;
}
let result = sayHello("Alice"); 
console.log(result); // "Hello Alice"
\`\`\`

### 2. 화살표 함수 (Arrow Function)
최신 JavaScript에서 아주아주 많이 사용하는 간결한 방식입니다. \`=>\` 화살표 모양을 씁니다.
\`\`\`javascript
const sayHello = (name) => {
    return "Hello " + name;
};
console.log(sayHello("Bob"));
\`\`\`
`,
        quiz: {
          question: { ko: 'function 키워드를 사용하여 "Done"을 출력하는 함수 myFunc를 만들고 호출하세요.', en: 'Create and call a function myFunc that prints "Done".' },
          hints: {
            ko: [
              '`function myFunc() {` 를 작성하세요.', 
              '`console.log("Done");` 을 작성하고 중괄호를 닫으세요.', 
              '마지막 줄에 `myFunc();` 를 작성하여 호출하세요.'
            ],
            en: ['Write function myFunc() {', 'Write console.log("Done"); and close braces.', 'Call it with myFunc();']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('console.log("Done")') && !c.includes('function')) return fail('꼼수 쓰지 마세요!', 'No cheating!', '', true);
            if (!code.includes('function')) return fail('function 키워드가 필요합니다.', 'function keyword required.');
            if (!c.includes('myFunc()')) return fail('함수 이름 뒤에 소괄호()가 필요합니다.', 'Missing () after function name.');
            if (c.includes('functionmyFunc(){console.log("Done")') && code.split('myFunc').length > 2) return pass('Done');
            return fail('함수를 정의하고 마지막에 호출해야 합니다.', 'Define and call the function.');
          }
        }
      },
      step6: {
        content: `
# 6단계: 배열 (Arrays)

여러 데이터를 순서대로 담는 목록입니다. 파이썬의 리스트와 똑같습니다.

### 배열 만들기
대괄호 \`[]\`를 사용합니다.
\`\`\`javascript
let fruits = ["apple", "banana", "cherry"];
\`\`\`

### 인덱싱 (Indexing)
배열의 요소에 접근할 때는 0부터 시작하는 인덱스를 사용합니다.
\`\`\`javascript
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
\`\`\`

### 배열 다루기
- \`push(값)\` : 배열 맨 끝에 데이터를 추가합니다.
- \`pop()\` : 배열 맨 끝 데이터를 삭제합니다.
- \`length\` : 배열의 길이를 알려줍니다. (주의: 함수가 아니므로 괄호()를 안 씁니다)

\`\`\`javascript
let arr = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]
console.log(arr.length); // 3
\`\`\`
`,
        quiz: {
          question: { ko: '변수 arr에 [10, 20, 30] 배열을 저장하고, 인덱싱을 사용하여 두 번째 값(20)을 출력하세요.', en: 'Store [10, 20, 30] in arr, and print the second value (20) using indexing.' },
          hints: {
            ko: [
              '`let arr = [10, 20, 30];` 을 작성하세요.', 
              '두 번째 값의 인덱스는 1입니다.', 
              '`console.log(arr[1]);` 을 작성하세요.'
            ],
            en: ['Write let arr = [10, 20, 30];', 'The index of the second value is 1.', 'Write console.log(arr[1]);']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('console.log(20)') && !c.includes('arr[')) return fail('꼼수 쓰지 마세요!', 'No cheating!', '', true);
            if (!c.includes('arr=[10,20,30]')) return fail('arr 배열을 정확히 만드세요.', 'Create the arr array correctly.');
            if (c.includes('console.log(arr[1])')) return pass('20');
            return fail('인덱싱을 사용하여 두 번째 값을 출력하세요. (인덱스는 0부터 시작합니다)', 'Use indexing to print the second value.');
          }
        }
      },
      step7: {
        content: `
# 7단계: 객체 (Objects)

JavaScript에서 객체는 **키(Key)와 값(Value)의 쌍**으로 이루어진 데이터의 모음입니다. 파이썬의 딕셔너리와 매우 비슷합니다.

### 1. 객체 만들기
중괄호 \`{}\`를 사용합니다. 키와 값 사이에는 콜론(\`:\`)을 씁니다.
\`\`\`javascript
const user = {
    name: "IceCode",
    age: 20,
    isStudent: true
};
\`\`\`

### 2. 데이터 꺼내기 및 수정하기
점(\`.\`)을 찍어서 접근하는 방법과 대괄호 \`[]\`를 사용하는 방법이 있습니다.
\`\`\`javascript
// 점(.) 표기법 (가장 많이 씀)
console.log(user.name); // "IceCode"

// 대괄호 표기법 (키 이름에 띄어쓰기가 있거나 변수를 쓸 때)
console.log(user["age"]); // 20

// 값 수정 및 추가
user.age = 21;
user.city = "Seoul"; // 새로운 속성 추가
\`\`\`

### 3. 객체 안에 함수 넣기 (메서드)
객체 안에는 데이터뿐만 아니라 함수도 넣을 수 있습니다.
\`\`\`javascript
const dog = {
    name: "바둑이",
    bark: function() {
        // this는 이 객체 자신(dog)을 가리킵니다.
        console.log(this.name + "가 멍멍 짖습니다!");
    }
};

dog.bark();
\`\`\`
`
      },
      step8: {
        content: `
# 8단계: 클래스와 객체지향 (Classes)

JavaScript도 다른 언어들처럼 \`class\` 키워드를 지원하여 객체지향 프로그래밍을 할 수 있습니다.

### 1. 클래스 만들기
\`\`\`javascript
class Person {
    // constructor는 객체가 생성될 때 실행되는 초기화 함수입니다.
    constructor(name, age) {
        this.name = name; // this는 만들어질 객체 자신
        this.age = age;
    }

    // 메서드 (function 키워드를 안 씁니다)
    introduce() {
        console.log("안녕하세요, 저는 " + this.name + "입니다.");
    }
}
\`\`\`

### 2. 객체(인스턴스) 생성
\`new\` 키워드를 사용하여 클래스로부터 객체를 찍어냅니다.
\`\`\`javascript
const p1 = new Person("철수", 25);
const p2 = new Person("영희", 22);

p1.introduce(); // "안녕하세요, 저는 철수입니다."
p2.introduce(); // "안녕하세요, 저는 영희입니다."
\`\`\`
`
      },
      step9: {
        content: `
# 9단계: 예외 처리 (Try-Catch)

에러가 발생했을 때 프로그램이 멈추지 않도록 우아하게 처리하는 방법입니다.

### 1. try - catch - finally
\`\`\`javascript
try {
    // 에러가 날 수도 있는 코드
    let result = someUndefinedFunction(); // 없는 함수 호출!
} catch (error) {
    // 에러가 발생하면 이쪽으로 넘어옵니다.
    console.log("에러가 발생했습니다:", error.message);
} finally {
    // 에러 발생 여부와 상관없이 무조건 마지막에 실행됩니다.
    console.log("작업이 끝났습니다.");
}
\`\`\`

### 2. 직접 에러 발생시키기 (throw)
내가 만든 규칙에 어긋날 때 일부러 에러를 던질 수도 있습니다.
\`\`\`javascript
function checkAge(age) {
    if (age < 0) {
        throw new Error("나이는 음수가 될 수 없습니다!");
    }
    return true;
}
\`\`\`
`
      },
      step10: {
        content: `
# 10단계: 비동기 처리 (Async / Await)

JavaScript는 보통 위에서 아래로 코드를 실행하지만, 인터넷에서 데이터를 가져오는 것처럼 **오래 걸리는 작업은 기다리지 않고 다음 코드를 먼저 실행**해버립니다. 이를 '비동기'라고 합니다.

### 1. Promise (약속)
"나중에 데이터 가져오면 알려줄게" 라는 약속입니다.
\`\`\`javascript
// fetch는 인터넷에서 데이터를 가져오는 함수입니다. (Promise를 반환함)
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) // 성공하면 then 실행
    .then(data => console.log(data))
    .catch(error => console.log("에러:", error)); // 실패하면 catch 실행
\`\`\`

### 2. async / await (최신 문법)
\`then\`을 계속 쓰면 코드가 복잡해지므로, 진짜 동기 코드(순서대로 실행되는 코드)처럼 보이게 만들어주는 마법의 키워드입니다.
\`\`\`javascript
// 함수 앞에 async를 붙여야 안에서 await를 쓸 수 있습니다.
async function getData() {
    try {
        // await를 쓰면 이 작업이 끝날 때까지 여기서 기다립니다!
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("에러 발생:", error);
    }
}

getData();
\`\`\`
`
      }
    },
    typescript: {
      step0: {
        content: `
# 0단계: TypeScript 환경 세팅

TypeScript는 JavaScript에 **타입(Type)** 이라는 강력한 무기를 장착한 언어입니다. 브라우저는 TypeScript를 직접 이해하지 못하므로, 실행하기 전에 JavaScript로 변환(컴파일)하는 과정이 필요합니다.

### 1. Node.js 설치
JavaScript와 마찬가지로 실행 환경인 Node.js가 필요합니다. [nodejs.org](https://nodejs.org/)에서 LTS 버전을 설치하세요.

### 2. TypeScript 컴파일러 설치
VS Code 터미널을 열고 아래 명령어를 입력하여 TypeScript를 전역으로 설치합니다.
\`\`\`bash
npm install -g typescript
\`\`\`

### 3. 설치 확인
\`\`\`bash
tsc -v
\`\`\`
\`Version 5.x.x\` 처럼 버전이 나오면 성공입니다!

**💡 참고:** 실무에서는 \`ts-node\`나 \`vite\` 같은 도구를 사용하여 변환과 실행을 한 번에 처리하는 경우가 많습니다.
`
      },
      step1: {
        content: `
# 1단계: 타입 지정 (Type Annotations)

TypeScript의 핵심은 변수, 함수 등에 **어떤 종류의 데이터가 들어갈지 미리 정해두는 것**입니다.

### 1. 기본 타입 지정
변수 이름 뒤에 콜론(\`:\`)을 붙이고 타입을 적습니다.
- \`string\` : 문자열
- \`number\` : 숫자 (정수, 실수 모두)
- \`boolean\` : 참/거짓

\`\`\`typescript
let age: number = 20;
let name: string = "Alice";
let isStudent: boolean = true;

// age = "스무살"; // ❌ 에러! number 타입 상자에 string을 넣을 수 없습니다.
\`\`\`

**⚠️ 주의할 점: 타입 추론 (Type Inference)**
TypeScript는 똑똑해서, 처음 값을 넣을 때 타입을 알아서 눈치챕니다.
\`\`\`typescript
let score = 100; // 타입을 안 적었지만, 100을 보고 number라고 추론함
// score = "A";  // ❌ 에러! 이미 number로 추론되었기 때문
\`\`\`
따라서 뻔한 타입은 굳이 \`: number\` 처럼 적지 않아도 됩니다.
`,
        quiz: {
          question: { ko: '타입 지정을 사용하여 문자열(string) 변수 msg에 "Hello"를 저장하세요.', en: 'Store "Hello" in a string variable msg using type annotation.' },
          hints: {
            ko: [
              '`let msg` 뒤에 콜론(:)을 붙여 타입을 지정합니다.', 
              '`let msg: string` 으로 문자열 타입임을 명시하세요.', 
              '`let msg: string = "Hello";` 를 작성하세요.'
            ],
            en: ['Use colon (:) after variable name.', 'let msg: string', 'let msg: string = "Hello";']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('letmsg:string="Hello"')) return pass('Hello');
            return fail('타입 지정 문법을 확인하세요. (let 변수명: 타입 = 값;)', 'Check syntax.');
          }
        }
      },
      step2: {
        content: `
# 2단계: 자료형과 연산

JavaScript와 연산 방법은 100% 동일합니다. 하지만 **타입 검사**가 추가되어 훨씬 안전합니다.

### 1. 안전한 연산
JavaScript에서는 숫자와 문자를 더하는 이상한 짓이 가능했지만, TypeScript는 이를 막아줍니다.
\`\`\`typescript
let a: number = 10;
let b: string = "20";

// console.log(a + b); // ❌ 에러! number와 string은 더할 수 없다고 경고해줍니다.
\`\`\`

### 2. Any 타입 (주의!)
\`any\` 타입은 "아무거나 다 들어갈 수 있다"는 뜻입니다. 사실상 TypeScript의 타입 검사를 끄는 것과 같으므로, **최대한 사용하지 않는 것이 좋습니다.**
\`\`\`typescript
let mystery: any = 10;
mystery = "Hello"; // 에러 안 남
mystery = true;    // 에러 안 남
\`\`\`
`
      },
      step3: {
        content: `
# 3단계: 조건문

JavaScript와 100% 동일합니다. \`if\`, \`else if\`, \`else\`를 사용하며, 비교 연산자로는 반드시 \`===\`와 \`!==\`를 사용하세요.

\`\`\`typescript
let score: number = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}
\`\`\`
`
      },
      step4: {
        content: `
# 4단계: 반복문

JavaScript와 100% 동일합니다. \`for\`문과 \`while\`문을 사용합니다.

\`\`\`typescript
// for문에서 i의 타입은 number로 자동 추론됩니다.
for (let i = 0; i < 3; i++) {
    console.log(i);
}
\`\`\`
`
      },
      step5: {
        content: `
# 5단계: 함수와 타입

함수를 만들 때 **들어오는 값(매개변수)**과 **나가는 값(반환값)**의 타입을 모두 지정해야 합니다.

### 1. 매개변수와 반환값 타입 지정
\`\`\`typescript
// a와 b는 number 타입이어야 하고, 반환되는 결과도 number 타입이어야 함
function add(a: number, b: number): number {
    return a + b;
}

let sum: number = add(10, 20);
// add(10, "20"); // ❌ 에러! 두 번째 인자가 숫자가 아님
\`\`\`

### 2. 반환값이 없는 함수 (void)
함수가 아무것도 \`return\`하지 않고 \`console.log\`만 찍고 끝난다면, 반환 타입을 \`void\`로 지정합니다.
\`\`\`typescript
function printMessage(msg: string): void {
    console.log(msg);
    // return "Done"; // ❌ 에러! void 함수는 값을 반환할 수 없음
}
\`\`\`
`
      },
      step6: {
        content: `
# 6단계: 배열과 튜플

### 1. 배열 (Array) 타입
배열 안에 들어갈 데이터의 타입을 지정하고 뒤에 \`[]\`를 붙입니다.
\`\`\`typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob"];

// numbers.push("Six"); // ❌ 에러! 숫자 배열에 문자를 넣을 수 없음
\`\`\`

### 2. 튜플 (Tuple)
배열과 비슷하지만, **길이와 각 자리의 타입이 고정된 배열**입니다.
\`\`\`typescript
// 첫 번째는 무조건 string, 두 번째는 무조건 number여야 함
let user: [string, number] = ["IceCode", 20];

// user = [20, "IceCode"]; // ❌ 에러! 순서가 틀림
// user = ["IceCode", 20, "Seoul"]; // ❌ 에러! 길이가 틀림
\`\`\`
`
      },
      step7: {
        content: `
# 7단계: 객체와 인터페이스 (Interfaces)

TypeScript에서는 객체의 모양(어떤 키가 있고, 각각의 타입은 무엇인지)을 미리 정의할 수 있습니다. 이를 위해 \`interface\`나 \`type\`을 사용합니다.

### 1. Interface 만들기
\`\`\`typescript
// User라는 이름의 객체 설계도를 만듭니다.
interface User {
    name: string;
    age: number;
    isStudent?: boolean; // ?를 붙이면 "있어도 되고 없어도 됨(선택)" 이라는 뜻입니다.
}

// 설계도에 맞게 객체 생성
const user1: User = {
    name: "IceCode",
    age: 20,
    isStudent: true
};

const user2: User = {
    name: "Bob",
    age: 25
    // isStudent가 없어도 에러가 나지 않습니다. (? 때문)
};

// user1.age = "스무살"; // ❌ 에러! age는 number여야 합니다.
\`\`\`
`,
        quiz: {
          question: { ko: '`name`(문자열)과 `age`(숫자)를 가지는 `User` 인터페이스를 만들고, 이를 사용하여 `user1` 객체를 만드세요. (값은 자유)', en: 'Create a `User` interface with `name` (string) and `age` (number), and use it to create a `user1` object.' },
          hints: {
            ko: [
              '`interface User { ... }` 형태로 인터페이스를 선언하세요.',
              '인터페이스 안에 `name: string;` 과 `age: number;` 를 넣으세요.',
              '`const user1: User = { name: "IceCode", age: 20 };` 형태로 객체를 만드세요.'
            ],
            en: ['Use `interface User { ... }`', 'Add `name: string;` and `age: number;`', 'Create `const user1: User = ...`']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('interfaceUser') && c.includes('name:string') && c.includes('age:number') && c.includes('user1:User')) return pass('User object created');
            return fail('인터페이스와 객체 생성 문법을 확인하세요.', 'Check syntax.');
          }
        }
      },
      step8: {
        content: `
# 8단계: 클래스와 접근 제어자

TypeScript의 클래스는 JavaScript와 비슷하지만, **접근 제어자(Access Modifiers)**를 사용하여 데이터를 더 안전하게 보호할 수 있습니다.

### 1. 접근 제어자
- \`public\` : 어디서든 접근 가능 (기본값)
- \`private\` : 클래스 **내부에서만** 접근 가능 (외부에서 숨김)
- \`protected\` : 클래스 내부와 **상속받은 자식 클래스**에서만 접근 가능

\`\`\`typescript
class Person {
    public name: string;
    private age: number; // 외부에서 함부로 나이를 바꿀 수 없게 숨김

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // 나이를 한 살 먹는 메서드 (내부에서는 private 변수 접근 가능)
    public haveBirthday() {
        this.age += 1;
        console.log(this.name + "의 나이는 이제 " + this.age + "살입니다.");
    }
}

const p1 = new Person("철수", 20);
console.log(p1.name); // "철수" (public이라 접근 가능)
// console.log(p1.age); // ❌ 에러! private 변수는 밖에서 볼 수 없음
p1.haveBirthday(); // ⭕ 메서드를 통해서만 나이를 변경 가능
\`\`\`
`,
        quiz: {
          question: { ko: '`name`(public)과 `age`(private)를 가지는 `Person` 클래스를 만드세요. 생성자도 포함해야 합니다.', en: 'Create a `Person` class with `name` (public) and `age` (private). Include a constructor.' },
          hints: {
            ko: [
              '`class Person { ... }` 형태로 클래스를 선언하세요.',
              '클래스 안에 `public name: string;` 과 `private age: number;` 를 넣으세요.',
              '생성자(`constructor`)를 만들어 값을 초기화하는 것도 잊지 마세요.'
            ],
            en: ['Use `class Person { ... }`', 'Add `public name: string;` and `private age: number;`', 'Include a constructor.']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('classPerson') && c.includes('publicname:string') && c.includes('privateage:number') && c.includes('constructor')) return pass('Person class created');
            return fail('클래스, 접근 제어자, 생성자 문법을 확인하세요.', 'Check syntax.');
          }
        }
      },
      step9: {
        content: `
# 9단계: 제네릭 (Generics)

제네릭은 **"타입을 변수처럼 사용하는 마법"**입니다. 함수나 클래스를 만들 때 타입을 미리 정하지 않고, **사용할 때 타입을 정하도록** 구멍(\`<T>\`)을 뚫어놓는 것입니다.

### 1. 제네릭이 필요한 이유
\`\`\`typescript
// 숫자만 받을 수 있는 함수
function returnNumber(val: number): number { return val; }

// 문자만 받을 수 있는 함수
function returnString(val: string): string { return val; }

// 아무거나 다 받는 함수 (하지만 타입 안전성이 사라짐)
function returnAny(val: any): any { return val; }
\`\`\`

### 2. 제네릭 사용하기
\`<T>\` (Type의 약자)를 사용하여 "어떤 타입이 들어올지 모르겠지만, 들어온 그 타입을 그대로 쓰겠다"고 선언합니다.
\`\`\`typescript
function returnAnything<T>(val: T): T {
    return val;
}

// 사용할 때 꺾쇠 안에 타입을 적어줍니다.
const num = returnAnything<number>(10);      // num은 무조건 number
const str = returnAnything<string>("Hello"); // str은 무조건 string

// 심지어 알아서 추론도 해줍니다!
const bool = returnAnything(true); // <boolean>을 안 적어도 알아챔
\`\`\`
`,
        quiz: {
          question: { ko: '어떤 타입이든 받아서 그대로 반환하는 제네릭 함수 `echo<T>`를 만드세요.', en: 'Create a generic function `echo<T>` that takes any type and returns it.' },
          hints: {
            ko: [
              '함수 이름 뒤에 `<T>`를 붙여 제네릭임을 선언하세요.',
              '매개변수의 타입과 반환 타입을 모두 `T`로 지정하세요.',
              '`function echo<T>(val: T): T { return val; }` 형태로 작성해보세요.'
            ],
            en: ['Use `<T>` after function name.', 'Set parameter and return type to `T`.', '`function echo<T>(val: T): T`']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('functionecho<T>') && c.includes('(val:T):T')) return pass('echo function created');
            return fail('제네릭 함수 문법을 확인하세요.', 'Check syntax.');
          }
        }
      },
      step10: {
        content: `
# 10단계: 고급 타입과 유틸리티

TypeScript에는 타입을 더 자유자재로 다루기 위한 고급 기능들이 있습니다.

### 1. 유니언 타입 (Union Types)
"이것 또는 저것"을 의미하는 \`|\` 기호를 사용합니다.
\`\`\`typescript
// id는 숫자일 수도 있고, 문자열일 수도 있습니다.
let id: number | string;
id = 101;
id = "USER_101";
// id = true; // ❌ 에러! boolean은 허용되지 않음
\`\`\`

### 2. 리터럴 타입 (Literal Types)
특정 **값 자체**를 타입으로 지정할 수 있습니다.
\`\`\`typescript
// size는 무조건 저 세 글자 중 하나여야 합니다.
let size: "small" | "medium" | "large";
size = "medium";
// size = "xlarge"; // ❌ 에러! 허용된 값이 아님
\`\`\`

### 3. 타입 별칭 (Type Alias)
복잡한 타입에 이름을 붙여서 재사용합니다. \`interface\`와 비슷하지만 더 자유롭습니다.
\`\`\`typescript
type Point = {
    x: number;
    y: number;
};

let p1: Point = { x: 10, y: 20 };
\`\`\`
`,
        quiz: {
          question: { ko: '숫자 또는 문자열을 가질 수 있는 유니언 타입 변수 `id`를 선언하세요.', en: 'Declare a union type variable `id` that can hold a number or a string.' },
          hints: {
            ko: [
              '유니언 타입은 `|` 기호를 사용합니다.',
              '`number | string` 형태로 타입을 지정하세요.',
              '`let id: number | string;` 형태로 선언해보세요.'
            ],
            en: ['Use `|` for union types.', '`number | string`', '`let id: number | string;`']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('letid:number|string') || c.includes('letid:string|number')) return pass('id variable declared');
            return fail('유니언 타입 문법을 확인하세요.', 'Check syntax.');
          }
        }
      }
    },
    java: {
      step0: {
        content: `
# 0단계: Java 환경 세팅

Java는 전 세계에서 가장 많이 쓰이는 언어 중 하나로, 안드로이드 앱이나 대형 웹 서버를 만들 때 주로 사용됩니다.

### 1. JDK 설치
Java로 코딩을 하려면 JDK(Java Development Kit)라는 개발 도구 모음이 필요합니다.
1. [Adoptium](https://adoptium.net/) 에 접속하여 최신 LTS 버전의 JDK를 다운로드하고 설치합니다.
2. 설치 시 "Set JAVA_HOME variable" 옵션이 있다면 반드시 체크하세요.

### 2. 설치 확인
터미널을 열고 아래 명령어를 입력합니다.
\`\`\`bash
java -version
javac -version
\`\`\`
버전 정보가 정상적으로 출력되면 성공입니다.
`
      },
      step1: {
        content: `
# 1단계: 자료형과 변수

Java는 **정적 타입 언어**입니다. 변수를 만들 때 **반드시** 어떤 종류의 데이터가 들어갈지(자료형)를 맨 앞에 적어주어야 합니다.

### 1. 기본 자료형 (Primitive Types)
- \`int\` : 정수 (예: 10, -5)
- \`double\` : 실수 (예: 3.14)
- \`boolean\` : 참/거짓 (\`true\`, \`false\`)
- \`char\` : 문자 **단 하나**. 반드시 홑따옴표(\`'\`)를 사용합니다. (예: \`'A'\`)

### 2. 참조 자료형 (Reference Types)
- \`String\` : 문자열. 반드시 쌍따옴표(\`"\`)를 사용하며, **첫 글자 S는 무조건 대문자**여야 합니다.

\`\`\`java
int age = 20;
double height = 175.5;
boolean isStudent = true;
char grade = 'A';
String name = "IceCode"; // S 대문자 주의!

// age = "스무살"; // ❌ 에러! int 상자에 문자열을 넣을 수 없음
\`\`\`
`,
        quiz: {
          question: { ko: '정수형(int) 변수 num에 10을 저장하는 코드를 작성하세요. (세미콜론 필수)', en: 'Store 10 in an int variable named num.' },
          hints: {
            ko: [
              'Java에서는 변수 이름 앞에 자료형을 적습니다.', 
              '`int num` 으로 정수형 변수를 선언하세요.', 
              '`int num = 10;` 을 작성하세요. 끝에 세미콜론(;)을 잊지 마세요!'
            ],
            en: ['Write the data type before the variable name.', 'int num', 'int num = 10;']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('intnum=10;')) return pass('');
            return fail('문법을 확인하세요. (자료형 변수명 = 값;)', 'Check syntax.');
          }
        }
      },
      step2: {
        content: `
# 2단계: 출력과 연산

### 1. 출력하기
Java의 출력 명령어는 파이썬이나 JS에 비해 꽤 깁니다. 대소문자를 정확히 지켜야 합니다.
\`\`\`java
System.out.println("안녕하세요!"); // ln은 줄바꿈(line)을 의미합니다.
System.out.print("안녕");          // ln이 없으면 줄바꿈을 하지 않고 이어서 출력합니다.
\`\`\`
**💡 꿀팁:** VS Code나 IntelliJ 같은 에디터에서 \`sout\` 이라고 치고 Tab 키를 누르면 자동으로 완성됩니다!

### 2. 산술 연산자
\`+\`, \`-\`, \`*\`, \`/\`, \`%\` 를 사용합니다.
**⚠️ 주의할 점: 정수 나눗셈**
Java에서 정수끼리 나누면 결과도 무조건 정수(몫)가 됩니다! 소수점 아래는 버려집니다.
\`\`\`java
System.out.println(10 / 3); // 3 출력 (3.333... 이 아님!)
System.out.println(10.0 / 3); // 3.3333333333333335 출력 (하나라도 실수여야 실수 결과가 나옴)
\`\`\`
`
      },
      step3: {
        content: `
# 3단계: 조건문

JavaScript, C, C++ 등과 구조가 완전히 똑같습니다.

### 1. 비교 연산자
\`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\` 를 사용합니다.
**🚨 [매우 중요] 문자열 비교**
Java에서 문자열(String)이 같은지 비교할 때는 **절대 \`==\`를 쓰면 안 됩니다!** 대신 \`.equals()\` 메서드를 사용해야 합니다.
\`\`\`java
String a = "Hello";
String b = "Hello";

// System.out.println(a == b); // ❌ 작동할 때도 있지만, 버그의 원인이 됩니다.
System.out.println(a.equals(b)); // ⭕ 무조건 이렇게 비교해야 합니다!
\`\`\`

### 2. if / else if / else
\`\`\`java
int score = 85;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else {
    System.out.println("C");
}
\`\`\`
`
      },
      step4: {
        content: `
# 4단계: 반복문

JavaScript와 구조가 완전히 똑같습니다.

### 1. for 문
\`\`\`java
// int i = 0 처럼 반복문 안에서 쓸 변수의 자료형도 명시해야 합니다.
for (int i = 0; i < 3; i++) {
    System.out.println(i);
}
\`\`\`

### 2. while 문
\`\`\`java
int count = 0;
while (count < 3) {
    System.out.println(count);
    count++;
}
\`\`\`
`
      },
      step5: {
        content: `
# 5단계: 메서드 (함수)

Java에서는 함수를 **메서드(Method)**라고 부르며, 반드시 클래스(Class) 내부에 만들어야 합니다.

### 1. 메서드 만들기
반환할 값의 자료형을 메서드 이름 앞에 적어줍니다. 반환값이 없다면 \`void\`를 적습니다.
\`\`\`java
public class Main {
    // 1. 반환값이 있는 메서드 (int 반환)
    public static int add(int a, int b) {
        return a + b;
    }

    // 2. 반환값이 없는 메서드 (void)
    public static void printMsg(String msg) {
        System.out.println(msg);
    }

    public static void main(String[] args) {
        int sum = add(10, 20);
        printMsg("결과는: " + sum);
    }
}
\`\`\`
**💡 참고:** \`public static\`은 지금은 "메서드를 만들 때 붙이는 주문" 정도로 생각하고 넘어가도 괜찮습니다. 객체지향을 배울 때 자세히 알게 됩니다.
`
      },
      step6: {
        content: `
# 6단계: 배열 (Arrays)

Java의 배열은 파이썬이나 JS와 달리 **처음 만들 때 크기를 정해야 하고, 한 번 정한 크기는 바꿀 수 없습니다.** 또한 **같은 자료형**만 넣을 수 있습니다.

### 1. 배열 만들기
\`\`\`java
// 방법 1: 크기만 먼저 정해두기 (5칸짜리 정수 배열)
int[] numbers = new int[5];
numbers[0] = 10;
numbers[1] = 20;

// 방법 2: 만들면서 바로 값 넣기
String[] fruits = {"apple", "banana", "cherry"};
\`\`\`

### 2. 배열 다루기
배열의 길이는 \`.length\` 로 알아냅니다. (괄호가 없습니다)
\`\`\`java
int[] arr = {1, 2, 3};
System.out.println(arr.length); // 3

// arr[3] = 4; // ❌ 에러! (ArrayIndexOutOfBoundsException) 3칸짜리 배열이므로 인덱스는 0, 1, 2까지만 있습니다.
\`\`\`

**💡 참고:** 크기가 자유롭게 변하는 배열이 필요할 때는 \`ArrayList\` 라는 특별한 클래스를 사용합니다.
`
      },
      step7: {
        content: `
# 7단계: 컬렉션 프레임워크 (ArrayList & HashMap)

크기가 고정된 배열의 단점을 해결하기 위해 Java는 여러 가지 유용한 도구(클래스)들을 제공합니다.

### 1. ArrayList (크기가 변하는 배열)
파이썬의 리스트, JS의 배열과 가장 비슷합니다.
\`\`\`java
import java.util.ArrayList; // 사용하려면 먼저 가져와야 합니다.

public class Main {
    public static void main(String[] args) {
        // 제네릭(<>)을 사용하여 어떤 타입이 들어갈지 정해줍니다.
        // 주의: int 대신 Integer, double 대신 Double 등 클래스 이름을 써야 합니다.
        ArrayList<String> list = new ArrayList<>();
        
        list.add("Apple"); // 데이터 추가
        list.add("Banana");
        
        System.out.println(list.get(0)); // "Apple" (데이터 꺼내기)
        System.out.println(list.size()); // 2 (길이 확인)
    }
}
\`\`\`

### 2. HashMap (사전형 데이터)
파이썬의 딕셔너리, JS의 객체와 같습니다. Key와 Value의 쌍으로 저장합니다.
\`\`\`java
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // <Key타입, Value타입>
        HashMap<String, Integer> map = new HashMap<>();
        
        map.put("IceCode", 20); // 데이터 추가
        map.put("Bob", 25);
        
        System.out.println(map.get("IceCode")); // 20 (데이터 꺼내기)
    }
}
\`\`\`
`,
        quiz: {
          question: { ko: '문자열(String)을 담는 `ArrayList`를 만들고, "IceCode"를 추가하세요.', en: 'Create an `ArrayList` of Strings and add "IceCode" to it.' },
          hints: {
            ko: [
              '`ArrayList<String> list = new ArrayList<>();` 로 리스트를 만드세요.',
              '리스트에 값을 추가할 때는 `.add()` 메서드를 사용합니다.',
              '`list.add("IceCode");` 를 작성하세요.'
            ],
            en: ['Use `ArrayList<String> list = new ArrayList<>();`', 'Use `.add()` method.', '`list.add("IceCode");`']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('ArrayList<String>') && c.includes('.add("IceCode")')) return pass('IceCode added to ArrayList');
            return fail('ArrayList 생성 및 추가 문법을 확인하세요.', 'Check syntax.');
          }
        }
      },
      step8: {
        content: `
# 8단계: 클래스와 객체지향 (Classes & OOP)

Java는 **완벽한 객체지향 언어**입니다. 모든 코드는 클래스 안에 있어야 합니다.

### 1. 클래스 만들기
\`\`\`java
class Dog {
    // 1. 필드 (속성, 데이터)
    String name;
    int age;

    // 2. 생성자 (객체가 만들어질 때 실행됨)
    public Dog(String name, int age) {
        this.name = name; // this는 만들어질 객체 자신
        this.age = age;
    }

    // 3. 메서드 (행동, 함수)
    public void bark() {
        System.out.println(this.name + "가 멍멍 짖습니다!");
    }
}
\`\`\`

### 2. 객체 생성 및 사용
\`new\` 키워드를 사용합니다.
\`\`\`java
public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog("바둑이", 3);
        myDog.bark(); // "바둑이가 멍멍 짖습니다!"
    }
}
\`\`\`
`,
        quiz: {
          question: { ko: '`name`(String) 필드와 이를 초기화하는 생성자를 가진 `Person` 클래스를 만드세요.', en: 'Create a `Person` class with a `name` (String) field and a constructor to initialize it.' },
          hints: {
            ko: [
              '`class Person { ... }` 형태로 클래스를 선언하세요.',
              '클래스 안에 `String name;` 필드를 넣으세요.',
              '`public Person(String name) { this.name = name; }` 형태의 생성자를 만드세요.'
            ],
            en: ['Use `class Person { ... }`', 'Add `String name;`', 'Create `public Person(String name) { ... }`']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('classPerson') && c.includes('Stringname;') && c.includes('publicPerson(Stringname)')) return pass('Person class created');
            return fail('클래스, 필드, 생성자 문법을 확인하세요.', 'Check syntax.');
          }
        }
      },
      step9: {
        content: `
# 9단계: 예외 처리 (Try-Catch)

Java는 에러 처리에 매우 엄격합니다. 에러가 날 것 같은 코드는 반드시 \`try-catch\`로 감싸도록 강제하기도 합니다.

### 1. try - catch - finally
\`\`\`java
public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // 0으로 나누기 에러 발생!
            System.out.println(result);
        } catch (ArithmeticException e) {
            // 수학적 에러가 발생했을 때 실행
            System.out.println("0으로 나눌 수 없습니다.");
        } catch (Exception e) {
            // 그 외의 모든 에러
            System.out.println("알 수 없는 에러 발생: " + e.getMessage());
        } finally {
            // 무조건 실행
            System.out.println("작업 종료");
        }
    }
}
\`\`\`
`,
        quiz: {
          question: { ko: '`try` 블록 안에서 `10 / 0`을 계산하고, `catch` 블록에서 `Exception e`를 잡아 "Error"를 출력하세요.', en: 'Calculate `10 / 0` inside a `try` block, and catch `Exception e` to print "Error".' },
          hints: {
            ko: [
              '`try { ... } catch (Exception e) { ... }` 구조를 만드세요.',
              '`try` 블록 안에 `int a = 10 / 0;` 을 넣으세요.',
              '`catch` 블록 안에 `System.out.println("Error");` 를 넣으세요.'
            ],
            en: ['Use `try { ... } catch (Exception e) { ... }`', 'Put `10 / 0` in try block.', 'Print "Error" in catch block.']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('try{') && c.includes('10/0') && c.includes('catch(Exception') && c.includes('System.out.println("Error")')) return pass('Try-catch implemented');
            return fail('try-catch 문법과 출력 내용을 확인하세요.', 'Check syntax.');
          }
        }
      },
      step10: {
        content: `
# 10단계: 상속과 인터페이스 (Inheritance & Interfaces)

객체지향의 꽃, 상속과 인터페이스입니다.

### 1. 상속 (Inheritance)
기존 클래스의 기능을 물려받아 새로운 클래스를 만듭니다. \`extends\` 키워드를 사용합니다.
\`\`\`java
// 부모 클래스
class Animal {
    public void eat() {
        System.out.println("먹습니다.");
    }
}

// 자식 클래스 (Animal의 기능을 모두 물려받음)
class Cat extends Animal {
    public void meow() {
        System.out.println("야옹~");
    }
}

public class Main {
    public static void main(String[] args) {
        Cat myCat = new Cat();
        myCat.eat();  // 부모에게 물려받은 메서드
        myCat.meow(); // 내 메서드
    }
}
\`\`\`

### 2. 인터페이스 (Interface)
"이 클래스는 반드시 이런 기능(메서드)들을 구현해야 해!" 라고 강제하는 **규칙(설계도)**입니다. \`implements\` 키워드를 사용합니다.
\`\`\`java
interface Flyable {
    void fly(); // 내용(중괄호)이 없는 껍데기 메서드
}

class Bird implements Flyable {
    // 인터페이스를 구현한다고 했으므로, 무조건 fly 메서드를 완성해야 함!
    @Override
    public void fly() {
        System.out.println("새가 날아갑니다.");
    }
}
\`\`\`
`,
        quiz: {
          question: { ko: '`Animal` 클래스를 상속(`extends`)받는 `Dog` 클래스를 만드세요.', en: 'Create a `Dog` class that inherits (`extends`) from `Animal` class.' },
          hints: {
            ko: [
              '클래스 선언 시 `extends` 키워드를 사용합니다.',
              '`class Dog extends Animal` 형태로 작성하세요.',
              '클래스 내부는 비워두어도 됩니다. `class Dog extends Animal {}`'
            ],
            en: ['Use `extends` keyword.', '`class Dog extends Animal`', '`class Dog extends Animal {}`']
          },
          validate: (code) => {
            const c = code.replace(/\s+/g, '');
            if (c.includes('classDogextendsAnimal')) return pass('Dog class inherits Animal');
            return fail('상속 문법(`extends`)을 확인하세요.', 'Check syntax.');
          }
        }
      }
    }
  },
  en: {
    python: {
      step0: { content: `# Step 0: Setup\nInstall Python from python.org. Check version with \`python --version\`.` },
      step1: {
        content: `# Step 1: Output & Variables\nUse \`print()\` to output data. Variables store data using \`=\`.\n\`\`\`python\nname = "Alice"\nprint(name)\n\`\`\``,
        quiz: {
          question: { ko: '', en: 'Store 100 in variable score and print it.' },
          hints: { ko: [], en: ['Use `name = value`', 'score = 100', 'print(score)'] },
          validate: (code) => code.replace(/\s+/g, '').includes('print(score)') ? pass('100') : fail('', 'Check syntax.')
        }
      },
      step2: { content: `# Step 2: Types & Math\nTypes: String, Integer, Float, Boolean.\nMath: +, -, *, /, %, //` },
      step3: { content: `# Step 3: Conditionals\nUse if, elif, else with operators ==, !=, >, <, >=, <=.` },
      step4: { content: `# Step 4: Loops\nUse for and while loops.` },
      step5: { content: `# Step 5: Functions\nUse def keyword.` },
      step6: { content: `# Step 6: Lists\nUse [] for lists.` },
      step7: { content: `# Step 7: Dictionaries\nUse {} for dictionaries.` },
      step8: { content: `# Step 8: Classes & OOP\nUse class keyword.` },
      step9: { content: `# Step 9: Error Handling\nUse try-except.` },
      step10: { content: `# Step 10: Modules\nUse import.` }
    },
    javascript: {
      step0: { content: `# Step 0: Setup\nInstall Node.js.` },
      step1: {
        content: `# Step 1: Output & Variables\nUse \`console.log()\`. Variables use \`let\` or \`const\`.\n\`\`\`javascript\nlet name = "Alice";\nconsole.log(name);\n\`\`\``,
        quiz: {
          question: { ko: '', en: 'Use let to store 10 in x, and console.log(x).' },
          hints: { ko: [], en: ['let x = 10;', 'console.log(x);'] },
          validate: (code) => code.replace(/\s+/g, '').includes('console.log(x)') ? pass('10') : fail('', 'Check syntax.')
        }
      },
      step2: { content: `# Step 2: Types & Math\nTypes: String, Number, Boolean.\nMath: +, -, *, /, %` },
      step3: { content: `# Step 3: Conditionals\nUse if, else if, else.` },
      step4: { content: `# Step 4: Loops\nUse for and while loops.` },
      step5: { content: `# Step 5: Functions\nUse function keyword or arrow functions.` },
      step6: { content: `# Step 6: Arrays\nUse [] for arrays.` },
      step7: { content: `# Step 7: Objects\nUse {} for objects.` },
      step8: { content: `# Step 8: Classes & OOP\nUse class keyword.` },
      step9: { content: `# Step 9: Error Handling\nUse try-catch.` },
      step10: { content: `# Step 10: Async/Await\nUse async and await.` }
    },
    typescript: {
      step0: { content: `# Step 0: Setup\nInstall TypeScript.` },
      step1: { content: `# Step 1: Type Annotations\nUse \`:\` to specify types.` },
      step2: { content: `# Step 2: Types & Math\nSame as JS.` },
      step3: { content: `# Step 3: Conditionals\nSame as JS.` },
      step4: { content: `# Step 4: Loops\nSame as JS.` },
      step5: { content: `# Step 5: Functions\nSame as JS with types.` },
      step6: { content: `# Step 6: Arrays\nSame as JS with types.` },
      step7: { content: `# Step 7: Interfaces\nUse interface keyword.` },
      step8: { content: `# Step 8: Classes & Modifiers\nUse public, private, protected.` },
      step9: { content: `# Step 9: Generics\nUse <T>.` },
      step10: { content: `# Step 10: Advanced Types\nUnion types, literal types.` }
    },
    java: {
      step0: { content: `# Step 0: Setup\nInstall JDK.` },
      step1: { content: `# Step 1: Variables\nMust specify type.` },
      step2: { content: `# Step 2: Output\nUse System.out.println().` },
      step3: { content: `# Step 3: Conditionals\nUse if, else if, else.` },
      step4: { content: `# Step 4: Loops\nUse for and while loops.` },
      step5: { content: `# Step 5: Methods\nDefine inside classes.` },
      step6: { content: `# Step 6: Arrays\nFixed size arrays.` },
      step7: { content: `# Step 7: Collections\nArrayList and HashMap.` },
      step8: { content: `# Step 8: Classes & OOP\nClasses and Objects.` },
      step9: { content: `# Step 9: Exceptions\nTry-catch-finally.` },
      step10: { content: `# Step 10: Inheritance & Interfaces\nextends and implements.` }
    }
  }
};

const advancedSteps: TopicId[] = ['step11', 'step12', 'step13', 'step14', 'step15', 'step16', 'step17', 'step18', 'step19', 'step20'];
const langs: ProgLang[] = ['python', 'javascript', 'typescript', 'java'];
const siteLangs: SiteLang[] = ['ko', 'en'];

const advancedContentData = {
  "step11": {
    "title": {
      "ko": "11단계: 고급 자료구조",
      "en": "Step 11: Advanced Data Structures"
    },
    "desc": {
      "ko": "스택(Stack), 큐(Queue), 트리(Tree), 그래프(Graph) 등 복잡한 데이터를 효율적으로 관리하는 방법을 배웁니다. 실무에서 대용량 데이터를 다룰 때 필수적인 개념입니다.",
      "en": "Learn how to efficiently manage complex data using Stacks, Queues, Trees, and Graphs. Essential concepts for handling large-scale data in practice."
    },
    "code": {
      "python": "class Stack:\n    def __init__(self):\n        self.items = []\n    def push(self, item):\n        self.items.append(item)\n    def pop(self):\n        return self.items.pop()",
      "javascript": "class Stack {\n  constructor() {\n    this.items = [];\n  }\n  push(item) {\n    this.items.push(item);\n  }\n  pop() {\n    return this.items.pop();\n  }\n}",
      "typescript": "class Stack<T> {\n  private items: T[] = [];\n  push(item: T) {\n    this.items.push(item);\n  }\n  pop(): T | undefined {\n    return this.items.pop();\n  }\n}",
      "java": "import java.util.Stack;\n\npublic class Main {\n    public static void main(String[] args) {\n        Stack<Integer> stack = new Stack<>();\n        stack.push(1);\n        System.out.println(stack.pop());\n    }\n}"
    }
  },
  "step12": {
    "title": {
      "ko": "12단계: 알고리즘 기초",
      "en": "Step 12: Basic Algorithms"
    },
    "desc": {
      "ko": "정렬(Sorting), 탐색(Searching), 재귀(Recursion) 등 문제를 해결하는 절차와 방법을 학습합니다. 시간 복잡도(Big-O) 개념을 통해 효율적인 코드를 작성하는 법을 익힙니다.",
      "en": "Learn problem-solving procedures like Sorting, Searching, and Recursion. Master writing efficient code through Time Complexity (Big-O) concepts."
    },
    "code": {
      "python": "def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: left = mid + 1\n        else: right = mid - 1\n    return -1",
      "javascript": "function binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    let mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",
      "typescript": "function binarySearch(arr: number[], target: number): number {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    let mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",
      "java": "public int binarySearch(int[] arr, int target) {\n    int left = 0, right = arr.length - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) return mid;\n        if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}"
    }
  },
  "step13": {
    "title": {
      "ko": "13단계: 디자인 패턴",
      "en": "Step 13: Design Patterns"
    },
    "desc": {
      "ko": "싱글톤(Singleton), 팩토리(Factory), 옵저버(Observer) 등 자주 발생하는 소프트웨어 설계 문제에 대한 모범 답안을 배웁니다. 유지보수가 쉬운 구조를 설계할 수 있습니다.",
      "en": "Learn best practices for common software design problems like Singleton, Factory, and Observer patterns. Design easily maintainable structures."
    },
    "code": {
      "python": "class Singleton:\n    _instance = None\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance",
      "javascript": "class Singleton {\n  constructor() {\n    if (Singleton.instance) return Singleton.instance;\n    Singleton.instance = this;\n  }\n}",
      "typescript": "class Singleton {\n  private static instance: Singleton;\n  private constructor() {}\n  static getInstance() {\n    if (!Singleton.instance) Singleton.instance = new Singleton();\n    return Singleton.instance;\n  }\n}",
      "java": "public class Singleton {\n    private static Singleton instance;\n    private Singleton() {}\n    public static Singleton getInstance() {\n        if (instance == null) instance = new Singleton();\n        return instance;\n    }\n}"
    }
  },
  "step14": {
    "title": {
      "ko": "14단계: 동시성과 멀티스레딩",
      "en": "Step 14: Concurrency & Multithreading"
    },
    "desc": {
      "ko": "여러 작업을 동시에 처리하는 방법을 배웁니다. 스레드(Thread), 프로세스(Process), 비동기(Async) 프로그래밍의 차이점과 데드락(Deadlock) 방지 기법을 학습합니다.",
      "en": "Learn how to process multiple tasks simultaneously. Understand Threads, Processes, Async programming, and Deadlock prevention techniques."
    },
    "code": {
      "python": "import threading\n\ndef worker():\n    print(\"Worker thread running\")\n\nt = threading.Thread(target=worker)\nt.start()\nt.join()",
      "javascript": "// JS uses Event Loop for concurrency\nsetTimeout(() => console.log(\"Async task\"), 1000);\nconsole.log(\"Main thread\");",
      "typescript": "// TS uses Promises/Async-Await\nasync function fetchData() {\n  const res = await fetch('api');\n  console.log(await res.json());\n}",
      "java": "public class Main extends Thread {\n    public void run() {\n        System.out.println(\"Thread running\");\n    }\n    public static void main(String[] args) {\n        Main thread = new Main();\n        thread.start();\n    }\n}"
    }
  },
  "step15": {
    "title": {
      "ko": "15단계: 네트워크와 API",
      "en": "Step 15: Network & API"
    },
    "desc": {
      "ko": "HTTP 프로토콜, RESTful API 설계, JSON 데이터 처리 등 클라이언트와 서버가 통신하는 방식을 배웁니다. 외부 API를 연동하는 실습을 진행합니다.",
      "en": "Learn client-server communication including HTTP protocols, RESTful API design, and JSON data handling. Practice integrating external APIs."
    },
    "code": {
      "python": "import requests\n\nresponse = requests.get('https://api.github.com')\nprint(response.json())",
      "javascript": "fetch('https://api.github.com')\n  .then(res => res.json())\n  .then(data => console.log(data));",
      "typescript": "async function getGithub() {\n  const res = await fetch('https://api.github.com');\n  const data: any = await res.json();\n  console.log(data);\n}",
      "java": "import java.net.http.*;\nimport java.net.URI;\n\nHttpClient client = HttpClient.newHttpClient();\nHttpRequest request = HttpRequest.newBuilder().uri(URI.create(\"https://api.github.com\")).build();\nclient.sendAsync(request, HttpResponse.BodyHandlers.ofString()).thenApply(HttpResponse::body).thenAccept(System.out::println);"
    }
  },
  "step16": {
    "title": {
      "ko": "16단계: 데이터베이스 연동",
      "en": "Step 16: Database Integration"
    },
    "desc": {
      "ko": "SQL(관계형)과 NoSQL(비관계형) 데이터베이스의 차이를 이해하고, 코드에서 데이터베이스에 연결하여 CRUD(생성, 읽기, 수정, 삭제) 작업을 수행하는 방법을 배웁니다.",
      "en": "Understand SQL vs NoSQL differences, and learn how to connect to databases from code to perform CRUD operations."
    },
    "code": {
      "python": "import sqlite3\n\nconn = sqlite3.connect('test.db')\nc = conn.cursor()\nc.execute(\"CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)\")\nconn.commit()",
      "javascript": "// Using MongoDB driver\nconst { MongoClient } = require('mongodb');\nconst client = new MongoClient('mongodb://localhost:27017');\nawait client.connect();",
      "typescript": "import { PrismaClient } from '@prisma/client';\nconst prisma = new PrismaClient();\nasync function main() {\n  const user = await prisma.user.create({ data: { name: 'Alice' } });\n}",
      "java": "import java.sql.*;\n\nConnection conn = DriverManager.getConnection(\"jdbc:mysql://localhost/db\", \"user\", \"pass\");\nStatement stmt = conn.createStatement();\nResultSet rs = stmt.executeQuery(\"SELECT * FROM users\");"
    }
  },
  "step17": {
    "title": {
      "ko": "17단계: 테스트와 디버깅",
      "en": "Step 17: Testing & Debugging"
    },
    "desc": {
      "ko": "단위 테스트(Unit Test), 통합 테스트(Integration Test) 작성법과 디버거 도구 활용법을 배웁니다. 버그 없는 견고한 소프트웨어를 만드는 핵심 과정입니다.",
      "en": "Learn how to write Unit and Integration tests, and use debugging tools. A core process for building robust, bug-free software."
    },
    "code": {
      "python": "import unittest\n\ndef add(a, b): return a + b\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(1, 2), 3)",
      "javascript": "// Using Jest\ntest('adds 1 + 2 to equal 3', () => {\n  expect(add(1, 2)).toBe(3);\n});",
      "typescript": "import { expect, test } from 'vitest';\n\ntest('math works', () => {\n  expect(1 + 1).toBe(2);\n});",
      "java": "import org.junit.jupiter.api.Test;\nimport static org.junit.jupiter.api.Assertions.assertEquals;\n\nclass MathTest {\n    @Test\n    void addition() {\n        assertEquals(2, 1 + 1);\n    }\n}"
    }
  },
  "step18": {
    "title": {
      "ko": "18단계: 프레임워크 기초",
      "en": "Step 18: Framework Basics"
    },
    "desc": {
      "ko": "각 언어의 대표적인 프레임워크(Django, React, Spring 등)의 핵심 구조와 동작 원리를 배웁니다. 맨바닥에서 시작하지 않고 빠르게 서비스를 구축하는 법을 익힙니다.",
      "en": "Learn the core structure and principles of major frameworks (Django, React, Spring, etc.). Master building services quickly without starting from scratch."
    },
    "code": {
      "python": "from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef hello():\n    return \"Hello World!\"",
      "javascript": "import express from 'express';\nconst app = express();\n\napp.get('/', (req, res) => res.send('Hello World!'));\napp.listen(3000);",
      "typescript": "import { Controller, Get } from '@nestjs/common';\n\n@Controller()\nexport class AppController {\n  @Get()\n  getHello(): string {\n    return 'Hello World!';\n  }\n}",
      "java": "import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class App {\n    public static void main(String[] args) {\n        SpringApplication.run(App.class, args);\n    }\n}"
    }
  },
  "step19": {
    "title": {
      "ko": "19단계: 배포와 CI/CD",
      "en": "Step 19: Deployment & CI/CD"
    },
    "desc": {
      "ko": "작성한 코드를 실제 서버(AWS, Vercel 등)에 배포하고, 코드가 수정될 때마다 자동으로 테스트와 배포가 이루어지는 CI/CD 파이프라인을 구축합니다.",
      "en": "Deploy code to real servers (AWS, Vercel, etc.) and build CI/CD pipelines for automated testing and deployment upon code changes."
    },
    "code": {
      "python": "# Dockerfile example\nFROM python:3.9\nCOPY . /app\nWORKDIR /app\nRUN pip install -r requirements.txt\nCMD [\"python\", \"app.py\"]",
      "javascript": "# GitHub Actions example\nname: Node.js CI\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - run: npm install\n    - run: npm test",
      "typescript": "// Vercel deployment config\n{\n  \"builds\": [{ \"src\": \"api/index.ts\", \"use\": \"@vercel/node\" }],\n  \"routes\": [{ \"src\": \"/(.*)\", \"dest\": \"/api/index.ts\" }]\n}",
      "java": "# Maven build command\nmvn clean package\njava -jar target/app-1.0.0.jar"
    }
  },
  "step20": {
    "title": {
      "ko": "20단계: 마스터 프로젝트",
      "en": "Step 20: Master Project"
    },
    "desc": {
      "ko": "지금까지 배운 모든 지식을 총동원하여 실제 서비스 가능한 수준의 풀스택 애플리케이션을 기획, 설계, 구현, 배포하는 최종 마스터 프로젝트입니다.",
      "en": "The final master project where you utilize all learned knowledge to plan, design, implement, and deploy a production-ready full-stack application."
    },
    "code": {
      "python": "# Congratulations on reaching the Master Project!\n# Build a full-stack web application with Django/FastAPI.",
      "javascript": "// Congratulations on reaching the Master Project!\n// Build a full-stack web application with React and Node.js.",
      "typescript": "// Congratulations on reaching the Master Project!\n// Build a full-stack web application with Next.js and Prisma.",
      "java": "// Congratulations on reaching the Master Project!\n// Build a full-stack web application with Spring Boot and React."
    }
  }
};

const newLangs: ProgLang[] = ['c', 'cpp', 'csharp'];
const allSteps: TopicId[] = ['step0', 'step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8', 'step9', 'step10', 'step11', 'step12', 'step13', 'step14', 'step15', 'step16', 'step17', 'step18', 'step19', 'step20'];

const newLangsData = {
  "c": {
    "step0": {
      "title": { "ko": "0단계: C 환경 세팅", "en": "Step 0: C Setup" },
      "fullContent": {
        "ko": `
# 0단계: C 언어 환경 세팅

C 언어는 '컴파일 언어'입니다. 우리가 쓴 글자를 컴퓨터가 이해할 수 있는 0과 1로 바꿔주는 **컴파일러(Compiler)**가 반드시 필요합니다.

### 1. 컴파일러(MinGW-w64) 설치하기
Windows 사용자라면 가장 대중적인 **MinGW**를 설치합니다.
1. [winlibs.com](https://winlibs.com/) 또는 [MSYS2](https://www.msys2.org/)를 통해 GCC 컴파일러를 다운로드합니다.
2. 압축을 풀고 \`bin\` 폴더의 경로를 복사합니다. (예: \`C:\\mingw64\\bin\`)
3. **시스템 환경 변수 편집** -> \`Path\` 변수에 해당 경로를 추가합니다. (이걸 안 하면 터미널에서 \`gcc\` 명령어를 쓸 수 없습니다!)

### 2. VS Code 설정
1. VS Code의 Extensions 아이콘을 누르고 \`C/C++\` (Microsoft 제작)를 설치합니다.
2. 추가로 \`Code Runner\`를 설치하면 오른쪽 상단 재생 버튼으로 편하게 실행할 수 있습니다.

### 3. 확인하기
터미널에 \`gcc --version\`을 입력했을 때 버전 정보가 나오면 성공입니다!
`,
        "en": `
# Step 0: C Environment Setup

C is a compiled language. You need a **Compiler** to translate your code into machine language (0s and 1s).

### 1. Install Compiler (MinGW-w64)
For Windows users, MinGW is the most common choice.
1. Download GCC via [winlibs.com](https://winlibs.com/) or [MSYS2](https://www.msys2.org/).
2. Extract and copy the path to the \`bin\` folder (e.g., \`C:\\mingw64\\bin\`).
3. Add this path to your **System Environment Variables (Path)**.

### 2. VS Code Setup
1. Install the \`C/C++\` extension by Microsoft.
2. Install \`Code Runner\` for a convenient "Run" button.

### 3. Verification
Type \`gcc --version\` in your terminal. If you see version info, you're ready!
`
      },
      "code": "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, C!\\n\");\n    return 0;\n}",
      "quiz": {
        "question": { "ko": "표준 입출력 헤더인 <stdio.h>를 포함하고, 'Hello'를 출력하는 main 함수를 작성하세요.", "en": "Include <stdio.h> and write a main function that prints 'Hello'." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('#include<stdio.h>') && c.includes('printf("Hello")') && c.includes('main')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Hello' };
          return { passed: false, message: { ko: '#include <stdio.h>와 printf("Hello")가 포함되어야 합니다.', en: 'Must include <stdio.h> and printf("Hello").' }, output: 'Error' };
        }
      }
    },
    "step1": {
      "title": { "ko": "1단계: 출력과 변수", "en": "Step 1: Output & Variables" },
      "fullContent": {
        "ko": `
# 1단계: 출력과 변수

C 언어는 데이터의 종류(자료형)를 아주 명확하게 따지는 언어입니다.

### 1. 출력 (printf)
\`printf\` 함수를 사용하여 화면에 내용을 출력합니다.
- 텍스트는 \`\" \"\`로 감쌉니다.
- 줄을 바꾸려면 \`\\n\`을 사용합니다.

### 2. 변수 선언
C에서는 변수를 만들기 전에 **어떤 종류의 데이터**를 담을지 먼저 알려줘야 합니다.
- \`int\`: 정수 (1, 10, -5)
- \`float\`: 실수 (3.14, 0.5)
- \`char\`: 문자 한 개 ('A', 'b') - 작은따옴표 사용

\`\`\`c
int age = 20;
printf(\"나이: %d\", age); // %d는 정수 자리를 비워두는 예약어입니다.
\`\`\`
`,
        "en": `
# Step 1: Output & Variables

C is a statically typed language, meaning you must declare the type of data a variable will hold.

### 1. Output (printf)
Use \`printf\` to display content.
- Wrap text in \`\" \"\`.
- Use \`\\n\` for a new line.

### 2. Variable Declaration
- \`int\`: Integers (1, 10)
- \`float\`: Decimals (3.14)
- \`char\`: Single character ('A') - Use single quotes.

\`\`\`c
int age = 20;
printf(\"Age: %d\", age); // %d is a format specifier for integers.
\`\`\`
`
      },
      "code": "int age = 25;\nfloat height = 175.5;\nchar grade = 'A';\nprintf(\"Age: %d, Grade: %c\", age, grade);",
      "quiz": {
        "question": { "ko": "정수형 변수 'score'를 만들고 100을 저장한 뒤, printf를 사용하여 '%d' 형식으로 출력하세요.", "en": "Create an int variable 'score', store 100, and print it using '%d'." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('intscore=100') && c.includes('printf("%d",score)')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: '100' };
          return { passed: false, message: { ko: 'int score = 100; 과 printf("%d", score); 형식을 확인하세요.', en: 'Check int score = 100; and printf("%d", score);' }, output: 'Error' };
        }
      }
    },
    "step2": {
      "title": { "ko": "2단계: 입력과 연산", "en": "Step 2: Input & Math" },
      "fullContent": {
        "ko": `
# 2단계: 입력과 연산

### 1. 입력 (scanf)
사용자로부터 값을 입력받을 때는 \`scanf\`를 사용합니다.
- \`scanf(\"%d\", &num);\`
- 여기서 \`&\`는 변수의 **주소**를 의미합니다. (C 언어에서 매우 중요한 개념입니다!)

### 2. 산술 연산
\`+\`, \`-\`, \`*\`, \`/\`, \`%\` (나머지) 연산자를 사용합니다.
`,
        "en": `
# Step 2: Input & Math

### 1. Input (scanf)
Use \`scanf\` to get user input.
- \`scanf(\"%d\", &num);\`
- The \`&\` symbol represents the **address** of the variable.

### 2. Arithmetic Operators
Use \`+\`, \`-\`, \`*\`, \`/\`, and \`%\` (remainder).
`
      },
      "code": "int a, b;\nscanf(\"%d %d\", &a, &b);\nprintf(\"Sum: %d\", a + b);",
      "quiz": {
        "question": { "ko": "변수 a에 10, b에 3을 넣고 a를 b로 나눈 나머지(%)를 출력하세요.", "en": "Store 10 in a, 3 in b. Print the remainder (%) of a divided by b." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('a=10') && c.includes('b=3') && c.includes('%')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: '1' };
          return { passed: false, message: { ko: '% 연산자를 사용하여 나머지를 구하세요.', en: 'Use the % operator for remainder.' }, output: 'Error' };
        }
      }
    },
    "step3": {
      "title": { "ko": "3단계: 연산자", "en": "Step 3: Operators" },
      "fullContent": {
        "ko": `
# 3단계: 연산자

C 언어에서 데이터를 계산하고 비교할 때 사용하는 다양한 연산자들을 배웁니다.

### 1. 산술 연산자
- \`+\`, \`-\`, \`*\`, \`/\`: 사칙연산
- \`%\`: 나머지 연산 (정수끼리만 가능)

### 2. 증감 연산자
- \`++\`, \`--\`: 값을 1 증가시키거나 감소시킵니다.

### 3. 관계 및 논리 연산자
- \`==\`, \`!=\`, \`>\`, \`<\`: 비교 결과로 1(참) 또는 0(거짓)을 반환합니다.
- \`&&\` (AND), \`||\` (OR), \`!\` (NOT): 논리 연산
`,
        "en": `
# Step 3: Operators

Learn various operators used to calculate and compare data in C.

### 1. Arithmetic Operators
- \`+\`, \`-\`, \`*\`, \`/\`: Basic math
- \`%\`: Remainder (integers only)

### 2. Increment/Decrement
- \`++\`, \`--\`: Increase or decrease value by 1.

### 3. Relational & Logical
- \`==\`, \`!=\`, \`>\`, \`<\`: Returns 1 (true) or 0 (false).
- \`&&\` (AND), \`||\` (OR), \`!\` (NOT): Logical operations.
`
      },
      "code": "int a = 10, b = 3;\nprintf(\"Sum: %d\\n\", a + b);\nprintf(\"Remainder: %d\\n\", a % b);\nprintf(\"Is Equal: %d\\n\", a == b);",
      "quiz": {
        "question": { "ko": "변수 x를 1 증가시키는 증감 연산자를 사용하고, x가 10과 같은지 비교하는 조건식을 작성하세요.", "en": "Use an increment operator on x, and write an expression to check if x equals 10." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if ((c.includes('x++') || c.includes('++x')) && c.includes('x==10')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Success' };
          return { passed: false, message: { ko: '++ 연산자와 == 연산자를 사용하세요.', en: 'Use ++ and == operators.' }, output: 'Error' };
        }
      }
    },
    "step4": {
      "title": { "ko": "4단계: 조건문", "en": "Step 4: Conditionals" },
      "fullContent": {
        "ko": `
# 4단계: 조건문

프로그램의 흐름을 조건에 따라 분기하는 방법을 배웁니다.

### 1. if - else
가장 기본적인 조건문입니다.
\`\`\`c
if (score >= 90) {
    printf("A grade");
} else {
    printf("Not A");
}
\`\`\`

### 2. switch - case
하나의 변수 값에 따라 여러 경우를 나눌 때 효율적입니다.
\`\`\`c
switch (choice) {
    case 1: printf("One"); break;
    case 2: printf("Two"); break;
    default: printf("Other");
}
\`\`\`
`,
        "en": `
# Step 4: Conditionals

Learn how to branch program flow based on conditions.

### 1. if - else
The most basic conditional statement.

### 2. switch - case
Efficient for branching based on a single variable's value.
`
      },
      "code": "int score = 85;\nif (score >= 90) {\n    printf(\"Excellent\\n\");\n} else if (score >= 80) {\n    printf(\"Good\\n\");\n} else {\n    printf(\"Keep trying\\n\");\n}",
      "quiz": {
        "question": { "ko": "변수 n이 짝수인지 홀수인지 판별하여 짝수면 'Even'을 출력하는 if문을 작성하세요.", "en": "Write an if statement that prints 'Even' if variable n is even." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('if(n%2==0)') && c.includes('printf("Even")')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Even' };
          return { passed: false, message: { ko: 'if (n % 2 == 0) 조건을 사용하세요.', en: 'Use if (n % 2 == 0) condition.' }, output: 'Error' };
        }
      }
    },
    "step5": {
      "title": { "ko": "5단계: 반복문", "en": "Step 5: Loops" },
      "fullContent": {
        "ko": `
# 5단계: 반복문

반복적인 작업을 효율적으로 처리하는 방법을 배웁니다.

### 1. for 문
반복 횟수가 명확할 때 주로 사용합니다.
\`\`\`c
for (int i = 0; i < 10; i++) {
    printf("%d ", i);
}
\`\`\`

### 2. while 문
조건이 참인 동안 계속 반복합니다.
\`\`\`c
int i = 0;
while (i < 10) {
    printf("%d ", i);
    i++;
}
\`\`\`
`,
        "en": `
# Step 5: Loops

Learn how to handle repetitive tasks efficiently.

### 1. for loop
Used when the number of iterations is clear.

### 2. while loop
Repeats as long as the condition is true.
`
      },
      "code": "for (int i = 1; i <= 5; i++) {\n    printf(\"%d \", i);\n}\n\nint j = 1;\nwhile (j <= 5) {\n    printf(\"%d \", j);\n    j++;\n}",
      "quiz": {
        "question": { "ko": "for문을 사용하여 1부터 10까지 출력하는 코드를 작성하세요.", "en": "Write a for loop that prints numbers from 1 to 10." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('for(') && c.includes('i<=10') && c.includes('printf')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: '1 2 3 4 5 6 7 8 9 10' };
          return { passed: false, message: { ko: 'for (int i = 1; i <= 10; i++) 형식을 확인하세요.', en: 'Check for (int i = 1; i <= 10; i++) format.' }, output: 'Error' };
        }
      }
    },
    "step6": {
      "title": { "ko": "6단계: 함수", "en": "Step 6: Functions" },
      "fullContent": {
        "ko": `
# 6단계: 함수

코드의 재사용성을 높이기 위해 특정 기능을 묶어 이름을 붙인 것입니다.

### 1. 함수 정의
\`반환형 함수이름(매개변수) { ... }\` 형태로 만듭니다.
\`\`\`c
int add(int a, int b) {
    return a + b;
}
\`\`\`

### 2. 함수 호출
정의된 함수를 이름을 불러 실행합니다.
\`int result = add(10, 20);\`
`,
        "en": `
# Step 6: Functions

Group code into reusable blocks with names.

### 1. Definition
\`return_type name(parameters) { ... }\`

### 2. Calling
Execute the function by its name.
`
      },
      "code": "int square(int n) {\n    return n * n;\n}\n\nint main() {\n    printf(\"%d\", square(5));\n    return 0;\n}",
      "quiz": {
        "question": { "ko": "두 정수를 더해 반환하는 'sum' 함수를 정의하세요.", "en": "Define a 'sum' function that adds two integers and returns the result." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('intsum(inta,intb)') && c.includes('returna+b')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Success' };
          return { passed: false, message: { ko: 'int sum(int a, int b) { return a + b; } 형식을 확인하세요.', en: 'Check int sum(int a, int b) { return a + b; } format.' }, output: 'Error' };
        }
      }
    },
    "step7": {
      "title": { "ko": "7단계: 배열", "en": "Step 7: Arrays" },
      "fullContent": {
        "ko": `
# 7단계: 배열

같은 자료형의 변수 여러 개를 하나의 이름으로 묶어 관리하는 것입니다.

### 1. 배열 선언과 초기화
\`자료형 이름[크기] = { 초기값 };\`
\`\`\`c
int arr[5] = {1, 2, 3, 4, 5};
\`\`\`

### 2. 인덱스
배열의 요소에 접근할 때는 0부터 시작하는 인덱스를 사용합니다.
\`printf("%d", arr[0]); // 첫 번째 요소 출력\`
`,
        "en": `
# Step 7: Arrays

Manage multiple variables of the same type under one name.

### 1. Declaration & Initialization
\`type name[size] = { values };\`

### 2. Indexing
Access elements using 0-based indices.
`
      },
      "code": "int scores[3] = {100, 90, 80};\nfor (int i = 0; i < 3; i++) {\n    printf(\"%d \", scores[i]);\n}",
      "quiz": {
        "question": { "ko": "크기가 5인 정수 배열 'arr'을 선언하고 세 번째 요소에 10을 대입하세요.", "en": "Declare an int array 'arr' of size 5 and assign 10 to the third element." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('intarr[5]') && c.includes('arr[2]=10')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: '10' };
          return { passed: false, message: { ko: 'int arr[5]; 와 arr[2] = 10; 을 사용하세요.', en: 'Use int arr[5]; and arr[2] = 10;.' }, output: 'Error' };
        }
      }
    },
    "step8": {
      "title": { "ko": "8단계: 포인터 기초", "en": "Step 8: Pointer Basics" },
      "fullContent": {
        "ko": `
# 8단계: 포인터 기초

포인터는 C 언어의 꽃이자 가장 어려운 산입니다. 메모리의 **주소**를 직접 다루는 변수입니다.

### 1. 주소 연산자 (&)
변수 앞에 \`&\`를 붙이면 그 변수가 메모리 어디에 저장되어 있는지 주소를 알려줍니다.

### 2. 포인터 변수 (*)
주소를 저장하는 변수입니다. \`자료형 *이름;\` 형태로 선언합니다.

### 3. 역참조 연산자 (*)
포인터가 가리키는 주소에 가서 **실제 값**을 가져옵니다.

\`\`\`c
int a = 10;
int *p = &a; // p는 a의 주소를 가짐
printf("%d", *p); // p가 가리키는 곳의 값(10) 출력
\`\`\`
`,
        "en": `
# Step 8: Pointer Basics

Pointers are the core and often the most challenging part of C. They are variables that store memory **addresses**.

### 1. Address-of Operator (&)
Returns the memory address of a variable.

### 2. Pointer Variable (*)
A variable that stores an address. Declared as \`type *name;\`.

### 3. Dereference Operator (*)
Accesses the **actual value** stored at the address the pointer is holding.
`
      },
      "code": "int num = 10;\nint *ptr = &num;\nprintf(\"Value: %d\\n\", *ptr);\nprintf(\"Address: %p\\n\", ptr);",
      "quiz": {
        "question": { "ko": "정수형 포인터 'p'를 선언하고 변수 'x'의 주소를 대입하는 코드를 작성하세요.", "en": "Declare an integer pointer 'p' and assign the address of variable 'x' to it." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('int*p=&x')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Success' };
          return { passed: false, message: { ko: 'int *p = &x; 형식을 확인하세요.', en: 'Check int *p = &x; format.' }, output: 'Error' };
        }
      }
    },
    "step9": {
      "title": { "ko": "9단계: 문자열", "en": "Step 9: Strings" },
      "fullContent": {
        "ko": `
# 9단계: 문자열

C 언어에는 별도의 'string' 자료형이 없습니다. 대신 **문자(char)의 배열**을 사용합니다.

### 1. 문자열 선언
\`char str[] = "Hello";\`
마지막에는 항상 문자열의 끝을 알리는 **널 문자(\`\\0\`)**가 자동으로 들어갑니다.

### 2. 문자열 함수
\`string.h\` 헤더를 포함하면 다양한 함수를 쓸 수 있습니다.
- \`strlen(str)\`: 길이 구하기
- \`strcpy(dest, src)\`: 복사하기
- \`strcmp(s1, s2)\`: 비교하기
`,
        "en": `
# Step 9: Strings

C doesn't have a built-in 'string' type. Instead, it uses **arrays of characters (char)**.

### 1. Declaration
\`char str[] = "Hello";\`
Always ends with a **null character (\`\\0\`)**.

### 2. String Functions
Include \`string.h\` for functions like \`strlen\`, \`strcpy\`, and \`strcmp\`.
`
      },
      "code": "#include <string.h>\nchar s1[] = \"Ice\";\nchar s2[] = \"Code\";\nprintf(\"Length: %zu\\n\", strlen(s1));",
      "quiz": {
        "question": { "ko": "문자열 'Hello'를 담을 수 있는 char 배열 's'를 선언하고 초기화하세요.", "en": "Declare and initialize a char array 's' with the string 'Hello'." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('chars[]="Hello"') || c.includes('chars[6]="Hello"')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Hello' };
          return { passed: false, message: { ko: 'char s[] = "Hello"; 형식을 확인하세요.', en: 'Check char s[] = "Hello"; format.' }, output: 'Error' };
        }
      }
    },
    "step10": {
      "title": { "ko": "10단계: 구조체", "en": "Step 10: Structures" },
      "fullContent": {
        "ko": `
# 10단계: 구조체

서로 다른 종류의 데이터들을 하나로 묶어서 새로운 자료형을 만드는 것입니다.

\`\`\`c
struct Student {
    char name[20];
    int age;
    float gpa;
};

struct Student s1 = {"Alice", 20, 4.5};
printf("%s", s1.name);
\`\`\`

점(\`.\`) 연산자를 사용하여 내부 멤버에 접근합니다.
`,
        "en": `
# Step 10: Structures

Group different types of data together to create a custom data type.

Use the dot (\`.\`) operator to access members.
`
      },
      "code": "struct Point {\n    int x;\n    int y;\n};\n\nstruct Point p1 = {10, 20};\nprintf(\"x: %d, y: %d\", p1.x, p1.y);",
      "quiz": {
        "question": { "ko": "'Person' 구조체의 인스턴스 'p'의 'age' 멤버에 25를 대입하는 코드를 작성하세요.", "en": "Write code to assign 25 to the 'age' member of a 'Person' struct instance 'p'." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('p.age=25')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: '25' };
          return { passed: false, message: { ko: 'p.age = 25; 형식을 확인하세요.', en: 'Check p.age = 25; format.' }, output: 'Error' };
        }
      }
    },
    "step11": {
      "title": { "ko": "11단계: 포인터 심화", "en": "Step 11: Advanced Pointers" },
      "fullContent": {
        "ko": `
# 11단계: 포인터 심화

포인터는 배열, 함수와 결합하여 강력한 기능을 발휘합니다.

### 1. 포인터와 배열
배열의 이름은 사실 배열의 **첫 번째 요소의 주소**입니다.
\`int *p = arr;\`

### 2. 이중 포인터
포인터의 주소를 저장하는 포인터입니다.
\`int **pp = &p;\`

### 3. 함수 포인터
함수의 주소를 저장하여 함수를 변수처럼 다룰 수 있습니다.
`,
        "en": `
# Step 11: Advanced Pointers

Pointers can be combined with arrays and functions for powerful capabilities.

### 1. Pointers & Arrays
The array name is the address of its first element.

### 2. Double Pointers
A pointer that stores the address of another pointer.

### 3. Function Pointers
Store the address of a function to treat it like a variable.
`
      },
      "code": "int x = 10;\nint *p = &x;\nint **pp = &p;\nprintf(\"Value via double pointer: %d\", **pp);",
      "quiz": {
        "question": { "ko": "정수형 포인터 p를 가리키는 이중 포인터 'pp'를 선언하세요.", "en": "Declare a double pointer 'pp' that points to an integer pointer 'p'." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('int**pp=&p')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Success' };
          return { passed: false, message: { ko: 'int **pp = &p; 형식을 확인하세요.', en: 'Check int **pp = &p; format.' }, output: 'Error' };
        }
      }
    },
    "step12": {
      "title": { "ko": "12단계: 동적 메모리 할당", "en": "Step 12: Dynamic Memory Allocation" },
      "fullContent": {
        "ko": `
# 12단계: 동적 메모리 할당

프로그램 실행 중에 필요한 만큼 메모리를 빌려 쓰고 돌려주는 방법입니다.

### 1. malloc (Memory Allocation)
힙(Heap) 영역에서 메모리를 할당받습니다.
\`int *p = (int*)malloc(sizeof(int) * 5);\`

### 2. free
빌린 메모리는 반드시 돌려줘야 합니다. 안 그러면 **메모리 누수**가 발생합니다.
\`free(p);\`
`,
        "en": `
# Step 12: Dynamic Memory Allocation

Borrow and return memory as needed during program execution.

### 1. malloc
Allocate memory from the Heap.

### 2. free
Always return borrowed memory to avoid **memory leaks**.
`
      },
      "code": "#include <stdlib.h>\nint *arr = (int*)malloc(sizeof(int) * 3);\narr[0] = 10;\nfree(arr);",
      "quiz": {
        "question": { "ko": "할당받은 메모리 포인터 'ptr'을 해제하는 함수를 호출하세요.", "en": "Call the function to release the allocated memory pointer 'ptr'." },
        "validate": (code: string) => {
          if (code.includes('free(ptr)')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Success' };
          return { passed: false, message: { ko: 'free(ptr); 을 사용하세요.', en: 'Use free(ptr);.' }, output: 'Error' };
        }
      }
    },
    "step13": {
      "title": { "ko": "13단계: 파일 입출력", "en": "Step 13: File I/O" },
      "fullContent": {
        "ko": `
# 13단계: 파일 입출력

파일을 열고 데이터를 읽거나 쓰는 방법을 학습합니다.

### 1. FILE 포인터
파일을 다루기 위한 구조체 포인터입니다.
\`FILE *fp;\`

### 2. 주요 함수
- \`fopen(파일명, 모드)\`: 파일 열기 (모드: "r" 읽기, "w" 쓰기, "a" 추가)
- \`fprintf(fp, ...)\`: 파일에 쓰기
- \`fscanf(fp, ...)\`: 파일에서 읽기
- \`fclose(fp)\`: 파일 닫기 (필수!)

\`\`\`c
FILE *fp = fopen("data.txt", "w");
if (fp != NULL) {
    fprintf(fp, "Hello C File I/O");
    fclose(fp);
}
\`\`\`
`,
        "en": `
# Step 13: File I/O

Learn how to open, read, write, and close files.

### 1. FILE Pointer
A pointer to a structure used to handle files.

### 2. Key Functions
- \`fopen\`: Open a file (modes: "r", "w", "a").
- \`fprintf\` / \`fscanf\`: Write to / Read from a file.
- \`fclose\`: Close the file (important!).
`
      },
      "code": "#include <stdio.h>\n\nFILE *fp = fopen(\"test.txt\", \"w\");\nif (fp) {\n    fputs(\"C Programming\", fp);\n    fclose(fp);\n}",
      "quiz": {
        "question": { "ko": "파일을 열 때 사용하는 함수 이름은 무엇인가요?", "en": "What is the name of the function used to open a file?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('fopen')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'fopen' };
          return { passed: false, message: { ko: 'fopen 함수를 입력하세요.', en: 'Enter the fopen function.' }, output: 'Error' };
        }
      }
    },
    "step14": {
      "title": { "ko": "14단계: 전처리기와 매크로", "en": "Step 14: Preprocessor & Macros" },
      "fullContent": {
        "ko": `
# 14단계: 전처리기와 매크로

컴파일이 시작되기 전에 소스 코드를 변환하는 지시어들입니다. \`#\` 기호로 시작합니다.

### 1. #define (매크로)
상수나 간단한 함수를 정의합니다.
\`#define PI 3.14\`
\`#define SQUARE(x) ((x)*(x))\`

### 2. #include
다른 파일의 내용을 현재 파일에 포함시킵니다.
\`#include <stdio.h>\` (표준 라이브러리)
\`#include "myheader.h"\` (사용자 정의 헤더)
`,
        "en": `
# Step 14: Preprocessor & Macros

Directives that transform the source code before compilation begins. Starts with \`#\`.

### 1. #define (Macros)
Define constants or simple function-like macros.

### 2. #include
Include the contents of another file.
`
      },
      "code": "#define MAX 100\n#define SUM(a, b) ((a) + (b))\n\nint val = MAX;\nint total = SUM(10, 20);",
      "quiz": {
        "question": { "ko": "매크로 상수를 정의할 때 사용하는 전처리기 지시어는 무엇인가요?", "en": "Which preprocessor directive is used to define a macro constant?" },
        "validate": (code: string) => {
          if (code.includes('#define')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: '#define' };
          return { passed: false, message: { ko: '#define 을 입력하세요.', en: 'Enter #define.' }, output: 'Error' };
        }
      }
    },
    "step15": {
      "title": { "ko": "15단계: 비트 연산", "en": "Step 15: Bitwise Operations" },
      "fullContent": {
        "ko": `
# 15단계: 비트 연산

데이터를 가장 작은 단위인 **비트(0과 1)** 수준에서 조작합니다. 하드웨어 제어나 최적화에 필수적입니다.

- \`&\` (AND): 둘 다 1이면 1
- \`|\` (OR): 하나라도 1이면 1
- \`^\` (XOR): 서로 다르면 1
- \`~\` (NOT): 비트 반전
- \`<<\`, \`>>\` (Shift): 비트를 왼쪽/오른쪽으로 이동

\`\`\`c
int a = 5;  // 0000 0101
int b = 3;  // 0000 0011
int c = a & b; // 0000 0001 (1)
\`\`\`
`,
        "en": `
# Step 15: Bitwise Operations

Manipulate data at the **bit level (0 and 1)**. Essential for hardware control and optimization.

- \`&\` (AND), \`|\` (OR), \`^\` (XOR), \`~\` (NOT)
- \`<<\`, \`>>\` (Shift operations)
`
      },
      "code": "int a = 5; // 0101\nint b = 3; // 0011\nprintf(\"AND: %d\\n\", a & b);\nprintf(\"OR: %d\\n\", a | b);\nprintf(\"Shift: %d\\n\", a << 1); // 10 (1010)",
      "quiz": {
        "question": { "ko": "비트 단위 AND 연산자는 무엇인가요?", "en": "What is the bitwise AND operator?" },
        "validate": (code: string) => {
          if (code.trim() === '&') return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: '&' };
          return { passed: false, message: { ko: '& 기호를 입력하세요.', en: 'Enter the & symbol.' }, output: 'Error' };
        }
      }
    },
    "step16": {
      "title": { "ko": "16단계: 공용체와 열거형", "en": "Step 16: Unions & Enums" },
      "fullContent": {
        "ko": `
# 16단계: 공용체와 열거형

### 1. 공용체 (Union)
모든 멤버가 **같은 메모리 공간을 공유**합니다. 한 번에 하나의 멤버만 사용할 수 있습니다.
\`\`\`c
union Data {
    int i;
    float f;
};
\`\`\`

### 2. 열거형 (Enum)
정수형 상수에 이름을 붙여서 가독성을 높입니다.
\`\`\`c
enum Day { SUN, MON, TUE, WED };
enum Day today = MON; // today는 1
\`\`\`
`,
        "en": `
# Step 16: Unions & Enums

### 1. Union
All members **share the same memory location**. Only one member can be used at a time.

### 2. Enum
Assign names to integer constants for better readability.
`
      },
      "code": "enum Status { PENDING, ACTIVE, CLOSED };\nunion Box { int weight; float price; };\n\nenum Status s = ACTIVE;\nprintf(\"Status: %d\", s); // 1",
      "quiz": {
        "question": { "ko": "열거형을 정의할 때 사용하는 키워드는 무엇인가요?", "en": "Which keyword is used to define an enumeration?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('enum')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'enum' };
          return { passed: false, message: { ko: 'enum 키워드를 입력하세요.', en: 'Enter the enum keyword.' }, output: 'Error' };
        }
      }
    },
    "step17": {
      "title": { "ko": "17단계: 메모리 관리 기법", "en": "Step 17: Memory Management" },
      "fullContent": {
        "ko": `
# 17단계: 메모리 관리 기법

프로그램이 메모리를 어떻게 사용하는지 이해하는 것은 C 언어의 핵심입니다.

### 1. 스택 (Stack)
- 지역 변수, 매개변수가 저장됨
- 함수 종료 시 자동으로 해제됨
- 크기가 제한적임

### 2. 힙 (Heap)
- \`malloc\` 등으로 직접 할당함
- 개발자가 직접 \`free\`로 해제해야 함
- 크기가 크고 유연함

**주의**: \`free\`를 하지 않으면 **메모리 누수(Memory Leak)**가 발생합니다.
`,
        "en": `
# Step 17: Memory Management

Understanding how memory is used is key to C programming.

### 1. Stack
- Stores local variables.
- Automatically managed.

### 2. Heap
- Manually allocated via \`malloc\`.
- Must be manually released via \`free\`.
`
      },
      "code": "void func() {\n    int stackVar = 10; // Stack\n    int *heapVar = (int*)malloc(sizeof(int)); // Heap\n    *heapVar = 20;\n    free(heapVar);\n}",
      "quiz": {
        "question": { "ko": "동적으로 할당된 메모리를 해제하지 않아 발생하는 현상을 무엇이라고 하나요?", "en": "What is the phenomenon called when dynamically allocated memory is not released?" },
        "validate": (code: string) => {
          const c = code.toLowerCase();
          if (c.includes('누수') || c.includes('leak')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Memory Leak' };
          return { passed: false, message: { ko: '메모리 누수(Memory Leak)를 입력하세요.', en: 'Enter Memory Leak.' }, output: 'Error' };
        }
      }
    },
    "step18": {
      "title": { "ko": "18단계: 라이브러리 활용", "en": "Step 18: Standard Libraries" },
      "fullContent": {
        "ko": `
# 18단계: 라이브러리 활용

C 언어의 표준 라이브러리에는 유용한 기능들이 이미 많이 들어있습니다.

- \`math.h\`: 수학 연산 (\`sqrt\`, \`pow\`, \`sin\`, \`cos\`)
- \`time.h\`: 시간 관련 (\`time\`, \`localtime\`, \`strftime\`)
- \`ctype.h\`: 문자 검사 (\`isdigit\`, \`isalpha\`, \`toupper\`)

\`\`\`c
#include <math.h>
double root = sqrt(25.0); // 5.0
\`\`\`
`,
        "en": `
# Step 18: Standard Libraries

C provides many useful functions in its standard libraries.

- \`math.h\`: Mathematical operations.
- \`time.h\`: Time and date functions.
- \`ctype.h\`: Character handling functions.
`
      },
      "code": "#include <math.h>\n#include <time.h>\n\ndouble p = pow(2, 3); // 8.0\ntime_t now = time(NULL);\nprintf(\"Current time: %ld\", now);",
      "quiz": {
        "question": { "ko": "제곱근을 구하는 함수 sqrt()를 쓰기 위해 포함해야 하는 헤더는 무엇인가요?", "en": "Which header must be included to use the sqrt() function?" },
        "validate": (code: string) => {
          if (code.includes('math.h')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'math.h' };
          return { passed: false, message: { ko: 'math.h 를 입력하세요.', en: 'Enter math.h.' }, output: 'Error' };
        }
      }
    },
    "step19": {
      "title": { "ko": "19단계: 멀티 파일 프로젝트", "en": "Step 19: Multi-file Projects" },
      "fullContent": {
        "ko": `
# 19단계: 멀티 파일 프로젝트

대규모 프로그램은 여러 개의 파일로 나누어 관리합니다.

### 1. 헤더 파일 (.h)
함수 선언, 구조체 정의, 매크로 등을 담습니다.

### 2. 소스 파일 (.c)
함수의 실제 구현 내용을 담습니다.

### 3. 컴파일
여러 개의 .c 파일을 함께 컴파일하여 하나의 실행 파일을 만듭니다.
\`gcc main.c utils.c -o myprogram\`
`,
        "en": `
# Step 19: Multi-file Projects

Large programs are managed by splitting them into multiple files.

### 1. Header Files (.h)
Contains declarations and definitions.

### 2. Source Files (.c)
Contains the actual implementation.
`
      },
      "code": "// myheader.h\nvoid hello();\n\n// main.c\n#include \"myheader.h\"\nint main() { hello(); return 0; }",
      "quiz": {
        "question": { "ko": "사용자가 직접 만든 헤더 파일을 포함할 때 사용하는 기호는 무엇인가요? (예: #include ...)", "en": "Which symbols are used when including a user-defined header file?" },
        "validate": (code: string) => {
          if (code.includes('"')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: '""' };
          return { passed: false, message: { ko: '큰따옴표 ""를 입력하세요.', en: 'Enter double quotes "".' }, output: 'Error' };
        }
      }
    },
    "step20": {
      "title": { "ko": "20단계: C 마스터 프로젝트", "en": "Step 20: C Master Project" },
      "fullContent": {
        "ko": `
# 20단계: C 마스터 프로젝트

지금까지 배운 모든 지식을 총동원하여 하나의 완성된 프로그램을 만듭니다.

### 프로젝트 아이디어:
1. **학생 성적 관리 시스템**: 구조체, 파일 입출력, 동적 할당 활용
2. **텍스트 어드벤처 게임**: 포인터, 조건문, 함수 활용
3. **간단한 계산기**: 전처리기, 수학 라이브러리 활용
4. **연락처 관리 프로그램**: 링크드 리스트(심화), 파일 입출력 활용

### 축하합니다!
C 언어의 기초부터 심화까지 모두 마쳤습니다. 이제 C++이나 시스템 프로그래밍으로 나아갈 준비가 되었습니다.
`,
        "en": `
# Step 20: C Master Project

Build a complete program using everything you've learned.

### Project Ideas:
1. **Student Grade System**: Use structs, File I/O, and dynamic allocation.
2. **Text Adventure Game**: Use pointers, logic, and functions.
3. **CLI Calculator**: Use preprocessor and math libraries.

### Congratulations!
You've completed the C programming course!
`
      },
      "code": "// C Master Path Completed!\n#include <stdio.h>\nint main() {\n    printf(\"You are a C Master now!\\n\");\n    return 0;\n}",
      "quiz": {
        "question": { "ko": "C 언어에서 표준 출력을 위해 사용하는 함수는 무엇인가요?", "en": "Which function is used for standard output in C?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('printf')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'printf' };
          return { passed: false, message: { ko: 'printf 를 입력하세요.', en: 'Enter printf.' }, output: 'Error' };
        }
      }
    }
  },
  "cpp": {
    "step0": {
      "title": { "ko": "0단계: C++ 환경 세팅", "en": "Step 0: C++ Setup" },
      "fullContent": {
        "ko": `
# 0단계: C++ 환경 세팅

C++은 C 언어에 '객체 지향' 기능을 더한 강력한 언어입니다.

### 1. 컴파일러 설치
C 언어와 마찬가지로 **GCC (g++)** 컴파일러가 필요합니다. MinGW를 설치했다면 이미 g++이 포함되어 있을 것입니다.

### 2. 첫 번째 C++ 코드
C++은 \`iostream\` 헤더를 사용하며, \`std::cout\`으로 출력합니다.

\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "Hello, C++!" << std::endl;
    return 0;
}
\`\`\`
`,
        "en": `
# Step 0: C++ Environment Setup

C++ is a powerful language that adds 'Object-Oriented' features to C.

### 1. Install Compiler
You need the **GCC (g++)** compiler. If you installed MinGW, g++ is likely already included.

### 2. Your First C++ Code
C++ uses the \`iostream\` header and \`std::cout\` for output.

\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "Hello, C++!" << std::endl;
    return 0;
}
\`\`\`
`
      },
      "code": "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, C++!\" << std::endl;\n    return 0;\n}",
      "quiz": {
        "question": { "ko": "<iostream>을 포함하고 'std::cout'을 사용하여 'Hi'를 출력하는 main 함수를 작성하세요.", "en": "Include <iostream> and write a main function that prints 'Hi' using std::cout." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('#include<iostream>') && c.includes('cout<<"Hi"') && c.includes('main')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Hi' };
          return { passed: false, message: { ko: '#include <iostream>과 cout << "Hi"가 포함되어야 합니다.', en: 'Must include <iostream> and cout << "Hi".' }, output: 'Error' };
        }
      }
    },
    "step1": {
      "title": { "ko": "1단계: 입출력과 변수", "en": "Step 1: I/O & Variables" },
      "fullContent": {
        "ko": `
# 1단계: 입출력과 변수

C++에서는 \`cin\`과 \`cout\`을 사용하여 훨씬 직관적으로 입출력을 할 수 있습니다.

### 1. 출력 (cout)
\`<<\` 연산자를 사용하여 데이터를 보냅니다.
\`std::cout << "Hello" << std::endl;\`

### 2. 입력 (cin)
\`>>\` 연산자를 사용하여 값을 입력받습니다.
\`std::cin >> age;\`

### 3. 네임스페이스 (namespace)
매번 \`std::\`를 붙이기 귀찮다면 상단에 \`using namespace std;\`를 적어줍니다.
`,
        "en": `
# Step 1: I/O & Variables

In C++, \`cin\` and \`cout\` provide a more intuitive way to handle I/O.

### 1. Output (cout)
Use the \`<<\` operator.
\`std::cout << "Hello" << std::endl;\`

### 2. Input (cin)
Use the \`>>\` operator.
\`std::cin >> age;\`

### 3. Namespace
To avoid typing \`std::\` repeatedly, use \`using namespace std;\` at the top.
`
      },
      "code": "using namespace std;\nint age;\ncout << \"Enter age: \";\ncin >> age;\ncout << \"Your age is \" << age;",
      "quiz": {
        "question": { "ko": "std::cout을 사용하여 'IceCode'를 출력하는 코드를 작성하세요. (std::를 포함하거나 using을 사용하세요)", "en": "Write code to print 'IceCode' using std::cout." },
        "validate": (code: string) => {
          if (code.includes('cout') && code.includes('IceCode')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'IceCode' };
          return { passed: false, message: { ko: 'cout << "IceCode"; 형식을 확인하세요.', en: 'Check cout << "IceCode";' }, output: 'Error' };
        }
      }
    },
    "step2": {
      "title": { "ko": "2단계: 참조자(Reference)", "en": "Step 2: References" },
      "fullContent": {
        "ko": `
# 2단계: 참조자 (Reference)

참조자는 기존 변수에 **별명**을 붙이는 것과 같습니다.

\`\`\`cpp
int a = 10;
int &ref = a; // ref는 이제 a의 별명입니다.
ref = 20;     // a도 20이 됩니다.
\`\`\`

포인터보다 문법이 간결하고 안전하여 C++에서 매우 자주 쓰입니다.
`,
        "en": `
# Step 2: References

A reference is like giving an **alias** to an existing variable.

\`\`\`cpp
int a = 10;
int &ref = a; // ref is now an alias for a.
ref = 20;     // a also becomes 20.
\`\`\`

It's safer and cleaner than pointers, making it a staple in C++.
`
      },
      "code": "int val = 10;\nint &ref = val;\nref = 20; // val becomes 20",
      "quiz": {
        "question": { "ko": "변수 x에 대한 참조자 'r'을 선언하고 r에 50을 대입하세요.", "en": "Declare a reference 'r' for variable x and assign 50 to r." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('&r=x') && c.includes('r=50')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: '50' };
          return { passed: false, message: { ko: 'int &r = x; r = 50; 형식을 확인하세요.', en: 'Check int &r = x; r = 50;' }, output: 'Error' };
        }
      }
    },
    "step3": {
      "title": { "ko": "3단계: 함수 오버로딩", "en": "Step 3: Function Overloading" },
      "fullContent": {
        "ko": `
# 3단계: 함수 오버로딩

C++에서는 이름이 같은 함수라도 매개변수의 타입이나 개수가 다르면 여러 개 정의할 수 있습니다.

\`\`\`cpp
int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }
\`\`\`

컴파일러가 호출 시 전달된 인자를 보고 어떤 함수를 실행할지 자동으로 결정합니다.
`,
        "en": `
# Step 3: Function Overloading

In C++, you can define multiple functions with the same name if their parameter types or counts differ.

The compiler automatically decides which function to execute based on the arguments passed during the call.
`
      },
      "code": "int add(int a, int b) { return a + b; }\ndouble add(double a, double b) { return a + b; }\n\ncout << add(5, 10) << endl;\ncout << add(3.14, 2.0) << endl;",
      "quiz": {
        "question": { "ko": "정수 두 개를 더하는 add 함수와 정수 세 개를 더하는 add 함수를 오버로딩하여 작성하세요.", "en": "Overload the add function to handle two integers and three integers." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('add(inta,intb)') && c.includes('add(inta,intb,intc)')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Success' };
          return { passed: false, message: { ko: '매개변수 개수가 다른 두 add 함수를 만드세요.', en: 'Create two add functions with different parameter counts.' }, output: 'Error' };
        }
      }
    },
    "step4": {
      "title": { "ko": "4단계: 클래스와 객체 기초", "en": "Step 4: Classes & Objects" },
      "fullContent": {
        "ko": `
# 4단계: 클래스와 객체 기초

C++의 핵심인 **객체 지향 프로그래밍(OOP)**의 시작입니다.

### 1. 클래스 (Class)
객체를 만들기 위한 **설계도**입니다. 데이터(멤버 변수)와 기능(멤버 함수)을 포함합니다.

### 2. 객체 (Object)
설계도(클래스)를 바탕으로 실제로 메모리에 만들어진 **실체**입니다.

\`\`\`cpp
class Dog {
public:
    void bark() { cout << "Woof!"; }
};

Dog myDog; // 객체 생성
myDog.bark(); // 멤버 함수 호출
\`\`\`
`,
        "en": `
# Step 4: Classes & Objects

The beginning of **Object-Oriented Programming (OOP)** in C++.

### 1. Class
A **blueprint** for creating objects. Includes data (members) and functions (methods).

### 2. Object
An **instance** created in memory based on the class blueprint.
`
      },
      "code": "class Student {\npublic:\n    string name;\n    void study() {\n        cout << name << \" is studying.\" << endl;\n    }\n};\n\nStudent s1;\ns1.name = \"Alice\";\ns1.study();",
      "quiz": {
        "question": { "ko": "'Car' 클래스를 만들고, 'drive'라는 멤버 함수를 public으로 정의하세요.", "en": "Create a 'Car' class and define a public member function named 'drive'." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('classCar') && c.includes('public:') && c.includes('voiddrive()')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Success' };
          return { passed: false, message: { ko: 'class Car { public: void drive() { ... } }; 형식을 확인하세요.', en: 'Check class Car { public: void drive() { ... } }; format.' }, output: 'Error' };
        }
      }
    },
    "step5": {
      "title": { "ko": "5단계: 생성자와 소멸자", "en": "Step 5: Constructor & Destructor" },
      "fullContent": {
        "ko": `
# 5단계: 생성자와 소멸자

객체가 태어나고 죽을 때 자동으로 호출되는 특수한 함수들입니다.

### 1. 생성자 (Constructor)
객체가 생성될 때 호출되며, 주로 멤버 변수를 초기화합니다. 클래스 이름과 동일하며 반환형이 없습니다.

### 2. 소멸자 (Destructor)
객체가 소멸될 때 호출되며, 메모리 해제 등 뒷정리를 합니다. 클래스 이름 앞에 \`~\`를 붙입니다.
`,
        "en": `
# Step 5: Constructor & Destructor

Special functions called automatically when an object is created or destroyed.

### 1. Constructor
Called on creation, usually for initialization. Same name as the class, no return type.

### 2. Destructor
Called on destruction, used for cleanup. Prefixed with \`~\`.
`
      },
      "code": "class Person {\npublic:\n    Person() { cout << \"Born!\" << endl; }\n    ~Person() { cout << \"Gone...\" << endl; }\n};\n\n{ Person p; } // 블록을 나가면 소멸자 호출",
      "quiz": {
        "question": { "ko": "'Robot' 클래스에 생성자를 정의하여 객체 생성 시 'Beep'을 출력하게 하세요.", "en": "Define a constructor for the 'Robot' class that prints 'Beep' upon creation." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('Robot()') && c.includes('cout<<"Beep"')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Beep' };
          return { passed: false, message: { ko: '클래스 이름과 같은 이름의 생성자를 만드세요.', en: 'Create a constructor with the same name as the class.' }, output: 'Error' };
        }
      }
    },
    "step6": {
      "title": { "ko": "6단계: 접근 제어자", "en": "Step 6: Access Modifiers" },
      "fullContent": {
        "ko": `
# 6단계: 접근 제어자

정보 은닉(캡슐화)을 위해 멤버의 접근 범위를 제한합니다.

- **public**: 어디서든 접근 가능
- **private**: 클래스 내부에서만 접근 가능 (기본값)
- **protected**: 상속받은 자식 클래스까지만 접근 가능

보통 데이터는 \`private\`으로 숨기고, 함수는 \`public\`으로 공개합니다.
`,
        "en": `
# Step 6: Access Modifiers

Restrict access to members for information hiding (encapsulation).

- **public**: Accessible from anywhere.
- **private**: Accessible only within the class (default).
- **protected**: Accessible within the class and its derived classes.
`
      },
      "code": "class Account {\nprivate:\n    int balance = 0;\npublic:\n    void deposit(int money) { balance += money; }\n    int getBalance() { return balance; }\n};",
      "quiz": {
        "question": { "ko": "'User' 클래스의 'password' 변수를 외부에서 직접 수정하지 못하도록 private으로 선언하세요.", "en": "Declare the 'password' variable in the 'User' class as private." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('private:stringpassword') || c.includes('private:charpassword')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Success' };
          return { passed: false, message: { ko: 'private 키워드를 사용하여 변수를 보호하세요.', en: 'Use the private keyword to protect the variable.' }, output: 'Error' };
        }
      }
    },
    "step7": {
      "title": { "ko": "7단계: 상속", "en": "Step 7: Inheritance" },
      "fullContent": {
        "ko": `
# 7단계: 상속

기존 클래스(부모)의 기능을 물려받아 새로운 클래스(자식)를 만드는 것입니다. 코드의 재사용성을 극대화합니다.

\`\`\`cpp
class Animal {
public:
    void eat() { cout << "Eating..."; }
};

class Cat : public Animal { // Animal을 상속받음
public:
    void meow() { cout << "Meow!"; }
};
\`\`\`
`,
        "en": `
# Step 7: Inheritance

Create a new class (child) by inheriting features from an existing class (parent).

\`\`\`cpp
class Animal { ... };
class Cat : public Animal { ... };
\`\`\`
`
      },
      "code": "class Shape {\npublic:\n    void draw() { cout << \"Drawing a shape\"; }\n};\n\nclass Circle : public Shape {\npublic:\n    void area() { cout << \"Calculating area\"; }\n};",
      "quiz": {
        "question": { "ko": "'Vehicle' 클래스를 상속받는 'Bike' 클래스를 선언하세요.", "en": "Declare a 'Bike' class that inherits from the 'Vehicle' class." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('classBike:publicVehicle')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Success' };
          return { passed: false, message: { ko: 'class Bike : public Vehicle { ... }; 형식을 확인하세요.', en: 'Check class Bike : public Vehicle { ... }; format.' }, output: 'Error' };
        }
      }
    },
    "step8": {
      "title": { "ko": "8단계: 다형성과 가상 함수", "en": "Step 8: Polymorphism & Virtual" },
      "fullContent": {
        "ko": `
# 8단계: 다형성과 가상 함수

다형성은 "하나의 인터페이스로 여러 형태를 다루는 능력"입니다. C++에서는 **가상 함수(Virtual Function)**를 통해 이를 구현합니다.

### 1. 가상 함수 (virtual)
부모 클래스에서 \`virtual\` 키워드를 붙인 함수는 자식 클래스에서 재정의될 수 있으며, 부모 포인터로 호출하더라도 실제 객체의 함수가 실행됩니다.

### 2. 동적 바인딩
실행 시점에 어떤 함수를 호출할지 결정하는 메커니즘입니다.

\`\`\`cpp
Animal* a = new Dog();
a->Speak(); // Dog의 Speak()가 호출됨 (virtual인 경우)
\`\`\`
`,
        "en": `
# Step 8: Polymorphism & Virtual

Polymorphism allows a single interface to represent different underlying forms. In C++, this is achieved via **Virtual Functions**.

### 1. Virtual Functions
Functions declared with \`virtual\` in a base class can be overridden in derived classes.

### 2. Dynamic Binding
The process of selecting which implementation of a polymorphic function to call at runtime.
`
      },
      "code": "class Shape {\npublic:\n    virtual void draw() { cout << \"Drawing Shape\" << endl; }\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << \"Drawing Circle\" << endl; }\n};\n\nShape* s = new Circle();\ns->draw();",
      "quiz": {
        "question": { "ko": "자식 클래스에서 부모의 가상 함수를 재정의할 때 사용하는 키워드는 무엇인가요?", "en": "Which keyword is used in a derived class to indicate it is overriding a virtual function?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('override')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'override' };
          return { passed: false, message: { ko: 'override 키워드를 입력하세요.', en: 'Enter the override keyword.' }, output: 'Error' };
        }
      }
    },
    "step9": {
      "title": { "ko": "9단계: 연산자 오버로딩", "en": "Step 9: Operator Overloading" },
      "fullContent": {
        "ko": `
# 9단계: 연산자 오버로딩

C++에서는 \`+\`, \`-\`, \`*\` 같은 기본 연산자를 사용자 정의 클래스에서도 사용할 수 있게 재정의할 수 있습니다.

\`\`\`cpp
Point operator+(const Point& other) {
    return Point(x + other.x, y + other.y);
}
\`\`\`

이를 통해 \`p1 + p2\`와 같이 직관적인 코드를 작성할 수 있습니다.
`,
        "en": `
# Step 9: Operator Overloading

C++ allows you to redefine the behavior of operators like \`+\`, \`-\`, and \`*\` for your own classes.

This enables intuitive syntax like \`obj1 + obj2\`.
`
      },
      "code": "class Vector {\npublic:\n    int x, y;\n    Vector operator+(const Vector& v) {\n        return {x + v.x, y + v.y};\n    }\n};",
      "quiz": {
        "question": { "ko": "연산자 오버로딩을 위해 사용하는 키워드는 무엇인가요?", "en": "Which keyword is used to define an operator overload?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('operator')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'operator' };
          return { passed: false, message: { ko: 'operator 키워드를 입력하세요.', en: 'Enter the operator keyword.' }, output: 'Error' };
        }
      }
    },
    "step10": {
      "title": { "ko": "10단계: 템플릿(Template)", "en": "Step 10: Templates" },
      "fullContent": {
        "ko": `
# 10단계: 템플릿(Template)

데이터 타입에 상관없이 동작하는 코드를 작성할 때 사용합니다. **일반화 프로그래밍(Generic Programming)**의 핵심입니다.

\`\`\`cpp
template <typename T>
T Max(T a, T b) {
    return (a > b) ? a : b;
}
\`\`\`

컴파일러가 호출 시 사용된 타입을 보고 실제 코드를 생성합니다.
`,
        "en": `
# Step 10: Templates

Templates allow you to write generic code that works with any data type.

The compiler generates specific versions of the template based on the types used at call sites.
`
      },
      "code": "template <typename T>\nvoid swapValues(T &a, T &b) {\n    T temp = a;\n    a = b;\n    b = temp;\n}",
      "quiz": {
        "question": { "ko": "템플릿을 정의할 때 괄호 안에 타입을 나타내기 위해 사용하는 키워드는 무엇인가요? (예: <___ T>)", "en": "Which keyword is used inside the angle brackets to represent a generic type in a template? (e.g., <___ T>)" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('typename') || code.toLowerCase().includes('class')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'typename' };
          return { passed: false, message: { ko: 'typename 또는 class를 입력하세요.', en: 'Enter typename or class.' }, output: 'Error' };
        }
      }
    },
    "step11": {
      "title": { "ko": "11단계: STL - Vector", "en": "Step 11: STL - Vector" },
      "fullContent": {
        "ko": `
# 11단계: STL - Vector

**Standard Template Library(STL)**의 가장 대표적인 컨테이너입니다. 크기가 자동으로 조절되는 **동적 배열**입니다.

### 주요 특징
- 무작위 접근(Random Access)이 빠릅니다.
- 끝에 요소를 추가/삭제하는 것이 효율적입니다.

\`\`\`cpp
#include <vector>
vector<int> v;
v.push_back(10);
\`\`\`
`,
        "en": `
# Step 11: STL - Vector

The most common container in the **Standard Template Library (STL)**. It is a **dynamic array** that resizes itself automatically.

### Key Features
- Fast random access.
- Efficient insertion/deletion at the end.
`
      },
      "code": "#include <vector>\nvector<int> v = {1, 2, 3};\nv.push_back(4);\ncout << v.size() << endl;",
      "quiz": {
        "question": { "ko": "vector의 맨 뒤에 요소를 추가할 때 사용하는 함수는 무엇인가요?", "en": "Which function is used to add an element to the end of a vector?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('push_back')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'push_back' };
          return { passed: false, message: { ko: 'push_back 함수를 입력하세요.', en: 'Enter the push_back function.' }, output: 'Error' };
        }
      }
    },
    "step12": {
      "title": { "ko": "12단계: STL - List & Map", "en": "Step 12: STL - List & Map" },
      "fullContent": {
        "ko": `
# 12단계: STL - List & Map

다른 중요한 STL 컨테이너들을 배웁니다.

### 1. List
**이중 연결 리스트**입니다. 중간에 요소를 삽입하거나 삭제하는 것이 매우 빠릅니다.

### 2. Map
**키-값(Key-Value)** 쌍으로 데이터를 저장합니다. 내부적으로 균형 이진 트리로 구현되어 검색이 빠릅니다.

\`\`\`cpp
#include <map>
map<string, int> scores;
scores["Alice"] = 100;
\`\`\`
`,
        "en": `
# Step 12: STL - List & Map

Learn other essential STL containers.

### 1. List
A **doubly linked list**. Fast at inserting/deleting elements in the middle.

### 2. Map
Stores data in **Key-Value** pairs. Fast lookups using keys.
`
      },
      "code": "#include <map>\nmap<string, string> dict;\ndict[\"apple\"] = \"사과\";\ncout << dict[\"apple\"] << endl;",
      "quiz": {
        "question": { "ko": "키와 값의 쌍으로 데이터를 저장하는 STL 컨테이너는 무엇인가요?", "en": "Which STL container stores data as key-value pairs?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('map')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'map' };
          return { passed: false, message: { ko: 'map을 입력하세요.', en: 'Enter map.' }, output: 'Error' };
        }
      }
    },
    "step13": {
      "title": {
        "ko": "13단계: 예외 처리",
        "en": "Step 13: Exception Handling"
      },
      "desc": {
        "ko": "try, catch, throw를 사용하여 런타임 에러를 안전하게 처리합니다.",
        "en": "Safely handle runtime errors using try, catch, and throw."
      },
      "code": "try {\n    if (x == 0) throw \"Error\";\n} catch (const char* msg) {\n    cerr << msg << endl;\n}"
    },
    "step14": {
      "title": {
        "ko": "14단계: 스마트 포인터",
        "en": "Step 14: Smart Pointers"
      },
      "desc": {
        "ko": "unique_ptr, shared_ptr를 사용하여 메모리를 자동으로 관리합니다.",
        "en": "Automatically manage memory using unique_ptr and shared_ptr."
      },
      "code": "#include <memory>\nunique_ptr<int> p = make_unique<int>(10);"
    },
    "step15": {
      "title": {
        "ko": "15단계: 람다 표현식",
        "en": "Step 15: Lambda Expressions"
      },
      "desc": {
        "ko": "이름 없는 익명 함수를 정의하여 코드를 간결하게 작성합니다.",
        "en": "Write concise code by defining anonymous lambda functions."
      },
      "code": "auto add = [](int a, int b) { return a + b; };\ncout << add(1, 2);"
    },
    "step16": {
      "title": {
        "ko": "16단계: 파일 스트림",
        "en": "Step 16: File Streams"
      },
      "desc": {
        "ko": "fstream을 사용하여 객체 지향 방식으로 파일을 다룹니다.",
        "en": "Handle files in an object-oriented way using fstream."
      },
      "code": "#include <fstream>\nofstream out(\"file.txt\");\nout << \"Hello C++\";\nout.close();"
    },
    "step17": {
      "title": {
        "ko": "17단계: 모던 C++ 기능",
        "en": "Step 17: Modern C++ Features"
      },
      "desc": {
        "ko": "auto, range-based for loop 등 최신 C++ 표준의 기능을 배웁니다.",
        "en": "Learn features of the latest C++ standards like auto and range-based for loops."
      },
      "code": "vector<int> v = {1, 2, 3};\nfor (auto x : v) cout << x;"
    },
    "step18": {
      "title": {
        "ko": "18단계: 멀티스레딩",
        "en": "Step 18: Multithreading"
      },
      "desc": {
        "ko": "std::thread를 사용하여 병렬 처리를 구현합니다.",
        "en": "Implement parallel processing using std::thread."
      },
      "code": "#include <thread>\nvoid task() {}\nthread t(task);\nt.join();"
    },
    "step19": {
      "title": {
        "ko": "19단계: 알고리즘 라이브러리",
        "en": "Step 19: Algorithm Library"
      },
      "desc": {
        "ko": "sort, find, count 등 STL 알고리즘 함수들을 활용합니다.",
        "en": "Utilize STL algorithm functions like sort, find, and count."
      },
      "code": "#include <algorithm>\nsort(v.begin(), v.end());"
    },
    "step20": {
      "title": {
        "ko": "20단계: C++ 마스터 프로젝트",
        "en": "Step 20: C++ Master Project"
      },
      "desc": {
        "ko": "객체 지향 설계를 적용하여 복잡한 시스템이나 게임 엔진 기초를 만듭니다.",
        "en": "Build a complex system or game engine basics using OOP design."
      },
      "code": "// Final Project: RPG Game Engine or Management System"
    }
  },
  "csharp": {
    "step0": {
      "title": { "ko": "0단계: C# 환경 세팅", "en": "Step 0: C# Setup" },
      "fullContent": {
        "ko": `
# 0단계: C# 환경 세팅

C#은 Microsoft에서 만든 현대적이고 생산성 높은 언어입니다.

### 1. .NET SDK 설치
C# 프로그램을 실행하려면 **.NET SDK**가 필요합니다.
1. [dotnet.microsoft.com](https://dotnet.microsoft.com/download) 에서 최신 SDK를 다운로드하여 설치합니다.

### 2. VS Code 설정
1. VS Code에서 \`C# Dev Kit\` 확장 프로그램을 설치합니다.

### 3. 프로젝트 만들기
터미널에 아래 명령어를 입력하여 새 프로젝트를 만듭니다.
\`\`\`bash
dotnet new console -n MyProject
cd MyProject
dotnet run
\`\`\`
`,
        "en": `
# Step 0: C# Environment Setup

C# is a modern, high-productivity language created by Microsoft.

### 1. Install .NET SDK
You need the **.NET SDK** to run C# programs.
1. Download and install the latest SDK from [dotnet.microsoft.com](https://dotnet.microsoft.com/download).

### 2. VS Code Setup
1. Install the \`C# Dev Kit\` extension in VS Code.

### 3. Create a Project
Type these commands in your terminal:
\`\`\`bash
dotnet new console -n MyProject
cd MyProject
dotnet run
\`\`\`
`
      },
      "code": "using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine(\"Hello, C#!\");\n    }\n}",
      "quiz": {
        "question": { "ko": "Console.WriteLine을 사용하여 'Ice'를 출력하는 Main 메서드를 작성하세요.", "en": "Write a Main method that prints 'Ice' using Console.WriteLine." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('Console.WriteLine("Ice")') && c.includes('Main')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Ice' };
          return { passed: false, message: { ko: 'Console.WriteLine("Ice"); 가 포함되어야 합니다.', en: 'Must include Console.WriteLine("Ice");.' }, output: 'Error' };
        }
      }
    },
    "step1": {
      "title": { "ko": "1단계: 변수와 출력", "en": "Step 1: Variables & Output" },
      "fullContent": {
        "ko": `
# 1단계: 변수와 출력

C#은 모든 것이 객체로 이루어진 강력한 형식의 언어입니다.

### 1. 출력 (Console.WriteLine)
\`Console.WriteLine()\`을 사용하여 화면에 출력합니다.

### 2. 변수와 자료형
- \`int\`: 정수
- \`double\`: 실수
- \`string\`: 문자열 (큰따옴표)
- \`bool\`: 참/거짓 (\`true\`, \`false\`)

\`\`\`csharp
string name = "IceCode";
Console.WriteLine("Hello " + name);
\`\`\`
`,
        "en": `
# Step 1: Variables & Output

C# is a strongly-typed language where everything is an object.

### 1. Output (Console.WriteLine)
Use \`Console.WriteLine()\` to display text.

### 2. Variables & Types
- \`int\`: Integers
- \`double\`: Decimals
- \`string\`: Text (double quotes)
- \`bool\`: Boolean (\`true\`, \`false\`)

\`\`\`csharp
string name = "IceCode";
Console.WriteLine("Hello " + name);
\`\`\`
`
      },
      "code": "int age = 25;\nstring name = \"IceCode\";\nbool isStudent = true;\nConsole.WriteLine($\"Name: {name}, Age: {age}\");",
      "quiz": {
        "question": { "ko": "string 변수 'msg'에 'Hello'를 저장하고 Console.WriteLine으로 출력하세요.", "en": "Store 'Hello' in a string variable 'msg' and print it using Console.WriteLine." },
        "validate": (code: string) => {
          if (code.includes('stringmsg="Hello"') || code.includes('string msg = "Hello"')) {
            if (code.includes('Console.WriteLine(msg)')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Hello' };
          }
          return { passed: false, message: { ko: 'string msg = "Hello"; 와 Console.WriteLine(msg); 형식을 확인하세요.', en: 'Check string msg = "Hello"; and Console.WriteLine(msg);' }, output: 'Error' };
        }
      }
    },
    "step2": {
      "title": { "ko": "2단계: 문자열 보간", "en": "Step 2: String Interpolation" },
      "fullContent": {
        "ko": `
# 2단계: 문자열 보간 ($)

C#에서 문자열 안에 변수를 넣는 가장 세련된 방법은 **문자열 보간**입니다.
문자열 앞에 \`$\`를 붙이고, 변수를 \`{ }\`로 감쌉니다.

\`\`\`csharp
int score = 100;
Console.WriteLine($"당신의 점수는 {score}점입니다.");
\`\`\`
`,
        "en": `
# Step 2: String Interpolation ($)

The most elegant way to include variables in a string in C# is **String Interpolation**.
Add a \`$\` before the string and wrap variables in \`{ }\`.

\`\`\`csharp
int score = 100;
Console.WriteLine($"Your score is {score}.");
\`\`\`
`
      },
      "code": "string name = \"Alice\";\nint level = 5;\nConsole.WriteLine($\"Name: {name}, Level: {level}\");",
      "quiz": {
        "question": { "ko": "$ 기호를 사용하여 'Level: {level}' 형식으로 출력하는 코드를 작성하세요. (level 변수는 10으로 가정)", "en": "Write code to print 'Level: {level}' using the $ symbol. (Assume level is 10)" },
        "validate": (code: string) => {
          if (code.includes('$') && code.includes('{level}') && code.includes('Console.WriteLine')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Level: 10' };
          return { passed: false, message: { ko: 'Console.WriteLine($"Level: {level}"); 형식을 확인하세요.', en: 'Check Console.WriteLine($"Level: {level}");' }, output: 'Error' };
        }
      }
    },
    "step3": {
      "title": { "ko": "3단계: 조건문과 반복문", "en": "Step 3: Control Flow" },
      "fullContent": {
        "ko": `
# 3단계: 조건문과 반복문

C#의 제어문은 C/C++과 매우 유사하지만, \`foreach\`라는 편리한 반복문이 추가로 있습니다.

### 1. if - else
\`\`\`csharp
if (age >= 20) {
    Console.WriteLine("Adult");
}
\`\`\`

### 2. foreach 문
배열이나 리스트의 모든 요소를 순회할 때 매우 유용합니다.
\`\`\`csharp
string[] colors = { "Red", "Green", "Blue" };
foreach (string color in colors) {
    Console.WriteLine(color);
}
\`\`\`
`,
        "en": `
# Step 3: Control Flow

C# control statements are similar to C/C++, but include the convenient \`foreach\` loop.

### 1. if - else
Standard conditional branching.

### 2. foreach loop
Ideal for iterating through arrays or lists.
`
      },
      "code": "int[] numbers = { 1, 2, 3, 4, 5 };\nforeach (int n in numbers) {\n    if (n % 2 == 0) {\n        Console.WriteLine($\"{n} is even\");\n    }\n}",
      "quiz": {
        "question": { "ko": "foreach문을 사용하여 'names' 배열의 모든 요소를 출력하는 코드를 작성하세요.", "en": "Use a foreach loop to print all elements of the 'names' array." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('foreach(stringnameinnames)') || c.includes('foreach(varnameinnames)')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Success' };
          return { passed: false, message: { ko: 'foreach (var name in names) 형식을 사용하세요.', en: 'Use foreach (var name in names) format.' }, output: 'Error' };
        }
      }
    },
    "step4": {
      "title": { "ko": "4단계: 클래스와 객체", "en": "Step 4: Classes & Objects" },
      "fullContent": {
        "ko": `
# 4단계: 클래스와 객체

C#은 모든 것이 객체로 이루어진 **순수 객체 지향** 언어에 가깝습니다.

### 1. 클래스 정의
\`\`\`csharp
class Person {
    public string Name;
    public void Introduce() {
        Console.WriteLine($"Hi, I'm {Name}");
    }
}
\`\`\`

### 2. 객체 생성 (new)
\`new\` 키워드를 사용하여 객체를 생성합니다.
\`Person p = new Person();\`
`,
        "en": `
# Step 4: Classes & Objects

C# is a highly object-oriented language where almost everything is an object.

### 1. Class Definition
Define blueprints for objects.

### 2. Object Creation
Use the \`new\` keyword to instantiate objects.
`
      },
      "code": "class Dog {\n    public string Breed;\n    public void Bark() {\n        Console.WriteLine(\"Woof!\");\n    }\n}\n\nDog myDog = new Dog();\nmyDog.Breed = \"Beagle\";\nmyDog.Bark();",
      "quiz": {
        "question": { "ko": "'Cat' 클래스의 인스턴스 'myCat'을 생성하는 코드를 작성하세요.", "en": "Write code to create an instance 'myCat' of the 'Cat' class." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('CatmyCat=newCat()')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Success' };
          return { passed: false, message: { ko: 'Cat myCat = new Cat(); 형식을 확인하세요.', en: 'Check Cat myCat = new Cat(); format.' }, output: 'Error' };
        }
      }
    },
    "step5": {
      "title": { "ko": "5단계: 속성(Property)", "en": "Step 5: Properties" },
      "fullContent": {
        "ko": `
# 5단계: 속성(Property)

C#에서는 멤버 변수에 접근할 때 Getter/Setter 대신 **프로퍼티**를 사용합니다.

\`\`\`csharp
class User {
    // 자동 구현 프로퍼티
    public string Name { get; set; }
    
    private int age;
    public int Age {
        get { return age; }
        set { if (value > 0) age = value; }
    }
}
\`\`\`

데이터를 안전하게 보호하면서도 변수처럼 편하게 쓸 수 있습니다.
`,
        "en": `
# Step 5: Properties

C# uses **Properties** instead of traditional Getter/Setter methods for field access.

Properties protect data while maintaining the ease of use of a variable.
`
      },
      "code": "class Product {\n    public string Name { get; set; }\n    public int Price { get; set; }\n}\n\nProduct p = new Product { Name = \"Laptop\", Price = 1000 };\nConsole.WriteLine(p.Name);",
      "quiz": {
        "question": { "ko": "get과 set을 가진 'Score' 프로퍼티를 public으로 선언하세요.", "en": "Declare a public 'Score' property with get and set accessors." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('publicintScore{get;set;}')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Success' };
          return { passed: false, message: { ko: 'public int Score { get; set; } 형식을 확인하세요.', en: 'Check public int Score { get; set; } format.' }, output: 'Error' };
        }
      }
    },
    "step6": {
      "title": { "ko": "6단계: 생성자와 메서드", "en": "Step 6: Constructors & Methods" },
      "fullContent": {
        "ko": `
# 6단계: 생성자와 메서드

객체 초기화와 동작을 정의하는 법을 배웁니다.

### 1. 생성자
클래스 이름과 같으며 객체 생성 시 호출됩니다.

### 2. 메서드
객체의 동작을 정의합니다.
`,
        "en": `
# Step 6: Constructors & Methods

Learn to define object initialization and behavior.
`
      },
      "code": "class Person {\n    public string Name;\n    public Person(string name) {\n        Name = name;\n    }\n}\n\nPerson p = new Person(\"Alice\");",
      "quiz": {
        "question": { "ko": "'Car' 클래스에 매개변수가 없는 생성자를 작성하세요.", "en": "Write a parameterless constructor for the 'Car' class." },
        "validate": (code: string) => {
          const c = code.replace(/\s+/g, '');
          if (c.includes('publicCar()')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Success' };
          return { passed: false, message: { ko: 'public Car() { } 형식을 확인하세요.', en: 'Check public Car() { } format.' }, output: 'Error' };
        }
      }
    },
    "step7": {
      "title": { "ko": "7단계: 상속과 다형성", "en": "Step 7: Inheritance & Polymorphism" },
      "fullContent": {
        "ko": `
# 7단계: 상속과 다형성

C#에서 상속은 \`:\` 기호를 사용하며, 다형성을 위해 \`virtual\`과 \`override\` 키워드를 사용합니다.

### 1. 상속
\`class Dog : Animal { ... }\`

### 2. 오버라이딩
부모의 기능을 재정의할 때 사용합니다.
\`\`\`csharp
class Animal {
    public virtual void Speak() { Console.WriteLine("..."); }
}
class Dog : Animal {
    public override void Speak() { Console.WriteLine("Woof!"); }
}
\`\`\`
`,
        "en": `
# Step 7: Inheritance & Polymorphism

In C#, inheritance uses the \`:\` symbol. Polymorphism is achieved via \`virtual\` and \`override\` keywords.
`
      },
      "code": "class Bird {\n    public virtual void Fly() { Console.WriteLine(\"Flying\"); }\n}\nclass Penguin : Bird {\n    public override void Fly() { Console.WriteLine(\"I can't fly!\"); }\n}",
      "quiz": {
        "question": { "ko": "부모 클래스의 메서드를 재정의할 때 자식 클래스에서 사용하는 키워드는 무엇인가요?", "en": "Which keyword is used in a child class to redefine a parent's virtual method?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('override')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'override' };
          return { passed: false, message: { ko: 'override 키워드를 입력하세요.', en: 'Enter the override keyword.' }, output: 'Error' };
        }
      }
    },
    "step8": {
      "title": { "ko": "8단계: 인터페이스와 추상 클래스", "en": "Step 8: Interfaces & Abstract" },
      "fullContent": {
        "ko": `
# 8단계: 인터페이스와 추상 클래스

C#에서 추상화(Abstraction)를 구현하는 두 가지 주요 방법입니다.

### 1. 인터페이스 (Interface)
클래스가 반드시 구현해야 하는 **규약**입니다. 다중 상속이 가능합니다.
\`\`\`csharp
interface IAnimal { void MakeSound(); }
\`\`\`

### 2. 추상 클래스 (Abstract Class)
공통된 기능을 가진 **뼈대**입니다. 직접 객체를 만들 수 없습니다.
\`\`\`csharp
abstract class Shape { public abstract double Area(); }
\`\`\`
`,
        "en": `
# Step 8: Interfaces & Abstract

Two primary ways to implement Abstraction in C#.

### 1. Interface
A **contract** that classes must implement. Supports multiple inheritance.

### 2. Abstract Class
A **skeleton** for common functionality. Cannot be instantiated.
`
      },
      "code": "interface IPlayable {\n    void Play();\n}\n\nclass MusicPlayer : IPlayable {\n    public void Play() { Console.WriteLine(\"Playing music\"); }\n}",
      "quiz": {
        "question": { "ko": "C#에서 인터페이스를 선언할 때 사용하는 키워드는 무엇인가요?", "en": "Which keyword is used to declare an interface in C#?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('interface')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'interface' };
          return { passed: false, message: { ko: 'interface 키워드를 입력하세요.', en: 'Enter the interface keyword.' }, output: 'Error' };
        }
      }
    },
    "step9": {
      "title": { "ko": "9단계: 컬렉션 - List & Dictionary", "en": "Step 9: Collections" },
      "fullContent": {
        "ko": `
# 9단계: 컬렉션 - List & Dictionary

데이터를 효율적으로 관리하기 위한 **제네릭 컬렉션**입니다.

### 1. List<T>
크기가 가변적인 배열입니다.
\`\`\`csharp
List<int> nums = new List<int>();
nums.Add(10);
\`\`\`

### 2. Dictionary<K, V>
**키-값** 쌍으로 데이터를 저장합니다.
\`\`\`csharp
Dictionary<string, int> ages = new Dictionary<string, int>();
ages["Alice"] = 25;
\`\`\`
`,
        "en": `
# Step 9: Collections

**Generic collections** for efficient data management.

### 1. List<T>
A dynamic array.

### 2. Dictionary<K, V>
Stores data in **Key-Value** pairs.
`
      },
      "code": "using System.Collections.Generic;\n\nList<string> fruits = new List<string> { \"Apple\", \"Banana\" };\nfruits.Add(\"Cherry\");\n\nDictionary<string, int> scores = new();\nscores[\"Math\"] = 90;",
      "quiz": {
        "question": { "ko": "List에 새로운 요소를 추가할 때 사용하는 메서드는 무엇인가요?", "en": "Which method is used to add a new element to a List?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('add')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Add' };
          return { passed: false, message: { ko: 'Add 메서드를 입력하세요.', en: 'Enter the Add method.' }, output: 'Error' };
        }
      }
    },
    "step10": {
      "title": { "ko": "10단계: 예외 처리", "en": "Step 10: Exception Handling" },
      "fullContent": {
        "ko": `
# 10단계: 예외 처리

프로그램 실행 중 발생하는 오류를 \`try-catch-finally\` 블록으로 처리합니다.

- \`try\`: 오류가 발생할 수 있는 코드
- \`catch\`: 오류 발생 시 실행할 코드
- \`finally\`: 오류 여부와 상관없이 항상 실행할 코드

\`\`\`csharp
try {
    int x = 0;
    int y = 10 / x;
} catch (DivideByZeroException e) {
    Console.WriteLine(e.Message);
}
\`\`\`
`,
        "en": `
# Step 10: Exception Handling

Handle runtime errors using \`try-catch-finally\` blocks.

- \`try\`: Code that might throw an exception.
- \`catch\`: Code to handle the exception.
- \`finally\`: Code that always runs.
`
      },
      "code": "try {\n    string s = null;\n    Console.WriteLine(s.Length);\n} catch (Exception ex) {\n    Console.WriteLine($\"Error: {ex.Message}\");\n}",
      "quiz": {
        "question": { "ko": "예외 발생 여부와 상관없이 항상 실행되는 블록의 이름은 무엇인가요?", "en": "What is the name of the block that always runs, regardless of whether an exception occurred?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('finally')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'finally' };
          return { passed: false, message: { ko: 'finally 블록을 입력하세요.', en: 'Enter the finally block.' }, output: 'Error' };
        }
      }
    },
    "step11": {
      "title": { "ko": "11단계: LINQ 기초", "en": "Step 11: LINQ Basics" },
      "fullContent": {
        "ko": `
# 11단계: LINQ 기초

**LINQ(Language Integrated Query)**는 데이터를 쿼리하듯 다룰 수 있는 강력한 기능입니다.

\`\`\`csharp
var results = from n in numbers
              where n > 5
              select n;

// 메서드 방식
var results = numbers.Where(n => n > 5);
\`\`\`
`,
        "en": `
# Step 11: LINQ Basics

**LINQ (Language Integrated Query)** allows you to query data using a syntax similar to SQL.
`
      },
      "code": "using System.Linq;\n\nint[] nums = { 1, 5, 8, 12, 3 };\nvar bigNums = nums.Where(n => n > 5);\nforeach (var n in bigNums) Console.WriteLine(n);",
      "quiz": {
        "question": { "ko": "LINQ를 사용하기 위해 포함해야 하는 네임스페이스는 무엇인가요?", "en": "Which namespace must be included to use LINQ?" },
        "validate": (code: string) => {
          if (code.includes('System.Linq')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'System.Linq' };
          return { passed: false, message: { ko: 'System.Linq를 입력하세요.', en: 'Enter System.Linq.' }, output: 'Error' };
        }
      }
    },
    "step12": {
      "title": { "ko": "12단계: 델리게이트와 이벤트", "en": "Step 12: Delegates & Events" },
      "fullContent": {
        "ko": `
# 12단계: 델리게이트와 이벤트

함수를 변수처럼 다루고, 특정 상황(이벤트)이 발생했을 때 알림을 받는 방법을 배웁니다.

### 1. 델리게이트 (Delegate)
함수에 대한 **참조**입니다.

### 2. 이벤트 (Event)
객체에서 특정 사건이 일어났음을 외부에 알리는 메커니즘입니다.
`,
        "en": `
# Step 12: Delegates & Events

Learn how to treat functions as variables and handle event-based programming.

### 1. Delegate
A type that represents references to methods.

### 2. Event
A mechanism for an object to notify other objects when something happens.
`
      },
      "code": "public delegate void MyDelegate(string msg);\n\nclass Program {\n    static void Show(string m) { Console.WriteLine(m); }\n    static void Main() {\n        MyDelegate del = Show;\n        del(\"Hello Delegate\");\n    }\n}",
      "quiz": {
        "question": { "ko": "람다식에서 사용하는 화살표 기호는 무엇인가요?", "en": "What is the arrow symbol used in lambda expressions?" },
        "validate": (code: string) => {
          if (code.includes('=>')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: '=>' };
          return { passed: false, message: { ko: '=> 를 입력하세요.', en: 'Enter =>.' }, output: 'Error' };
        }
      }
    },
    "step13": {
      "title": { "ko": "13단계: 비동기 프로그래밍", "en": "Step 13: Async Programming" },
      "fullContent": {
        "ko": `
# 13단계: 비동기 프로그래밍

\`async\`와 \`await\`를 사용하여 메인 스레드를 차단하지 않고 오래 걸리는 작업을 수행합니다.

### 1. Task와 Task<T>
비동기 작업의 상태를 나타내는 객체입니다.

### 2. async / await
- \`async\`: 메서드가 비동기임을 나타냅니다.
- \`await\`: 비동기 작업이 완료될 때까지 기다립니다 (스레드는 자유롭게 다른 일을 할 수 있습니다).

\`\`\`csharp
public async Task<string> DownloadDataAsync() {
    HttpClient client = new HttpClient();
    // 비동기로 데이터를 가져옴
    string result = await client.GetStringAsync("https://api.example.com");
    return result;
}
\`\`\`
`,
        "en": `
# Step 13: Async Programming

Use \`async\` and \`await\` to perform long-running tasks without blocking the main thread.

### 1. Task and Task<T>
Objects representing the state of an asynchronous operation.

### 2. async / await
- \`async\`: Marks a method as asynchronous.
- \`await\`: Pauses the method until the task completes (without blocking the thread).
`
      },
      "code": "public async Task DoWork() {\n    Console.WriteLine(\"Starting...\");\n    await Task.Delay(1000); // 1초 대기\n    Console.WriteLine(\"Done!\");\n}",
      "quiz": {
        "question": { "ko": "비동기 메서드 내에서 작업이 완료될 때까지 기다리기 위해 사용하는 키워드는 무엇인가요?", "en": "Which keyword is used inside an async method to wait for a task to complete?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('await')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'await' };
          return { passed: false, message: { ko: 'await 키워드를 입력하세요.', en: 'Enter the await keyword.' }, output: 'Error' };
        }
      }
    },
    "step14": {
      "title": { "ko": "14단계: 제네릭(Generics)", "en": "Step 14: Generics" },
      "fullContent": {
        "ko": `
# 14단계: 제네릭(Generics)

데이터 형식을 일반화하여 코드의 재사용성과 성능을 높입니다.

### 1. 제네릭 클래스
클래스 정의 시 타입을 파라미터로 받습니다.
\`\`\`csharp
class Box<T> {
    public T Item { get; set; }
}
\`\`\`

### 2. 제네릭 제약 조건
\`where\` 키워드를 사용하여 특정 타입만 허용할 수 있습니다.
\`\`\`csharp
class Repository<T> where T : class { }
\`\`\`
`,
        "en": `
# Step 14: Generics

Generics allow you to write code that works with any data type while maintaining type safety.

### 1. Generic Classes
Classes that take a type parameter.

### 2. Generic Constraints
Use the \`where\` keyword to restrict the types that can be used.
`
      },
      "code": "public class GenericList<T> {\n    public void Add(T input) { }\n}\n\nGenericList<int> list = new GenericList<int>();\nlist.Add(10);",
      "quiz": {
        "question": { "ko": "제네릭 타입 파라미터를 선언할 때 관습적으로 사용하는 문자는 무엇인가요?", "en": "Which letter is conventionally used to represent a generic type parameter?" },
        "validate": (code: string) => {
          if (code.toUpperCase().trim() === 'T') return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'T' };
          return { passed: false, message: { ko: '대문자 T를 입력하세요.', en: 'Enter uppercase T.' }, output: 'Error' };
        }
      }
    },
    "step15": {
      "title": { "ko": "15단계: 파일 입출력과 스트림", "en": "Step 15: File I/O & Streams" },
      "fullContent": {
        "ko": `
# 15단계: 파일 입출력과 스트림

파일 시스템과 상호작용하고 데이터를 읽고 쓰는 방법을 배웁니다.

### 1. File 클래스
간단한 파일 작업을 위한 정적 메서드를 제공합니다.
- \`WriteAllText\`, \`ReadAllText\`, \`Exists\`

### 2. Stream
데이터의 흐름을 다룹니다. 큰 파일을 다룰 때 유용합니다.
- \`FileStream\`, \`StreamReader\`, \`StreamWriter\`

\`\`\`csharp
using System.IO;

File.WriteAllText("data.txt", "Hello World");
string content = File.ReadAllText("data.txt");
\`\`\`
`,
        "en": `
# Step 15: File I/O & Streams

Learn how to interact with the file system and read/write data.

### 1. File Class
Provides static methods for simple file operations.

### 2. Streams
Handles data flow, useful for large files.
`
      },
      "code": "using System.IO;\n\nstring path = \"test.txt\";\nif (!File.Exists(path)) {\n    File.WriteAllText(path, \"Hello C# File I/O\");\n}\nstring text = File.ReadAllText(path);\nConsole.WriteLine(text);",
      "quiz": {
        "question": { "ko": "파일 입출력을 위해 사용해야 하는 네임스페이스는 무엇인가요?", "en": "Which namespace is used for file I/O?" },
        "validate": (code: string) => {
          if (code.includes('System.IO')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'System.IO' };
          return { passed: false, message: { ko: 'System.IO를 입력하세요.', en: 'Enter System.IO.' }, output: 'Error' };
        }
      }
    },
    "step16": {
      "title": { "ko": "16단계: 확장 메서드와 익명 형식", "en": "Step 16: Extension Methods" },
      "fullContent": {
        "ko": `
# 16단계: 확장 메서드와 익명 형식

### 1. 확장 메서드 (Extension Methods)
기존 클래스의 소스 코드를 수정하지 않고 새로운 메서드를 추가합니다.
- \`static\` 클래스에 정의하며, 첫 번째 파라미터에 \`this\` 키워드를 사용합니다.

### 2. 익명 형식 (Anonymous Types)
이름 없는 클래스를 즉석에서 생성합니다.
\`\`\`csharp
var person = new { Name = "Alice", Age = 25 };
\`\`\`
`,
        "en": `
# Step 16: Extension Methods & Anonymous Types

### 1. Extension Methods
Add new methods to existing classes without modifying their source code.
- Defined in a \`static\` class with the \`this\` keyword on the first parameter.

### 2. Anonymous Types
Create simple objects without defining a class.
`
      },
      "code": "public static class IntExtensions {\n    public static bool IsEven(this int i) => i % 2 == 0;\n}\n\nint n = 10;\nConsole.WriteLine(n.IsEven()); // 확장 메서드 호출",
      "quiz": {
        "question": { "ko": "확장 메서드를 정의할 때 첫 번째 매개변수 앞에 붙이는 키워드는 무엇인가요?", "en": "Which keyword is placed before the first parameter when defining an extension method?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('this')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'this' };
          return { passed: false, message: { ko: 'this 키워드를 입력하세요.', en: 'Enter the this keyword.' }, output: 'Error' };
        }
      }
    },
    "step17": {
      "title": { "ko": "17단계: 리플렉션과 특성(Attribute)", "en": "Step 17: Reflection & Attributes" },
      "fullContent": {
        "ko": `
# 17단계: 리플렉션과 특성(Attribute)

### 1. 리플렉션 (Reflection)
실행 중에 객체의 타입 정보(메서드, 속성 등)를 조사하는 기능입니다.

### 2. 특성 (Attribute)
코드에 메타데이터를 추가합니다. \`[]\` 대괄호를 사용합니다.
- \`[Serializable]\`, \`[Obsolete]\` 등

\`\`\`csharp
[Obsolete("이 메서드는 더 이상 사용되지 않습니다.")]
void OldMethod() { }
\`\`\`
`,
        "en": `
# Step 17: Reflection & Attributes

### 1. Reflection
Inspect type information (methods, properties, etc.) at runtime.

### 2. Attributes
Add metadata to your code using \`[]\` brackets.
`
      },
      "code": "using System.Reflection;\n\nType t = typeof(string);\nConsole.WriteLine($\"Type Name: {t.Name}\");\n\nMethodInfo[] methods = t.GetMethods();\nConsole.WriteLine($\"Method count: {methods.Length}\");",
      "quiz": {
        "question": { "ko": "특성(Attribute)을 사용할 때 코드를 감싸는 기호는 무엇인가요?", "en": "Which symbols are used to wrap an Attribute in code?" },
        "validate": (code: string) => {
          if (code.includes('[') && code.includes(']')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: '[]' };
          return { passed: false, message: { ko: '대괄호 []를 입력하세요.', en: 'Enter brackets [].' }, output: 'Error' };
        }
      }
    },
    "step18": {
      "title": { "ko": "18단계: 가비지 컬렉션과 메모리", "en": "Step 18: GC & Memory" },
      "fullContent": {
        "ko": `
# 18단계: 가비지 컬렉션과 메모리

C#은 **가비지 컬렉터(GC)**가 자동으로 메모리를 관리합니다.

### 1. IDisposable 인터페이스
파일이나 네트워크 연결 같은 비관리 리소스를 해제할 때 사용합니다.

### 2. using 문
블록이 끝나면 자동으로 \`Dispose()\`를 호출하여 리소스를 안전하게 해제합니다.

\`\`\`csharp
using (var stream = new FileStream("test.txt", FileMode.Open)) {
    // 작업 수행...
} // 여기서 자동으로 닫힘
\`\`\`
`,
        "en": `
# Step 18: GC & Memory Management

C# manages memory automatically using the **Garbage Collector (GC)**.

### 1. IDisposable Interface
Used to release unmanaged resources like files or network connections.

### 2. using Statement
Ensures that \`Dispose()\` is called automatically when the block is exited.
`
      },
      "code": "class Resource : IDisposable {\n    public void Dispose() => Console.WriteLine(\"Released!\");\n}\n\nusing (var r = new Resource()) {\n    Console.WriteLine(\"Using...\");\n}",
      "quiz": {
        "question": { "ko": "리소스를 자동으로 해제하기 위해 사용하는 문장의 이름은 무엇인가요?", "en": "What is the name of the statement used to automatically release resources?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('using')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'using' };
          return { passed: false, message: { ko: 'using 문을 입력하세요.', en: 'Enter the using statement.' }, output: 'Error' };
        }
      }
    },
    "step19": {
      "title": { "ko": "19단계: .NET 라이브러리 활용", "en": "Step 19: .NET Libraries" },
      "fullContent": {
        "ko": `
# 19단계: .NET 라이브러리 활용

현대적인 C# 개발에서 필수적인 라이브러리들을 익힙니다.

### 1. JSON 처리 (System.Text.Json)
객체를 JSON으로 변환(직렬화)하거나 그 반대(역직렬화)를 수행합니다.

### 2. HTTP 통신 (HttpClient)
웹 API와 데이터를 주고받습니다.

\`\`\`csharp
var json = JsonSerializer.Serialize(myObj);
var client = new HttpClient();
\`\`\`
`,
        "en": `
# Step 19: .NET Libraries

Master essential libraries for modern C# development.

### 1. JSON (System.Text.Json)
Serialize and deserialize objects to/from JSON.

### 2. HTTP (HttpClient)
Communicate with Web APIs.
`
      },
      "code": "using System.Text.Json;\n\nvar person = new { Name = \"Tom\", Age = 30 };\nstring json = JsonSerializer.Serialize(person);\nConsole.WriteLine(json);",
      "quiz": {
        "question": { "ko": "객체를 JSON 문자열로 바꾸는 과정을 무엇이라고 하나요?", "en": "What is the process of converting an object into a JSON string called?" },
        "validate": (code: string) => {
          const c = code.toLowerCase();
          if (c.includes('직렬화') || c.includes('serialization')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Serialization' };
          return { passed: false, message: { ko: '직렬화(Serialization)를 입력하세요.', en: 'Enter Serialization.' }, output: 'Error' };
        }
      }
    },
    "step20": {
      "title": { "ko": "20단계: C# 마스터 프로젝트", "en": "Step 20: C# Master Project" },
      "fullContent": {
        "ko": `
# 20단계: C# 마스터 프로젝트

지금까지 배운 모든 지식을 활용하여 실전 프로젝트를 구상하고 구현합니다.

### 추천 프로젝트 주제:
1. **콘솔 기반 RPG 게임**: 클래스, 상속, 인터페이스 활용
2. **파일 관리 도구**: 파일 I/O, LINQ 활용
3. **날씨 대시보드**: HttpClient, JSON 활용
4. **간단한 채팅 서버**: 비동기 프로그래밍, 이벤트 활용

### 다음 단계:
- **ASP.NET Core**: 웹 백엔드 개발
- **Unity**: 게임 개발
- **WPF / MAUI**: 데스크톱 및 모바일 앱 개발
`,
        "en": `
# Step 20: C# Master Project

Apply everything you've learned to build a real-world project.

### Recommended Project Ideas:
1. **Console RPG**: Use classes, inheritance, and interfaces.
2. **File Manager**: Use File I/O and LINQ.
3. **Weather Dashboard**: Use HttpClient and JSON.
4. **Chat Server**: Use Async programming and Events.

### What's Next?
- **ASP.NET Core**: Web backend development.
- **Unity**: Game development.
- **WPF / MAUI**: Desktop and mobile app development.
`
      },
      "code": "// C# Master Path Completed!\nConsole.WriteLine(\"Congratulations on completing the C# course!\");",
      "quiz": {
        "question": { "ko": "C#을 사용하여 게임을 개발할 때 가장 널리 쓰이는 엔진은 무엇인가요?", "en": "Which engine is most widely used for game development with C#?" },
        "validate": (code: string) => {
          if (code.toLowerCase().includes('unity')) return { passed: true, message: { ko: '정답입니다!', en: 'Correct!' }, output: 'Unity' };
          return { passed: false, message: { ko: 'Unity를 입력하세요.', en: 'Enter Unity.' }, output: 'Error' };
        }
      }
    }
  }
};

siteLangs.forEach(sl => {
  newLangs.forEach(l => {
    if (!LESSON_CONTENT[sl]) LESSON_CONTENT[sl] = {};
    if (!LESSON_CONTENT[sl]![l]) LESSON_CONTENT[sl]![l] = {};
    
    allSteps.forEach(step => {
      const data = newLangsData[l][step];
      if (!LESSON_CONTENT[sl]![l]![step]) {
        LESSON_CONTENT[sl]![l]![step] = {
          content: data.fullContent 
            ? data.fullContent[sl]
            : (sl === 'ko' 
              ? `# ${data.title.ko}\n\n${data.desc.ko}\n\n### 핵심 예제 코드\n` +
                `\`\`\`${l === 'c' ? 'c' : l === 'cpp' ? 'cpp' : 'csharp'}\n${data.code}\n\`\`\``
              : `# ${data.title.en}\n\n${data.desc.en}\n\n### Core Example Code\n` +
                `\`\`\`${l === 'c' ? 'c' : l === 'cpp' ? 'cpp' : 'csharp'}\n${data.code}\n\`\`\``),
          quiz: data.quiz || {
            question: {
              ko: `[${data.title.ko}] 배운 내용을 바탕으로 코드를 작성해보세요.`,
              en: `[${data.title.en}] Write code based on what you learned.`
            },
            hints: {
              ko: ['기본 문법을 준수하세요.', '공식 문서를 참고하세요.', '정답은 없습니다. 자유롭게 작성해보세요.'],
              en: ['Follow basic syntax.', 'Refer to the official documentation.', 'There is no single answer. Write freely.']
            },
            validate: (code: string) => {
              return { passed: true, message: { ko: '훌륭합니다!', en: 'Excellent!' }, output: 'Success' };
            }
          }
        };
      }
    });
  });
});

siteLangs.forEach(sl => {
  langs.forEach(l => {
    if (!LESSON_CONTENT[sl]) LESSON_CONTENT[sl] = {};
    if (!LESSON_CONTENT[sl]![l]) LESSON_CONTENT[sl]![l] = {};
    
    advancedSteps.forEach(step => {
      const data = advancedContentData[step];
      if (!LESSON_CONTENT[sl]![l]![step]) {
        LESSON_CONTENT[sl]![l]![step] = {
          content: sl === 'ko' 
            ? `# ${data.title.ko}\n\n${data.desc.ko}\n\n### 핵심 예제 코드\n` +
              `\`\`\`${l === 'python' ? 'python' : l === 'java' ? 'java' : 'javascript'}\n${data.code[l]}\n\`\`\``
            : `# ${data.title.en}\n\n${data.desc.en}\n\n### Core Example Code\n` +
              `\`\`\`${l === 'python' ? 'python' : l === 'java' ? 'java' : 'javascript'}\n${data.code[l]}\n\`\`\``,
          quiz: {
            question: {
              ko: `[${data.title.ko}] 배운 내용을 바탕으로 코드를 작성해보세요.`,
              en: `[${data.title.en}] Write code based on what you learned.`
            },
            hints: {
              ko: ['고급 개념을 활용하세요.', '공식 문서를 참고하세요.', '정답은 없습니다. 자유롭게 작성해보세요.'],
              en: ['Use advanced concepts.', 'Refer to the official documentation.', 'There is no single answer. Write freely.']
            },
            validate: (code: string) => {
              return { passed: true, message: { ko: '훌륭합니다!', en: 'Excellent!' }, output: 'Success' };
            }
          }
        };
      }
    });
  });
});
