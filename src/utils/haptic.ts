export type HapticType = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error';

export const hapticFeedback = (type: HapticType = 'light') => {
  if ('vibrate' in navigator) {
    switch (type) {
      case 'light':
        navigator.vibrate(50);
        break;
      case 'medium':
        navigator.vibrate(100);
        break;
      case 'heavy':
        navigator.vibrate(200);
        break;
      case 'success':
        navigator.vibrate([50, 50, 50]);
        break;
      case 'warning':
        navigator.vibrate([100, 50, 100]);
        break;
      case 'error':
        navigator.vibrate([200, 100, 200, 100, 200]);
        break;
      default:
        navigator.vibrate(50);
    }
  }
};
