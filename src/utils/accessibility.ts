import React, { useRef, useEffect, useState } from 'react';
import { createFocusTrap } from 'focus-trap';

export function useFocusTrap(active: boolean = true) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let trap: any = null;
    if (ref.current && active) {
      trap = createFocusTrap(ref.current, {
        allowOutsideClick: true,
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
        fallbackFocus: ref.current,
      });
      trap.activate();
    }

    return () => {
      if (trap) {
        trap.deactivate();
      }
    };
  }, [active]);

  return ref;
}

export function useAriaLive() {
  const [announcements, setAnnouncements] = useState<string[]>([]);

  const announce = (message: string) => {
    setAnnouncements(prev => [...prev, message]);
    // Clear after announcement
    setTimeout(() => {
      setAnnouncements(prev => prev.slice(1));
    }, 1000);
  };

  return {
    announce,
    announcements: announcements.join(' ')
  };
}

let idCounter = 0;

export function useId(prefix: string = 'id') {
  const [id] = useState(() => `${prefix}-${++idCounter}`);
  return id;
}

export function ScreenReaderOnly({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return React.createElement(
    'div',
    {
      style: {
        position: 'absolute',
        left: '-10000px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      },
      ...props,
    },
    children
  );
}
