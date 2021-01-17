const easing = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
};

type Options = {
  easing?: keyof typeof easing;
  duration?: number | keyof typeof duration;
  delay?: number
};

export default {
  easing,
  duration,
  create: (props: string[], options: Options = {}) => {
    const getDuration = () => {
      if (!options.duration) return duration.shortest;
      if (typeof options.duration === 'number') return options.duration;
      return duration[options.duration];
    };

    const getEasing = () => {
      if (!options.easing) return easing.easeInOut;
      return easing[options.easing];
    };

    return props
      .map(prop => `${prop} ${getDuration()}ms ${getEasing()} ${options.delay || 0}ms`)
      .join(',');
  }
};
