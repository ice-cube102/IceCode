import React, { useState, useEffect, useRef } from 'react';
import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code2, Terminal, BookOpen, Globe, ChevronRight, Menu, X, Play, Lightbulb, CheckCircle2, FileCode2, Frown, Lock, Snowflake, User } from 'lucide-react';
import { UI_STRINGS, PROGRAMMING_LANGUAGES, TOPICS, LESSON_CONTENT, SiteLang, ProgLang, TopicId } from './data';
import { auth, signOut } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import LoginModal from './components/LoginModal';

const ICON_MAP: Record<string, React.ElementType> = {
  python: Terminal,
  javascript: FileCode2,
  typescript: FileCode2,
  java: Code2,
};

export default function App() {
  const [siteLang, setSiteLang] = useState<SiteLang>('ko');
  const [selectedProgLang, setSelectedProgLang] = useState<ProgLang>('python');
  const [selectedTopic, setSelectedTopic] = useState<TopicId>('step0');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  const [unlockedSteps, setUnlockedSteps] = useState<Record<ProgLang, number>>({
    python: 0, javascript: 0, typescript: 0, java: 0
  });

  // Practice Modal State
  const [isPracticeOpen, setIsPracticeOpen] = useState(false);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [isPassed, setIsPassed] = useState(false);
  const [hintLevel, setHintLevel] = useState(0); // 0: none, 1: weak, 2: medium, 3: strong
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  // Cheat Modal State
  const [isCheatModalOpen, setIsCheatModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    setCode('');
    setOutput(null);
    setIsPassed(false);
    setHintLevel(0);
    setFeedbackMsg(null);
    setIsPracticeOpen(false);
    
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [selectedProgLang, selectedTopic]);

  const ui = UI_STRINGS[siteLang];
  const lesson = LESSON_CONTENT[siteLang]?.[selectedProgLang]?.[selectedTopic];
  const content = lesson?.content || 'Content missing.';
  const quiz = lesson?.quiz;

  const handleRunCode = () => {
    if (!quiz) return;
    
    const result = quiz.validate(code);
    
    if (result.isCheat) {
      setIsCheatModalOpen(true);
      setIsPracticeOpen(false);
      return;
    }

    setOutput(result.output);
    setIsPassed(result.passed);
    setFeedbackMsg(result.message[siteLang]);

    if (result.passed) {
      const currentIndex = TOPICS.findIndex(t => t.id === selectedTopic);
      setUnlockedSteps(prev => ({
        ...prev,
        [selectedProgLang]: Math.max(prev[selectedProgLang], currentIndex + 1)
      }));
    }
  };

  const handleNextStep = () => {
    const currentIndex = TOPICS.findIndex(t => t.id === selectedTopic);
    if (currentIndex < TOPICS.length - 1) {
      const nextIndex = currentIndex + 1;
      setSelectedTopic(TOPICS[nextIndex].id);
      
      // 다음 단계로 넘어갈 때, 다음 단계의 잠금을 해제합니다.
      setUnlockedSteps(prev => ({
        ...prev,
        [selectedProgLang]: Math.max(prev[selectedProgLang], nextIndex)
      }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;

      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newCode);

      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4;
      }, 0);
    }
  };

  const currentTopicIndex = TOPICS.findIndex(t => t.id === selectedTopic);
  const maxUnlockedIndex = unlockedSteps[selectedProgLang];
  const canProceed = !quiz || isPassed || currentTopicIndex < maxUnlockedIndex;

  return (
    <div className="flex h-screen bg-[#1e1e1e] text-[#d4d4d4] font-sans overflow-hidden selection:bg-[#264f78] selection:text-white">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* VS Code Activity Bar */}
      <div className="hidden lg:flex flex-col items-center w-12 bg-[#333333] border-r border-[#252526] py-4 z-30">
        <Snowflake className="w-6 h-6 text-[#007acc] mb-8" />
        <button className="p-2 text-white border-l-2 border-[#007acc] opacity-100">
          <BookOpen className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#252526] border-r border-[#333333] transform transition-transform duration-300 ease-in-out flex flex-col
        lg:translate-x-0 lg:static lg:block
        ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
        <div className="p-4 flex items-center justify-between lg:hidden border-b border-[#333333]">
          <div className="flex items-center space-x-2 text-[#007acc]">
            <Snowflake className="w-6 h-6" />
            <span className="text-lg font-bold tracking-tight">{ui.title}</span>
          </div>
          <button className="text-[#cccccc] hover:text-white transition-colors" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-3 py-4 flex-1 overflow-y-auto custom-scrollbar">
          <div className="space-y-1 mb-8">
            <h3 className="px-2 text-[11px] font-semibold text-[#cccccc] uppercase tracking-wider mb-2">
              {ui.languageToLearn}
            </h3>
            {PROGRAMMING_LANGUAGES.map(lang => {
              const Icon = ICON_MAP[lang.id] || Code2;
              const isSelected = selectedProgLang === lang.id;
              return (
                <button
                  key={lang.id}
                  onClick={() => {
                    setSelectedProgLang(lang.id as ProgLang);
                    setSelectedTopic('step0');
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-2 py-1.5 rounded transition-colors text-sm ${
                    isSelected 
                      ? 'bg-[#37373d] text-white font-medium' 
                      : 'text-[#cccccc] hover:bg-[#2a2d2e] hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#007acc]' : 'text-[#858585]'}`} />
                  <span>{lang.name}</span>
                </button>
              );
            })}
          </div>

          <div className="space-y-1">
            <h3 className="px-2 text-[11px] font-semibold text-[#cccccc] uppercase tracking-wider mb-2">
              {ui.curriculum}
            </h3>
            {TOPICS.map((topic, index) => {
              const isUnlocked = index <= unlockedSteps[selectedProgLang];
              const isSelected = selectedTopic === topic.id;
              
              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    if (isUnlocked) {
                      setSelectedTopic(topic.id);
                      setIsSidebarOpen(false);
                    }
                  }}
                  disabled={!isUnlocked}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded text-sm transition-colors ${
                    isSelected
                      ? 'bg-[#04395e] text-white border-l-2 border-[#007acc]'
                      : isUnlocked
                        ? 'text-[#cccccc] hover:bg-[#2a2d2e] hover:text-white border-l-2 border-transparent'
                        : 'text-[#666666] cursor-not-allowed border-l-2 border-transparent'
                  }`}
                >
                  <span className="truncate text-left">{topic.title[siteLang]}</span>
                  {!isUnlocked && <Lock className="w-3 h-3 text-[#666666]" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen bg-[#1e1e1e] relative">
        {/* Top Navigation */}
        <header className="h-12 bg-[#1e1e1e] border-b border-[#333333] flex items-center justify-between px-4 flex-shrink-0 sticky top-0 z-20">
          <div className="flex items-center text-sm text-[#cccccc]">
            <button 
              className="lg:hidden p-1.5 -ml-1.5 mr-2 text-[#cccccc] hover:bg-[#2a2d2e] rounded transition-colors"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <span className="hidden sm:inline">{PROGRAMMING_LANGUAGES.find(l => l.id === selectedProgLang)?.name}</span>
            <ChevronRight className="w-4 h-4 mx-1 hidden sm:block opacity-50" />
            <span className="text-white">{TOPICS.find(t => t.id === selectedTopic)?.title[siteLang]}</span>
          </div>

          <div className="flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-3">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="w-7 h-7 rounded-full border border-[#333333]" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-[#2d2d2d] border border-[#333333] flex items-center justify-center">
                    <User className="w-4 h-4 text-[#888]" />
                  </div>
                )}
                <button onClick={() => signOut(auth)} className="text-xs text-[#888] hover:text-white transition-colors">로그아웃</button>
              </div>
            ) : (
              <button 
                onClick={() => setIsLoginModalOpen(true)} 
                className="text-xs bg-[#007acc] text-white px-3 py-1.5 rounded hover:bg-[#0098ff] transition-colors font-medium"
              >
                로그인
              </button>
            )}
            <div className="flex items-center space-x-2 bg-[#252526] px-2 py-1 rounded border border-[#333333] hover:border-[#444] transition-colors">
              <Globe className="w-3.5 h-3.5 text-[#cccccc]" />
              <select
                value={siteLang}
                onChange={(e) => setSiteLang(e.target.value as SiteLang)}
                className="bg-transparent text-[#cccccc] text-xs outline-none cursor-pointer appearance-none pr-2"
              >
                <option value="ko" className="bg-[#252526]">한국어</option>
                <option value="en" className="bg-[#252526]">English</option>
              </select>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main ref={mainContentRef} className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar scroll-smooth">
          <div className="max-w-4xl mx-auto pb-32">
            {/* Markdown Content */}
            <div className="prose prose-invert max-w-none prose-a:text-[#3794ff] prose-headings:text-white prose-strong:text-[#4fc1ff] prose-code:text-[#ce9178] prose-code:bg-[#2d2d2d] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-p:leading-relaxed prose-p:text-[#d4d4d4] prose-li:text-[#d4d4d4]">
              <Markdown
                components={{
                  code({node, inline, className, children, ...props}: any) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        {...props}
                        children={String(children).replace(/\n$/, '')}
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-md border border-[#333333] !bg-[#1e1e1e] !my-4"
                      />
                    ) : (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {content}
              </Markdown>
            </div>

            {/* Actions at the bottom of content */}
            <div className="mt-12 pt-8 border-t border-[#333333] flex items-center justify-between">
              {quiz ? (
                <button
                  onClick={() => setIsPracticeOpen(true)}
                  className="flex items-center space-x-2 bg-[#007acc] hover:bg-[#0098ff] text-white px-6 py-2.5 rounded text-sm font-medium transition-colors shadow-lg"
                >
                  <Code2 className="w-4 h-4" />
                  <span>{ui.startPractice}</span>
                </button>
              ) : (
                <div></div> // Spacer
              )}

              <button
                onClick={handleNextStep}
                disabled={!canProceed}
                className="flex items-center space-x-2 bg-[#2d2d2d] border border-[#333333] text-white px-5 py-2.5 rounded text-sm font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#3d3d3d]"
              >
                <span>{ui.nextStep}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Practice Modal */}
      {isPracticeOpen && quiz && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsPracticeOpen(false)} />
          
          <div className="relative w-full max-w-3xl bg-[#1e1e1e] border border-[#333333] rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#333333] bg-[#252526]">
              <div className="flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-[#007acc]" />
                <h2 className="text-sm font-medium text-[#cccccc]">{ui.practice}</h2>
              </div>
              <button onClick={() => setIsPracticeOpen(false)} className="text-[#858585] hover:text-white transition-colors p-1 rounded hover:bg-[#333333]">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto custom-scrollbar flex-1 space-y-5">
              <div className="bg-[#252526] border border-[#333333] rounded p-4">
                <p className="text-[#d4d4d4] text-sm leading-relaxed">
                  {quiz.question[siteLang]}
                </p>
              </div>

              <div className="relative group rounded overflow-hidden border border-[#333333] focus-within:border-[#007acc] transition-colors bg-[#1e1e1e]">
                <div className="absolute top-0 left-0 w-10 h-full bg-[#1e1e1e] border-r border-[#333333] flex flex-col items-center py-3 text-[#858585] text-xs font-mono select-none">
                  {code.split('\n').map((_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={ui.typeCode}
                  className="w-full min-h-[160px] pl-14 pr-4 py-3 bg-transparent text-[#9cdcfe] font-mono text-sm outline-none resize-y"
                  spellCheck={false}
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setHintLevel(prev => Math.min(prev + 1, 3))}
                  className="flex items-center space-x-1.5 text-xs font-medium text-[#cccccc] hover:text-white transition-colors px-3 py-1.5 rounded hover:bg-[#2a2d2e]"
                >
                  <Lightbulb className={`w-3.5 h-3.5 ${hintLevel > 0 ? 'text-[#d7ba7d]' : ''}`} />
                  <span>{ui.hint} {hintLevel > 0 ? `(${hintLevel}/3)` : ''}</span>
                </button>
                <button
                  onClick={handleRunCode}
                  className="flex items-center space-x-1.5 bg-[#0e639c] hover:bg-[#1177bb] text-white px-4 py-1.5 rounded text-sm font-medium transition-colors"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{ui.runCode}</span>
                </button>
              </div>

              {hintLevel > 0 && (
                <div className="space-y-2">
                  {quiz.hints[siteLang].slice(0, hintLevel).map((hint, idx) => (
                    <div key={idx} className="p-3 bg-[#2a2d2e] border-l-4 border-[#d7ba7d] text-sm text-[#cccccc] flex items-start space-x-2">
                      <span className="text-[#d7ba7d] font-bold mt-0.5">{idx + 1}.</span>
                      <span>{hint}</span>
                    </div>
                  ))}
                </div>
              )}

              {output !== null && (
                <div className="border border-[#333333] rounded overflow-hidden bg-[#1e1e1e]">
                  <div className="bg-[#252526] px-3 py-1.5 border-b border-[#333333] flex items-center">
                    <span className="text-xs uppercase tracking-wider text-[#cccccc]">{ui.output}</span>
                  </div>
                  
                  {output && (
                    <div className="p-4 font-mono text-sm whitespace-pre-wrap text-[#cccccc]">
                      {output}
                    </div>
                  )}
                  
                  {feedbackMsg && (
                    <div className={`p-3 border-t border-[#333333] flex items-start space-x-2 text-sm ${
                      isPassed ? 'bg-[#1e2e1e] text-[#4af626]' : 'bg-[#3a1d1d] text-[#f48771]'
                    }`}>
                      {isPassed ? <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> : <Frown className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      <span className="leading-relaxed">{feedbackMsg}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Cheat Modal */}
      {isCheatModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="max-w-sm w-full bg-[#252526] border border-[#333333] rounded-lg shadow-2xl p-8 text-center space-y-6">
            <div className="text-[80px] leading-none font-bold text-[#f14c4c] animate-bounce">
              :(
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              {ui.cheatMessage}
            </h1>
            <p className="text-[#cccccc] text-sm">
              {siteLang === 'ko' ? '정답을 직접 출력하는 꼼수는 허용되지 않습니다. 코드를 다시 작성해주세요.' : 'Directly printing the answer is not allowed. Please rewrite your code.'}
            </p>
            <button
              onClick={() => setIsCheatModalOpen(false)}
              className="mt-4 px-6 py-2 bg-[#0e639c] hover:bg-[#1177bb] text-white text-sm font-medium rounded transition-colors"
            >
              {ui.close}
            </button>
          </div>
        </div>
      )}

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
}
