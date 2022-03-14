const Button = ({ children }) => {
   return (
      <button className="fs-[16px] bg-green-var md:ml-[45px] md:bg-gray-var md:hover:bg-green-var md:py-2">
         {children}
      </button>
   );
}

export default Button;