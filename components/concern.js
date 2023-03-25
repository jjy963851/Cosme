export default function Concern(props) {
    return (
      <div className="flex flex-wrap items-center justify-center py-1 px-3 mt-2 text-xs md:text-sm border border-black rounded-md font-semibold mr-2">
        <p className="">{props.name}</p>
      </div>
    );
  }