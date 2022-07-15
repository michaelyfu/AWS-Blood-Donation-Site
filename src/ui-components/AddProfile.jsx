/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Registration2 } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Image,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function AddProfile(props) {
  const { registartion, overrides, ...rest } = props;
  const [
    textFieldThreeOneSixFiveTwoNineNineZeroValue,
    setTextFieldThreeOneSixFiveTwoNineNineZeroValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneSixFiveTwoNineNineTwoValue,
    setTextFieldThreeOneSixFiveTwoNineNineTwoValue,
  ] = useStateMutationAction("");
  const uploadNewImageOnClick = useAuthSignOutAction({ global: false });
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      fName: textFieldThreeOneSixFiveTwoNineNineZeroValue,
      lName: textFieldThreeOneSixFiveTwoNineNineTwoValue,
    },
    model: Registration2,
    schema: schema,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AddProfile")}
    >
      <Flex
        gap="16px"
        direction="column"
        width="640px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "AddProfile31652979")}
      >
        <Flex
          gap="24px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="24px 24px 24px 24px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Flex
            gap="16px"
            direction="row"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Edit Profile31652981")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Add Profile"
              {...getOverrideProps(overrides, "Edit Profile31652984")}
            ></Text>
          </Flex>
          <Divider
            height="1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider31652985")}
          ></Divider>
          <Flex
            gap="16px"
            direction="row"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Profile")}
          >
            <Image
              width="96px"
              height="96px"
              shrink="0"
              position="relative"
              borderRadius="160px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "image")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="22px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              textDecoration="underline"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Upload New Image"
              onClick={() => {
                uploadNewImageOnClick();
              }}
              {...getOverrideProps(overrides, "Upload New Image")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Forms")}
          >
            <TextField
              display="flex"
              gap="8px"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="First Name"
              placeholder="John"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldThreeOneSixFiveTwoNineNineZeroValue}
              onChange={(event) => {
                setTextFieldThreeOneSixFiveTwoNineNineZeroValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField31652990")}
            ></TextField>
            <TextField
              display="flex"
              gap="8px"
              direction="column"
              justifyContent="center"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              label="Last Name"
              placeholder="Doe"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldThreeOneSixFiveTwoNineNineTwoValue}
              onChange={(event) => {
                setTextFieldThreeOneSixFiveTwoNineNineTwoValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField31652992")}
            ></TextField>
          </Flex>
          <Divider
            height="1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider31653006")}
          ></Divider>
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
