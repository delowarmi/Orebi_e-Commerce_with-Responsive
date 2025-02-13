import React, { useEffect, useState } from "react";
import Flex from "../Flex";
import Product from "../Product";

const Post = ({
  allData,
  cetagorysearchFilter,
  brandsearchFilter,
  filterprice,
  colList,
  products,
}) => {
  console.log(products);

  //filter-by category-------------------------------
  let [seeshort, setSeeshort] = useState([]); //-----see all
  let [catshow, setCatshow] = useState(true); //-------see less
  useEffect(() => {
    let filterslice = cetagorysearchFilter.slice(0, 6);
    setSeeshort(filterslice);
  }, [cetagorysearchFilter]);

  let handleshow = () => {
    setSeeshort(cetagorysearchFilter);
    setCatshow(false);
  };
  let handlehide = () => {
    let filterslice = cetagorysearchFilter.slice(0, 6);
    setSeeshort(filterslice);
    setCatshow(true);
  };
  //---------------------end-------------------------
  // filter by brand -----------------------------
  let [brandhort, setBrandhort] = useState([]); //---see all
  let [brandhow, setBrandhow] = useState(true); //---- see less
  useEffect(() => {
    let filterslice = brandsearchFilter.slice(0, 6);
    setBrandhort(filterslice);
  }, [brandsearchFilter]);

  let handlbrandeshow = () => {
    setBrandhort(brandsearchFilter);
    setBrandhow(false);
  };
  let handlebrandhide = () => {
    let filterslice = brandsearchFilter.slice(0, 6);
    setBrandhort(filterslice);
    setBrandhow(true);
  };
  //-----------------end--------------------
  // filter by price -------------------
  let [pricehort, setPricehort] = useState([]); //---see all
  let [pricehow, setPricehow] = useState(true); //see less

  useEffect(() => {
    let filterslice = filterprice.slice(0, 6);
    setPricehort(filterslice);
  }, [filterprice]);

  let handleprishow = () => {
    setPricehort(filterprice);
    setPricehow(false);
  };
  let handleprihide = () => {
    let filterslice = filterprice.slice(0, 6);
    setPricehort(filterslice);
    setPricehow(true);
  };
  // ---------------end---------------------------

  return (
    <>
      <div>
        <Flex
          className={`${colList == "Activelist" ? "gap-x-10 flex-col" : "gap-x-10  flex-wrap"}`}
        >
          {brandsearchFilter.length > 0 ? (
            <div>
              <div
                className={`${colList == "Activelist" ? "gap-x-10  flex-col" : "gap-x-10 flex flex-wrap"}`}
              >
                {brandhort.map((items) => (
                  <div className="w-full lg:w-[270px] pt-16">
                    <div className="w-full lg:w-[270px] bg-white relative group">
                      <Product
                        id={items.id}
                        imgSrc={items.thumbnail}
                        badge={items.discountPercentage}
                        heart={"Add to Wish List"}
                        Compare={"Compare"}
                        Cart={"Add to Cart"}
                        title={items.title}
                        prise={items.price}
                        color={items.brand}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                {brandhow ? (
                  brandsearchFilter.length > 6 && (
                    <button
                      onClick={handlbrandeshow}
                      className=" font-bold py-2 px-6 bg-gray-500 font-dm text-red-700"
                    >
                      See All
                    </button>
                  )
                ) : (
                  <button
                    onClick={handlebrandhide}
                    className=" font-bold py-2 px-6 bg-gray-500 font-dm text-red-700"
                  >
                    See Less
                  </button>
                )}
              </div>
            </div>
          ) : filterprice.length > 0 ? (
            <div>
              <div
                className={`${colList == "Activelist" ? "gap-x-10  flex-col" : "gap-x-10 flex flex-wrap"}`}
              >
                {pricehort.map((items) => (
                  <div className="pt-16 w-full lg:w-[270px]">
                    <div className="w-full lg:w-[270px] bg-white relative group">
                      <Product
                        id={items.id}
                        imgSrc={items.thumbnail}
                        badge={items.discountPercentage}
                        heart={"Add to Wish List"}
                        Compare={"Compare"}
                        Cart={"Add to Cart"}
                        title={items.title}
                        prise={items.price}
                        color={items.brand}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                {pricehow ? (
                  filterprice.length > 6 && (
                    <button
                      onClick={handleprishow}
                      className=" font-bold py-2 px-6 bg-gray-500 font-dm text-red-700"
                    >
                      See All
                    </button>
                  )
                ) : (
                  <button
                    onClick={handleprihide}
                    className=" font-bold py-2 px-6 bg-gray-500 font-dm text-red-700"
                  >
                    See Less
                  </button>
                )}
              </div>
            </div>
          ) : cetagorysearchFilter.length > 0 ? (
            <div>
              <div
                className={`${colList == "Activelist" ? "gap-x-10 flex-col" : "gap-x-10 flex flex-wrap"}`}
              >
                {seeshort.map((items) => (
                  <div className="lg:pt-16 w-full lg:w-[270px]">
                    <div className="w-full lg:w-[270px] bg-white relative group">
                      <Product
                        id={items.id}
                        imgSrc={items.thumbnail}
                        badge={items.discountPercentage}
                        heart={"Add to Wish List"}
                        Compare={"Compare"}
                        Cart={"Add to Cart"}
                        title={items.title}
                        prise={items.price}
                        color={items.brand}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                {catshow ? (
                  cetagorysearchFilter.length > 6 && (
                    <button
                      onClick={handleshow}
                      className=" font-bold py-2 px-6 bg-gray-500 font-dm text-red-700"
                    >
                      See All
                    </button>
                  )
                ) : (
                  <button
                    onClick={handlehide}
                    className=" font-bold py-2 px-6 bg-gray-500 font-dm text-red-700"
                  >
                    See Less
                  </button>
                )}
              </div>
            </div>
          ) : (
            allData.map((items) => (
              <div className="pt-4 lg:pt-16 w-full lg:w-[270px]">
                <div className="lg:ml-0 w-full lg:w-[270px] bg-white relative group">
                  <Product
                    id={items.id}
                    imgSrc={items.thumbnail}
                    badge={items.discountPercentage}
                    heart={"Add to Wish List"}
                    Compare={"Compare"}
                    Cart={"Add to Cart"}
                    title={items.title}
                    prise={items.price}
                    color={items.brand}
                  />
                </div>
              </div>
            ))
          )}
        </Flex>
      </div>
    </>
  );
};

export default Post;