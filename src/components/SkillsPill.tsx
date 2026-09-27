type SkillsPillProps = {
    icon?: React.ReactNode;
    text?: string;
    span?: 1 | 2;
}

export default function SkillsPill ({icon, text, span = 1}: SkillsPillProps) {
    return(
        <div className={`
            flex items-center flex-row gap-1 px-2 py-1.5
            border rounded-lg border-line
            transition-colors duration-200
            opacity-70 hover:opacity-80 bg-chip
            
            ${span === 2 ? 'col-span-2' : ''}`}>
            {icon && (
                <span className="flex size-4 shrink-0 items-center justify-center [&>svg]:size-3">
                    {icon}
                </span>
            )}
            <p className="text-xs pt-0.5">{text}</p>
        </div>
    )
}
