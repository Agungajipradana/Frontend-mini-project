import React, { useEffect, useState, Fragment } from "react";
import Hotels from "@/api/Hotels";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelHotelsRequest, GetHotelsRequest } from "@/redux-saga/action/hotelsAction";
import FormikHotelsCreate from "./HotelsFormixCreate";
import FormikHotelsUpdate from "./HotelsFormixUpdate";
import FormikFacilitiesFindOne from "./FacilitiesFormixFindOne";
import Modal from "@/component/modal";

export default function HotelsRedux() {
  const dispatch = useDispatch();
  const { hotels } = useSelector((state: any) => state.hotelsState);
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayUpdate, setDisplayUpdate] = useState(false);
  const [displayFindOne, setDisplayFindOne] = useState(false);
  const [id, setId] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(GetHotelsRequest());
  }, [refresh]);

  const onClickUpdate = (id: any) => {
    setDisplayUpdate(true);
    setId(id);
  };

  const onClickUpdateFindOne = (id: any) => {
    setDisplayFindOne(true);
    setId(id);
  };

  const Modal = ({ isVisible, onClose }: { isVisible: any; onClose: () => void }) => {
    if (!isVisible) return null;

    const handleClose = (id: any) => {
      if (id.target.id === "wrapper") onClose();
    };

    return (
      <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
        <div className="w-[600px] flex flex-col">
          <button className="text-black p-2 rounded place-self-end" id="wrapper" onClick={() => onClose()}>
            X
          </button>
          <div className="border-solid border-2 border-black flex flex-col">
            <button className="bg-white p-" onClick={() => onClickUpdate(id)}>
              Edit
            </button>
            <button className="bg-white p-2" onClick={() => onClickUpdateFindOne(id)}>
              Add Facilities
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Layout>
        <>
          {displayUpdate ? (
            <FormikHotelsUpdate setRefresh={setRefresh} setDisplay={setDisplayUpdate} id={id} />
          ) : displayFindOne ? (
            <FormikFacilitiesFindOne setRefresh={setRefresh} setDisplay={setDisplayUpdate} id={id} />
          ) : display ? (
            <FormikHotelsCreate setRefresh={setRefresh} setDisplay={setDisplay} />
          ) : (
            <>
              <div className="flex ">
                <aside id="default-sidebar" className="border left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                  <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <h1 className="font-medium text-xl pb-2">Menu</h1>
                    <ul className="space-y-2 font-medium">
                      <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                          <span className="ml-3">Hotel</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                          <span className="flex-1 ml-3 whitespace-nowrap">Facilities</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                          <span className="flex-1 ml-3 whitespace-nowrap">Reviews</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>

                <div>
                  <h2 className="font-medium border text-xl ">Hotels</h2>

                  <form className="flex items-center justify-center gap-2">
                    <h2>Search Hotel</h2>
                    <label className="sr-only">Search</label>
                    <div className="relative w-1/3">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <h1>Search</h1>
                    </button>
                  </form>

                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="border text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Id
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Hotel Name
                          </th>
                          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Rating Star
                          </th>
                          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Phone Number
                          </th>
                          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                            Modified Date
                          </th>
                          <th scope="col" className="px-6 py-3">
                            <button onClick={() => setDisplay(true)}> + Add </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {hotels &&
                          Array.isArray(hotels) &&
                          hotels.map((item: any) => {
                            return (
                              <>
                                <tr key={item.hotelId} className="border-b border-gray-200 dark:border-gray-700">
                                  {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"></th> */}
                                  <td className="px-6 py-4">{item.hotelId}</td>
                                  <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{item.hotelName}</td>
                                  <td className="px-6 py-4 ">{item.hotelRatingStar}</td>
                                  <td className="px-6 py-4">{item.hotelPhonenumber}</td>
                                  <td className="px-6 py-4">{item.hotelModifiedDate}</td>
                                  <td className="d-flex">
                                    <Fragment>
                                      <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                                        <div>
                                          <button className="text-indigo-600 hover:text-indigo-900" id="wrapper" onClick={() => setShowModal(true)}>
                                            EDIT
                                          </button>
                                        </div>
                                      </td>
                                      <Modal isVisible={showModal} onClose={() => false} />
                                    </Fragment>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-col items-center ">
                    <span className="text-sm text-gray-700 dark:text-gray-400">
                      Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of{" "}
                      <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
                    </span>

                    <div className="inline-flex mt-2 xs:mt-0">
                      <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Prev</button>
                      <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      </Layout>
    </div>
  );
}
