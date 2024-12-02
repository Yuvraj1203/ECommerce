"use client"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { closeForgetModal } from "@/redux/slices/forgetModalSlice";
import { useState } from "react";

export default function ForgetPassModal({isOpen}) {
  const { onOpen, onOpenChange} = useDisclosure();
  const dispatch = useDispatch();
  const [OTP,setOTP] = useState(null);
  const [fieldId,setFieldId] = useState(0);

  const handleChange = (id) => {

    id>3 ? setFieldId(id+1) : setFieldId(3);
  }

  return (
    <>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Modal
        onClose={() => {
          dispatch(closeForgetModal());
        }}
       isOpen={isOpen} onOpenChange={onOpenChange}
       classNames={{
        closeButton:"absolute -right-3 -top-4 rounded-full bg-white shadow-sm",
        base:"overflow-visible"
       }}
       >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="py-5">
                <form className='gap-2 md:gap-4 flex flex-col items-center w-full' >
                {Array.from({length:4},()=>(
                  <Input 
                    onKeyUp={handleChange}
                    type={"number"} 
                    variant={"bordered"} 
                    maxLength={1}
                    classNames={{
                      inputWrapper:"rounded-md group-data-[focus=true]:shadow-[0_0_1px_0px_#DB4444] data-[hover=true]:border-[#dc9f9f] group-data-[focus=true]:border-[#DB4444]"
                    }}                    
                    required
                  />
                ))}
                    <Button type='submit' className="bg-[#DB4444] text-white text-sm md:text-base font-semibold rounded-md w-full">
                    Login
                    </Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}