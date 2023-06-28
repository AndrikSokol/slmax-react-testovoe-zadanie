import { ISneaker } from "@/types/sneaker.interface";

export const api = {
  getSneakers: async (): Promise<ISneaker[]> => {
    const response = await fetch("http://localhost:4200/api", {
      next: {
        revalidate: 20,
      },
    });
    if (!response.ok) throw new Error("Unable to fetch Sneakers!");
    return response.json();
  },

  getSneaker: async (id: string): Promise<ISneaker> => {
    const response = await fetch(`http://localhost:4200/api/${id}`, {
      next: {
        revalidate: 20,
      },
    });
    if (!response.ok) throw new Error("Unable to fetch Sneaker!");
    return response.json();
  },

  deleteSneaker: async (id: string): Promise<ISneaker> => {
    const response = await fetch(`http://localhost:4200/api/${id}`, {
      method: "Delete",
    });
    if (!response.ok) throw new Error("Unable to fetch Sneaker!");
    return response.json();
  },
};
