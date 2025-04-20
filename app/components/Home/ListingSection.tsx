import React from 'react';
import ListingCard from './ListingCard';

const plases = [
    {
        id:"1",
        "imageURL":"https://media-hosting.imagekit.io/0a31f74da39d49b7/image%2018.png?Expires=1839726120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i117ey6rLljec-ifQLzMii18Ll-bHqZRhFtUiWcdjBQNnnVjGU23IilBBfN~ZP3fv3yZrElCiZ9yPUpEnVg2Q1ESE8543dSuIgJMszyyh1srq1YE8R1SHmsP6z1WdsOZsIY7x7EaPLpt~GBCZS0TKBNQ691dSzy8i8E6AgSdDwhOYiS~4SNmLQN6y0O-kLUYf80acAp0I42BxIEv4Qifd~iAykCCClPN-h9oMiCa91STu2NA8~U-sExnTJf1jNdIv~Fk7YkoYOlg8UcpEEqqT165M2LMMWuR5juv98JtUYBFHWsbwUENj3fNfOkaMbPM6ZVyYPt24NYqk4qKohquVw__",
        "ForWho":"Male Only",
        "name":"Annexe for rent in Nugegoda",
        "address":"No. 13/A, Rubberwatter Road, Balla Ripu Para, K",
        "price":12000,
        "paymentType":"Monthly",
        "keyMoneyStates":false,
        "utilityIncluded":true,
        "tags":[
                { key: "Bedrooms", value: "2" },
                { key: "Bathrooms", value: "1" },
                { key: "Parking", value: "1" },
            ]
    },
    {
        id:"1",
        "imageURL":"https://media-hosting.imagekit.io/0a31f74da39d49b7/image%2018.png?Expires=1839726120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i117ey6rLljec-ifQLzMii18Ll-bHqZRhFtUiWcdjBQNnnVjGU23IilBBfN~ZP3fv3yZrElCiZ9yPUpEnVg2Q1ESE8543dSuIgJMszyyh1srq1YE8R1SHmsP6z1WdsOZsIY7x7EaPLpt~GBCZS0TKBNQ691dSzy8i8E6AgSdDwhOYiS~4SNmLQN6y0O-kLUYf80acAp0I42BxIEv4Qifd~iAykCCClPN-h9oMiCa91STu2NA8~U-sExnTJf1jNdIv~Fk7YkoYOlg8UcpEEqqT165M2LMMWuR5juv98JtUYBFHWsbwUENj3fNfOkaMbPM6ZVyYPt24NYqk4qKohquVw__",
        "ForWho":"Male Only",
        "name":"Annexe for rent in Nugegoda",
        "address":"No. 13/A, Rubberwatter Road, Balla Ripu Para, K",
        "price":12000,
        "paymentType":"Monthly",
        "keyMoneyStates":false,
        "utilityIncluded":true,
        "tags":[
                { key: "Bedrooms", value: "2" },
                { key: "Bathrooms", value: "1" },
                { key: "Parking", value: "1" },
            ]
    },
    {
        id:"1",
        "imageURL":"https://media-hosting.imagekit.io/0a31f74da39d49b7/image%2018.png?Expires=1839726120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i117ey6rLljec-ifQLzMii18Ll-bHqZRhFtUiWcdjBQNnnVjGU23IilBBfN~ZP3fv3yZrElCiZ9yPUpEnVg2Q1ESE8543dSuIgJMszyyh1srq1YE8R1SHmsP6z1WdsOZsIY7x7EaPLpt~GBCZS0TKBNQ691dSzy8i8E6AgSdDwhOYiS~4SNmLQN6y0O-kLUYf80acAp0I42BxIEv4Qifd~iAykCCClPN-h9oMiCa91STu2NA8~U-sExnTJf1jNdIv~Fk7YkoYOlg8UcpEEqqT165M2LMMWuR5juv98JtUYBFHWsbwUENj3fNfOkaMbPM6ZVyYPt24NYqk4qKohquVw__",
        "ForWho":"Male Only",
        "name":"Annexe for rent in Nugegoda",
        "address":"No. 13/A, Rubberwatter Road, Balla Ripu Para, K",
        "price":12000,
        "paymentType":"Monthly",
        "keyMoneyStates":false,
        "utilityIncluded":true,
        "tags":[
                { key: "Bedrooms", value: "2" },
                { key: "Bathrooms", value: "1" },
                { key: "Parking", value: "1" },
            ]
    },
    {
        id:"1",
        "imageURL":"https://media-hosting.imagekit.io/0a31f74da39d49b7/image%2018.png?Expires=1839726120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i117ey6rLljec-ifQLzMii18Ll-bHqZRhFtUiWcdjBQNnnVjGU23IilBBfN~ZP3fv3yZrElCiZ9yPUpEnVg2Q1ESE8543dSuIgJMszyyh1srq1YE8R1SHmsP6z1WdsOZsIY7x7EaPLpt~GBCZS0TKBNQ691dSzy8i8E6AgSdDwhOYiS~4SNmLQN6y0O-kLUYf80acAp0I42BxIEv4Qifd~iAykCCClPN-h9oMiCa91STu2NA8~U-sExnTJf1jNdIv~Fk7YkoYOlg8UcpEEqqT165M2LMMWuR5juv98JtUYBFHWsbwUENj3fNfOkaMbPM6ZVyYPt24NYqk4qKohquVw__",
        "ForWho":"Male Only",
        "name":"Annexe for rent in Nugegoda",
        "address":"No. 13/A, Rubberwatter Road, Balla Ripu Para, K",
        "price":12000,
        "paymentType":"Monthly",
        "keyMoneyStates":false,
        "utilityIncluded":true,
        "tags":[
                { key: "Bedrooms", value: "2" },
                { key: "Bathrooms", value: "1" },
                { key: "Parking", value: "1" },
            ]
    },
    {
        id:"1",
        "imageURL":"https://media-hosting.imagekit.io/0a31f74da39d49b7/image%2018.png?Expires=1839726120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i117ey6rLljec-ifQLzMii18Ll-bHqZRhFtUiWcdjBQNnnVjGU23IilBBfN~ZP3fv3yZrElCiZ9yPUpEnVg2Q1ESE8543dSuIgJMszyyh1srq1YE8R1SHmsP6z1WdsOZsIY7x7EaPLpt~GBCZS0TKBNQ691dSzy8i8E6AgSdDwhOYiS~4SNmLQN6y0O-kLUYf80acAp0I42BxIEv4Qifd~iAykCCClPN-h9oMiCa91STu2NA8~U-sExnTJf1jNdIv~Fk7YkoYOlg8UcpEEqqT165M2LMMWuR5juv98JtUYBFHWsbwUENj3fNfOkaMbPM6ZVyYPt24NYqk4qKohquVw__",
        "ForWho":"Male Only",
        "name":"Annexe for rent in Nugegoda",
        "address":"No. 13/A, Rubberwatter Road, Balla Ripu Para, K",
        "price":12000,
        "paymentType":"Monthly",
        "keyMoneyStates":false,
        "utilityIncluded":true,
        "tags":[
                { key: "Bedrooms", value: "2" },
                { key: "Bathrooms", value: "1" },
                { key: "Parking", value: "1" },
            ]
    },
    {
        id:"1",
        "imageURL":"https://media-hosting.imagekit.io/0a31f74da39d49b7/image%2018.png?Expires=1839726120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i117ey6rLljec-ifQLzMii18Ll-bHqZRhFtUiWcdjBQNnnVjGU23IilBBfN~ZP3fv3yZrElCiZ9yPUpEnVg2Q1ESE8543dSuIgJMszyyh1srq1YE8R1SHmsP6z1WdsOZsIY7x7EaPLpt~GBCZS0TKBNQ691dSzy8i8E6AgSdDwhOYiS~4SNmLQN6y0O-kLUYf80acAp0I42BxIEv4Qifd~iAykCCClPN-h9oMiCa91STu2NA8~U-sExnTJf1jNdIv~Fk7YkoYOlg8UcpEEqqT165M2LMMWuR5juv98JtUYBFHWsbwUENj3fNfOkaMbPM6ZVyYPt24NYqk4qKohquVw__",
        "ForWho":"Male Only",
        "name":"Annexe for rent in Nugegoda",
        "address":"No. 13/A, Rubberwatter Road, Balla Ripu Para, K",
        "price":12000,
        "paymentType":"Monthly",
        "keyMoneyStates":false,
        "utilityIncluded":true,
        "tags":[
                { key: "Bedrooms", value: "2" },
                { key: "Bathrooms", value: "1" },
                { key: "Parking", value: "1" },
            ]
    },
    {
        id:"1",
        "imageURL":"https://media-hosting.imagekit.io/0a31f74da39d49b7/image%2018.png?Expires=1839726120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i117ey6rLljec-ifQLzMii18Ll-bHqZRhFtUiWcdjBQNnnVjGU23IilBBfN~ZP3fv3yZrElCiZ9yPUpEnVg2Q1ESE8543dSuIgJMszyyh1srq1YE8R1SHmsP6z1WdsOZsIY7x7EaPLpt~GBCZS0TKBNQ691dSzy8i8E6AgSdDwhOYiS~4SNmLQN6y0O-kLUYf80acAp0I42BxIEv4Qifd~iAykCCClPN-h9oMiCa91STu2NA8~U-sExnTJf1jNdIv~Fk7YkoYOlg8UcpEEqqT165M2LMMWuR5juv98JtUYBFHWsbwUENj3fNfOkaMbPM6ZVyYPt24NYqk4qKohquVw__",
        "ForWho":"Male Only",
        "name":"Annexe for rent in Nugegoda",
        "address":"No. 13/A, Rubberwatter Road, Balla Ripu Para, K",
        "price":12000,
        "paymentType":"Monthly",
        "keyMoneyStates":false,
        "utilityIncluded":true,
        "tags":[
                { key: "Bedrooms", value: "2" },
                { key: "Bathrooms", value: "1" },
                { key: "Parking", value: "1" },
            ]
    },
    {
        id:"1",
        "imageURL":"https://media-hosting.imagekit.io/0a31f74da39d49b7/image%2018.png?Expires=1839726120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i117ey6rLljec-ifQLzMii18Ll-bHqZRhFtUiWcdjBQNnnVjGU23IilBBfN~ZP3fv3yZrElCiZ9yPUpEnVg2Q1ESE8543dSuIgJMszyyh1srq1YE8R1SHmsP6z1WdsOZsIY7x7EaPLpt~GBCZS0TKBNQ691dSzy8i8E6AgSdDwhOYiS~4SNmLQN6y0O-kLUYf80acAp0I42BxIEv4Qifd~iAykCCClPN-h9oMiCa91STu2NA8~U-sExnTJf1jNdIv~Fk7YkoYOlg8UcpEEqqT165M2LMMWuR5juv98JtUYBFHWsbwUENj3fNfOkaMbPM6ZVyYPt24NYqk4qKohquVw__",
        "ForWho":"Male Only",
        "name":"Annexe for rent in Nugegoda",
        "address":"No. 13/A, Rubberwatter Road, Balla Ripu Para, K",
        "price":12000,
        "paymentType":"Monthly",
        "keyMoneyStates":false,
        "utilityIncluded":true,
        "tags":[
                { key: "Bedrooms", value: "2" },
                { key: "Bathrooms", value: "1" },
                { key: "Parking", value: "1" },
            ]
    },
    {
        id:"1",
        "imageURL":"https://media-hosting.imagekit.io/0a31f74da39d49b7/image%2018.png?Expires=1839726120&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=i117ey6rLljec-ifQLzMii18Ll-bHqZRhFtUiWcdjBQNnnVjGU23IilBBfN~ZP3fv3yZrElCiZ9yPUpEnVg2Q1ESE8543dSuIgJMszyyh1srq1YE8R1SHmsP6z1WdsOZsIY7x7EaPLpt~GBCZS0TKBNQ691dSzy8i8E6AgSdDwhOYiS~4SNmLQN6y0O-kLUYf80acAp0I42BxIEv4Qifd~iAykCCClPN-h9oMiCa91STu2NA8~U-sExnTJf1jNdIv~Fk7YkoYOlg8UcpEEqqT165M2LMMWuR5juv98JtUYBFHWsbwUENj3fNfOkaMbPM6ZVyYPt24NYqk4qKohquVw__",
        "ForWho":"Male Only",
        "name":"Annexe for rent in Nugegoda",
        "address":"No. 13/A, Rubberwatter Road, Balla Ripu Para, K",
        "price":12000,
        "paymentType":"Monthly",
        "keyMoneyStates":false,
        "utilityIncluded":true,
        "tags":[
                { key: "Bedrooms", value: "2" },
                { key: "Bathrooms", value: "1" },
                { key: "Parking", value: "1" },
            ]
    }
]

const ListingSection = () => {
  return (
    <section className=" bg-gradient-to-br from-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Explore Our Latest Listing
        </h2>
        <p className="text-black mb-10">
          Explore Featured properties for rent
        </p>
        </div>
        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {plases.map((place,id) => (
                <ListingCard
                    key={id}
                    id={place.id}
                    imageURL={place.imageURL}
                    ForWho={place.ForWho}
                    name={place.name}
                    address={place.address}
                    price={place.price}
                    paymentType={place.paymentType}
                    keyMoneyStates={place.keyMoneyStates}
                    utilityIncluded={place.utilityIncluded}
                    tags={place.tags}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ListingSection;
