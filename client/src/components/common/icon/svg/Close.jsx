const Close = ({ ...r }) => {
    return(
      <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              fillRule="evenodd"
              viewBox="0 0 24 24"
              {...r}
          >
              <path
                  fill="#272727"
                  d="M12 10.586l4.243-4.243a1 1 0 111.414 1.414L13.414 12l4.243 4.243a1 1 0 11-1.414 1.414L12 13.414l-4.243 4.243a1 1 0 11-1.414-1.414L10.586 12 6.343 7.757a1 1 0 111.414-1.414L12 10.586z"
                  clipRule="evenodd"            
              ></path>            
          </svg>
    );}
  
  export default Close;