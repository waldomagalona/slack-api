import React from "react";
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import DropdownLink from "@material-tailwind/react/DropdownLink"

export default function DropDownMenu() {
    return (
        <Dropdown
            color="lightBlue"
            placement="top-end"
            buttonText="Dropup"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            ripple="light"
        >
            <DropdownItem color="lightBlue" ripple="light">
                Action
            </DropdownItem>
            <DropdownLink
                href="#"
                color={color}
                ripple="light"
                onClick={(e) => e.preventDefault()}
            >
                Another Action
            </DropdownLink>
            <DropdownItem color="lightBlue" ripple="light">
                Something else
            </DropdownItem>
        </Dropdown>
    )
}