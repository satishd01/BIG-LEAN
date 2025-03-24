import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BreadCrumbs: React.FC = () => {
  const pathname = usePathname();
  const paths = pathname?.split("/") ?? [];

  const createCrumbs = (paths: string[]): string[] => {
    return paths.reduce<string[]>((acc, segment, index) => {
      const path = index === 0 ? segment : `${acc[index - 1]}/${segment}`;
      acc.push(path);
      return acc;
    }, []);
  };

  const breads = createCrumbs(paths);
  const myBreads = breads.slice(0, paths.length - 1);

  if (breads.length === 0 || breads[0] === "/") return null;

  return (
    <div className="w-full max-w-[1300px] max-xl:px-3 mx-auto py-2 text-center flex gap-1 justify-start items-center">
      {myBreads.map((path, index) => (
        <React.Fragment key={`breadcrumb-${index}`}>
          <Link
            href={path || "/"}
            className="capitalize text-sm text-[#001942] font-light max-sm:text-[10px]"
          >
            {path === ""
              ? "Home"
              : decodeURIComponent(
                  path.split("/").pop()?.split("-").join(" ") ?? ""
                )}
          </Link>
          {index < myBreads.length - 1 && (
            <span className="mx-2">/</span>
          )}
        </React.Fragment>
      ))}
      <span className="capitalize text-sm max-sm:text-[10px] text-[#E70F0F] line-clamp-1 text-start cursor-pointer">
        {decodeURIComponent(
          breads[breads.length - 1]?.split("/").pop()?.split("-").join(" ") ??
            ""
        )}
      </span>
    </div>
  );
};

export default BreadCrumbs;
