import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

import { Link } from "react-router-dom";

const Category = () => {
  const [subCategory, setSubCategory] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  // console.log(subCategory);

  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setSubCategory(data);
        console.log(data);
      });
  }, [activeTab]);

  const handleTab = (tab) => {
    setActiveTab(tab);
    console.log(tab);
    // console.log(tab);
  };

  return (
    <div>
      <div>
        <div className="mb-12 mt-12 px-2">
          <h1 className="text-4xl text-center uppercase">
            SuperHero Categories
          </h1>

          <Tabs>
            <TabList>
              <Tab onClick={() => handleTab("marvel")}>Marvel</Tab>
              <Tab onClick={() => handleTab("dc")}>DC</Tab>
              <Tab onClick={() => handleTab("disney")}>Disney</Tab>
            </TabList>
            {/* marvel */}
            <TabPanel>
              <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
                {subCategory.slice(0, 2).map((sub) => (
                  <>
                    <div key={sub._id}>
                      <div className="card h-[540px]  glass">
                        <figure className=" w-full lg:w-80 mt-2 px-2   ">
                          <img
                            className="rounded-xl h-full w-full "
                            src={sub.photo}
                            alt="car!"
                          />
                        </figure>
                        <div className="card-body ">
                          <h2 className="card-title">Name: {sub.name} </h2>
                          <p>Price : {sub.price}</p>
                          <p>Rating: {sub.rating}</p>
                          <div className="card-actions justify-start">
                            <Link
                              to={`/details/${sub._id}`}
                              className="btn btn-outline"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>
            {/* dc */}
            <TabPanel>
              <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
                {subCategory.slice(0, 2).map((sub) => (
                  <>
                    <div key={sub._id}>
                      <div className="card h-[540px]  glass">
                        <figure className=" w-full lg:w-80 mt-2 px-2   ">
                          <img
                            className="rounded-xl h-full w-full "
                            src={sub.photo}
                            alt="car!"
                          />
                        </figure>
                        <div className="card-body ">
                          <h2 className="card-title">Name: {sub.name} </h2>
                          <p>Price : {sub.price}</p>
                          <p>Rating: {sub.rating}</p>
                          <div className="card-actions justify-start">
                            <Link
                              to={`/details/${sub._id}`}
                              className="btn btn-outline"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>
            {/* disney */}
            <TabPanel>
              <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
                {subCategory.slice(0, 2).map((sub) => (
                  <>
                    <div key={sub._id}>
                      <div className="card h-[540px]  glass">
                        <figure className=" w-full lg:w-80 mt-2 px-2   ">
                          <img
                            className="rounded-xl h-full w-full "
                            src={sub.photo}
                            alt="car!"
                          />
                        </figure>
                        <div className="card-body ">
                          <h2 className="card-title">Name: {sub.name} </h2>
                          <p>Price : {sub.price}</p>
                          <p>Rating: {sub.rating}</p>
                          <div className="card-actions justify-start">
                            <Link
                              to={`/details/${sub._id}`}
                              className="btn btn-outline"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Category;
