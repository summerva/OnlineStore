const ProductFilter = () => {
  return (
    <div className="main__filter">
      <ul className="main__block">
        <p>Категория</p>
        {categories.map((category) => (
          <Checkbox
            key={category}
            checked={selectedCategories.includes(category)}
            onChange={() => toggleCategory(category)}
          >
            {category}
          </Checkbox>
        ))}
      </ul>
      <div className="search__block main__block">
        <div className="search">
          <p>Бренд</p>
          <Input
            type="text"
            placeholder="Поиск брендов..."
            value={brandSearch}
            onChange={(e) => setBrandSearch(e.target.value)}
          />
        </div>
        <ul className="main__block">
          {getUniqueBrands(products)
            .filter((brand) =>
              brand.toLowerCase().includes(brandSearch.toLowerCase()),
            )
            .slice(0, 4)
            .map((brand) => (
              <Checkbox
                key={brand}
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
              >
                {brand}
              </Checkbox>
            ))}
        </ul>
      </div>
      <div className="price__block main__block">
        <p>Цена</p>
        <div className="price__block">
          <div className="search">
            <Input type="text" name="search" id="search" placeholder="0" />
          </div>
          <div className="search">
            <Input type="text" name="search" id="search" placeholder="99999" />
          </div>
        </div>
        <ul className="main__block">
          <Checkbox id="price">До 10000</Checkbox>
          <Checkbox id="price">До 25000</Checkbox>
          <Checkbox id="price">До 50000</Checkbox>
          <Checkbox id="price">До 100000</Checkbox>
        </ul>
        <Button className="reset__button">Сброс</Button>
      </div>
    </div>
  );
};

export default ProductFilter;
