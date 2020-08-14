import { useState, useEffect } from "react";
import Link from "next/link";

const hotels = [
  { id: 1, name: "Al khoory executive hotel", startDate: new Date() },
  { id: 2, name: "Al khaleej grand hotel", startDate: new Date() },
  { id: 3, name: "Address MontgoMerie", startDate: new Date() },
];

export default function hotelList() {

  const [owners, setOwners] = useState([]);

  useEffect(() => {
    async function loadData(){
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const ownerlList = await response.json();

      setOwners(ownerlList);
    }

    loadData();
   
  }, []);
  
  return (
    <div>
      <h1> Hotel List</h1>
      {owners.slice(0, 10).map((owner) => (
        <Link
          as={`/hotelDeteals/${owner.id}/${owner.startDate}`}
          href="/hotelDeteals/[id]/[startDate]"
        >
          <a>
            <h5> {owner.title}</h5>
          </a>
        </Link>
      ))}
    </div>
  );
}
