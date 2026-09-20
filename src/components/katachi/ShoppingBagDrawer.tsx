"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck } from "lucide-react";
import { useKatachi } from "@/context/KatachiContext";
import { FREE_SHIPPING_THRESHOLD } from "@/data/katachi";

export function ShoppingBagDrawer() {
  const {
    isBagOpen,
    closeBag,
    bag,
    updateQuantity,
    removeFromBag,
    subtotal,
    freeShippingRemaining,
  } = useKatachi();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBag();
    };
    if (isBagOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isBagOpen, closeBag]);

  if (!isBagOpen) return null;

  const progressPercent = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100)
  );

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag"
      onClick={closeBag}
    >
      <div
        className="w-full max-w-md bg-[#FAF9F6] h-full shadow-2xl flex flex-col justify-between border-l border-[#1A1918]/15 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 border-b border-[#1A1918]/10 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <h3 className="font-serif text-2xl font-light text-[#1A1918]">Your Bag</h3>
            <span className="text-xs font-sans text-[#1A1918]/50 uppercase tracking-[0.14em]">
              ({bag.reduce((acc, i) => acc + i.quantity, 0)} Items)
            </span>
          </div>
          <button
            type="button"
            onClick={closeBag}
            className="p-2 text-[#1A1918] hover:opacity-60 transition-opacity"
            aria-label="Close bag"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-6 py-3.5 bg-[#F4F1EA] border-b border-[#1A1918]/10 text-xs font-sans">
          {freeShippingRemaining > 0 ? (
            <div className="space-y-2">
              <p className="text-[11px] text-[#1A1918]/80 font-light">
                Add <strong className="font-semibold text-[#1A1918]">${freeShippingRemaining.toLocaleString()}</strong> more to qualify for <span className="font-medium text-[#B86B4D]">Complimentary White Glove Delivery</span>.
              </p>
              <div className="w-full h-1 bg-[#E2DDD3] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1A1918] transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-[11px] text-[#1A1918] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#7B8576]" />
              <span>Complimentary White Glove Delivery Unlocked</span>
            </div>
          )}
        </div>

        {/* Bag Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 divide-y divide-[#1A1918]/10">
          {bag.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <p className="font-serif text-2xl font-light text-[#1A1918]/60">Your bag is empty</p>
              <p className="font-sans text-xs text-[#1A1918]/50 font-light max-w-xs mx-auto">
                Discover sculptural pieces designed for quiet living spaces.
              </p>
              <button
                type="button"
                onClick={closeBag}
                className="mt-4 px-6 py-2.5 bg-[#1A1918] text-[#F7F5F0] text-xs font-sans uppercase tracking-[0.18em]"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            bag.map((item) => (
              <div key={`${item.product.id}-${item.selectedColor}`} className="pt-6 first:pt-0 flex gap-4">
                {/* Product Thumbnail */}
                <div className="relative w-20 h-24 bg-[#EFECE5] border border-[#1A1918]/10 shrink-0 overflow-hidden">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    sizes="80px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Meta & Controls */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif text-base font-light text-[#1A1918] leading-tight">
                        {item.product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => removeFromBag(item.product.id, item.selectedColor)}
                        className="text-[#1A1918]/40 hover:text-[#B86B4D] transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] font-sans text-[#1A1918]/60 font-light">
                      {item.selectedColor}
                    </p>
                    <p className="text-xs font-sans font-medium text-[#1A1918]">
                      {item.product.priceFormatted}
                    </p>
                  </div>

                  {/* Quantity adjustment */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center border border-[#1A1918]/20 bg-[#F7F5F0] px-2 py-1">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1, item.selectedColor)
                        }
                        className="p-1 hover:opacity-60"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs px-2">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1, item.selectedColor)
                        }
                        className="p-1 hover:opacity-60"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-sans text-xs font-medium text-[#1A1918]">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {bag.length > 0 && (
          <div className="p-6 border-t border-[#1A1918]/10 bg-[#F4F1EA] space-y-4">
            <div className="space-y-1.5 text-xs font-sans">
              <div className="flex items-center justify-between text-[#1A1918]/70 font-light">
                <span>Subtotal</span>
                <span className="font-medium text-[#1A1918]">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-[#1A1918]/70 font-light">
                <span>Delivery</span>
                <span className="text-[#1A1918]">
                  {freeShippingRemaining === 0 ? "Complimentary" : "Calculated at checkout"}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1A1918]/10 flex items-center justify-between">
              <span className="font-serif text-lg font-light text-[#1A1918]">Estimated Total</span>
              <span className="font-serif text-xl font-light text-[#1A1918]">${subtotal.toLocaleString()}</span>
            </div>

            <button
              type="button"
              onClick={() => alert("Proceeding to secure checkout demo.")}
              className="w-full py-3.5 px-6 bg-[#1A1918] text-[#F7F5F0] text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-[#34322E] transition-colors flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] font-sans text-[#1A1918]/50 tracking-[0.1em] uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Insured Freight & 100% Secure Checkout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
