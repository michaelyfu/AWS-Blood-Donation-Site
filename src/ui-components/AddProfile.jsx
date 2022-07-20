/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import AddProfileManual from "./AddProfileManual.css";
import {
  getOverrideProps,
  useAuthSignOutAction,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Registration2 } from "../models";
import { schema } from "../models/schema";
import { Button, Divider, Flex, Text, TextField } from "@aws-amplify/ui-react";
import LogOutButton from "../components/LogOutButton";
export default function AddProfile(props) {
  const { registration, overrides, ...rest } = props;
  const [textFieldColonFirstNameValue, setTextFieldColonFirstNameValue] =
    useStateMutationAction("");
  const [textFieldColonMidNameValue, setTextFieldColonMidNameValue] =
    useStateMutationAction("");
  const [textFieldColonLastNameValue, setTextFieldColonLastNameValue] =
    useStateMutationAction("");
  const [textFieldColonDOBValue, setTextFieldColonDOBValue] =
    useStateMutationAction("");
  const [textFieldColonBloodTypeValue, setTextFieldColonBloodTypeValue] =
    useStateMutationAction("");
  const [textFieldColonLastDonationValue, setTextFieldColonLastDonationValue] =
    useStateMutationAction("");
  const [
    textFieldColonDonorFrequencyValue,
    setTextFieldColonDonorFrequencyValue,
  ] = useStateMutationAction("");
  const [
    textFieldColonMedConditionsValue,
    setTextFieldColonMedConditionsValue,
  ] = useStateMutationAction("");
  const [textFieldColonAddressValue, setTextFieldColonAddressValue] =
    useStateMutationAction("");
  const [
    textFieldThreeOneSixFiveThreeZeroZeroTwoValue,
    setTextFieldThreeOneSixFiveThreeZeroZeroTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneSixFiveThreeZeroZeroThreeValue,
    setTextFieldThreeOneSixFiveThreeZeroZeroThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneSixFiveThreeZeroZeroFourValue,
    setTextFieldThreeOneSixFiveThreeZeroZeroFourValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeOneSixFiveThreeZeroZeroFiveValue,
    setTextFieldThreeOneSixFiveThreeZeroZeroFiveValue,
  ] = useStateMutationAction("");
  const logOutButtonOnClick = useAuthSignOutAction({ global: false });
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      fName: textFieldColonFirstNameValue,
      mName: textFieldColonMidNameValue,
      lName: textFieldColonLastNameValue,
      DOB: textFieldColonDOBValue,
      BloodType: textFieldColonBloodTypeValue,
      DateOfLastDonation: textFieldColonLastDonationValue,
      DonationFrequency: textFieldColonDonorFrequencyValue,
      MedicalConditions: textFieldColonMedConditionsValue,
      Address: textFieldColonAddressValue,
      City: textFieldThreeOneSixFiveThreeZeroZeroTwoValue,
      State: textFieldThreeOneSixFiveThreeZeroZeroThreeValue,
      ZipCode: textFieldThreeOneSixFiveThreeZeroZeroFourValue,
      Country: textFieldThreeOneSixFiveThreeZeroZeroFiveValue,
      Gender: '"Gender"',
    },
    model: Registration2,
    schema: schema,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="715px"
      height="1628px"
      position="relative"
      margin="100px"
      padding="0px 0px 0px 0px" // CONTROLS MARGINS
      {...rest}
      {...getOverrideProps(overrides, "AddProfile")}
    >
      <Flex
        gap="16px"
        direction="column"
        width="715px"
        height="1628px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,238,238,1)"
        {...getOverrideProps(overrides, "AddProfile31652979")}
      >
        {/* <LogOutButton></LogOutButton> */}
        <Flex
          gap="0px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="24px 24px 24px 24px"
          {...getOverrideProps(overrides, "Content")}
        >
          {/* <div className="bar"> */}
          <Flex
            padding="0px 0px 0px 0px"
            // width="87px"
            // height="20px"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group 28")}
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
              position="absolute"
              top="0px"
              left="0px"
              padding="8px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Add Profile"
              {...getOverrideProps(overrides, "Add Profile31652984")}
            ></Text>
            <div className="bar">
            {/* Add Profile */}
          <LogOutButton></LogOutButton>
          </div>
          </Flex>
          {/* </div> */}
          {/* <LogOutButton></LogOutButton> */}
          <Flex
            gap="16px"
            direction="row"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 20px 0px"
            {...getOverrideProps(overrides, "Add Profile31652981")}
          ></Flex>
          {/* <LogOutButton></LogOutButton> */}
          {/* <Button
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
            children="Log Out"
            onClick={() => {
              logOutButtonOnClick();
            }}
            {...getOverrideProps(overrides, "Log Out Button")}
          ></Button> */}
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
              value={textFieldColonFirstNameValue}
              onChange={(event) => {
                setTextFieldColonFirstNameValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField: FirstName")}
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
              label="Middle Name (Optional)"
              placeholder="L"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              value={textFieldColonMidNameValue}
              onChange={(event) => {
                setTextFieldColonMidNameValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField: MidName")}
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
              value={textFieldColonLastNameValue}
              onChange={(event) => {
                setTextFieldColonLastNameValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField:LastName")}
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
              value={textFieldColonDOBValue}
              onChange={(event) => {
                setTextFieldColonDOBValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField:DOB")}
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
              {...getOverrideProps(overrides, "TextField: Gender")}
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
              {...getOverrideProps(overrides, "TextField: Race")}
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
              value={textFieldColonBloodTypeValue}
              onChange={(event) => {
                setTextFieldColonBloodTypeValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField: BloodType")}
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
              {...getOverrideProps(overrides, "TextField:DonatedBefore")}
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
              value={textFieldColonLastDonationValue}
              onChange={(event) => {
                setTextFieldColonLastDonationValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField:LastDonation")}
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
              value={textFieldColonDonorFrequencyValue}
              onChange={(event) => {
                setTextFieldColonDonorFrequencyValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField:DonorFrequency")}
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
              value={textFieldColonMedConditionsValue}
              onChange={(event) => {
                setTextFieldColonMedConditionsValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField:MedConditions")}
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
              value={textFieldColonAddressValue}
              onChange={(event) => {
                setTextFieldColonAddressValue(event.target.value);
              }}
              {...getOverrideProps(overrides, "TextField: Address")}
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
              value={textFieldThreeOneSixFiveThreeZeroZeroFiveValue}
              onChange={(event) => {
                setTextFieldThreeOneSixFiveThreeZeroZeroFiveValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField31653005")}
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
              value={textFieldThreeOneSixFiveThreeZeroZeroTwoValue}
              onChange={(event) => {
                setTextFieldThreeOneSixFiveThreeZeroZeroTwoValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField31653002")}
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
              value={textFieldThreeOneSixFiveThreeZeroZeroThreeValue}
              onChange={(event) => {
                setTextFieldThreeOneSixFiveThreeZeroZeroThreeValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField31653003")}
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
              value={textFieldThreeOneSixFiveThreeZeroZeroFourValue}
              onChange={(event) => {
                setTextFieldThreeOneSixFiveThreeZeroZeroFourValue(
                  event.target.value
                );
              }}
              {...getOverrideProps(overrides, "TextField31653004")}
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
