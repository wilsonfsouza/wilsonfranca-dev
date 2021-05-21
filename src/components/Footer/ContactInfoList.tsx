import { Text, VStack } from "@chakra-ui/react";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { ContactInfoItem } from "./ContactInfoItem";

export function ContactInfoList() {
    return (
        <VStack alignItems="flex-start" spacing="1.5rem">
            <ContactInfoItem icon={FaPhone}>
                <Text fontFamily="Roboto Slab" fontSize={{ base: "0.875rem", lg: "1.125rem" }} fontWeight="light">+1 (530) 782-0830</Text>
            </ContactInfoItem>
            <ContactInfoItem icon={FaMailBulk}>
                <Text fontFamily="Roboto Slab" fontSize={{ base: "0.875rem", lg: "1.125rem" }} fontWeight="bold">wilson.franca.92</Text>
                <Text fontFamily="Roboto Slab" fontSize={{ base: "0.875rem", lg: "1.125rem" }} fontWeight="light">@gmail.com</Text>
            </ContactInfoItem>
        </VStack>
    );
}