
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdWindow } from "react-icons/md";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Pagination from "../parts/Pagination";
import { apiData } from "../ContextApi";
import Post from "../parts/Post";

const Products = () => {
  let [dropdownShow, setDropdownShow] = useState(false);
  let [colorShow, setColorShow] = useState(false);
  let [brandShow, setBrandShow] = useState(false);
  let [priseShow, setPriseShow] = useState(false);
  let [multiList, setMultiList] = useState("");
  let [cetagory, setCategory] = useState([]);
  let [brand, setBrand] = useState([]);
  let [cetagorysearchFilter, setCategoryFilter] = useState([]);
  let [brandsearchFilter, setCatbrandFilter] = useState([]);

  let [number, setNumber] = useState(15);
  let selectNumber = (element) => {
    let numberConverter = Number(element.target.value);
    setNumber(numberConverter);
    setPerPage(numberConverter); // perPage স্টেট আপডেট করুন
  };

  let handleList = () => {
    setMultiList("activeList");
  };

  let data = useContext(apiData);
  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(number);

  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage;
  let allData = data.slice(firstPage, lastPage);
  let pageNumber = [];
  for (let i = 0; i < Math.ceil(cetagorysearchFilter.length > 0 ? cetagorysearchFilter.length : data.length / perPage); i++) {
    pageNumber.push(i);
  }
  let Paginate = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  };

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1);
    }
  };

  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  };

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
  }, [data]);
  useEffect(() => {
    setBrand([...new Set(data.map((item) => item.brand))]);
  }, [data]);

  let handleSubcate = (citems) => {
    let categoryFilter = data.filter((item) => item.category == citems);
    setCategoryFilter(categoryFilter);
  };
  let handleSubbrand = (citems) => {
    let brandFilter = data.filter((item) => item.brand == citems);
    setCatbrandFilter(brandFilter);
  };
  let [colList, setColList] = useState("");
  let handlColeList = () => {
    setColList("Activelist");
  };

  return (
    <>
      <div className="pb-12 sm:pt-5 lg:pt-32">
        <Container>
          <Heading
            as={"h3"}
            text={"Products"}
            className=" font-dm text-[40px] font-bold text-navHColor"
          />
          <Breadcrumb className="font-dm font-bold" />
        </Container>
        <Container>
          <Flex className={"justify-between gap-x-12 flex-col lg:flex-row"}>
            <div className="scrollbar-thumb-sky-700 scrollbar-track-sky-300">
              <div className="scrollbar-thin  lg:h-[700px]  overflow-y-scroll lg:w-[360px] pt-2 lg:pl-3">
                <div className="w-[100%] pr-4">
                  <div className="ml-4 ">
                    <div onClick={() => setDropdownShow(!dropdownShow)}>
                      <Flex
                        className={
                          "justify-between border-b bottom-BorderInfoColor"
                        }
                      >
                        <Link>
                          <Heading
                            as={"h3"}
                            text={"Shop by Cetegory"}
                            className="font-dm font-bold text-[20px] text-navHColor"
                          />
                        </Link>

                        <IoMdArrowDropdown className="text-[24px]" />
                      </Flex>
                    </div>
                    {dropdownShow && (
                      <div className="">
                        <ul>
                          {cetagory.map((item) => (
                            <li>
                              <Flex
                                className={
                                  "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                                }
                              >
                                <Link onClick={() => handleSubcate(item)}>
                                  <Heading
                                    as={"p"}
                                    text={item}
                                    className=" capitalize hover:font-bold hover:px-5 duration-300 font-dm text-navHColor text-[14px] font-regular"
                                  />
                                </Link>
                                <FaPlus className="text-navHColor" />
                              </Flex>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="ml-4">
                    <div onClick={() => setColorShow(!colorShow)}>
                      <Flex
                        className={
                          "justify-between border-b bottom-BorderInfoColor mt-5"
                        }
                      >
                        <Link>
                          <Heading
                            as={"h3"}
                            text={"Shop by Color"}
                            className="font-dm font-bold text-[20px] text-navHColor"
                          />
                        </Link>
                        <IoMdArrowDropdown className="text-[28px]" />
                      </Flex>
                    </div>
                    {colorShow && (
                      <div className="">
                        <ul>
                          <li>
                            <Flex
                              className={
                                "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                              }
                            >
                              <Flex className={"gap-x-2"}>
                                <span className="h-[10px] w-[10px] bg-black rounded-full translate-y-[50%]"></span>
                                <Link>
                                  <Heading
                                    as={"p"}
                                    text={"Black"}
                                    className="hover:font-bold hover:px-5 duration-300 font-dm text-navHColor text-[14px] font-regular"
                                  />
                                </Link>
                              </Flex>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                            <Flex
                              className={
                                "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                              }
                            >
                              <Flex className={"gap-x-2"}>
                                <span className="h-[10px] w-[10px] bg-red-500 rounded-full translate-y-[50%]"></span>
                                <Link>
                                  <Heading
                                    as={"p"}
                                    text={"Red"}
                                    className="hover:font-bold hover:px-5 duration-300 font-dm text-navHColor text-[14px] font-regular"
                                  />
                                </Link>
                              </Flex>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                            <Flex
                              className={
                                "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                              }
                            >
                              <Flex className={"gap-x-2"}>
                                <span className="h-[10px] w-[10px] bg-green-600 rounded-full translate-y-[50%]"></span>
                                <Link>
                                  <Heading
                                    as={"p"}
                                    text={"Green"}
                                    className="hover:font-bold hover:px-5 duration-300 font-dm text-navHColor text-[14px] font-regular"
                                  />
                                </Link>
                              </Flex>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                            <Flex
                              className={
                                "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                              }
                            >
                              <Flex className={"gap-x-2"}>
                                <span className="h-[10px] w-[10px] bg-blue-500 rounded-full translate-y-[50%]"></span>
                                <Link>
                                  <Heading
                                    as={"p"}
                                    text={"Blue"}
                                    className="hover:font-bold hover:px-5 duration-300 font-dm text-navHColor text-[14px] font-regular"
                                  />
                                </Link>
                              </Flex>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                            <Flex
                              className={
                                "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                              }
                            >
                              <Flex className={"gap-x-2"}>
                                <span className="h-[10px] w-[10px] bg-yellow-500 rounded-full translate-y-[50%]"></span>
                                <Link>
                                  <Heading
                                    as={"p"}
                                    text={"Yellow"}
                                    className="hover:font-bold hover:px-5 duration-300 font-dm text-navHColor text-[14px] font-regular"
                                  />
                                </Link>
                              </Flex>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                            <Flex className={"justify-between py-2 lg:py-4"}>
                              <Flex className={"gap-x-2"}>
                                <span className="h-[10px] w-[10px] bg-sky-500 rounded-full translate-y-[50%]"></span>
                                <Link>
                                  <Heading
                                    as={"p"}
                                    text={"Sky"}
                                    className="hover:font-bold hover:px-3 lg:hover:px-5 duration-300 font-dm text-navHColor text-[12px] lg:text-[14px] font-regular"
                                  />
                                </Link>
                              </Flex>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="ml-4">
                    <div onClick={() => setBrandShow(!brandShow)}>
                      <Flex
                        className={
                          "justify-between border-b bottom-BorderInfoColor mt-5"
                        }
                      >
                        <Link>
                          <Heading
                            as={"h3"}
                            text={"Shop by Brand"}
                            className="font-dm font-bold text-[20px] text-navHColor"
                          />
                        </Link>
                        <IoMdArrowDropdown className="text-[28px]" />
                      </Flex>
                    </div>
                    {brandShow && (
                      <div className="">
                        <ul>
                          <div className="">
                            <ul>
                              {brand.map((item) => (
                                <li>
                                  <Flex
                                    className={
                                      "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                                    }
                                  >
                                    <Link onClick={() => handleSubcate(item)}>
                                      <Heading
                                        as={"p"}
                                        text={item}
                                        className=" capitalize hover:font-bold hover:px-5 duration-300 font-dm text-navHColor text-[14px] font-regular"
                                      />
                                    </Link>
                                    <FaPlus className="text-navHColor" />
                                  </Flex>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="ml-4">
                    <div onClick={() => setPriseShow(!priseShow)}>
                      <Flex
                        className={
                          "justify-between border-b bottom-BorderInfoColor mt-5"
                        }
                      >
                        <Link>
                          <Heading
                            as={"h3"}
                            text={"Shop by Price"}
                            className=" font-dm font-bold text-[20px] text-navHColor"
                          />
                        </Link>
                        <IoMdArrowDropdown className="text-[28px]" />
                      </Flex>
                    </div>
                    {priseShow && (
                      <div className="">
                        <ul>
                          <li>
                            <Flex
                              className={
                                "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                              }
                            >
                              <Link>
                                <Heading
                                  as={"p"}
                                  text={"Price $0-$10"}
                                  className="hover:font-bold hover:px-5 duration-300 font-dm text-navHColor text-[14px] font-regular"
                                />
                              </Link>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                            <Flex
                              className={
                                "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                              }
                            >
                              <Link>
                                <Heading
                                  as={"p"}
                                  text={"Price $10-$20"}
                                  className="hover:font-bold hover:px-5 duration-300 font-dm text-navHColor text-[14px] font-regular"
                                />
                              </Link>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                            <Flex
                              className={
                                "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                              }
                            >
                              <Link>
                                <Heading
                                  as={"p"}
                                  text={"Price $20-$30"}
                                  className="hover:font-bold hover:px-5 duration-300 font-dm text-navHColor text-[14px] font-regular"
                                />
                              </Link>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                            <Flex
                              className={
                                "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                              }
                            >
                              <Link>
                                <Heading
                                  as={"p"}
                                  text={"Price $30-$40"}
                                  className="hover:font-bold hover:px-5 duration-300 font-dm text-navHColor text-[14px] font-regular"
                                />
                              </Link>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                            <Flex
                              className={
                                "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                              }
                            >
                              <Link>
                                <Heading
                                  as={"p"}
                                  text={"Price $40-$80"}
                                  className="hover:font-bold hover:px-5 duration-300 font-dm text-navHColor text-[14px] font-regular"
                                />
                              </Link>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                            <Flex
                              className={
                                "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                              }
                            >
                              <Link>
                                <Heading
                                  as={"p"}
                                  text={"Price $80-$160"}
                                  className="hover:font-bold hover:px-3 lg:hover:px-5 duration-300 font-dm text-navHColor text-[12px] lg:text-[14px] font-regular"
                                />
                              </Link>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                            <Flex
                              className={
                                "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                              }
                            >
                              <Link>
                                <Heading
                                  as={"p"}
                                  text={"Price $160-$300"}
                                  className="hover:font-bold hover:px-3 lg:hover:px-5 duration-300 font-dm text-navHColor text-[12px] lg:text-[14px] font-regular"
                                />
                              </Link>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                            <Flex
                              className={
                                "border-b bottom-BorderInfoColor justify-between py-2 lg:py-4"
                              }
                            >
                              <Link>
                                <Heading
                                  as={"p"}
                                  text={"Price $300-$600"}
                                  className="hover:font-bold hover:px-3 lg:hover:px-5 duration-300 font-dm text-navHColor text-[12px] lg:text-[14px] font-regular"
                                />
                              </Link>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                            <Flex className={"justify-between py-2 lg:py-4"}>
                              <Link>
                                <Heading
                                  as={"p"}
                                  text={"Price $600-$5000"}
                                  className="hover:font-bold hover:px-3 lg:hover:px-5 duration-300 font-dm text-navHColor text-[12px] lg:text-[14px] font-regular"
                                />
                              </Link>
                              <FaPlus className="text-navHColor" />
                            </Flex>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div>
                <Flex
                  className={
                    "justify-between  flex-col lg:flex-row invisible md:visible"
                  }
                >
                  <div className=" w-[50%] gap-8 flex invisible lg:visible mb-5">
                    <div onClick={() => setMultiList("")} className="">
                      <MdWindow
                        onClick={() => setColList("")}
                        className={`border-2 border-[#767676]  h-[50px] w-[50px] py-3 ${
                          multiList == "activeList" ? "" : "bg-black text-white"
                        }`}
                      />
                    </div>
                    <div onClick={handleList} className="">
                      <AiOutlineBars
                        onClick={handlColeList}
                        className={`border-2 border-[#767676]  h-[50px] w-[50px] py-3 ${
                          multiList == "" ? "" : "bg-black text-white"
                        }`}
                      />
                    </div>
                  </div>
                  <div className="lg:w-[60%]  pl-4">
                    <Flex className={"justify-between gap-x-3 lg:gap-x-0"}>
                      <div className="w-[50%] lg:w-[60%] relative ">
                        <Flex className={" lg:gap-x-3"}>
                          <label
                            htmlFor=""
                            className="font-dm font-regular text-[16px]  "
                          >
                            Sort by:
                          </label>
                          <select
                            name=""
                            id=""
                            className="w-[100%px] py-1 px-5 text-base outline-none border border-navHColor bg-transparent"
                          >
                            <option
                              className="font-dm font-regular text-[16px]  "
                              value="Low To High"
                            >
                              Low To High
                            </option>
                            <option
                              className="font-dm font-regular text-[16px] "
                              value="High To Low"
                            >
                              High To Low
                            </option>
                          </select>
                        </Flex>
                      </div>
                      <div className="w-[40%] relative right-4">
                        <Flex className={" lg:gap-x-3"}>
                          <label
                            htmlFor=""
                            className="font-dm font-regular text-[16px]  "
                          >
                            Show:
                          </label>
                          <select
                            onChange={selectNumber}
                            name=""
                            id=""
                            className="w-[100%] py-1 px-5 text-base outline-none border border-navHColor bg-transparent"
                          >
                            <option
                              className="font-dm font-regular text-[16px]  "
                              value="15"
                            >
                              15
                            </option>
                            <option
                              className="font-dm font-regular text-[16px]  "
                              value="18"
                            >
                              18
                            </option>
                            <option
                              className="font-dm font-regular text-[16px]  "
                              value="24"
                            >
                              24
                            </option>
                            <option
                              className="font-dm font-regular text-[16px] "
                              value="30"
                            >
                              30
                            </option>
                            <option
                              className="font-dm font-regular text-[16px]"
                              value="36"
                            >
                              36
                            </option>
                          </select>
                        </Flex>
                      </div>
                    </Flex>
                  </div>
                </Flex>
              </div>
              <div className="scrollbar-thumb-transparent scrollbar-track-trans-transparent  ">
                <div className="lg:h-[1500px] overflow-y-scroll w-[100%]  ">
                  <Post
                    allData={allData}
                    cetagorysearchFilter={cetagorysearchFilter}
                    brandsearchFilter={brandsearchFilter}
                    colList={colList}
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Pagination
                  pageNumber={pageNumber}
                  Paginate={Paginate}
                  next={next}
                  prev={prev}
                  perPage={number}
                  currentPage={currentPage}
                />
                {pageNumber.length > 0 && (
                  <h2 className="pr-4">
                    {`Products from ${firstPage + 1} to ${
                      lastPage < data.length ? lastPage : data.length
                    } of ${data.length}`}
                  </h2>
                )}
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Products;
