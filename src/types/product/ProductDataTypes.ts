export type productDataType = {
  productId: string;
  productName: string;
  isKgs: boolean;
  isMl: boolean;
  availability: number;
  price: number;
  isAvailable: boolean;
  isOutOfStock: boolean;
  editedBy: string;
  imageUrl: string;
  imageDeleteUrl: string | null;
  description: string;
  ingredients: string[];
  orders: number;
  pickleType:"NON_VEG"|"VEG"
  createdAt: string;
  updatedAt: string;
};

export type addToCartProductType = {
  productId: string;
  productName: string;
  price: number;
  imageUrl:string;
  description:string;
  isKgs:boolean;
  isML:boolean;
  size:number
  quantity:number

};
