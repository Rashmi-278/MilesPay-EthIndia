import React from "react";
import { useForm } from "react-hook-form";

import {
  Box,
  Divider,
  SimpleGrid,
  GridItem,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Heading,
  Flex,
  Checkbox,
  Radio,
  RadioGroup,
  Text,
  chakra,
  VStack,
} from "@chakra-ui/react";
export default function Orderform() {
  const invoiceData = [];
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    console.log(values)
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }
  return (
    <Box
      bg="#edf3f8"
      _dark={{
        bg: "#111",
      }}
      p={10}
    >
      <chakra.form
        method="POST"
        shadow="base"
        rounded={[null, "md"]}
        overflow={{
          sm: "hidden",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Divider
          my="5"
          borderColor="gray.300"
          _dark={{
            borderColor: "whiteAlpha.300",
          }}
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />

        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                <Heading
                  fontSize="lg"
                  fontWeight="medium"
                  lineHeight="6"
                  fontStyle={"bold"}
                >
                  From
                </Heading>
                <Heading fontSize="md" fontWeight="medium" lineHeight="6">
                  Organization Information
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Specify Orgnization details and pick up address.
                </Text>
              </Box>
            </GridItem>
            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg="white"
                _dark={{
                  bg: "#141517",
                }}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="fromOrgName"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Name
                    </FormLabel>
                    <Input
                      type="text"
                      name="fromOrgName"
                      id="fromOrgName"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("fromOrgName")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="fromTaxId"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      TaxID
                    </FormLabel>
                    <Input
                      type="text"
                      name="fromTaxId"
                      id="fromTaxId"
                      autoComplete="tax number"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("fromTaxId")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="fromEmail"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Email address
                    </FormLabel>
                    <Input
                      type="text"
                      name="fromEmail"
                      id="fromEmail"
                      autoComplete="email"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("fromEmail")}
                    />
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="fromWallet"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Wallet address
                    </FormLabel>
                    <Input
                      type="text"
                      name="fromWallet"
                      id="fromWallet"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("fromWallet")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="fromCountry"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Country / Region
                    </FormLabel>
                    <Select
                      id="fromCountry"
                      name="fromCountry"
                      placeholder="Select option"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("fromCountry")}
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                      <option>India</option>
                    </Select>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      htmlFor="fromStreet"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Street address
                    </FormLabel>
                    <Input
                      type="text"
                      name="fromStreet"
                      id="fromStreet"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("fromStreet")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                    <FormLabel
                      htmlFor="fromCity"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      City
                    </FormLabel>
                    <Input
                      type="text"
                      name="fromCity"
                      id="fromCity"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("fromCity")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="fromState"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      State / Province
                    </FormLabel>
                    <Input
                      type="text"
                      name="fromState"
                      id="fromState"
                      autoComplete="state"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("fromState")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="fromPostalCode"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      ZIP / Postal
                    </FormLabel>
                    <Input
                      type="text"
                      name="fromPostalCode"
                      id="fromPostalCode"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("fromPostalCode")}
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider
          my="5"
          borderColor="gray.300"
          _dark={{
            borderColor: "whiteAlpha.300",
          }}
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />

        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                <Heading
                  fontSize="lg"
                  fontWeight="medium"
                  lineHeight="6"
                  fontStyle={"bold"}
                >
                  To
                </Heading>
                <Heading fontSize="md" fontWeight="medium" lineHeight="6">
                  Organization Information
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Specify Orgnization details and drop off address.
                </Text>
              </Box>
            </GridItem>
            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg="white"
                _dark={{
                  bg: "#141517",
                }}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="toOrgName"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Name
                    </FormLabel>
                    <Input
                      type="text"
                      name="toOrgName"
                      id="toOrgName"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("toOrgName")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="toTaxId"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      TaxID
                    </FormLabel>
                    <Input
                      type="text"
                      name="toTaxId"
                      id="toTaxId"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("toTaxId")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="toEmail"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Email address
                    </FormLabel>
                    <Input
                      type="text"
                      name="toEmail"
                      id="toEmail"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("toEmail")}
                    />
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel
                      htmlFor="toWallet"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Wallet address
                    </FormLabel>
                    <Input
                      type="text"
                      name="toWallet"
                      id="toWallet"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("toWallet")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="toCountry"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Country / Region
                    </FormLabel>
                    <Select
                      id="toCountry"
                      name="toCountry"
                      placeholder="Select option"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("toCountry")}
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                      <option>India</option>
                    </Select>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      htmlFor="toStreet"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Street address
                    </FormLabel>
                    <Input
                      type="text"
                      name="toStreet"
                      id="toStreet"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("toStreet")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                    <FormLabel
                      htmlFor="toCity"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      City
                    </FormLabel>
                    <Input
                      type="text"
                      name="toCity"
                      id="toCity"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("toCity")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="toState"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      State / Province
                    </FormLabel>
                    <Input
                      type="text"
                      name="toState"
                      id="toState"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("toState")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="toPostcode"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      ZIP / Postal
                    </FormLabel>
                    <Input
                      type="text"
                      name="toPostcode"
                      id="toPostcode"
                      autoComplete="postal-code"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("toPostcode")}
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
        <Divider
          my="5"
          borderColor="gray.300"
          _dark={{
            borderColor: "whiteAlpha.300",
          }}
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />

        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                <Heading
                  fontSize="lg"
                  fontWeight="medium"
                  lineHeight="6"
                  fontStyle={"bold"}
                >
                  Pick up and Drop off
                </Heading>
                <Heading fontSize="md" fontWeight="medium" lineHeight="6">
                  Pick up and Drop off address
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Specify Orgnization details and drop off address.
                </Text>
              </Box>
            </GridItem>
            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg="white"
                _dark={{
                  bg: "#141517",
                }}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                    Pick up address
                  </Heading>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="pickUpCountry"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Country / Region
                    </FormLabel>
                    <Select
                      id="pickUpCountry"
                      name="pickUpCountry"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("pickUpCountry")}
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                      <option>India</option>
                    </Select>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      htmlFor="pickUpStreet"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Street address
                    </FormLabel>
                    <Input
                      type="text"
                      name="pickUpStreet"
                      id="pickUpStreet"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("pickUpStreet")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                    <FormLabel
                      htmlFor="pickUpCity"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      City
                    </FormLabel>
                    <Input
                      type="text"
                      name="pickUpCity"
                      id="pickUpCity"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("pickUpCity")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="pickUpState"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      State / Province
                    </FormLabel>
                    <Input
                      type="text"
                      name="pickUpState"
                      id="pickUpState"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("pickUpState")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="pickUpPostCode"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      ZIP / Postal
                    </FormLabel>
                    <Input
                      type="text"
                      name="pickUpPostCode"
                      id="pickUpPostCode"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("pickUpPostCode")}
                    />
                  </FormControl>
                  <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                    Drop off address
                  </Heading>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="dropOffCountry"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Country / Region
                    </FormLabel>
                    <Select
                      id="dropOffCountry"
                      name="dropOffCountry"
                      placeholder="Select option"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("dropOffCountry")}
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                      <option>India</option>
                    </Select>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      htmlFor="dropOffStreet"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Street address
                    </FormLabel>
                    <Input
                      type="text"
                      name="dropOffStreet"
                      id="dropOffStreet"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("dropOffStreet")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                    <FormLabel
                      htmlFor="dropOffCity"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      City
                    </FormLabel>
                    <Input
                      type="text"
                      name="dropOffCity"
                      id="dropOffCity"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("dropOffCity")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="dropOffState"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      State / Province
                    </FormLabel>
                    <Input
                      type="text"
                      name="dropOffState"
                      id="dropOffState"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("dropOffState")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="dropOffPostCode"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      ZIP / Postal
                    </FormLabel>
                    <Input
                      type="text"
                      name="dropOffPostCode"
                      id="dropOffPostCode"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("dropOffPostCode")}
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider
          my="5"
          borderColor="gray.300"
          _dark={{
            borderColor: "whiteAlpha.300",
          }}
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />

        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                <Heading
                  fontSize="lg"
                  fontWeight="medium"
                  lineHeight="6"
                  fontStyle={"bold"}
                >
                  Items
                </Heading>
                <Heading fontSize="md" fontWeight="medium" lineHeight="6">
                  Invoice items
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Add items to be included in the invice
                </Text>
              </Box>
            </GridItem>
            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg="white"
                _dark={{
                  bg: "#141517",
                }}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="itemName"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Item Name
                    </FormLabel>
                    <Input
                      type="text"
                      name="itemName"
                      id="itemName"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("itemName")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="itemId"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      ItemID
                    </FormLabel>
                    <Input
                      type="text"
                      name="itemId"
                      id="itemid"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("itemId")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                    <FormLabel
                      htmlFor="iquantity"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Quantity
                    </FormLabel>
                    <Input
                      type="number"
                      name="iquantity"
                      id="iquantity"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("iquantity")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="perAmount"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Per Amount
                    </FormLabel>
                    <Input
                      type="number"
                      name="perAmount"
                      id="perAmount"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("perAmount")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="amount"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Amount
                    </FormLabel>
                    <Input
                      type="number"
                      name="amount"
                      id="amount"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("amount")}
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider
          my="5"
          borderColor="gray.300"
          _dark={{
            borderColor: "whiteAlpha.300",
          }}
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />

        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                <Heading
                  fontSize="lg"
                  fontWeight="medium"
                  lineHeight="6"
                  fontStyle={"bold"}
                >
                  Milstones
                </Heading>
                <Heading fontSize="md" fontWeight="medium" lineHeight="6">
                  Milestone infomations
                </Heading>
                <Text
                  mt={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Add milestones involved in the shipment lifecycle
                </Text>
              </Box>
            </GridItem>
            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg="white"
                _dark={{
                  bg: "#141517",
                }}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="mSupervisor1"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Milestone Supervisor 1 wallet address
                    </FormLabel>
                    <Input
                      type="text"
                      name="mSupervisor1"
                      id="mSupervisor1"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("mSupervisor1")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="mSupervisor2"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Milestone Supervisor 1 wallet address
                    </FormLabel>
                    <Input
                      type="text"
                      name="mSupervisor2"
                      id="mSupervisor2"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("mSupervisor2")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="mSupervisor3"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Milestone Supervisor 1 wallet address
                    </FormLabel>
                    <Input
                      type="text"
                      name="mSupervisor3"
                      id="mSupervisor3"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("mSupervisor3")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="mSupervisor4"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Milestone Supervisor 1 wallet address
                    </FormLabel>
                    <Input
                      type="text"
                      name="mSupervisor4"
                      id="mSupervisor4"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("mSupervisor4")}
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider
          my="5"
          borderColor="gray.300"
          _dark={{
            borderColor: "whiteAlpha.300",
          }}
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />

        <Box
          px={{
            base: 4,
            sm: 6,
          }}
          py={3}
          bg="blue.700"
          _dark={{
            bg: "#121212",
          }}
          textAlign="right"
        >
          <Button
            type="submit"
            colorScheme="brand"
            color={"black"}
            background={"white"}
            _focus={{
              shadow: "",
            }}
            fontWeight="md"
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </Box>
      </chakra.form>
    </Box>
  );
}
