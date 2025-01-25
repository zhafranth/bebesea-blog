"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NavbarUI,
} from "@nextui-org/react";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { menus } from "./menu.enum";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <NavbarUI
      className="bg-white z-50"
      classNames={{
        wrapper: "sm:max-w-[85vw] max-w-[95vw]",
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand>
        <Link
          href="/"
          className="font-bold w-[200px] text-inherit text-xl text-yellow-800"
        >
          <Image
            unoptimized
            // radius="none"
            width={2262}
            height={1509}
            src="/images/logo.png"
            alt="Bebesea Logo"
            className="w-full h-full object-cover"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menus.map(({ items, key, label }) => (
          <Dropdown key={key}>
            <NavbarItem>
              {items.length > 0 ? (
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-slate-500"
                    radius="sm"
                    variant="light"
                    endContent={
                      <MdOutlineKeyboardArrowDown
                        size={18}
                        className="text-slate-700"
                      />
                    }
                  >
                    {label}
                  </Button>
                </DropdownTrigger>
              ) : (
                <Link href={`/${key}`}>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-slate-500"
                    radius="sm"
                    variant="light"
                  >
                    {label}
                  </Button>
                </Link>
              )}
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[240px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              {items.map((item) => (
                <DropdownItem
                  key={item.key}
                  className="data-[hover=true]:bg-yellow-100"
                  // description={item.description}
                  href={`/${item.key}`}
                >
                  <p className="text-yellow-600">{item.label}</p>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        ))}
        {/* <Button
          className="text-white bg-peach-500 text-xs px-4 py-2 rounded-md"
          radius="sm"
          // variant="light"
        >
          Join Us
        </Button> */}
        {/* <NavbarItem>
          <Link
            size="sm"
            className="text-white bg-yellow-600 text-xs px-4 py-2 rounded-md"
            href="/auth"
          >
            Login
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {menus.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} className="mb-4">
            {item.items.length > 0 ? (
              <>
                <p className="text-neutral-400 text-sm font-light">
                  {item.label}
                </p>
                {item.items.map((data) => (
                  <Link
                    key={`${item.key}-${data.key}`}
                    className="w-full text-yellow-600 mb-3"
                    href={`/${data.key}`}
                    size="lg"
                  >
                    {data.label}
                  </Link>
                ))}
              </>
            ) : (
              <Link
                key={`${item.key}`}
                className="w-full text-yellow-600 mb-3"
                href={`/${item.key}`}
                size="lg"
              >
                {item.label}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent justify="end" className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
    </NavbarUI>
  );
};

export default Header;
