const Button = ({title, variant}) => {
    let buttonStyles = {};
    if(variant === "text"){
        buttonStyles = {
            margin: "10px",
            borderRadius: "4px",
            border: "none",
            color: "blue",
            backgroundColor: "transparent",
            fontSize: "25px",
            padding: "10px"
        }
    }
    else if(variant === "contained"){
        buttonStyles = {
            margin: "10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "blue",
            color: "white",
            fontSize: "25px",
            padding: "10px"
        }
    }
    else if(variant === "outlined"){
        buttonStyles = {
            margin: "10px",
            borderRadius: "4px",
            border: "blue 1px solid",
            backgroundColor: "transparent",
            color: "blue",
            fontSize: "25px",
            padding: "10px"
        }
    }
    else{
        buttonStyles = {
            display: "none"
        }
    }
    return(
        <div>
            <button style={buttonStyles}>
                {title}
            </button>
        </div>
    )
}

export default Button

/*Paklausiau chat gpt ar imanoma sutrumpinti koda, tai cia ateiciai!
const Button = ({ title, variant }) => {
  let buttonStyles = {
    margin: "10px",
    borderRadius: "4px",
    border: "none",
    color: "blue",
    fontSize: "25px",
    padding: "10px"
  };

  switch (variant) {
    case "text":
      buttonStyles.backgroundColor = "transparent";
      break;
    case "contained":
      buttonStyles.backgroundColor = "blue";
      buttonStyles.color = "white";
      break;
    case "outlined":
      buttonStyles.backgroundColor = "transparent";
      buttonStyles.border = "blue 1px solid";
      break;
    default:
      buttonStyles.display = "none";
  }

  return (
    <div>
      <button style={buttonStyles}>{title}</button>
    </div>
  );
};

export default Button;
*/
//Galima buvo padaryti simple kur variable kaip class