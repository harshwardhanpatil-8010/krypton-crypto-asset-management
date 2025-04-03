import { ArrowDown, ArrowUp, Bitcoin, CircleDollarSign, Coins, Gem } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export function AssetsList({ className }) {
  const assets = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      icon: Bitcoin,
      amount: 0.45,
      value: 12345.67,
      price: 27434.82,
      change: 2.34,
      positive: true,
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      icon: Gem,
      amount: 3.5,
      value: 6789.12,
      price: 1939.75,
      change: -1.23,
      positive: false,
    },
    {
      id: 3,
      name: "USD Coin",
      symbol: "USDC",
      icon: CircleDollarSign,
      amount: 2500,
      value: 2500,
      price: 1.0,
      change: 0.01,
      positive: true,
    },
    {
      id: 4,
      name: "Solana",
      symbol: "SOL",
      icon: Coins,
      amount: 45,
      value: 2929.05,
      price: 65.09,
      change: 5.67,
      positive: true,
    },
  ]

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Your Assets</CardTitle>
          <CardDescription>Manage your crypto portfolio</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead className="hidden md:table-cell">Amount</TableHead>
              <TableHead className="text-right">Value</TableHead>
              <TableHead className="hidden md:table-cell text-right">Price</TableHead>
              <TableHead className="text-right">24h</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((asset) => (
              <TableRow key={asset.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <asset.icon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{asset.name}</div>
                      <div className="hidden text-xs text-muted-foreground sm:inline-block">{asset.symbol}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {asset.amount} {asset.symbol}
                </TableCell>
                <TableCell className="text-right">
                  <div className="font-medium">${asset.value.toLocaleString()}</div>
                </TableCell>
                <TableCell className="hidden md:table-cell text-right">${asset.price.toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <div
                    className={`flex items-center justify-end gap-1 ${
                      asset.positive ? "text-emerald-500" : "text-rose-500"
                    }`}
                  >
                    {asset.positive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                    <span>{Math.abs(asset.change)}%</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

