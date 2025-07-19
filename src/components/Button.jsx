function Button(props) {
  return (
    <button {...props} className=" bg-gray-5000 P-2 rounded-md text-black">
      {props.children}
    </button>
  );
}

export default Button;
