type ArrowProps = {
    className?: string,
    size?: string
}

export function Arrow({className = "", size = "10"}: ArrowProps){
    return(
        <svg className={`${className}`} width={`${size}`} viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34 2L18 19L2 2" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

type DocumentProps ={
    className?: string
}

export function Document({className}:DocumentProps){
    return(
        <svg className={className} width="15" height="15" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5V13C5 13.5304 5.21071 14.0391 5.58579 14.4142C5.96086 14.7893 6.46957 15 7 15H13M5 5V3C5 2.46957 5.21071 1.96086 5.58579 1.58579C5.96086 1.21071 6.46957 1 7 1H11.586C11.8512 1.00006 12.1055 1.10545 12.293 1.293L16.707 5.707C16.8946 5.89449 16.9999 6.1488 17 6.414V13C17 13.5304 16.7893 14.0391 16.4142 14.4142C16.0391 14.7893 15.5304 15 15 15H13M5 5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19H11C11.5304 19 12.0391 18.7893 12.4142 18.4142C12.7893 18.0391 13 17.5304 13 17V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

type GithubProps = {
    size?: number;
    className?: string;
  };
  
export function Github({ size = 17, className = "pt-0.5" }: GithubProps) {
    return (
        
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" strokeWidth="2" color="currentColor" viewBox="0 0 24 24" width={size}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87m0-2c-3 .973-5.5 0-7-3"></path></svg>
    );
  }

type LineProps ={
    classList?: string
}

export function Line({classList = ""}: LineProps){
    return(
        <svg className={`${classList}`} width="63" height="7" viewBox="0 0 63 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62.8868 3.5L60 6.38675L57.1132 3.5L60 0.613249L62.8868 3.5ZM60 3.5V4H0V3.5V3H60V3.5Z" fill="url(#paint0_linear_365_700)"/>
            <defs>
            <linearGradient id="paint0_linear_365_700" x1="60" y1="4" x2="0" y2="4" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9E9E9E"/>
            <stop offset="1" stopColor="#383838"/>
            </linearGradient>
            </defs>
        </svg>
    )
}

type LinkProps ={
    size?: number;
    className?: string;
}

export function Link({size = 16, className = ""} : LinkProps){
    return(
        <svg className={className}
        xmlns="http://www.w3.org/2000/svg" 
        width={size}
        height={size}
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71">
            </path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71">
            </path>
        </svg>
    )
}

type MoonProps = {
  size?: number;
  className?: string;
};

export function Moon({ size = 30, className = "" }: MoonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M13.3984 0.0133483C13.6185 -0.0204991 13.7542 0.0144466 13.8526 0.0686169C14.0312 0.167223 14.1596 0.28634 14.2533 0.426135C14.3295 0.54002 14.384 0.68878 14.3932 0.901105C14.3987 1.0294 14.3649 1.1743 14.2308 1.35707L14.217 1.37606L14.2032 1.39679C13.6564 2.23325 13.2428 3.12205 12.9666 4.06178C12.6904 5.00198 12.5545 5.98592 12.5556 7.00828C12.5556 9.89286 13.576 12.3741 15.6004 14.3987C17.6249 16.4235 20.1058 17.4437 22.9904 17.4437C23.991 17.4437 24.9822 17.2988 25.9609 17.0102C26.9299 16.7244 27.8079 16.3215 28.5912 15.8012L28.5929 15.8029C28.7846 15.6809 28.9399 15.6466 29.0747 15.6526C29.295 15.6626 29.4607 15.7135 29.5911 15.7856L29.6084 15.7943L29.624 15.8029C29.7547 15.8683 29.8532 15.9606 29.9313 16.1017C29.9803 16.1905 30.024 16.3413 29.9849 16.6095L29.9832 16.6285L29.9796 16.6475C29.5893 20.4945 27.9628 23.6631 25.0818 26.1968C22.1922 28.7381 18.8551 30 15.0322 30C10.8105 30 7.27212 28.5498 4.36251 25.639C1.45262 22.7279 0.00111769 19.188 0 14.967L0.0138155 14.2502C0.16046 10.6984 1.4065 7.61409 3.75631 4.96334C6.25962 2.13955 9.44959 0.491852 13.3708 0.0168024L13.3984 0.0133483ZM10.0548 2.65415C7.59609 3.66293 5.59525 5.27587 4.06891 7.47807C2.53294 9.69428 1.76745 12.1998 1.76849 14.967C1.76849 18.6205 3.07003 21.7642 5.65261 24.347C8.23543 26.9301 11.3786 28.2314 15.0322 28.2314C17.7995 28.2314 20.3044 27.4652 22.5207 25.9292C24.7226 24.4027 26.3372 22.4041 27.346 19.9462L28.0092 18.328L26.3132 18.7528C25.7506 18.8936 25.1886 19.0055 24.6276 19.0897C24.081 19.1716 23.5354 19.2123 22.9904 19.2123C19.598 19.2123 16.7351 18.0293 14.3517 15.6457C11.9687 13.2625 10.7862 10.4006 10.7871 7.01001C10.7871 6.46512 10.8295 5.9173 10.9114 5.37095C10.9955 4.81039 11.1077 4.24913 11.2482 3.68698L11.6713 1.9892L10.0548 2.65415Z" stroke="currentColor" strokeWidth="1" fill="currentColor"/>
    </svg>
  );
}

type SunProps = {
  size?: number;
  className?: string;
};

export function Sun({ size = 32, className = "" }: SunProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M1 16H2.66667M16 1V2.66667M29.3333 16H31M16 29.3333V31M5.33333 5.33333L6.5 6.5M26.6667 5.33333L25.5 6.5M25.5 25.5L26.6667 26.6667M6.5 25.5L5.33333 26.6667M9.33333 16C9.33333 17.7681 10.0357 19.4638 11.286 20.714C12.5362 21.9643 14.2319 22.6667 16 22.6667C17.7681 22.6667 19.4638 21.9643 20.714 20.714C21.9643 19.4638 22.6667 17.7681 22.6667 16C22.6667 14.2319 21.9643 12.5362 20.714 11.286C19.4638 10.0357 17.7681 9.33333 16 9.33333C14.2319 9.33333 12.5362 10.0357 11.286 11.286C10.0357 12.5362 9.33333 14.2319 9.33333 16Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

type ProjectsIconProps = {
    size?: number;
    color?: string;
    className?: string;
  };

export function ProjectsIcon({size = 30, color = "currentColor", className = "" }: ProjectsIconProps) {
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
