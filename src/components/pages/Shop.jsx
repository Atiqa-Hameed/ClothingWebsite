import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Filters from '../Filters';
import Pagination from '../Pagination';

const Shop = () => {
  return (
    <div>
      <Header backgroundColor="white" />
        <Filters />
        {/* New Div */}
        <div className="flex justify-end ">
        <div className="w-1/4 h-[700px] bg-gray-300 p-4 shadow-md ">

          <Pagination />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;

