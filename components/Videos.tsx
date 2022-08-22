import { useGetVideoInfosQuery } from "generated";

export default function Videos() {
  //   const { data, error, loading } = useGetVideoInfosQuery();
  //   console.log(data);
  //   if (loading) return <div>Loading...</div>;
  //   if (error) return <div>{error?.message}</div>;
  const box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    // hover transition 자연스럽게
    <div className="grid grid-cols-2 overflow-scroll hover:h-4/5 lg:hover:h-screen p-7 md:grid-cols-3 2xl:grid-cols-4 gap-7 bg-myNavy text-myGray h-2/5 lg:h-screen lg:w-3/5 xl:w-2/3">
      {box.map((box) => (
        <div className="h-60" key={box}>
          <div className="relative h-3/5 bg-myRed">
            <span className="absolute px-3 rounded-sm bg-opacity-90 text-myBlack bg-myGray bottom-1 right-1">
              1:28:03
            </span>
          </div>
          <div>
            <span>Title</span>
            <div className="flex ">
              <div className="w-5 h-5 rounded-full bg-myRed"></div>
              <span> Channel name</span>
            </div>
            <div className="flex ">
              <span className="">123 Views ·</span>
              <span>9.5 K likes</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
