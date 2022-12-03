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
export default function Updateform() {
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
      m={"100vh"}
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
                Milstone
              </Heading>
              <Heading fontSize="md" fontWeight="medium" lineHeight="6">
                Milestone update
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
              >
                update milestones involved in the shipment lifecycle
              </Text>
            </Box>
          </GridItem>
          <GridItem
            mt={[5, null, 0]}
            colSpan={{
              md: 2,
            }}
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
                      htmlFor="milestoneid"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      MilestoneID
                    </FormLabel>
                    <Input
                      type="text"
                      name="milestoneid"
                      id="mliestoneid"
                      autoComplete="item number"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("milestoneid")}
                    />
                  </FormControl>

              
                  <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                    <FormLabel
                      htmlFor="milstoneTransactionHash"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Date
                    </FormLabel>
                    <Input
                      type="text"
                      name="milstoneTransactionHash"
                      id="milstoneTransactionHash"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("milstoneTransactionHash")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                    <FormLabel
                      htmlFor="Time"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Time
                    </FormLabel>
                    <Input
                      type="text"
                      name="milestoneTimestamp"
                      id="milestoneTimestamp"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("milestoneTimestamp")}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                    <FormLabel
                      htmlFor="isOkay"
                      fontSize="sm"
                      fontWeight="md"
                      color="gray.700"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      isOkay ?
                    </FormLabel>
                    <Input
                      type="text"
                      name="isOkay"
                      id="isOkay"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register("isOkay")}
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
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
                >
                  Save
                </Button>
              </Box>
            </chakra.form>
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
    </Box>
  );
}
