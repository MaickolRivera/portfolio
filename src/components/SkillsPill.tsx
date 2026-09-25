type SkillsPillProps = {
    icon?: React.ReactNode;
    text?: string;
    span?: 1 | 2;
}

export default function SkillsPill ({icon, text, span = 1}: SkillsPillProps) {
    return(
        <div className={`flex items-center flex-row opacity-75 px-2.5 border-1 border-line rounded-lg gap-2 ${span === 2 ? 'col-span-2' : ''}`}>
            {icon}
            <p className="text-xs pt-3 pb-2 text-soft">{text}</p>
        </div>
    )
}