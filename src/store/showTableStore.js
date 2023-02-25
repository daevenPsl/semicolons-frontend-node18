import create from 'zustand'

export const useShowTableState = create((set)=> ({

    disableShowTable:false,

    setdisableShowTable: (data) => {
        set({disableShowTable: data.disableShowTable})
    },

}));