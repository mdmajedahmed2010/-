import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

export interface WishlistItem {
  id: string; // product id
  name: string;
  slug: string;
  price: number;
  image: string;
}

interface WishlistState {
  items: WishlistItem[];
  
  // Actions
  addItem: (item: WishlistItem) => void;
  removeItem: (id: string) => void;
  toggleItem: (item: WishlistItem) => void;
  clearWishlist: () => void;
  
  // Computed
  hasItem: (id: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        const currentItems = get().items;
        if (!currentItems.find((i) => i.id === item.id)) {
          set({ items: [...currentItems, item] });
          toast.success("Added to wishlist");
        }
      },
      
      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
        toast.success("Removed from wishlist");
      },
      
      toggleItem: (item) => {
        const currentItems = get().items;
        if (currentItems.find((i) => i.id === item.id)) {
          set({ items: currentItems.filter((i) => i.id !== item.id) });
          toast.success("Removed from wishlist");
        } else {
          set({ items: [...currentItems, item] });
          toast.success("Added to wishlist");
        }
      },
      
      clearWishlist: () => set({ items: [] }),
      
      hasItem: (id) => {
        return get().items.some((i) => i.id === id);
      },
    }),
    {
      name: "bibaz-wishlist-storage",
    }
  )
);
