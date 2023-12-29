const Grip = () => {

  const line = <span className="border-t-2 border-b h-[2px] block mb-1 sm:mb-2"></span>;

  return <div className="flex flex-col justify-center w-6 md:w-12">
    <div className="gripper w-full">
      {line}
      {line}
      {line}
      {line}
    </div>
  </div>
}

export default Grip;
