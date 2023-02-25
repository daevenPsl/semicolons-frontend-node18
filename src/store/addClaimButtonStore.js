import create from 'zustand'

export const useAddClaimButtonState = create((set)=> ({
    addClaim:true,
    setAddClaimButton: (data) => {
        set({addClaim: data.addClaim})
    },
}));