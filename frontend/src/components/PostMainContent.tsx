const randomNumber: number = Math.floor(Math.random() * 10) + 1;

const PostMainContent = () => {
  return (
    <div className="w-full">
      <img src={`https://i.pravatar.cc/900?img=${randomNumber}`} className="w-full object-cover min-h-10 " />
    </div>
  );
};

export default PostMainContent;
