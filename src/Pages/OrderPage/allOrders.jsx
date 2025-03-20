export default function Allorders(props) {
  return (
    <>
      <div className="flex justify-around mt-[20px] mb-[20px] ">
        <div className="cursor-pointer  border-2 rounded-[15px] p-[4px] ">
          <img src="/all.png" alt="All Image" width="50" height="50" />
          <h6 className="text-center mb-[15px]">All</h6>
        </div>
        <div className="cursor-pointer border-2 rounded-[15px] p-[4px]">
          <img src="/sandwich.png" alt="All Image" width="50" height="50" />
          <h6 className="text-center">Sandwich</h6>
        </div>
        <div className="cursor-pointer border-2 rounded-[15px] p-[4px]">
          <img src="/salad.png" alt="Salad" width="50" height="50" />
          <h6 className="text-center">Salad</h6>
        </div>
        <div className="cursor-pointer border-2 rounded-[15px] p-[4px] ">
          <img src="/gelato.png" alt="All Image" width="50" height="50" />
          <h6 className="text-center">Dessert</h6>
        </div>
        <div className="cursor-pointer border-2 rounded-[15px] p-[4px] ">
          <img src="/lemonade.png" alt="All Image" width="50" height="50" />
          <h6 className="text-center">Beverages</h6>
        </div>
        <div className="cursor-pointer border-2 rounded-[15px]  p-[4px]">
          <img src="/burger.png" alt="All Image" width="50" height="50" />
          <h6 className="text-center">Burger</h6>
        </div>
        <div className="cursor-pointer border-2 rounded-[15px] p-[4px]">
          <img src="/goulash.png" alt="All Image" width="50" height="50" />
          <h6 className="text-center">Stew</h6>
        </div>
        <div className="cursor-pointer border-2 rounded-[15px] p-[4px] ">
          <img src="/pasta.png" alt="All Image" width="50" height="50" />
          <h6 className="text-center">Pasta</h6>
        </div>
        <div className="cursor-pointer border-2 rounded-[15px] p-[4px]">
          <img src="/sushi.png" alt="All Image" width="50" height="50" />
          <h6 className="text-center">Sushi</h6>
        </div>
        <div className="cursor-pointer border-2 rounded-[15px] p-[4px] ">
          <img src="/fruit.png" alt="All Image" width="50" height="50" />
          <h6 className="text-center">Fruits</h6>
        </div>
      </div>
    </>
  );
}
