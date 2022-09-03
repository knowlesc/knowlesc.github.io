export function Heading({
  children,
}: React.PropsWithChildren<{}>): JSX.Element {
  return (
    <h1>
      <style jsx global>
        {`
          .heading-text {
            border-bottom: 5px solid #bb2f2f;
          }
        `}
      </style>
      <span className="heading-text">{children}</span>
    </h1>
  );
}
