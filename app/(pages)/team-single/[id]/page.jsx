import DownloadApp from "@/components/common/downloadApp/DownloadApp2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import BreadCumb2 from "@/components/otherPages/team/BreadCumb2";
import TeamDetails from "@/components/otherPages/team/TeamDetails";
import { teamMembers } from "@/data/team";
import React from "react";

export default function page({ params }) {
  const teamMember =
    teamMembers.filter((elm) => elm.id == params.id)[0] || teamMembers[0];
  return (
    <>
      <Header1 /> <MobailHeader1 />
      <main className="main">
        <BreadCumb2 teamMember={teamMember} />
        <TeamDetails teamMember={teamMember} />
        <DownloadApp />
      </main>
      <Footer1 />
    </>
  );
}
