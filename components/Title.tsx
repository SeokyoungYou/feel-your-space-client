import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
export default function Title() {
  const route = useRouter();
  return (
    <div className="flex flex-col ">
      <h1 className="text-5xl ">Feel your space</h1>
      {route.pathname === "/" ? (
        <div className="flex items-center mt-1">
          <h1 className="text-5xl ">Fill your</h1>
          {/* change search div to input tag */}
          <div className="flex items-center w-56 h-10 gap-1 pl-1 ml-3 border-2 rounded-lg text-opacity-60 text-myLightNavy text-md border-myNavy">
            <FontAwesomeIcon icon={faSearch} />
            <span>Search</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
