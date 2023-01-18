import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '../contants/Constants';
import Loader from './Loader';

const SearchField = () => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    // var history = useHistory();
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(5);
    console.log(data, "datadata")
    const handledown = () => {
        setData([]);
        setOffset(0);
      };
      useEffect(() => {
        ProductData();
      }, [keyword]);
      
      const ProductData = () => {
        setLoading(true);
        if (keyword.length > 1) {
          console.log("outside axios keyword:", keyword);
          axios
            .get(
              `https://fakestoreapi.com/products?limit=${limit}`
            )
            .then((res) => {
              console.log("whole: ", res.data);
              console.log("offset: ", offset);
              console.log("limit: ", limit);
              const newdata = res.data;
              //console.log("insight axios keyword:",keyword)
              setLoading(false);
              setData([...data, ...newdata]);
              // setData([...data, ...newdata])
              setOffset(offset + limit);
            })
            .catch((err) => {
              setError(err.message);
              setLoading(false);
            });
        }
        if (keyword.length < 1) {
          setData([]);
        }
      };
      // outside click
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setData([]);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const DivScroll = () => {
    if (error || loading || !hasMore)
      return console.log("i am error, loading, has not more");
    else {
      // call some loading method
      console.log("call from documentElement");
      ProductData();
    }
  };

    return (
        <div>
        <form>
            <div class="flex justify-center py-4">
                <div class="xl:w-96">
                    <div class="input-group relative flex flex-wrap items-stretch w-full">
                        <input
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            placeholder="search product here..."
                            className="searchTerm"
                            onKeyDown={handledown} 
                            type="search" 
                            class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
                            aria-label="Search" 
                            aria-describedby="button-addon3" />
                        {/* <button class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button> */}
                    </div>
                </div>
            </div>
        </form>
        {data.length > 0 && keyword.length > 1 ? (
        <>
          <div
            className="autocomplete-items z-50"
            onScroll={DivScroll}
            ref={wrapperRef}
            style={{ height: "358px", overflowY: "auto" }}
          >
            {data.map((each, i) => {
              return (
                <>
                  <div key={i}>
                    <div
                      onClick={() => navigate(ROUTE_PATH.SINGLE_PRODUCT + each.id)}
                      className="items_serial"
                    >
                      <div>
                        <img src={each.image} style={{ height: "83px" }} />
                      </div>
                      <div>
                        <span style={{ color: "#BD095A" }}>
                          {each.title}
                        </span>
                        <br />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {hasMore && (
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                scroll to load more
              </div>
            )}
            {error && (
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                error: {error}
              </div>
            )}
            {loading && (
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                loading....
              </div>
            )}
            {!hasMore && (
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              ></div>
            )}
          </div>
        </>
      ) : (
        <Loader />
      )}
        </div>
    )
}

export default SearchField
