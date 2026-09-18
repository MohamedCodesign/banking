import React from "react";
import HeaderBox from "../components/HeaderBox";
import TotalBalanceBox from "../components/TotalBalanceBox";
import RightSidebar from "../components/RightSidebar";
import { getLoggedInUser } from "@/lib/Actions/user.actions";

async function page() {
  // const loggedIn = {
  //   firstName: "Mohamed",
  //   lastName: "hany",
  //   email: "hello.world@gmail.com",
  // };
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transaction={[]}
        banks={[{ currentBalance: 1250 }, { currentBalance: 550 }]}
      />
    </section>
  );
}

export default page;
