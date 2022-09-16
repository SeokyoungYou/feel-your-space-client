import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
export default function Title() {
  const route = useRouter();
  return (
    <div className="flex flex-col gap-2 mt-2 mb-5 lg:flex-row lg:items-center lg:gap-4">
      {route.pathname === "/" ? (
        <>
          <h1 className="text-5xl ">Feel your space,</h1>
          <div className="flex items-center">
            <h1 className="text-5xl ">Fill your</h1>
            {/* change search div to input tag */}
            <div className="flex items-center w-56 h-10 gap-1 pl-1 ml-3 border-2 rounded-lg text-opacity-60 text-myLightNavy text-md border-myNavy">
              <FontAwesomeIcon icon={faSearch} />
              {/* ✉️ Implement real search bar component */}
              <span>Search</span>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-5xl ">Feel your space</h1>
      )}
    </div>
  );
}
