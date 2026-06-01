import { useState } from "react";
import { MenuItem } from "./MenuItem";

export const ItemCategory = (props) => {
  console.log(props);
  const { title, itemCards } = props?.data;

  const [showItems, setShowItems] = useState(false);

  const hendelClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="px-10 ">
      <h2
        className="pb-2  text-2xl border-2 pt-4 px-4 border-black rounded-2xl flex justify-between cursor-pointer"
        onClick={hendelClick}
      >
        {title} - ({itemCards.length})
        <span className="ml-4 text-5xl font-extrabold text-gray-500 ">
          {showItems ? "˄" : "˅"}
        </span>
      </h2>

      <ul className="py-3">
        {itemCards?.map((item) => {
          return showItems ? (
            <MenuItem menuInfo={item?.card?.info} key={item?.card?.info?.id} />
          ) : null;
        })}
      </ul>
    </div>
  );
};
export const NastedItemCategory = (props) => {
  return <div></div>;
};
