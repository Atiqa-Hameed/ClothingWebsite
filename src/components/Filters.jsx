// src/components/Filters.js

const Filters = () => {
  return (
    <div className="flex flex-col gap-4 p-20 bg-white text-sm">
      
      {/* Price Filter */}
      <div>
        <div className="font-semibold mb-1">Prices</div>
        <input type="range" min="120" max="300" className="w-52" />
        <div className="mt-1 text-xs">Range: $120 - $300</div>
      </div>
      
      {/* Category Filter */}
      <div>
        <div className="font-semibold mb-1">Categories</div>
        <div className="flex flex-col gap-1">
          {['Women', 'Men', 'Girls', 'Babies'].map((category) => (
            <label key={category} className="flex items-center space-x-1">
              <input type="checkbox" className="h-3 w-3" />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>
      
      {/* Brands Filter */}
      <div>
        <div className="font-semibold mb-1">Brands</div>
        <div className="flex flex-col gap-1">
          {['Victoria’s Secret', 'Dior', 'Gucci', 'Fendi', 'Prada', 'Versace', 'Dolce & Gabbana', 'Zara', 'Chanel'].map((brand) => (
            <label key={brand} className="flex items-center space-x-1">
              <input type="checkbox" className="h-3 w-3" />
              <span>{brand}</span>
            </label>
          ))}
        </div>
        <div className="text-xs text-blue-500 mt-1 cursor-pointer">
          + 234 more
        </div>
      </div>
      
      {/* Size Filter */}
      <div>
        <div className="font-semibold mb-1">Size</div>
        <div className="flex flex-col gap-1">
          {['Medium', 'Large', 'Plus Size', 'Sexy Plus Size'].map((size) => (
            <label key={size} className="flex items-center space-x-1">
              <input type="checkbox" className="h-3 w-3" />
              <span>{size}</span>
            </label>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Filters;
