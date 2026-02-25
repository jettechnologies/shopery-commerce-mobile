import { Link } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Platform } from "react-native";

type ExternalLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string | URL;
};

export function ExternalLink({ href, ...props }: ExternalLinkProps) {
  const isExternal = typeof href === "string" && href.startsWith("http");

  return (
    <Link
      {...props}
      href={href as any} // cast because TypeScript expects a route type
      onPress={(e) => {
        if (Platform.OS !== "web" && isExternal) {
          // Prevent the default behavior of linking to the default browser on native.
          e.preventDefault();
          // Open the link in an in-app browser.
          WebBrowser.openBrowserAsync(href.toString());
        }
      }}
    />
  );
}

// import { Link } from "expo-router";
// import * as WebBrowser from "expo-web-browser";
// import React from "react";
// import { Platform } from "react-native";

// export function ExternalLink(
//   props: Omit<React.ComponentProps<typeof Link>, "href"> & { href: string },
// ) {
//   return (
//     <Link
//       target="_blank"
//       {...props}
//       href={props.href}
//       onPress={(e) => {
//         if (Platform.OS !== "web") {
//           // Prevent the default behavior of linking to the default browser on native.
//           e.preventDefault();
//           // Open the link in an in-app browser.
//           WebBrowser.openBrowserAsync(props.href as string);
//         }
//       }}
//     />
//   );
// }
