import React from "react";

function RootLayout({ children }: LayoutProps<"/">) {
  return <main>{children}</main>;
}

export default RootLayout;
