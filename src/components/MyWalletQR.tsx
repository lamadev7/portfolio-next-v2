import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { GiCoffeeCup } from "react-icons/gi";
import { SiBuymeacoffee } from 'react-icons/si';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from './ui/animated-modal';

export default function MyWalletQR() {
    const images = [
        "/images/esewa.jpeg",
        "/images/prabhu.jpeg",
        "/images/sanima.jpeg",
    ];

    return (
        <Modal>
            <ModalTrigger className="w-full sm:w-fit bg-black dark:bg-white text-sm dark:text-black text-white flex justify-center group/modal-btn">
                <span className="flex items-center gap-2 group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    Buy me a coffee <SiBuymeacoffee />
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    <SiBuymeacoffee />
                </div>
            </ModalTrigger>
            <ModalBody>
                <ModalContent className='flex justify-center items-center'>
                    <h4 className="flex justify-center items-center gap-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-100 font-bold text-center">
                        <GiCoffeeCup className='text-2xl' /> Support My Work!
                    </h4>
                    <p className='mt-10 mb-2 text-center'>Scan any QR code below to send your support:</p>
                    <div className="flex justify-center items-center">
                        {images.map((image, idx) => (
                            <motion.div
                                key={"images" + idx}
                                style={{
                                    rotate: Math.random() * 20 - 10,
                                }}
                                whileHover={{
                                    scale: 1.8,
                                    rotate: 0,
                                    zIndex: 100,
                                }}
                                whileTap={{
                                    scale: 1.1,
                                    rotate: 0,
                                    zIndex: 100,
                                }}
                                className="shadow-lg rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                            >
                                <Image
                                    src={image}
                                    alt="bali images"
                                    width="500"
                                    height="500"
                                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                                />
                            </motion.div>
                        ))}
                    </div>

                </ModalContent>
            </ModalBody>
        </Modal>
    )
}
