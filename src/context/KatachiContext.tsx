"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { KatachiProduct, BagItem } from "@/types/katachi";
import { FEATURED_PRODUCTS, FREE_SHIPPING_THRESHOLD } from "@/data/katachi";

interface KatachiContextType {
  bag: BagItem[];
  addToBag: (product: KatachiProduct, quantity?: number, color?: string) => void;
  removeFromBag: (productId: string, color?: string) => void;
  updateQuantity: (productId: string, quantity: number, color?: string) => void;
  clearBag: () => void;
  bagCount: number;
  subtotal: number;
  freeShippingRemaining: number;
  isBagOpen: boolean;
  openBag: () => void;
  closeBag: () => void;
  quickLookProduct: KatachiProduct | null;
  openQuickLook: (product: KatachiProduct) => void;
  closeQuickLook: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  isMobileMenuOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const KatachiContext = createContext<KatachiContextType | undefined>(undefined);

export function KatachiProvider({ children }: { children: React.ReactNode }) {
  const [bag, setBag] = useState<BagItem[]>([
    // Initial starter item to show bag capability immediately
    {
      product: FEATURED_PRODUCTS[0],
      quantity: 1,
      selectedColor: FEATURED_PRODUCTS[0].colors[0]?.name || "Warm Ivory",
    },
  ]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [quickLookProduct, setQuickLookProduct] = useState<KatachiProduct | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Auto dismiss toast
  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => setToastMessage(null), 3200);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const addToBag = (product: KatachiProduct, quantity = 1, color?: string) => {
    const chosenColor = color || product.colors[0]?.name || "Default";
    setBag((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === chosenColor
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prev, { product, quantity, selectedColor: chosenColor }];
    });
    showToast(`Added ${product.name} to bag`);
    setIsBagOpen(true);
  };

  const removeFromBag = (productId: string, color?: string) => {
    setBag((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && (!color || item.selectedColor === color))
      )
    );
  };

  const updateQuantity = (productId: string, quantity: number, color?: string) => {
    if (quantity <= 0) {
      removeFromBag(productId, color);
      return;
    }
    setBag((prev) =>
      prev.map((item) => {
        if (item.product.id === productId && (!color || item.selectedColor === color)) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearBag = () => setBag([]);

  const bagCount = bag.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = bag.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <KatachiContext.Provider
      value={{
        bag,
        addToBag,
        removeFromBag,
        updateQuantity,
        clearBag,
        bagCount,
        subtotal,
        freeShippingRemaining,
        isBagOpen,
        openBag: () => setIsBagOpen(true),
        closeBag: () => setIsBagOpen(false),
        quickLookProduct,
        openQuickLook: (p) => setQuickLookProduct(p),
        closeQuickLook: () => setQuickLookProduct(null),
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        isMobileMenuOpen,
        openMobileMenu: () => setIsMobileMenuOpen(true),
        closeMobileMenu: () => setIsMobileMenuOpen(false),
        toastMessage,
        showToast,
      }}
    >
      {children}
    </KatachiContext.Provider>
  );
}

export function useKatachi() {
  const context = useContext(KatachiContext);
  if (!context) {
    throw new Error("useKatachi must be used within KatachiProvider");
  }
  return context;
}
