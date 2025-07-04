//From https://headlessui.com/react/menu

import * as React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { useIntl } from "react-intl";
import { LocalizedLink } from "gatsby-plugin-i18n-l10n";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropMenu() {
  const siteMetadata = useSiteMetadata();

  const intl = useIntl();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          aria-label="Menu"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none"
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {siteMetadata.menuLinks.map((link) => (
              <Menu.Item>
                {({ active }) => (
                  <LocalizedLink
                    to={link.link}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    key={link.name}
                  >
                    <intl.formatMessage id={`${link.name}`} />
                  </LocalizedLink>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
