import { Box, Tooltip, Button, Text } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import React from "react";
import "./leftslider.css";
import { ChatState } from "../../context/ChatProvider";
import ProfileModel from "./ProfileModel";
const LeftSlider = () => {
  const { user } = ChatState();
  return (
    <>
      <Box className="chatNavbar">
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <Search2Icon></Search2Icon>
            <Text d={{ base: "none", md: "flex" }} px={4} m="0px">
              {" "}
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="xl" fontFamily="Work sans">
          Talk-A-Tive
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModel user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModel>
              <MenuDivider />
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default LeftSlider;
