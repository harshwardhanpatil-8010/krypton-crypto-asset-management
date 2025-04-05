export async function POST(req) {
    const body = await req.json();
    const { fromToken, toToken, amount } = body;
  

    const rate = Math.random() * (1.2 - 0.8) + 0.8;
  
    const convertedAmount = (amount * rate).toFixed(4);
  
    return new Response(
      JSON.stringify({ convertedAmount, rate }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }
  