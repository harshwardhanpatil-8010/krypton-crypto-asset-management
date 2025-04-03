"use client"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React, { useState } from 'react';
import { AppSidebar } from '../_components/sidebar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Select, SelectItem } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

export default function CryptoBridge() {
  const [amount, setAmount] = useState("");
  const [sourceChain, setSourceChain] = useState("Source 1");
  const [destChain, setDestChain] = useState("Destination 1");
  const [isBridging, setIsBridging] = useState(false);

  const handleBridge = async () => {
    if (!amount) return alert("Enter a valid amount");

    setIsBridging(true);

    try {
      const response = await fetch("/api/bridge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, sourceChain, destChain })
      });
      const data = await response.json();
      alert("Bridge Successful: " + data.message);
    } catch (error) {
      alert("Bridge Failed");
    }
    setIsBridging(false);
  };

  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />
        <div className="flex-1 p-10">
          <SidebarTrigger className="md:hidden xl:hidden 2xl:hidden lg:hidden" />
          <h1 className="text-4xl text-white font-bold">Bridge</h1>
          <Separator className="my-4 border-2" />
          <div className="p-6 max-w-lg mx-auto border rounded-lg shadow-xl text-center">
            <h1 className="text-xl font-bold mb-4">Crypto Bridge</h1>
            <div className="my-4">
              <Select value={sourceChain} onValueChange={setSourceChain}>
                <SelectItem value="Source 1">Source 1</SelectItem>
                <SelectItem value="Source 2">Source 2</SelectItem>
              </Select>
              <Select value={destChain} onValueChange={setDestChain}>
                <SelectItem value="Destination 1">Destination 1</SelectItem>
                <SelectItem value="Destination 2">Destination 2</SelectItem>
              </Select>
            </div>
            <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
            <Button onClick={handleBridge} disabled={isBridging} className="mt-4">
              {isBridging ? "Bridging..." : "Bridge Tokens"}
            </Button>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
