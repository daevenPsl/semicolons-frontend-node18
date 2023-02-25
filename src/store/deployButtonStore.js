import create from 'zustand'

export const useDeployButtonState = create((set)=> ({

    disableDeployButton:true,

    setDisableDeployButton: (data) => {
        set({disableDeployButton: data.disableDeployButton})
    },

}));