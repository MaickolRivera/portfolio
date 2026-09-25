type SwitchOptionProps<T> = {
    selectedValue: T;
    setSelectedValue: (value: T) => void;
  
    options: React.ReactNode[];
    values: T[];
    onSelected?: (value: T) => void;
  };
  
  export default function SwitchOption<T>({
    selectedValue,
    setSelectedValue,
    options,
    values,
    onSelected,
  }: SwitchOptionProps<T>) {
    const handleSelected = (value: T) => {
      setSelectedValue(value);
      onSelected?.(value);
    };
  
    return (
      <div className="py-0.5 px-1 border-1 text-xs items-center flex gradient-menu border-edge rounded-lg">
        {options.map((option, index) => {
          const value = values[index];
          const isSelected = value === selectedValue;
  
          return (
            <button
              aria-label={String(value)}
              key={index}
              onClick={() => handleSelected(value)}
              className={`${
                isSelected ? "bg-selected" : " opacity-35"
              } cursor-pointer px-3.5 py-2 rounded-md`}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  }
  