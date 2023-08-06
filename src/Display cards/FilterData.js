const FilterData = [
  {
    FilterHeading: "Tenate Type",
    colName: [
      { name: "Boys", value: "Boys" },
      { name: "Girls", value: "Girls" },
      { name: "Both", value: "Both" },
    ],
    queryName: "tenateType",
  },
  {
    FilterHeading: "Min Price",
    colName: [
      { name: "₹1,000", value: "₹1,000" },
      { name: "₹2,000", value: "₹2,000" },
      { name: "₹3,000", value: "₹3,000" },
      { name: "₹4,000", value: "₹4,000" },
      { name: "₹5,000", value: "₹5,000" },
      { name: "₹6,000", value: "₹6,000" },
      { name: "₹7,000", value: "₹7,000" },
      { name: "₹8,000", value: "₹8,000" },
      { name: "₹9,000", value: "₹9,000" },
      { name: "₹10,000", value: "₹10,000" },
      { name: "₹11,000", value: "₹11,000" },
      { name: "₹12,000", value: "₹12,000" },
      { name: "₹13,000", value: "₹13,000" },
      { name: "₹14,000", value: "₹14,000" },
      { name: "₹15,000", value: "₹15,000" },
      { name: "₹16,000", value: "₹16,000" },
      { name: "₹17,000", value: "₹17,000" },
      { name: "₹18,000", value: "₹18,000" },
      { name: "₹19,000", value: "₹19,000" },
      { name: "₹20,000", value: "₹20,000" },
      { name: "₹21,000", value: "₹21,000" },
      { name: "₹22,000", value: "₹22,000" },
      { name: "₹23,000", value: "₹23,000" },
    ],
    queryName: "minPrice",
  },
  {
    FilterHeading: "Max Price",
    colName: [
      { name: "₹1000", value: "₹1000" },
      { name: "₹2000", value: "₹2000" },
      { name: "₹3000", value: "₹3000" },
      { name: "₹4000", value: "₹4000" },
      { name: "₹5000", value: "₹5000" },

      { name: "₹6000", value: "₹6000" },
      { name: "₹7000", value: "₹7000" },
      { name: "₹8000", value: "₹8000" },
      { name: "₹9000", value: "₹9000" },
      { name: "₹10,000", value: "₹10,000" },
      { name: "₹11,000", value: "₹11,000" },
      { name: "₹12,000", value: "₹12,000" },
      { name: "₹13,000", value: "₹13,000" },
      { name: "₹14,000", value: "₹14,000" },
      { name: "₹15,000", value: "₹15,000" },
      { name: "₹16,000", value: "₹16,000" },
      { name: "₹17,000", value: "₹17,000" },
      { name: "₹18,000", value: "₹18,000" },
      { name: "₹19,000", value: "₹19,000" },
      { name: "₹20,000", value: "₹20,000" },
      { name: "₹21,000", value: "₹21,000" },
      { name: "₹22,000", value: "₹22,000" },
      { name: "₹23,000", value: "₹23,000" },
    ],
    queryName: "maxPrice",
  },
  // {
  //   FilterHeading: "Sort",
  //   colName: [
  //     { name: "Lowest price", value: "Lowest Price" },
  //     { name: "Highest price", value: "Highest Price" },
  //   ],
  //   queryName: "sort",
  // },
  {
    FilterHeading: "Room Type",
    colName: [
      { name: "Single Room", value: "Single Room" },
      { name: "Double Sharing", value: "Double Sharing" },
      { name: "Triple Sharing", value: "Triple Sharing" },
    ],
    queryName: "roomType",
  },

  {
    FilterHeading: "Furnishing",
    colName: [
      { name: "Furnished", value: "Furnished" },
      { name: "Semi Furnished", value: "Semi Furnished" },
    ],
    queryName: "furnishing",
  },
];

export default FilterData;

export const getFilterValues = (filterValues) => {
  const { tenateType, minPrice, maxPrice, roomType, sort, furnishing } =
    filterValues;

  const values = [
    {
      name: "tenateType",
      value: tenateType,
    },
    {
      name: "roomType",
      value: roomType,
    },
    {
      name: "minPrice",
      value: minPrice,
    },
    {
      name: "maxPrice",
      value: maxPrice,
    },

    {
      name: "sort",
      value: sort,
    },

    {
      name: "furnishing",
      value: furnishing,
    },
  ];

  return values;
};
