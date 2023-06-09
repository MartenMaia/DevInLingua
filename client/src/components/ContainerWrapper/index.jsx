function ContainerWrapper({children}) {
  return ( 
    <div className="w-full min-h-full flex justify-center items-start">
      <div className="w-4/5 w-full h-full">
        {children}
      </div>
    </div>
  );
}

export default ContainerWrapper;