export default function figma() {
  return (
    <div className="bg-[#1D1E2C] min-h-full flex-col items-center h-[1028px]">
      {/*Body*/}
      <div className="text-center  mr-5 pt-28 justify-center bg-[#1D1E2C] ">
        <p className="text-[#23A6F0] text-size-16-px mb-4">Welcome</p>
        <h1 className="text-white text-5xl font-bold mb-6">Selling on the </h1>
          <h1 className="text-white text-5xl font-bold mb-6">internet like a pro</h1>
          <p className="text-gray-100 text-lg mb-10">We know how large objects are act,but things on a <br /> small scale just do not act that way.</p>
       <div className="flex-justify-centre space-x-4">
<button className="bg-blue-500 text-white rounded text-lg px-8 py-3 hover:text-blue-600"> Get Quote Now</button>
       <button className="text-blue-500 border border-blue-500 py-3 px-8 rounded-lg hover:bg-blue-700 hover:text-white">Learn More</button>
       </div>
      </div>
      <center>
<div className="flex space-x-8 h-[292px] w-[1046px] gap-8 mt-[150px]" >
    {/*card1*/}
    <div className="w-[328px] h-[292px] mb-4 bg-white flex flex-col"> 
   <div className="w-[70px] h-[76px] bg-red-300 rounded-lg mt-[22px] ml-[20px]"> </div>
   <h3 className="w-[135px] h-[24px] font-bold mt-4 ml-4 text-gray-900 leading-5">training Courses</h3>
  <hr className="bg-red-500 w-[50px] h-[3px] ml-6 mt-6"></hr>
 <p className="h-[60px] w-[222px] mt-4 ml-6 text-justify text-[#737373] ">The gradual accumulation of 
    information about atomic and 
     small-scale behaviour...</p>
     </div>


     <div className="w-[328px] h-[292px] mb-4 bg-white flex flex-col"> 
   <div className="w-[70px] h-[76px] bg-green-300 rounded-lg mt-[22px] ml-[20px]"> </div>
   <h3 className="w-[168px] h-[24px] font-bold mt-4 ml-4 text-gray-900 text-balance whitespace-break-spaces">2,769 online Courses</h3>
  <hr className="bg-red-500 w-[50px] h-[3px] ml-6 mt-6"></hr>
 <p className="h-[60px] w-[222px] mt-4 ml-6 text-justify text-[#737373] ">The gradual accumulation of 
    information about atomic and 
     small-scale behaviour...</p>
     </div>


     <div className="w-[328px] h-[292px]  mb-4 bg-[#23A6F0] flex flex-col"> 
   <div className="w-[70px] h-[76px] bg-white rounded-lg mt-[22px] ml-[20px]"> </div>
   <h3 className="w-[135px] h-[24px] font-bold mt-4 ml-4 text-gray-900 leading-5">training Courses</h3>
  <hr className="bg-white w-[50px] h-[3px] ml-6 mt-6"></hr>
 <p className="h-[60px] w-[222px] mt-4 ml-6 text-justify text-white ">The gradual accumulation of 
    information about atomic and 
     small-scale behaviour...</p>
     </div>
</div>
</center>
</div>
  );
}
