"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function AddToCartPanel({ product }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const router = useRouter();

  function handleAdd() {
    addToCart(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <div className="flex items-center border border-line font-mono">
        <button
          type="button"
          className="focus-ring px-4 py-3 text-muted hover:text-paper"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          aria-label="Decrease quantity"
        >
          –
        </button>
        <span className="w-8 text-center text-sm">{qty}</span>
        <button
          type="button"
          className="focus-ring px-4 py-3 text-muted hover:text-paper"
          onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        disabled={product.stock === 0}
        className="btn-primary focus-ring flex-1 md:flex-none md:min-w-[220px]"
      >
        {product.stock === 0 ? "Out of stock" : added ? "Added ✓" : "Add to cart"}
      </button>

      <button
        type="button"
        onClick={() => {
          addToCart(product.id, qty);
          router.push("/cart");
        }}
        className="btn-outline focus-ring"
        disabled={product.stock === 0}
      >
        Buy now
      </button>
    </div>
  );
}
