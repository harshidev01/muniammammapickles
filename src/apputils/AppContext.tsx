/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { productDataType } from "@/types/product/ProductDataTypes";
import { createContext, useContext, useReducer, type ReactNode } from "react";

export type dispatchDataType = {
  type: string;
  payload: any;
};
export type contextType = {
  dispatch: React.Dispatch<dispatchDataType>;
  refresh: boolean;
  navBarIndex: number;
  pickelsData: productDataType[];
};

const initState: contextType = {
  dispatch: () => {},
  refresh: false,
  navBarIndex: 0,
  pickelsData: [
    {
      productId: "Chicken-pickle-boneless",
      productName: "Chicken Pickle (Boneless)",
      isKgs: true,
      isMl: false,
      availability: 100,
      price: 1000,
      isAvailable: true,
      isOutOfStock: false,
      editedBy: "admin",
      // imageUrl:"",
      imageUrl: "/chicken/chicken_bone_less.jpeg",
      imageDeleteUrl: null,
      pickleType: "NON_VEG",
      description:
        "Tender boneless chicken pieces slow-cooked with traditional Andhra spices. A fiery favorite with every meal.",
      ingredients: [
        "Chicken",
        "Garlic",
        "Red Chilli Powder",
        "Mustard Seeds",
        "Curry Leaves",
        "Salt",
        "Oil",
      ],
      orders: 120,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      productId: "Chicken-pickle-bone",
      productName: "Chicken Pickle (Bone)",
      isKgs: true,
      isMl: false,
      availability: 85,
      price: 1000,
      isAvailable: true,
      isOutOfStock: false,
      editedBy: "admin",
      // imageUrl:"",
      imageUrl: "/chicken/chicken_bone.webp",
      imageDeleteUrl: null,
      description:
        "Juicy chicken with bone soaked in aromatic spices — a rustic pickle that takes you back to grandma’s kitchen.",
      ingredients: [
        "Chicken (with bone)",
        "Ginger Garlic Paste",
        "Chilli Powder",
        "Salt",
        "Mustard",
        "Oil",
      ],
      pickleType: "NON_VEG",

      orders: 90,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      productId: "mango-pickle",
      productName: "Mango Pickle",
      isKgs: true,
      isMl: false,
      availability: 150,
      price: 1000,
      isAvailable: true,
      isOutOfStock: false,
      editedBy: "admin",
      // imageUrl:"",
      imageUrl: "/mango/mango_pickle.webp",
      imageDeleteUrl: null,
      pickleType: "VEG",

      description:
        "Classic raw mango chunks blended with hand-ground spices and cold-pressed oil. Tangy, spicy, unforgettable.",
      ingredients: [
        "Raw Mango",
        "Salt",
        "Red Chilli Powder",
        "Mustard Seeds",
        "Fenugreek",
        "Oil",
      ],
      orders: 180,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      productId: "mutton-pickle",
      productName: "Mutton Pickle",
      isKgs: true,
      isMl: false,
      pickleType: "NON_VEG",

      availability: 60,
      price: 1000,
      isAvailable: true,
      isOutOfStock: false,
      editedBy: "admin",
      // imageUrl:"",
      imageUrl: "/mutton/mutton_pickle.webp",
      imageDeleteUrl: null,
      description:
        "Rich and spicy mutton pickle cooked with authentic spices. A royal treat for non-veg lovers.",
      ingredients: [
        "Mutton",
        "Red Chilli Powder",
        "Garlic",
        "Salt",
        "Mustard Seeds",
        "Oil",
      ],
      orders: 70,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      productId: "pandu-mirchi-pickle",
      productName: "Pandu Mirchi Pickle",
      isKgs: true,
      isMl: false,
      availability: 110,
      pickleType: "VEG",

      price: 1000,
      isAvailable: true,
      isOutOfStock: false,
      editedBy: "admin",
      // imageUrl:"",
      imageUrl: "/pandu_mirchi/pandu_mirchi.webp",
      imageDeleteUrl: null,
      description:
        "Ripe red chillies fermented with mustard, fenugreek, and garlic. A bold, hot pickle for spice lovers.",
      ingredients: [
        "Pandu Mirchi (Red Chillies)",
        "Garlic",
        "Salt",
        "Mustard Seeds",
        "Fenugreek",
        "Oil",
      ],
      orders: 130,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
};

const contextProvider = createContext(initState);

function reducer(state: contextType, action: dispatchDataType) {
  switch (action?.type) {
    case "setRefresh":
      return {
        ...state,
        refresh: action?.payload,
      };
    case "setNavBarIndex":
      return {
        ...state,
        navBarIndex: action?.payload,
      };

    default:
      throw new Error("Action unkonwn");
  }
}
export default function AppContext({ children }: { children: ReactNode }) {
  const [{ refresh, navBarIndex, pickelsData }, dispatch] = useReducer(
    reducer,
    initState
  );

  return (
    <contextProvider.Provider
      value={{
        dispatch,
        refresh,
        navBarIndex,
        pickelsData,
      }}
    >
      {children}
    </contextProvider.Provider>
  );
}

export function useAppContext() {
  const context = useContext(contextProvider);
  if (!context) throw new Error("Unable to use!");
  return context;
}
