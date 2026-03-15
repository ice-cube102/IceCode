import React, { useState } from 'react';
import { X, Mail, Lock, User, Chrome, Snowflake } from 'lucide-react';
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInAnonymously } from '../firebase';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onClose();
    } catch (err: any) {
      setError(err.message || '인증에 실패했습니다.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch (err: any) {
      setError(err.message || '구글 로그인에 실패했습니다.');
    }
  };

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      onClose();
    } catch (err: any) {
      setError(err.message || '게스트 로그인에 실패했습니다.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1e1e1e] border border-[#333333] rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#888] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Snowflake className="w-8 h-8 text-[#007acc]" />
              <span className="text-2xl font-bold text-white tracking-tight">IceCode</span>
            </div>
            <p className="text-[#888] text-sm">
              코딩의 기초부터 실전까지, 차갑고 명확하게 배우는 프로그래밍 학습 플랫폼
            </p>
          </div>

          <h2 className="text-xl font-bold text-white mb-2 text-center">
            {isSignUp ? '회원가입' : '로그인'}
          </h2>
          <p className="text-[#888] text-sm text-center mb-8">
            {isSignUp ? '새로운 계정을 만들어보세요.' : '다시 오신 것을 환영합니다!'}
          </p>

          <form onSubmit={handleEmailAuth} className="space-y-4">
            <div>
              <div className="relative">
                <Mail className="w-5 h-5 text-[#888] absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="email" 
                  placeholder="이메일" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#2d2d2d] border border-[#333333] text-white rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-[#007acc] transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <Lock className="w-5 h-5 text-[#888] absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="password" 
                  placeholder="비밀번호" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#2d2d2d] border border-[#333333] text-white rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-[#007acc] transition-colors"
                  required
                />
              </div>
            </div>

            {error && <p className="text-red-400 text-xs text-center">{error}</p>}

            <button 
              type="submit"
              className="w-full bg-[#007acc] hover:bg-[#0098ff] text-white font-medium py-2.5 rounded-lg transition-colors"
            >
              {isSignUp ? '가입하기' : '로그인'}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between">
            <div className="h-px bg-[#333333] flex-1"></div>
            <span className="text-xs text-[#666] px-4">또는</span>
            <div className="h-px bg-[#333333] flex-1"></div>
          </div>

          <div className="mt-6 space-y-3">
            <button 
              onClick={handleGoogleLogin}
              type="button"
              className="w-full flex items-center justify-center space-x-2 bg-white text-black font-medium py-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Chrome className="w-5 h-5" />
              <span>Google로 계속하기</span>
            </button>
            <button 
              onClick={handleGuestLogin}
              type="button"
              className="w-full flex items-center justify-center space-x-2 bg-[#2d2d2d] border border-[#333333] text-white font-medium py-2.5 rounded-lg hover:bg-[#3d3d3d] transition-colors"
            >
              <User className="w-5 h-5" />
              <span>게스트로 계속하기</span>
            </button>
          </div>

          <div className="mt-8 text-center text-sm text-[#888]">
            {isSignUp ? '이미 계정이 있으신가요? ' : '계정이 없나요? '}
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-[#007acc] hover:underline font-medium"
            >
              {isSignUp ? '로그인하세요.' : '회원가입 하세요.'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
