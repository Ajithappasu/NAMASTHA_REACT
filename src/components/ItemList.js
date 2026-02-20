import { RES_LOGO_URL } from "../utils/constants";
const ItemList = (props) => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-4 space-y-6">
      {props.data.card.card.itemCards.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-start border-b pb-4"
        >
          <div  className="w-28 h-24 flex-shrink-0" ><img    className="w-full h-full object-cover rounded-lg" src={RES_LOGO_URL+item.card.info.imageId} /></div>
      <div className=" bottom-1 right-1 bg-white text-green-600 font-bold px-3 py-1 text-sm rounded-md shadow-md hover:bg-green-600 hover:text-white transition"><span>Add +</span></div>
          <div className="w-3/4">
            <p className="text-lg font-semibold">
              {item.card.info.name}
            </p>

            <p className="text-green-600 font-medium mt-1">
              ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
            </p>

            <p className="text-gray-600 text-sm mt-2">
              {item.card.info.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
