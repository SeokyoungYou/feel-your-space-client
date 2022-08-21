import { useGetVideoInfosQuery } from "generated";

export default function Videos() {
  //   const { data, error, loading } = useGetVideoInfosQuery();
  //   console.log(data);
  //   if (loading) return <div>Loading...</div>;
  //   if (error) return <div>{error?.message}</div>;
  const box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div className="grid grid-cols-2 p-5 overflow-scroll md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-7 bg-myNavy text-myGray h-2/5 lg:h-screen lg:w-3/5 2xl:w-2/3">
      {box.map((box) => (
        <div className="h-60 bg-myRed" key={box}></div>
      ))}
    </div>
  );
}
