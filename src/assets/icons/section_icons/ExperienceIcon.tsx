type ExperienceIconProps = {
    size?: number;
    color?: string;
    className?: string;
  };

export default function ExperienceIconCode({size = 30, color = "white", className = "" }: ExperienceIconProps) {
    return(
        <svg 
        width={size}
        height={size} 
        className={className} 
        viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_554_1116)">
            <path d="M3.125 9.37533C3.125 8.82279 3.34449 8.29289 3.73519 7.90219C4.12589 7.51149 4.6558 7.29199 5.20833 7.29199H19.7917C20.3442 7.29199 20.8741 7.51149 21.2648 7.90219C21.6555 8.29289 21.875 8.82279 21.875 9.37533V18.7503C21.875 19.3029 21.6555 19.8328 21.2648 20.2235C20.8741 20.6142 20.3442 20.8337 19.7917 20.8337H5.20833C4.6558 20.8337 4.12589 20.6142 3.73519 20.2235C3.34449 19.8328 3.125 19.3029 3.125 18.7503V9.37533Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.33325 7.29167V5.20833C8.33325 4.6558 8.55275 4.12589 8.94345 3.73519C9.33415 3.34449 9.86405 3.125 10.4166 3.125H14.5833C15.1358 3.125 15.6657 3.34449 16.0564 3.73519C16.4471 4.12589 16.6666 4.6558 16.6666 5.20833V7.29167" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5 12.5V12.5104" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.5 14C6.4079 15.4653 9.61878 16.2286 12.875 16.2286C16.1312 16.2286 19.3421 15.4653 22.25 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_554_1116">
                <rect width={size} height={size} fill={color}/>
                </clipPath>
            </defs>
        </svg>

        
    )
}