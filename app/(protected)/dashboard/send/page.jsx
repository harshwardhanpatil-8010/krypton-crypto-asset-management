"use client";

import React, { useState } from "react";
import { AppSidebar } from "../_components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";

export default function SendCrypto() {
  const [selectedNetwork, setSelectedNetwork] = useState("Ethereum");
  const [selectedToken, setSelectedToken] = useState("ETH");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [showNetworkDropdown, setShowNetworkDropdown] = useState(false);
  const [showTokenDropdown, setShowTokenDropdown] = useState(false);

  const networks = ["Ethereum", "Bitcoin"];
  const tokens = {
    Ethereum: ["ETH", "USDT", "DAI"],
    Bitcoin: ["BTC", "WBTC", "USDT"],
  };

  const handleSend = () => {
    if (!recipient || !amount) return alert("Please enter all fields.");
    alert(`Sending ${amount} ${selectedToken} to ${recipient} on ${selectedNetwork}.`);
   
  };

  return (
    <SidebarProvider className="bg-krypton-900/20">
      <AppSidebar />

      <div className="flex flex-col flex-1 p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl text-white font-bold">Send</h1>
          <SidebarTrigger className="md:hidden xl:hidden 2xl:hidden lg:hidden" />
        </div>

        <Separator className="my-4 border-2" />

        <div className="flex justify-center items-center flex-1">
          <div className="bg-gray-800 backdrop-blur-lg text-white p-8 rounded-3xl w-[400px] shadow-2xl border border-gray-700">
            
    
            <div className="relative">
              <div
                className="flex items-center justify-between bg-[#1E1E1E]/90 px-5 py-4 rounded-xl cursor-pointer hover:bg-[#252525] transition-colors duration-200"
                onClick={() => setShowNetworkDropdown(!showNetworkDropdown)}
              >
                <span className="font-medium">{selectedNetwork}</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
              {showNetworkDropdown && (
                <div className="absolute w-full bg-gray-700 mt-2 rounded-xl shadow-lg z-10">
                  {networks.map((network) => (
                    <div
                      key={network}
                      className="px-5 py-3 hover:bg-gray-600 cursor-pointer rounded-xl"
                      onClick={() => {
                        setSelectedNetwork(network);
                        setSelectedToken(tokens[network][0]);
                        setShowNetworkDropdown(false);
                      }}
                    >
                      {network}
                    </div>
                  ))}
                </div>
              )}
            </div>

   
            <div className="mt-6 relative">
              <div
                className="flex items-center justify-between bg-[#1E1E1E]/90 px-5 py-4 rounded-xl cursor-pointer hover:bg-[#252525] transition-colors duration-200"
                onClick={() => setShowTokenDropdown(!showTokenDropdown)}
              >
                <span className="font-medium">{selectedToken}</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
              {showTokenDropdown && (
                <div className="absolute w-full bg-gray-700 mt-2 rounded-xl shadow-lg z-10">
                  {tokens[selectedNetwork].map((token) => (
                    <div
                      key={token}
                      className="px-5 py-3 hover:bg-gray-600 cursor-pointer rounded-xl"
                      onClick={() => {
                        setSelectedToken(token);
                        setShowTokenDropdown(false);
                      }}
                    >
                      {token}
                    </div>
                  ))}
                </div>
              )}
            </div>


            <div className="mt-6">
              <span className="text-sm font-semibold text-gray-300">Recipient Address</span>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="bg-[#1E1E1E]/90 w-full text-white px-5 py-4 mt-2 rounded-xl outline-none"
                placeholder="Enter recipient wallet address"
              />
            </div>

           
            <div className="mt-6">
              <span className="text-sm font-semibold text-gray-300">Amount</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-[#1E1E1E]/90 w-full text-white px-5 py-4 mt-2 rounded-xl outline-none"
                placeholder="0.0"
              />
            </div>

   
            <button
              onClick={handleSend}
              className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl text-center font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-blue-500/20"
              disabled={!recipient || !amount}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
