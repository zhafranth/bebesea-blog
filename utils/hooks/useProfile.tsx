import { User } from "@prisma/client";
import { create } from "zustand";

interface useCurrentUserProps {
  user: User | null;
  setUser: (payload: User) => void;
}

const useProfile = create<useCurrentUserProps>((set) => ({
  user: null,
  setUser: (payload) => set(() => ({ user: payload })),
}));

export default useProfile;
