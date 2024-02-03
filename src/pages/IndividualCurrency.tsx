import { Link } from 'react-router-dom';
import React from 'react';
import { useLocation } from 'react-router-dom';
import img from '../assets/Vector.png';
import Card from '../components/card'; 
export default function IndividualCurrency() {
  const location = useLocation();
  const currency = new URLSearchParams(location.search).get('currency');

  return (
    <div className="overflow-x-hidden mb-[80px]">
      <div className="flex flex-col sm:flex-row mt-14 justify-center bg-blue-100">
        <div className="ml-[20px]">
          <h1 className="text-center mt-20 mb-4 font-roboto text-6xl font-bold leading-16 text-gray-900">{currency}</h1>
          <p>USD (United States Dollar): As the world's primary reserve currency, the USD plays a crucial role <br /> in international trade, finance, and investment. EUR (Euro): Serving as the official currency for <br /> 19 of the 27 European Union countries, the Euro is a symbol of economic integration. PKR <br /> (Pakistani Rupee): The official currency of Pakistan, the PKR reflects the country's economic <br /> dynamics. NZD (New Zealand Dollar): Known for its association with the Kiwi bird, the NZD <br /> is the currency of New Zealand. CAD (Canadian Dollar): As the currency of Canada, the CAD <br /> is closely tied to the country's natural resource exports, particularly oil. JPY (Japanese Yen): <br /> As the official currency of Japan, the JPY is known for its stability.</p>
          <button className="rounded-sm mt-6 bg-red-500 border-2 border-red-500 hover:bg-white hover:text-red-500 h-14 mb-20 text-white p-4">Compare rates</button>
        </div>
        <div className="mt-20 ml-[30px]">
          <img src={img} alt="image not found" width={500} />
        </div>
      </div>

      <h1 className='text-gray-900 mt-[100px] text-center font-roboto text-3xl font-bold leading-42'>Exchange {currency} without hidden fees</h1>
      <p className='text-gray-900 mt-[30px] text-center font-roboto text-base font-normal leading-24'>Wherever you need to send {currency}, our pricing is clear and simple. Our model is made up <br /> of two parts: an FX rate and a small payment fee – that’s it. So what you see at the time of <br /> your transaction is exactly what you’ll pay – there are no hidden charges.</p>
      <div className="flex flex-col sm:flex-row justify-center mb-[10px]">
        <Link to={`/Final?CUR1=${currency}&toCUR2=EUR`}><Card description='EUR' /></Link>
        <Link to={`/Final?CUR1=${currency}&toCUR2=JPY`}><Card description='JPY' /></Link>
        <Link to={`/Final?CUR1=${currency}&toCUR2=USD`}><Card description='USD' /></Link>
        <Link to={`/Final?CUR1=${currency}&toCUR2=CAD`}><Card description='CAD' /></Link>
      </div>
      <div className="flex flex-col sm:flex-row justify-center mb-[10px]">
        <Link to={`/Final?CUR1=${currency}&toCUR2=PKR`}><Card description='PKR' /></Link>
        <Link to={`/Final?CUR1=${currency}&toCUR2=NZD`}><Card description='NZD' /></Link>
      </div>
    </div>
  );
}