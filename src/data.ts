export type SiteLang = 'ko' | 'en';
export type ProgLang = 'python' | 'javascript' | 'typescript' | 'java';
export type TopicId = 'step0' | 'step1' | 'step2' | 'step3' | 'step4' | 'step5' | 'step6' | 'step7' | 'step8' | 'step9' | 'step10';

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
  }
};

export const PROGRAMMING_LANGUAGES = [
  { id: 'python', name: 'Python' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'java', name: 'Java' },
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
