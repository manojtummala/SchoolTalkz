import Select from "react-select";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import Image from "next/image";
import ImageUploading from "react-images-uploading";
import Add from "@/asset/images/Add";
import ArrowLeft from "@/asset/images/ArrowLeft";
import Photo from "@/asset/images/Photo";
import X from "@/asset/images/X";
import Cross from "@/asset/images/Cross";
import See from "@/asset/images/See";
import Clock from "@/asset/images/Clock";
import ArrowUpRight from "@/asset/images/ArrowUpRight";
import ArrowDown from "@/asset/images/ArrowDown";


function AddPostSchoolFeed() {


  // enable post button
  const [comment, setComment] = useState("");
  const [search, setSearch] = useState("");
  const [isValid, setIsValid] = useState(false);
  const validate = () => {
    return comment.length && search.length;
  };
  useEffect(() => {
    const isValid = validate();
    setIsValid(isValid);
  }, [comment, search]);

  // for modal
  const [modal, setModal] = useState(false);
  function showModal() {
    setModal(!modal);
  }
  // for post
  const [postOptions] = useState([
    {
      option:'Whole Class'
    }
  ])
const [showOption,setShowOption] = useState(false)
function option(){
setShowOption(!showOption);
}
  const [post, setPost] = useState(false);
  function showPost() {
    setPost(!post);
    setModal(!modal);
  }
  const [selectedOption, setSelectedOption] = useState(null);
  // display image
  const [selectFile,setSelectFile]= useState([])
  const onSelectFile = (e) =>{
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file)=>{
      return URL.createObjectURL(file)
      
    });
    setSelectFile(imagesArray)
  };

  // for poll
  const [pollOptions] = useState([
    {
      option:'2 Days'
    }
  ])
const [showPollOption,setShowPollOption] = useState(false)
function PollOption(){
setShowPollOption(!showPollOption);
}
  const [poll,setPoll] = useState(false);
  function showPoll(){
    setPoll(!poll);
    setModal(!modal);
  }

  // for achievement
  const [achievement,setAchievement] = useState(false)
  function showAchievement(){
    setAchievement(!achievement);
    setModal(!modal)
  }


  return (
    <>
      <div
        className={`flex flex-col items-center justify-center cursor-pointer`}
        onClick={showModal}
      >
        <div className={"bg-gradient-blue rounded-full p-3 cursor-pointer"}>
          <Add />
        </div>
        <p>Add Post</p>
      </div>
      {modal && (
        <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
          <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed "></div>
          <div className="absolute top-36 left-3/4   bg-white w-1/6 h-max py-4 px-2 text-center  rounded-md">
            <div className={`flex justify-end`} onClick={showModal}>
              <X />
            </div>
            <p className={`mt-8 cursor-pointer font-medium`} onClick={showPost}>
              Create Post
            </p>
            <hr />
            <p className={`mt-4 cursor-pointer font-medium`} onClick={showPoll}>Create Poll</p>
<hr/>
<p className={`mt-4 cursor-pointer font-medium`} onClick={showAchievement}>Create Achievement</p>
          </div>
        </div>
      )}

      {post && (
        <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
          <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay "></div>
          <form className="absolute top-28 left-1/4 ml-20 bg-white w-1/2 h-3/4  text-center  rounded-md rounded-tr-sm">
            <div className="flex justify-between p-4" onClick={showPost}>
              <ArrowLeft />
              <p className={`font-bold ml-12`}>Create Post</p>
              {/* disabled till not filled  */}
              <button
                className={`disabled:bg-myGray text-white py-2 px-4 rounded-md bg-gradient-blue `}
                disabled={!validate()}
              >
                Post Now
              </button>
            </div>
            <hr />
            <div className="overflow-y-scroll h-5/6">
              <div className="flex flex-col justify-start mt-12 border-2 mx-8 my-4 rounded-sm h-1/4 ">
                <input
                  type="text"
                  placeholder="Whats on your mind. Share it with your peers."
                  className={`w-3/4 p-2 outline-none`}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div className={`mx-8 flex justify-start bg-white`}>
              <div
className={`flex w-max bg-myGray p-2 rounded-md h-max `}
>
<input 
className={`hidden`} 
type="file" 
id="file" 
onChange={onSelectFile}
multiple 
accept="image/png, image/jpeg, image/jpg"
/>
<label htmlFor="file" className={`block lg:flex`}>
  <span className={`mr-2 cursor-pointer`}>
    Add Photos / Video
  </span>
  <Photo />
</label>
</div>
<div className="ml-12">
  {selectFile &&
selectFile.map((image,index)=>{
  return (

    <div key={image} className={`flex `}>
    <img src={image} alt="" width={100} height={100}  />
    <span className="bg-red-600 w-max  h-max p-1 rounded-full cursor-pointer" onClick={()=> setSelectFile(selectFile.filter((e)=> e!==image))}><Cross/></span>
    </div>
  )
  
})
  }
</div>
              </div>

              <div className="flex flex-col justify-start mt-12 border-2 m-8 rounded-sm ">
                <input
                  type="text"
                  className={`w-3/4 p-2 outline-none`}
                  placeholder="Create or search for labels"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  defaultValue='Whole School'
                />
              </div>

           <div className="h-full relative">
           <div className="flex bg-myGray items-center w-max   m-8 p-2 rounded-md cursor-pointer" onClick={option} >
                <See />
<p>Whole school</p>
<ArrowDown/>

              </div>
              <div className=" bg-transparent w-1/3 h-3/4 absolute left-8  top-16">
                {showOption && (
<div className="">
  {
    postOptions.map((postOption,i)=>(
      <div key={i} className="w-full h-1/2 shadow-2xl  mb-8 flex flex-col  justify-center rounded-md">
      <div className="flex justify-around items-center w-full mb-2">
<p>{postOption.option}</p>
<input type="radio" name="same" id="same" />
      </div>

      </div>
    ))
  }
</div>
                )}
              </div>
           </div>
           
            </div>
          </form>
        </div>

      )}

      {poll && (
         <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
         <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay "></div>
         <form className="absolute top-28 left-1/4 ml-20 bg-white w-1/2 h-3/4  text-center  rounded-md rounded-tr-sm">
           <div className="flex justify-between p-4" onClick={showPoll}>
             <ArrowLeft />
             <p className={`font-bold ml-12`}>Create Poll</p>
             {/* disabled till not filled  */}
             <button
               className={`bg-myGray text-white py-2 px-4 rounded-md disabled:bg-gradient-blue `}
               disabled={!validate()}
             >
               Post Now
             </button>
           </div>
           <hr />
           <div className="overflow-y-scroll h-5/6">
             <div className="flex flex-col justify-start mt-12 border-2 mx-8 my-4 rounded-sm h-1/4 ">
               <input
                 type="text"
                 placeholder="Whats on your mind. Share it with your peers."
                 className={`w-3/4 p-2 outline-none`}
                 value={comment}
                 onChange={(e) => setComment(e.target.value)}
               />
             </div>
<div className="flex flex-col justify-start mt-12 border-2 m-8 rounded-sm ">
<input
              type='text'
              placeholder="+ Add options"
              className={`w-3/4 p-2 outline-none`}
              />
</div>
<div className="flex flex-col justify-start mt-12 border-2 m-8 rounded-sm ">
<input
              type='text'
              placeholder="+ Add options"
              className={`w-3/4 p-2 outline-none`}
              />
</div>

             <div className="flex flex-col justify-start mt-12 border-2 m-8 rounded-sm ">
            
               <input
                 type="text"
                 className={`w-3/4 p-2 outline-none`}
                 placeholder="Create or search for labels"
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
               />
             </div>

            <div className="flex w-3/4 justifyy-between">
            <div className="h-full relative ">
           <div className="flex bg-myGray items-center w-max   m-8 p-2 rounded-md cursor-pointer" onClick={option} >
                <See />
<p>Whole school</p>
<ArrowDown/>

              </div>
              <div className=" bg-transparent w-full h-3/4 absolute left-8  top-24">
                {showOption && (
<div className="">
  {
    postOptions.map((postOption,i)=>(
      <div key={i} className="w-full h-1/2 shadow-2xl  mb-8 flex flex-col  justify-center rounded-md">
      <div className="flex justify-around items-center w-full mb-2">
<p>{postOption.option}</p>
<input type="radio" name="same" id="same" />
      </div>

      </div>
    ))
  }
</div>
                )}
              </div>
           </div>
           <div className="h-full relative">
           <div className="flex bg-myGray items-center w-max   m-8 p-2 rounded-md cursor-pointer" onClick={ PollOption} >
                <Clock/>
<p>Whole school</p>
<ArrowDown/>

              </div>
              <div className=" bg-transparent w-full h-3/4 absolute left-8  top-24">
                {showPollOption && (
<div className="">
  {
    pollOptions.map((pollOption,i)=>(
      <div key={i} className="w-full h-1/2 shadow-2xl  mb-8 flex flex-col  justify-center rounded-md">
      <div className="flex justify-around items-center w-full mb-2">
<p>{pollOption.option}</p>
<input type="radio" name="same" id="same" />
      </div>

      </div>
    ))
  }
</div>
                )}
              </div>
           </div>
            </div>
           </div>
         </form>
       </div>
      )}

{achievement && (
        <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed">
          <div className="w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay "></div>
          <form className="absolute top-28 left-1/4 ml-20 bg-white w-1/2 h-3/4  text-center  rounded-md rounded-tr-sm">
            <div className="flex justify-between p-4" onClick={showAchievement}>
              <ArrowLeft />
              <p className={`font-bold ml-12`}>Create Achievement</p>
              {/* disabled till not filled  */}
              <button
                className={`disabled:bg-myGray text-white py-2 px-4 rounded-md bg-gradient-blue `}
                disabled={!validate()}
              >
                Post Now
              </button>
            </div>
            <hr />
            <div className="overflow-y-scroll h-5/6">
              <div className="flex flex-col justify-start mt-12 border-2 mx-8 my-4 rounded-sm h-1/4 ">
                <input
                  type="text"
                  placeholder="Whats on your mind. Share it with your peers."
                  className={`w-3/4 p-2 outline-none`}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div className={`mx-8 flex justify-start bg-white`}>
              <div
className={`flex w-max bg-myGray p-2 rounded-md h-max `}
>
<input 
className={`hidden`} 
type="file" 
id="file" 
onChange={onSelectFile}
multiple 
accept="image/png, image/jpeg, image/jpg"
/>
<label htmlFor="file" className={`block lg:flex`}>
  <span className={`mr-2 cursor-pointer`}>
    Add Photos / Video
  </span>
  <Photo />
</label>
</div>
<div className="ml-12">
  {selectFile &&
selectFile.map((image,index)=>{
  return (

    <div key={image} className={`flex `}>
    <img src={image} alt="" width={100} height={100}  />
    <span className="bg-red-600 w-max  h-max p-1 rounded-full cursor-pointer" onClick={()=> setSelectFile(selectFile.filter((e)=> e!==image))}><Cross/></span>
    </div>
  )
  
})
  }
</div>
              </div>

              <div className="flex flex-col justify-start mt-12 border-2 m-8 rounded-sm ">
                <input
                  type="text"
                  className={`w-3/4 p-2 outline-none`}
                  placeholder="Create or search for labels"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  defaultValue='Whole School'
                />
              </div>

           <div className="h-full relative">
           <div className="flex bg-myGray items-center w-max   m-8 p-2 rounded-md cursor-pointer" onClick={option} >
                <See />
<p>Whole school</p>
<ArrowDown/>

              </div>
              <div className=" bg-transparent w-1/3 h-3/4 absolute left-8  top-16">
                {showOption && (
<div className="">
  {
    postOptions.map((postOption,i)=>(
      <div key={i} className="w-full h-1/2 shadow-2xl  mb-8 flex flex-col  justify-center rounded-md">
      <div className="flex justify-around items-center w-full mb-2">
<p>{postOption.option}</p>
<input type="radio" name="same" id="same" />
      </div>

      </div>
    ))
  }
</div>
                )}
              </div>
           </div>
           
            </div>
          </form>
        </div>

      )}
    </>
  );
}

export default AddPostSchoolFeed;
