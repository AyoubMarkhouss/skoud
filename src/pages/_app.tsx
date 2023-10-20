import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <div className="flex justify-between">
        <div className="grow bg-slate-50/75">
          <Topbar />
          <Component {...pageProps} />
        </div>
        <Sidebar />
      </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
