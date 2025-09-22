import React, { useEffect, useRef } from 'react';

interface MobileControlsProps {
  onStepLeft: () => void;
  onStepRight: () => void;
  onHoldLeft: () => void;
  onHoldRight: () => void;
}

// Large transparent touch zones for mobile.
// Shows only via CSS media query (added inline style tags for now) below 820px width.
export const MobileControls: React.FC<MobileControlsProps> = ({ onStepLeft, onStepRight, onHoldLeft, onHoldRight }) => {
  const leftHoldRef = useRef<number | null>(null);
  const rightHoldRef = useRef<number | null>(null);

  const startHold = (side: 'left' | 'right') => {
    const tick = () => {
      side === 'left' ? onHoldLeft() : onHoldRight();
  const handle = window.setTimeout(tick, 110); // repeat interval
      if (side === 'left') leftHoldRef.current = handle; else rightHoldRef.current = handle;
    };
    tick();
  };

  const endHold = (side: 'left' | 'right') => {
    const ref = side === 'left' ? leftHoldRef : rightHoldRef;
    if (ref.current) {
      clearTimeout(ref.current);
      ref.current = null;
    }
  };

  useEffect(() => {
    const cancelAll = () => { endHold('left'); endHold('right'); };
    window.addEventListener('mouseup', cancelAll);
    window.addEventListener('touchend', cancelAll);
    window.addEventListener('touchcancel', cancelAll);
    return () => {
      window.removeEventListener('mouseup', cancelAll);
      window.removeEventListener('touchend', cancelAll);
      window.removeEventListener('touchcancel', cancelAll);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (min-width: 821px) { .mc-zone { display: none; } }
        .mc-zone { position: fixed; bottom: 0; width: 32%; height: 38%; z-index: 1200; }
        .mc-left { left: 0; }
        .mc-right { right: 0; }
        .mc-visual { position:absolute; inset:0; background: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.18), rgba(255,255,255,0.05)); opacity:0.18; transition: opacity .25s; border-top:1px solid rgba(255,255,255,0.18); }
        .mc-zone:active .mc-visual, .mc-zone.mc-active .mc-visual { opacity:0.35; }
        .mc-arrow { position:absolute; top:55%; transform:translateY(-50%); font-size:clamp(32px,9vw,60px); color:rgba(255,255,255,0.8); text-shadow:0 2px 6px rgba(0,0,0,0.6); user-select:none; }
        .mc-left .mc-arrow { left:24%; }
        .mc-right .mc-arrow { right:24%; }
      `}</style>

      <div
        className="mc-zone mc-left"
        onClick={onStepLeft}
        onMouseDown={() => startHold('left')}
        onMouseUp={() => endHold('left')}
        onTouchStart={(e) => { e.preventDefault(); startHold('left'); }}
        onTouchEnd={() => endHold('left')}
      >
        <div className="mc-visual" />
        <div className="mc-arrow">⟵</div>
      </div>

      <div
        className="mc-zone mc-right"
        onClick={onStepRight}
        onMouseDown={() => startHold('right')}
        onMouseUp={() => endHold('right')}
        onTouchStart={(e) => { e.preventDefault(); startHold('right'); }}
        onTouchEnd={() => endHold('right')}
      >
        <div className="mc-visual" />
        <div className="mc-arrow">⟶</div>
      </div>
    </>
  );
};
