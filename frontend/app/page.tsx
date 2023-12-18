/* eslint-disable @next/next/no-img-element */
"use client";
import api from "@/api";
import BookSlot from "@/components/BookSlot";
import Loading from "@/components/loading";
import batchTiming from "@/lib/batch";
import indianStates from "@/lib/state";
import { isValidAddress } from "@/lib/validation";
import { isAgeValid } from "@/lib/validation";
import { isValidCVC } from "@/lib/validation";
import { isValidDebitCardNumber } from "@/lib/validation";
import { isValidPhoneNumber } from "@/lib/validation";
import { isValidEmail } from "@/lib/validation";
import { isValidExpiryDate } from "@/lib/validation";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [batch, setBatch] = useState("Batch");
  const [holderName, setHolderName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    contactNumber: "",
  });
  const [address, setAddress] = useState({
    street: "",
    state: "",
    zipCode: "",
  });
  const [cardDetails, setCardDetails] = useState({
    cardNo: "",
    expiry: "",
    cvc: "",
  });

  const makePayment = async () => {
    console.log(data.name);
    if (!data.name || data.name?.length == 0) {
      toast.error("Please enter name...");
      return;
    } else if (!isValidEmail(data.email)) {
      toast.error("Enter a valid email...");
      return;
    } else if (!isValidPhoneNumber(data.contactNumber)) {
      toast.error("Enter valid phone no...");
      return;
    } else if (!isAgeValid(data.age)) {
      toast.error("Age should be 18-65...");
      return;
    } else if (batch == "Batch") {
      toast.error("Select batch...");
      return;
    } else if (!isValidDebitCardNumber(cardDetails.cardNo)) {
      console.log(cardDetails.cardNo);
      toast.error("Enter valid card no...");
      return;
    } else if (!isValidExpiryDate(cardDetails.expiry)) {
      toast.error("Enter valid card expiry...");
      return;
    } else if (!isValidAddress(address)) {
      toast.error("Enter valid address...");
      return;
    }
    setLoading(true);
    let body = {
      participant: {
        ...data,
        address: {
          ...address,
        },
      },
      batch: batch,
    };
    console.log(body);
    fetch(api, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        console.log(res);
      });
  };
  return (
    <>
      {!success ? (
        <div className="grid mt-6 sm:px-10 max-w-5xl mx-auto lg:px-20 xl:px-32">
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Book Your Slot</p>
            <p className="text-gray-400">
              Provide your necessary details to book the slot and make a
              payment.
            </p>
            <div className="">
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Name
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="name"
                  onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value });
                  }}
                  value={data.name}
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter you name..."
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value });
                  }}
                  value={data.email}
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Age & Contact No.
              </label>
              <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                  <input
                    id="card-no"
                    name="contactNumber"
                    onChange={(e) => {
                      setData({ ...data, [e.target.name]: e.target.value });
                    }}
                    type="+[1-9]"
                    value={data.contactNumber}
                    className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter you contact no eg. 8890******"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </div>
                <input
                  onChange={(e) => {
                    setData({ ...data, [e.target.name]: e.target.value });
                  }}
                  value={data.age}
                  name="age"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your age..."
                />
                <select
                  value={batch}
                  onChange={(e) => {
                    setBatch(e.target.value);
                  }}
                  name="batch"
                  defaultValue="Batch"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="State">Select Batch</option>
                  {batchTiming?.map((state: any) => {
                    return (
                      <>
                        <option value={state}>{state}</option>
                      </>
                    );
                  })}
                </select>
              </div>
              <label
                htmlFor="card-holder"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Holder
              </label>
              <div className="relative">
                <input
                  onChange={(e) => {
                    setHolderName(e.target.value);
                  }}
                  value={holderName}
                  id="card-holder"
                  name="card-holder"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full name here"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Details
              </label>
              <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                  <input
                    id="card-no"
                    name="cardNo"
                    onChange={(e) => {
                      setCardDetails({
                        ...cardDetails,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    type=""
                    value={cardDetails.cardNo}
                    className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </div>
                <input
                  onChange={(e) => {
                    setCardDetails({
                      ...cardDetails,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  value={cardDetails.expiry}
                  name="expiry"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="MM/YY"
                />
                <input
                  name="cvc"
                  onChange={(e) => {
                    setCardDetails({
                      ...cardDetails,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  type="number"
                  value={cardDetails.cvc}
                  className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="CVC"
                />
              </div>
              <label
                htmlFor="billing-address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Address
              </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input
                    id="billing-address"
                    name="street"
                    onChange={(e) => {
                      setAddress({
                        ...address,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    value={address.street}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Street Address"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <img
                      className="h-4 w-4 object-contain"
                      src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                      alt=""
                    />
                  </div>
                </div>
                <select
                  value={address.state}
                  onChange={(e) => {
                    setAddress({ ...address, [e.target.name]: e.target.value });
                  }}
                  name="state"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="State">Select State</option>
                  {indianStates?.map((state: any) => {
                    return (
                      <>
                        <option value={state}>{state}</option>
                      </>
                    );
                  })}
                </select>
                <input
                  name="zipCode"
                  onChange={(e) => {
                    setAddress({ ...address, [e.target.name]: e.target.value });
                  }}
                  type="number"
                  value={address.zipCode}
                  className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="ZIP"
                />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">500 Rs</p>
              </div>
            </div>
            {!loading ? (
              <button
                onClick={makePayment}
                className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
              >
                Make Payment
              </button>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      ) : (
        <BookSlot />
      )}
    </>
  );
}
