const BookmarkPlayListSkeleton = () => {
  return (
    <section className="flex animate-pulse flex-col">
      <div className="mt-5 flex h-[36vh] w-full flex-wrap">
        <div className="flex w-full gap-4">
          <div className="flex w-1/2 flex-col gap-1">
            <div className="aspect-[2/1] w-full rounded-md bg-gray-200" />
            <div className="aspect-[2/1] h-4 w-40 rounded-md bg-gray-200" />
            <div className="aspect-[2/1] h-4 w-24 rounded-md bg-gray-200" />
          </div>
          <div className="flex w-1/2 flex-col gap-1">
            <div className="aspect-[2/1] w-full rounded-md bg-gray-200" />
            <div className="aspect-[2/1] h-4 w-40 rounded-md bg-gray-200" />
            <div className="aspect-[2/1] h-4 w-24 rounded-md bg-gray-200" />
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="flex w-1/2 flex-col gap-1">
            <div className="aspect-[2/1] w-full rounded-md bg-gray-200" />
            <div className="aspect-[2/1] h-4 w-40 rounded-md bg-gray-200" />
            <div className="aspect-[2/1] h-4 w-24 rounded-md bg-gray-200" />
          </div>
          <div className="flex w-1/2 flex-col gap-1">
            <div className="aspect-[2/1] w-full rounded-md bg-gray-200" />
            <div className="aspect-[2/1] h-4 w-40 rounded-md bg-gray-200" />
            <div className="aspect-[2/1] h-4 w-24 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookmarkPlayListSkeleton;
