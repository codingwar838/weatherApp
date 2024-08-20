import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-4 w-[250px] bg-white shadow-lg" />
        <Skeleton className="h-4 w-[180px] bg-white shadow-lg" />
        <Skeleton className="h-4 w-[150px] bg-white shadow-lg" />
        <Skeleton className="h-4 w-[100px] bg-white shadow-lg" />
        <Skeleton className="h-4 w-[80px] bg-white shadow-lg" />
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-4 w-[250px] bg-white shadow-lg" />
        <Skeleton className="h-4 w-[180px] bg-white shadow-lg" />
        <Skeleton className="h-4 w-[150px] bg-white shadow-lg" />
        <Skeleton className="h-4 w-[100px] bg-white shadow-lg" />
        <Skeleton className="h-4 w-[80px] bg-white shadow-lg" />
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-4 w-[250px] bg-white shadow-lg" />
        <Skeleton className="h-4 w-[180px] bg-white shadow-lg" />
        <Skeleton className="h-4 w-[150px] bg-white shadow-lg" />
        <Skeleton className="h-4 w-[100px] bg-white shadow-lg" />
        <Skeleton className="h-4 w-[80px] bg-white shadow-lg" />
      </div>
    </div>
  );
};

export default SkeletonLoader;
