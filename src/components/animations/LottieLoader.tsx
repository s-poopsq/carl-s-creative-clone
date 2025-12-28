import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

// Abstract loading animation data
const loadingAnimation = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: "Loading",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle 1",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [0], e: [360] }, { t: 120, s: [360] }] },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [100, 100, 100], e: [80, 80, 100] }, { t: 60, s: [80, 80, 100], e: [100, 100, 100] }, { t: 120, s: [100, 100, 100] }] }
      },
      shapes: [
        {
          ty: "el",
          s: { a: 0, k: [60, 60] },
          p: { a: 0, k: [0, 0] },
          nm: "Ellipse"
        },
        {
          ty: "st",
          c: { a: 0, k: [0.1, 0.1, 0.1, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 2 },
          lc: 2,
          lj: 1,
          ml: 4,
          nm: "Stroke"
        },
        {
          ty: "tr",
          p: { a: 0, k: [0, -40] },
          a: { a: 0, k: [0, 0] },
          s: { a: 0, k: [100, 100] },
          r: { a: 0, k: 0 },
          o: { a: 0, k: 100 }
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Circle 2",
      sr: 1,
      ks: {
        o: { a: 0, k: 60 },
        r: { a: 1, k: [{ t: 0, s: [0], e: [-360] }, { t: 120, s: [-360] }] },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "el",
          s: { a: 0, k: [80, 80] },
          p: { a: 0, k: [0, 0] },
          nm: "Ellipse"
        },
        {
          ty: "st",
          c: { a: 0, k: [0.3, 0.3, 0.3, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 1 },
          lc: 2,
          lj: 1,
          d: [{ n: "d", nm: "dash", v: { a: 0, k: 10 } }, { n: "g", nm: "gap", v: { a: 0, k: 10 } }],
          nm: "Stroke"
        }
      ]
    }
  ]
};

// Success checkmark animation
const successAnimation = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Success",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Check",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [0, 0, 100], e: [100, 100, 100] }, { t: 30, s: [100, 100, 100] }] }
      },
      shapes: [
        {
          ty: "sh",
          ks: {
            a: 0,
            k: {
              c: false,
              v: [[-15, 0], [-5, 10], [15, -10]],
              i: [[0, 0], [0, 0], [0, 0]],
              o: [[0, 0], [0, 0], [0, 0]]
            }
          }
        },
        {
          ty: "st",
          c: { a: 0, k: [0.1, 0.1, 0.1, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 },
          lc: 2,
          lj: 2
        },
        {
          ty: "tm",
          s: { a: 0, k: 0 },
          e: { a: 1, k: [{ t: 15, s: [0], e: [100] }, { t: 45, s: [100] }] },
          o: { a: 0, k: 0 }
        }
      ]
    }
  ]
};

interface LottieLoaderProps {
  type?: 'loading' | 'success';
  size?: number;
  className?: string;
}

const LottieLoader = ({ type = 'loading', size = 80, className = '' }: LottieLoaderProps) => {
  const animationData = type === 'loading' ? loadingAnimation : successAnimation;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <Lottie
        animationData={animationData}
        loop={type === 'loading'}
        style={{ width: size, height: size }}
      />
    </motion.div>
  );
};

export default LottieLoader;
