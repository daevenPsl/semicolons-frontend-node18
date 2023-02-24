import create from 'zustand'



export const useModalState = create((set)=> ({

    showModal:false,

    setShowModal: (data) => {
        console.log("showmodal called")
        set({showModal: data.showModal})

    },

}));


export const useActiveButtonState = create((set)=> ({

    disableButton:false,

    setDisableButton: (data) => {
        set({disableButton: data.disableButton})
    },

}));


export const useContractAddress = create((set)=> ({

    contractAddress:"",

    setContractAddress: (data) => {
        set({contractAddress: data.contractAddress})
    },

}));


