export interface IListing {
    _id?: string;
    name: string;
    mobileNumber: string;
    mainImage: string;
    images: string[];
    address: string;
    description: string;
    gender: 'male' | 'female' | 'both';
    roomCapacity: number;
    price: number;
  }