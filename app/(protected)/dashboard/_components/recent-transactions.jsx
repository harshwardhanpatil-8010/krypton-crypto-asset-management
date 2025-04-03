import { ArrowDown, ArrowUp } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      type: "buy",
      asset: "Bitcoin",
      symbol: "BTC",
      amount: 0.05,
      price: 27434.82,
      value: 1371.74,
      date: "2023-10-15",
    },
    {
      id: 2,
      type: "sell",
      asset: "Ethereum",
      symbol: "ETH",
      amount: 1.2,
      price: 1939.75,
      value: 2327.7,
      date: "2023-10-12",
    },
    {
      id: 3,
      type: "buy",
      asset: "Solana",
      symbol: "SOL",
      amount: 15,
      price: 65.09,
      value: 976.35,
      date: "2023-10-10",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest crypto transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center gap-4">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full ${
                  transaction.type === "buy" ? "bg-emerald-100" : "bg-rose-100"
                } ${transaction.type === "buy" ? "text-emerald-500" : "text-rose-500"} dark:bg-muted`}
              >
                {transaction.type === "buy" ? <ArrowDown className="h-4 w-4" /> : <ArrowUp className="h-4 w-4" />}
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {transaction.type === "buy" ? "Bought" : "Sold"} {transaction.asset}
                </p>
                <p className="text-xs text-muted-foreground">
                  {transaction.amount} {transaction.symbol} at ${transaction.price.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">${transaction.value.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">{transaction.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )};