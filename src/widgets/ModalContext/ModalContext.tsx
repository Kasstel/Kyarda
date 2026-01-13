import { createContext, useContext, useState, type ReactNode } from "react";


type ModalType = "cart" | "product" | null;

interface ModalContextI {
  modalType: ModalType;
  modalData?: any;
  openModal: (type: ModalType, data?: any) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextI|null>(null)


export function ModalProvider({children} : {children: ReactNode}){
    const [modalType, setModalType] = useState<ModalType>(null);
    const [modalData, setModalData] = useState<any>(null);
 
    const openModal = (type: ModalType, data: any )=>{
      setModalType(type)
      setModalData(data)
    }

    const closeModal = ()=>{
      setModalType(null)
      setModalData(null)
    }

    return(
    <ModalContext.Provider value={{modalType, modalData, openModal, closeModal}}>
      {children}
    </ModalContext.Provider>
    )
}


export const useModal = ()=>useContext(ModalContext)!

