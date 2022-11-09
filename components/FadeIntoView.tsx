import { PropsWithChildren, useEffect, useRef, useState } from "react";

export function FadeIntoView({
  children,
  ...props
}: PropsWithChildren<JSX.IntrinsicElements["div"]>): JSX.Element {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const current = ref.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(current);
        }
      });
    });
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  const { className, ...otherProps } = props;
  return (
    <div
      className={`${className} fade-in ${visible ? "visible" : ""}`}
      ref={ref}
      {...otherProps}
    >
      <style jsx>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(20vh);
            visibility: hidden;
            transition: opacity 0.3s ease-out, transform 0.6s ease-out;
            will-change: opacity, visibility;
          }

          .fade-in.visible {
            opacity: 1;
            transform: none;
            visibility: visible;
          }
        `}
      </style>
      {children}
    </div>
  );
}
