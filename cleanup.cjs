const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

// 1. Update TopicId
content = content.replace(
  /export type TopicId = 'step0' \| 'step1' \| 'step2' \| 'step3' \| 'step4' \| 'step5' \| 'step6' \| 'step7' \| 'step8' \| 'step9' \| 'step10' \| 'step11' \| 'step12' \| 'step13' \| 'step14' \| 'step15' \| 'step16' \| 'step17' \| 'step18' \| 'step19' \| 'step20';/,
  "export type TopicId = 'step0' | 'step1' | 'step2' | 'step3' | 'step4' | 'step5' | 'step6' | 'step7' | 'step8' | 'step9' | 'step10';"
);

// 2. Update TOPICS array
content = content.replace(
  /  \{ id: 'step11', title: \{ ko: '11단계: 고급 자료구조', en: 'Step 11: Advanced Data Structures' \} \},\n  \{ id: 'step12', title: \{ ko: '12단계: 알고리즘 기초', en: 'Step 12: Basic Algorithms' \} \},\n  \{ id: 'step13', title: \{ ko: '13단계: 디자인 패턴', en: 'Step 13: Design Patterns' \} \},\n  \{ id: 'step14', title: \{ ko: '14단계: 동시성과 멀티스레딩', en: 'Step 14: Concurrency & Multithreading' \} \},\n  \{ id: 'step15', title: \{ ko: '15단계: 네트워크와 API', en: 'Step 15: Network & API' \} \},\n  \{ id: 'step16', title: \{ ko: '16단계: 데이터베이스 연동', en: 'Step 16: Database Integration' \} \},\n  \{ id: 'step17', title: \{ ko: '17단계: 테스트와 디버깅', en: 'Step 17: Testing & Debugging' \} \},\n  \{ id: 'step18', title: \{ ko: '18단계: 프레임워크 기초', en: 'Step 18: Framework Basics' \} \},\n  \{ id: 'step19', title: \{ ko: '19단계: 배포와 CI\/CD', en: 'Step 19: Deployment & CI\/CD' \} \},\n  \{ id: 'step20', title: \{ ko: '20단계: 마스터 프로젝트', en: 'Step 20: Master Project' \} \},\n/,
  ""
);

// 3. Remove advancedSteps and advancedContentData
const advancedStart = content.indexOf("const advancedSteps: TopicId[] = ['step11'");
const advancedEnd = content.indexOf("const newLangs: ProgLang[] = ['c', 'cpp', 'csharp'];");
if (advancedStart !== -1 && advancedEnd !== -1) {
  content = content.substring(0, advancedStart) + content.substring(advancedEnd);
}

// 4. Update allSteps
content = content.replace(
  /const allSteps: TopicId\[\] = \['step0', 'step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8', 'step9', 'step10', 'step11', 'step12', 'step13', 'step14', 'step15', 'step16', 'step17', 'step18', 'step19', 'step20'\];/,
  "const allSteps: TopicId[] = ['step0', 'step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8', 'step9', 'step10'];"
);

// 5. Remove advanced loop at the end
const loopStart = content.indexOf("    advancedSteps.forEach(step => {");
if (loopStart !== -1) {
  // Find the end of the loop
  const loopEnd = content.indexOf("    });\n  });\n});", loopStart);
  if (loopEnd !== -1) {
    content = content.substring(0, loopStart) + content.substring(loopEnd + 8);
  }
}

fs.writeFileSync('src/data.ts', content, 'utf8');
console.log('Done');
