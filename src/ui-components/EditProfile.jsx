/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Registration2 } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function EditProfile(props) {
  const { registration, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoSixEightOneValue,
    setTextFieldThreeOneFourNineTwoSixEightOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoSixEightEightValue,
    setTextFieldThreeOneFourNineTwoSixEightEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoSixNineFiveValue,
    setTextFieldThreeOneFourNineTwoSixNineFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoSevenZeroNineValue,
    setTextFieldThreeOneFourNineTwoSevenZeroNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoSevenOneSixValue,
    setTextFieldThreeOneFourNineTwoSevenOneSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoSevenTwoThreeValue,
    setTextFieldThreeOneFourNineTwoSevenTwoThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoSevenSevenTwoValue,
    setTextFieldThreeOneFourNineTwoSevenSevenTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoSevenThreeSevenValue,
    setTextFieldThreeOneFourNineTwoSevenThreeSevenValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoSevenFourFourValue,
    setTextFieldThreeOneFourNineTwoSevenFourFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoSevenFiveOneValue,
    setTextFieldThreeOneFourNineTwoSevenFiveOneValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoSevenFiveEightValue,
    setTextFieldThreeOneFourNineTwoSevenFiveEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneFourNineTwoSevenSixFiveValue,
    setTextFieldThreeOneFourNineTwoSevenSixFiveValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      fName: textFieldTwoNineSevenSixSixNineTwoTwoValue,
      mName: textFieldThreeOneFourNineTwoSixEightOneValue,
      lName: textFieldThreeOneFourNineTwoSixEightEightValue,
      DOB: textFieldThreeOneFourNineTwoSixNineFiveValue,
      Gender: "",
      Race: textFieldThreeOneFourNineTwoSevenZeroNineValue,
      BloodType: textFieldThreeOneFourNineTwoSevenOneSixValue,
      DateOfLastDonation: textFieldThreeOneFourNineTwoSevenTwoThreeValue,
      DonationFrequency: textFieldThreeOneFourNineTwoSevenSevenTwoValue,
      MedicalConditions: textFieldThreeOneFourNineTwoSevenThreeSevenValue,
      Address: textFieldThreeOneFourNineTwoSevenFourFourValue,
      City: textFieldThreeOneFourNineTwoSevenFiveOneValue,
      State: textFieldThreeOneFourNineTwoSevenFiveEightValue,
      ZipCode: textFieldThreeOneFourNineTwoSevenSixFiveValue,
      Country: textFieldTwoNineSevenSixSixNineTwoThreeValue,
    },
    model: Registration2,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "EditProfile")}
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
          {...getOverrideProps(overrides, "Edit Profile29766913")}
        >
          <View
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
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
            children="Edit Profile"
            {...getOverrideProps(overrides, "Edit Profile29766916")}
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
          {...getOverrideProps(overrides, "Divider29766917")}
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
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
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
            label="Middle Name"
            placeholder="B"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoSixEightOneValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoSixEightOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492681")}
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
            value={textFieldThreeOneFourNineTwoSixEightEightValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoSixEightEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492688")}
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
            label="Date Of Birth"
            placeholder="MM-DD-YYYY"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoSixNineFiveValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoSixNineFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492695")}
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
            label="Gender"
            placeholder="Set Gender"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField31492702")}
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
            label="Race"
            placeholder="Set Race"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoSevenZeroNineValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoSevenZeroNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492709")}
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
            label="Blood Type"
            placeholder="Set Blood Type"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoSevenOneSixValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoSevenOneSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492716")}
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
            label="Date of Last Donation"
            placeholder="MM-DD-YYYY"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoSevenTwoThreeValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoSevenTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492723")}
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
            label="Have You Donated Before?"
            placeholder="Yes/No"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField31492730")}
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
            label="How often do you donate?"
            placeholder="Input Paragraph Here"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoSevenSevenTwoValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoSevenSevenTwoValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492772")}
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
            label="Any medical condition(s)?"
            placeholder="List Medical Conditions Here"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoSevenThreeSevenValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoSevenThreeSevenValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492737")}
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
            label="Address"
            placeholder="Set Address Here"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoSevenFourFourValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoSevenFourFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492744")}
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
            label="City"
            placeholder="Set City Here"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoSevenFiveOneValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoSevenFiveOneValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492751")}
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
            label="State"
            placeholder="Set State Here"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoSevenFiveEightValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoSevenFiveEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492758")}
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
            label="Zip Code"
            placeholder="Set Zip Code Here"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeOneFourNineTwoSevenSixFiveValue}
            onChange={(event) => {
              setTextFieldThreeOneFourNineTwoSevenSixFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField31492765")}
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
            label="Country"
            placeholder="Set Country Here"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
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
          {...getOverrideProps(overrides, "Divider29766925")}
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
  );
}
