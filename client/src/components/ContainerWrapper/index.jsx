function ContainerWrapper({children}) {
  return ( 
    <div className="w-full min-h-full flex justify-center items-start">
      <div className="w-4/5 h-full grid grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}

export default ContainerWrapper;