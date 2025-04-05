"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React, { useState } from "react";
import { AppSidebar } from "../_components/sidebar";
import { Separator } from "@/components/ui/separator";

function Transfer() {
  const [walletAddress, setWalletAddress] = useState("");
  const [confirmWalletAddress, setConfirmWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [confirmStep, setConfirmStep] = useState(false);

  const handleTransfer = (e) => {
    e.preventDefault();
    setMessage("");

    if (!walletAddress || !amount) {
      setMessage("❌ Please enter wallet address and amount.");
      return;
    }

    setConfirmStep(true); // Move to confirmation step
  };

  const handleConfirmTransfer = async (e) => {
    e.preventDefault();
    setMessage("");

    if (confirmWalletAddress !== walletAddress) {
      setMessage("❌ Wallet addresses do not match. Please try again.");
      return;
    }

    setLoading(true);

    try {
      // Simulating a request to the backend
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated delay

      setMessage("✅ Transfer successful!");
      setConfirmStep(false);
      setWalletAddress("");
      setConfirmWalletAddress("");
      setAmount("");
    } catch (error) {
      setMessage("❌ Transaction error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <SidebarProvider className="flex h-screen bg-krypton-900/20 text-white">
      <AppSidebar />
      <div className="flex flex-col flex-1 p-10">
        <SidebarTrigger className="md:hidden xl:hidden 2xl:hidden lg:hidden " />
        <h1 className="text-4xl font-bold">Transfer</h1>
        <Separator className="my-4 border-2" />

        <div className="flex justify-center items-center flex-1">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">
            <h2 className="text-2xl font-semibold text-center mb-6">Transfer Crypto</h2>

            {!confirmStep ? (
              <form onSubmit={handleTransfer} className="space-y-5">
                <div>
                  <label className="block font-medium text-gray-300">Wallet Address</label>
                  <input
                    type="text"
                    className="w-full mt-2 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    placeholder="Enter recipient address"
                    onPaste={(e) => e.preventDefault()}
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-300">Amount</label>
                  <input
                    type="number"
                    className="w-full mt-2 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg transition duration-200"
                >
                  Proceed to Confirm
                </button>
              </form>
            ) : (
              <form onSubmit={handleConfirmTransfer} className="space-y-5">
                <p className="text-gray-300 text-center">
                  Please re-enter the wallet address to confirm.
                </p>
                <div>
                  <label className="block font-medium text-gray-300">Confirm Wallet Address</label>
                  <input
                    type="text"
                    className="w-full mt-2 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={confirmWalletAddress}
                    onChange={(e) => setConfirmWalletAddress(e.target.value)}
                    placeholder="Re-enter wallet address"
                    onPaste={(e) => e.preventDefault()} 
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg transition duration-200"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Confirm & Transfer"}
                </button>
                <button
                  type="button"
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold text-lg transition duration-200 mt-2"
                  onClick={() => setConfirmStep(false)}
                >
                  Edit Details
                </button>
              </form>
            )}

            {message && (
              <p
                className={`mt-4 text-center font-medium ${
                  message.includes("✅") ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default Transfer;
