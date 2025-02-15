import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import Container from "../Container";
import Flex from "../Flex";
import Catagory from "../Catagory";
import User from "../User";
import Cart from "../Cart";
import { apiData } from "../ContextApi";

const Header = () => {
  const [search, setSearch] = useState("");
  const [searchFilter, setSearchFilter] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1); // Track selected search result
  const info = useContext(apiData);
  const navigate = useNavigate();

  // Handle input change & filter results
  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearch(query); //

    if (!query) {
      setSearchFilter([]);
      setSelectedIndex(-1);
    } else {
      const results = info.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      );
      setSearchFilter(results);
      setSelectedIndex(-1);
    }
  };

  // Navigate to product page
  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
    setSearch("");
    setSearchFilter([]);
    setSelectedIndex(-1);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (searchFilter.length === 0) return;

    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex < searchFilter.length - 1 ? prevIndex + 1 : prevIndex,
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      handleProductClick(searchFilter[selectedIndex].id);
    }
  };

  // Handle click on title
  const handleTitleClick = (title) => {
    setSearch(title);
    setSearchFilter([]);
  };

  // Handle search icon click
  const handleSearchIconClick = () => {
    if (search) {
      const product = info.find(
        (item) => item.title.toLowerCase() === search.toLowerCase(),
      );
      if (product) {
        handleProductClick(product.id);
      }
    }
  };

  return (
    <div className="bg-headerbgColor py-3 pl-1 top-12 lg:top-[63.5px] sticky z-20">
      <Container>
        <Flex className="justify-between">
          {/* Category Section */}
          <div className="w-[30%] lg:w-[20%] translate-y-1/4 z-10">
            <Flex className="gap-x-1 lg:gap-x-2">
              <Catagory />
            </Flex>
          </div>

          {/* Search Bar */}
          <div className="w-[40%] lg:w-[50%] relative -ml-16 lg:ml-0">
            <input
              value={search}
              onChange={handleSearchInput}
              onKeyDown={handleKeyDown}
              type="text"
              className="p-1 outline-none lg:p-3 bg-white rounded-md w-full border border-navHColor font-dm"
              placeholder="Search............"
            />
            <FaSearch
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={handleSearchIconClick}
            />

            {/* Search Results Dropdown */}
            {searchFilter.length > 0 && (
              <div className="lg:w-[360px] w-[230px] lg:max-h-[400px] max-h-[300px] absolute z-10 mt-4 overflow-y-scroll bg-white shadow-lg rounded-md  ">
                {searchFilter.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-x-3 p-2 cursor-pointer ${
                      index === selectedIndex ? "bg-gray-200" : "bg-white"
                    }`}
                  >
                    <img
                      src={item.thumbnail}
                      alt="Product"
                      className="lg:w-[70px] lg:h-[70px] rounded-md w-[40px] h-[40px]"
                      onClick={() => handleProductClick(item.id)}
                    />
                    <p
                      className="text-[13px] pl-2 lg:pl-4"
                      onClick={() => handleTitleClick(item.title)}
                    >
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* User and Cart Section */}
          <div className="w-[20%] lg:w-[15%] translate-y-1/4 -ml-8 z-10">
            <Flex className="gap-x-3 lg:gap-x-10">
              <Flex>
                <User />
                <FaCaretDown />
              </Flex>
              <Cart />
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;

