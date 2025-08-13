import Image from "next/image";
import { Typography } from "../ui/typography";
import { Check, FileWarning, TriangleAlert, X } from "lucide-react";

export default function BuildSection() {
  return (
    <section className="py-20">
      <Typography
        variant="h1"
        as="h2"
        className="text-4xl lg:text-5xl font-bold mx-auto text-center"
      >
        Build for What Comes Next
      </Typography>
      <Typography
        variant="h1"
        as="h3"
        className="text-2xl mt-4 mb-8 text-[#777F89] mx-auto text-center"
      >
        Why modern users are choosing Flux over legacy platforms
      </Typography>

      <div className="w-screen bg-[#121212] -mx-[calc(50vw-50%)] py-10 mt-8">
        <div className="container max-w-[1400px] px-4 mx-auto text-white overflow-x-scroll">
          <table className="w-full min-w-[855px]">
            <thead>
              <tr className="border-b border-[#353535]">
                <th className="text-left pl-10 pb-3">
                  <Typography
                    variant="body-s"
                    className="text-md font-semibold"
                  >
                    Feature
                  </Typography>
                </th>
                <th className="pb-3">
                  <Image
                    width={76}
                    height={18}
                    src="/logos/flux.svg"
                    alt="Flux"
                  />
                </th>
                <th className="pb-3">
                  <Image
                    width={135}
                    height={25}
                    src="/logos/metamask.svg"
                    alt="Metamask"
                  />
                </th>
                <th className="pb-3">
                  <Image
                    width={90}
                    height={20}
                    src="/logos/revolut.svg"
                    alt="Revolut"
                  />
                </th>
                <th className="pb-3">
                  <Image
                    width={125}
                    height={25}
                    src="/logos/binance.svg"
                    alt="Binance"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#353535]">
                <td className="pl-10 py-3">
                  <Typography variant="body-s" className="text-sm">
                    Who controls funds?
                  </Typography>
                </td>
                <td>
                  <Typography variant="body-s" className="text-sm">
                    You (self-custody)
                  </Typography>
                </td>
                <td>
                  <Typography variant="body-s" className="text-sm">
                    You (self-custody)
                  </Typography>
                </td>
                <td>
                  <Typography variant="body-s" className="text-sm">
                    Revolut
                  </Typography>
                </td>
                <td>
                  <Typography variant="body-s" className="text-sm">
                    Binance
                  </Typography>
                </td>
              </tr>

              <tr className="border-b border-[#353535]">
                <td className="pl-10 py-3">
                  <Typography variant="body-s" className="text-sm">
                    KYC
                  </Typography>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    <Typography variant="body-s" className="text-sm">
                      No
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    <Typography variant="body-s" className="text-sm">
                      No
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Yes
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Yes
                    </Typography>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-[#353535]">
                <td className="pl-10 py-3">
                  <Typography variant="body-s" className="text-sm">
                    Earn yield
                  </Typography>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Up to 25% APY
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    <Typography variant="body-s" className="text-sm">
                      None (manual DeFi)
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <TriangleAlert className="w-5 h-5 text-yellow-500 mr-1" />
                    <Typography variant="body-s" className="text-sm">
                      Limited, locked
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <TriangleAlert className="w-5 h-5 text-yellow-500" />
                    <Typography variant="body-s" className="text-sm">
                      Limited, locked
                    </Typography>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-[#353535]">
                <td className="pl-10 py-3">
                  <Typography variant="body-s" className="text-sm">
                    Account Freeze Risk
                  </Typography>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    <Typography variant="body-s" className="text-sm">
                      No
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    <Typography variant="body-s" className="text-sm">
                      No
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Yes
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Yes
                    </Typography>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-[#353535]">
                <td className="pl-10 py-3">
                  <Typography variant="body-s" className="text-sm">
                    Send Money
                  </Typography>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      24/7 crypto & fiat
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Crypto only
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <TriangleAlert className="w-5 h-5 text-yellow-500" />
                    <Typography variant="body-s" className="text-sm">
                      Slower
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Crypto only
                    </Typography>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-[#353535]">
                <td className="pl-10 py-3">
                  <Typography variant="body-s" className="text-sm">
                    Stablecoin Support
                  </Typography>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Yes
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Yes
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    <Typography variant="body-s" className="text-sm">
                      No
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Yes
                    </Typography>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-[#353535]">
                <td className="pl-10 py-3">
                  <Typography variant="body-s" className="text-sm">
                    Perpetual futures
                  </Typography>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Built-in
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    <Typography variant="body-s" className="text-sm">
                      No
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    <Typography variant="body-s" className="text-sm">
                      No
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Yes
                    </Typography>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-[#353535]">
                <td className="pl-10 py-3">
                  <Typography variant="body-s" className="text-sm">
                    Security model
                  </Typography>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Biometric & Passkey
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <TriangleAlert className="w-5 h-5 text-yellow-500" />
                    <Typography variant="body-s" className="text-sm">
                      Seed phrase only
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <TriangleAlert className="w-5 h-5 text-yellow-500" />
                    <Typography variant="body-s" className="text-sm">
                      Email/password
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <TriangleAlert className="w-5 h-5 text-yellow-500" />
                    <Typography variant="body-s" className="text-sm">
                      Centralized login
                    </Typography>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-[#353535]">
                <td className="pl-10 py-3">
                  <Typography variant="body-s" className="text-sm">
                    Recovery options
                  </Typography>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Social keys (no seed)
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <TriangleAlert className="w-5 h-5 text-yellow-500" />
                    <Typography variant="body-s" className="text-sm">
                      Lose seed = loss
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <TriangleAlert className="w-5 h-5 text-yellow-500" />
                    <Typography variant="body-s" className="text-sm">
                      Support-based
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <TriangleAlert className="w-5 h-5 text-yellow-500" />
                    <Typography variant="body-s" className="text-sm">
                      Support-based
                    </Typography>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-[#353535]">
                <td className="pl-10 py-3">
                  <Typography variant="body-s" className="text-sm">
                    DeFi access
                  </Typography>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <Typography variant="body-s" className="text-sm">
                      Built-in
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <TriangleAlert className="w-5 h-5 text-yellow-500" />
                    <Typography variant="body-s" className="text-sm">
                      Manual
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    <Typography variant="body-s" className="text-sm">
                      No
                    </Typography>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-500" />
                    <Typography variant="body-s" className="text-sm">
                      No
                    </Typography>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-[#353535]">
                <td className="pl-10 py-3">
                  <Typography variant="body-s" className="text-sm">
                    Fee Structure
                  </Typography>
                </td>
                <td>
                  <Typography variant="body-s" className="text-sm">
                    Low & transparent
                  </Typography>
                </td>
                <td>
                  <Typography variant="body-s" className="text-sm">
                    Gas fees (manual)
                  </Typography>
                </td>
                <td>
                  <Typography variant="body-s" className="text-sm">
                    Region-based
                  </Typography>
                </td>
                <td>
                  <Typography variant="body-s" className="text-sm">
                    Hidden spreads
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
