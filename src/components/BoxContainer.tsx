type BoxContainerProps = {
  children?: React.ReactNode;
  title?: string;
  className?: string;
};

export function BoxContainer({ children, title, className }: BoxContainerProps) {
  return (
    <div className={`${className}
      flex flex-col items-center gap-8 py-8 h-auto
      overflow-hidden border-1 rounded-xl
      
      border-line bg-surface
    `}>
      <p className="text-2xl/7 text-center text-gradient font-semibold">{title}</p>
      {children} 
    </div>
  );
}

export function SmallBox({ children, title, className }: BoxContainerProps) {
  return (
    <div className={`${className}
      flex flex-col justify-center items-center gap-0.5 py-6 h-auto md:h-full
      overflow-hidden border-1 rounded-xl font-semibold
      
      border-line bg-surface
    `}>
      <p className="text-4xl text-center text-gradient mb-1">{title}</p>
      {children}
    </div>
  );
}

export function MainBox({ className }: BoxContainerProps) {
  return (
    <div className={`${className}
      flex flex-row justify-center items-center gap-5 h-40 md:h-full  py-8
      overflow-hidden border-1 rounded-xl
      
      border-line bg-surface
    `}>
      <img className="w-18 md:w-20 rounded-lg top-[28%] left-[44%]" src="/Maickol.webp" alt="Maickol Rivera" />
      
      <div className="flex flex-col gap-1">
        <p className="md:text-2xl/7 text-gradient text-lg/6 font-semibold">MAICKOL STEVEN <br /> RIVERA OSPINA</p>
        <p className="text-xs md:text-sm text-muted">Desarrollador de Software</p>
      </div>
    </div>
  );
}