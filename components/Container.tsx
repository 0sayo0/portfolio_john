interface ContainerProps {
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  const { children } = props;
  return (
    <div className="text-black w-full max-w-6xl px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6">
      {children}
    </div>
  );
}
