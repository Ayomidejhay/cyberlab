interface StyleConfig {
    transform: string;
    opacity: string;
    zIndex: string;
  }
  
  interface PositionStyles {
    [key: string]: StyleConfig;
  }
  
  export const basePositions: PositionStyles = {
    front: {
      transform: 'translateY(0) rotate(0deg)',
      opacity: '1',
      zIndex: '30'
    },
    middle: {
      transform: 'translateY(24px) rotate(2deg)',
      opacity: '0.6',
      zIndex: '20'
    },
    back: {
      transform: 'translateY(48px) rotate(4deg)',
      opacity: '0.3',
      zIndex: '10'
    }
  };
  
  export const transitionStyles = {
    next: {
      front: {
        transform: 'translateY(-32px) rotate(-5deg)',
        opacity: '0',
        zIndex: '30'
      },
      middle: {
        transform: 'translateY(0) rotate(0deg)',
        opacity: '1',
        zIndex: '30'
      },
      back: {
        transform: 'translateY(24px) rotate(2deg)',
        opacity: '0.6',
        zIndex: '20'
      }
    },
    prev: {
      front: {
        transform: 'translateY(24px) rotate(2deg)',
        opacity: '0.6',
        zIndex: '20'
      },
      middle: {
        transform: 'translateY(48px) rotate(4deg)',
        opacity: '0.3',
        zIndex: '10'
      },
      back: {
        transform: 'translateY(-32px) rotate(5deg)',
        opacity: '1',
        zIndex: '30'
      }
    }
  };