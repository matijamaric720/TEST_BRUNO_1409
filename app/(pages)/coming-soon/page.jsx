import ComingSoon from "@/components/ComingSoon";
import MobailHeader1 from "@/components/headers/MobailHeader1";
import React from "react";

export default function page() {
  return (
    <>
      <MobailHeader1 />
      <main className="main">
        <ComingSoon />
      </main>
    </>
  );
}
