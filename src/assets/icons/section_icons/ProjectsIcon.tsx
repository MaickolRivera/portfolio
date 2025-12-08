type ProjectsCodeProps = {
    size?: number;
    color?: string;
    className?: string;
  };

export default function ProjectsCode({size = 30, color = "black", className = "" }: ProjectsCodeProps) {
    return(
        <svg 
        width={size}
        height={size} 
        className={className}
        viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.6629 22C30.2051 22 29.7884 20.7213 29.7884 19.2189V16.2666C30.051 16.0088 32 12.7758 32 12.4166C32 12.0574 30.051 8.82667 29.7884 8.56892V5.61417C29.7884 4.11175 30.2051 2.83333 28.6629 2.83333M5.33474 21.9403C3.79518 21.9403 4.21163 20.7213 4.21163 19.2189V16.2666C3.94897 16.0088 2 12.7758 2 12.4166C2 12.0574 3.94897 8.82667 4.21163 8.56892V5.61417C4.21408 4.11175 3.79763 2 5.33474 2M11.9998 12.4166H12.0223M21.975 12.4166H21.9975" 
            stroke={color} 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
        </svg>
    )
}