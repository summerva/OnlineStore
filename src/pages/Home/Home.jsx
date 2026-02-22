import { useNavigate } from "react-router-dom";
import ProductCard from "@/components/ProductCard/ProductCard";
import Checkbox from "@/ui/Checkbox/Checkbox";
import Input from "@/ui/Input/Input";
import "./Home.css";
import Button from "@/ui/Button/Button";
import { useState } from "react";

const Home = (props) => {
  const { products, searchQuery } = props;

  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState("popular");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brandSearch, setBrandSearch] = useState(""); // для Input
  const [priceFrom, setPriceFrom] = useState(""); //Цена ОТ: минимальная цена
  const [priceTo, setPriceTo] = useState(""); //Цена ДО: максимальная цена
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const getUniqueCategories = (products) => {
    // Извлекаем все категории
    const allCategories = products.map((product) => product.category);
    // Убираем дубликаты
    const unique = new Set(allCategories);
    // Возвращаем массив
    return Array.from(unique);
  };

  const getUniqueBrands = (products) => {
    const allBrands = products.map((product) => product.brand);
    const unique = new Set(allBrands);
    return Array.from(unique);
  };

  const filterProducts = (product) => {
    // 1. КАТЕГОРИИ
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(product.category)
    ) {
      return false;
    }

    // 2. БРЕНДЫ
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }

    // 3. ЦЕНЫ
    if (priceFrom && product.price < parseInt(priceFrom)) return false;
    if (priceTo && product.price > parseInt(priceTo)) return false;

    // Checkbox цены
    if (selectedPriceRanges.length > 0) {
      const maxPrice = Math.min(
        ...selectedPriceRanges.map((r) => parseInt(r.match(/\d+/)[0])),
      );
      if (product.price > maxPrice) return false;
    }

    // 4. ПОИСК
    if (!searchQuery?.trim()) return true;

    const query = searchQuery.toLowerCase().trim();
    const title = product.title.toLowerCase();

    if (title.includes(query)) return true;

    const queryWords = query.split(/\s+/);
    const titleWords = title.split(/\s+/);
    const wordMatch = queryWords.some((q) =>
      titleWords.some((t) => t.includes(q)),
    );

    return wordMatch;
  };

  // функция сортировки, по убыванию, возрастанию и обычный массив по id (1, 2, 3)
  const sortProducts = (sortBy, productsToSort) => {
    const sorted = [...productsToSort];

    if (sortBy === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
      return sorted;
    } else if (sortBy === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
      return sorted;
    } else if (sortBy === "popular") {
      return sorted;
    }
    return sorted;
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prevSelected) => {
      // Проверяем: категория уже выбрана?
      if (prevSelected.includes(category)) {
        // Выбрана => убираем её
        return prevSelected.filter((cat) => cat !== category);
      } else {
        // Не выбрана => добавляем её
        return [...prevSelected, category];
      }
    });
  };

  // **.filter()** = "оставить только те, что подходят"

  const toggleBrand = (brand) => {
    setSelectedBrands((prevSelected) => {
      if (prevSelected.includes(brand)) {
        return prevSelected.filter((bra) => bra !== brand);
      } else {
        return [...prevSelected, brand];
      }
    });
  };

  const togglePriceRange = (range) => {
    setSelectedPriceRanges((prev) => {
      if (prev.includes(range)) {
        return prev.filter((r) => r !== range);
      } else {
        return [...prev, range];
      }
    });
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const resetAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceFrom("");
    setPriceTo("");
    setSelectedPriceRanges([]);
    setSortBy("popular");
  };

  const filteredProducts = products.filter(filterProducts);
  const sortedProducts = sortProducts(sortBy, filteredProducts);
  const categories = getUniqueCategories(products);

  return (
    <div className="main container">
      <div className="main__sort">
        <p>Сортировать</p>
        <select
          name="sort"
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="popular">Популярные</option>
          <option value="price-asc">Сначала дешевые</option>
          <option value="price-desc">Сначала дорогие</option>
        </select>
        <button className="button button_sort">Фильтры</button>
      </div>
      <div className="main__inner">
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
                <Input
                  type="number"
                  name="search"
                  id="search"
                  placeholder="0"
                  onChange={(e) => setPriceFrom(e.target.value)}
                />
              </div>
              <div className="search">
                <Input
                  type="number"
                  name="search"
                  id="search"
                  placeholder="99999"
                  onChange={(e) => setPriceTo(e.target.value)}
                />
              </div>
            </div>
            <ul className="main__block">
              <Checkbox
                checked={selectedPriceRanges.includes("До 1000")}
                onChange={() => togglePriceRange("До 1000")}
              >
                До 1000
              </Checkbox>
              <Checkbox
                checked={selectedPriceRanges.includes("До 5000")}
                onChange={() => togglePriceRange("До 5000")}
              >
                До 5000
              </Checkbox>
              <Checkbox
                checked={selectedPriceRanges.includes("До 20000")}
                onChange={() => togglePriceRange("До 20000")}
              >
                До 20000
              </Checkbox>
              <Checkbox
                checked={selectedPriceRanges.includes("До 50000")}
                onChange={() => togglePriceRange("До 50000")}
              >
                До 50000
              </Checkbox>
            </ul>
            <Button className="reset__button" onClick={resetAllFilters}>
              Сброс
            </Button>
          </div>
        </div>
        <div className="main__grid">
          <div className="grid__products">
            {filteredProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product.id)}
                />
              ))
            ) : (
              <div className="no-products">
                <h3>Ничего не найдено 😔</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
