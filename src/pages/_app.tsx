import { type AppType } from "next/app";

import { api } from "@/utils/api";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <div className="md:flex md:justify-between">
        <div className="min-h-screen bg-slate-50/75 md:grow">
          <Topbar />
          <div className="mt-[3.813rem]">
            <Component {...pageProps} />
          </div>
        </div>
        <Sidebar />
      </div>
      <Toaster />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
