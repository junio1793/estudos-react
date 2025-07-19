function BlockOriginal(props) {
  return (
    <div className="space-y-4 p-6 bg-black rounded-md shadow flex flex-col bg-opacity-60">
      {props.children}
    </div>
  );
}
export default BlockOriginal;
