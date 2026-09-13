import React from "react";

function RootLayout({ children }: LayoutProps<"/">) {
  return <main>SIDEBAR{children}</main>;
}

export default RootLayout;
