'use client';

import { FALLBACK_REPLY, MOCK } from '@/constants';
import type { Msg } from '@/types';
import { useEffect, useRef, useState } from 'react';

export function useChatMessages(onSend?: (v: string) => void) {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<Msg[]>([]);
  const [thinking, setThinking] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bottomRef.current;
    if (!el) return;
    const container = el.parentElement;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  }, [messages, thinking]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || thinking) return;
    setMessages(prev => [...prev, { role: 'user', text: trimmed }]);
    setValue('');
    setThinking(true);
    onSend?.(trimmed);
    setTimeout(() => {
      const key = Object.keys(MOCK).find(k => trimmed.toLowerCase().includes(k.toLowerCase()));
      const reply = key ? MOCK[key] : FALLBACK_REPLY;
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      setThinking(false);
    }, 1100);
  };

  return {
    value,
    setValue,
    messages,
    thinking,
    focused,
    setFocused,
    inputRef,
    bottomRef,
    sendMessage,
    hasInput: value.length > 0,
    hasMessages: messages.length > 0,
  };
}
