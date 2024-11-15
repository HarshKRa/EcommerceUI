export const mainCategories = [
    {
        name: "Men",
        categoryId: "men",
        level: 1,
        levelTwoCategory: [
          {
            name: "TopWear",
            categoryId: "men-topwear",
            level: 2,
            levelThreeCategory: [
              { name: "T-Shirts", categoryId: "men-topwear-tshirts", level: 3 },
              { name: "Shirts", categoryId: "men-topwear-shirts", level: 3 },
            ],
          },
          {
            name: "BottomWear",
            categoryId: "men-bottomwear",
            level: 2,
            levelThreeCategory: [
              { name: "Jeans", categoryId: "men-bottomwear-jeans", level: 3 },
              { name: "Trousers", categoryId: "men-bottomwear-trousers", level: 3 },
            ],
          },
        ],
      },
      {
        name: "Women",
        categoryId: "women",
        level: 1,
        levelTwoCategory: [
          {
            name: "WesternWear",
            categoryId: "women-westernwear",
            level: 2,
            levelThreeCategory: [
              { name: "Dresses", categoryId: "women-westernwear-dresses", level: 3 },
              { name: "Tops", categoryId: "women-westernwear-tops", level: 3 },
            ],
          },
          {
            name: "EthnicWear",
            categoryId: "women-ethnicwear",
            level: 2,
            levelThreeCategory: [
              { name: "Sarees", categoryId: "women-ethnicwear-sarees", level: 3 },
              { name: "Kurtas", categoryId: "women-ethnicwear-kurtas", level: 3 },
            ],
          },
        ],
      },
      {
        name: "Home and Furniture",
        categoryId: "home_furniture",
        level: 1,
        levelTwoCategory: [
          {
            name: "Living Room",
            categoryId: "home-furniture-living-room",
            level: 2,
            levelThreeCategory: [
              { name: "Sofas", categoryId: "home-furniture-living-sofas", level: 3 },
              { name: "Coffee Tables", categoryId: "home-furniture-living-coffee-tables", level: 3 },
            ],
          },
          {
            name: "Bedroom",
            categoryId: "home-furniture-bedroom",
            level: 2,
            levelThreeCategory: [
              { name: "Beds", categoryId: "home-furniture-bedroom-beds", level: 3 },
              { name: "Wardrobes", categoryId: "home-furniture-bedroom-wardrobes", level: 3 },
            ],
          },
        ],
      },
      {
        name: "Electronics",
        categoryId: "electronics",
        level: 1,
        levelTwoCategory: [
          {
            name: "Mobiles",
            categoryId: "electronics-mobiles",
            level: 2,
            levelThreeCategory: [
              { name: "Smartphones", categoryId: "electronics-mobiles-smartphones", level: 3 },
              { name: "Feature Phones", categoryId: "electronics-mobiles-feature-phones", level: 3 },
            ],
          },
          {
            name: "Laptops",
            categoryId: "electronics-laptops",
            level: 2,
            levelThreeCategory: [
              { name: "Gaming Laptops", categoryId: "electronics-laptops-gaming", level: 3 },
              { name: "Ultrabooks", categoryId: "electronics-laptops-ultrabooks", level: 3 },
            ],
          },
        ],
      },
  ];