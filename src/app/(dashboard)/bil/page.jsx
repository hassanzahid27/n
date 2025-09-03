"use client";
import Image from "next/image";

export default function PlanDetails() {
  return (
    <div className="bg-black max-w-[2000px] ">
      <div className="bg-gray-50 min-h-screen py-5 px-15 pr-20  ">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Header */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Your Plan Details
            </h2>
            <p className="text-gray-600 mt-1">
              You have an{" "}
              <span className="font-medium">Active 3 months access.</span>
              Stay focused and keep learning! Renewal on{" "}
              <span className="font-medium">Oct 16, 2025</span>.
            </p>
          </div>

          {/* Current Plan & Payment Method */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Current Plan Summary */}
            <div className=" rounded-3xl max-w-[900px] overflow-hidden shadow-sm">
              {/* Header */}
              <h3 className="text-base font-medium bg-gray-200 text-gray-900 px-6 py-4">
                Current Plan Summary
              </h3>

              {/* White content area */}
              <div className="bg-white p-6">
                <div className="flex gap-28 text-sm pr-8">
                  <div className="flex flex-col gap-2 justify-between">
                    <span className="text-gray-500 uppercase text-xs">
                      PLAN NAME
                    </span>
                    <span className="font-medium text-gray-900">
                      Growth Plan
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 justify-between">
                    <span className="text-gray-500 uppercase text-xs">
                      BILLING CYCLE
                    </span>
                    <span className="font-medium text-gray-900">Monthly</span>
                  </div>
                  <div className="flex flex-col gap-2 justify-between">
                    <span className="text-gray-500 uppercase text-xs">
                      PLAN COST
                    </span>
                    <span className="font-medium text-gray-900">$5698</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-2">
                    0 months completed out of 3 months
                  </p>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-9/12"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className=" rounded-3xl max-w-[900px] overflow-hidden shadow-sm">
              {/* Header */}
              <h3 className="text-base font-medium bg-gray-200 text-gray-900 px-6 py-4">
                Payment Method
              </h3>

              {/* White content area */}
              <div className="bg-white p-8 ">
                <div className="flex items-center justify-between   rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    {/* Mastercard logo */}

                    <div>
                      <div className="flex flex-row gap-3 -mb-3">
                        <Image
                          src="/master.png" // place Mastercard logo in /public folder
                          alt="Mastercard"
                          width={40}
                          height={40}
                        />

                        <p className="font-medium text-gray-900">Master Card</p>
                      </div>
                      <p className="text-sm text-gray-700 ml-14">
                        **** **** **** 4002
                      </p>
                      <p className="text-xs text-gray-500 ml-14">
                        Expiry on 2026/02
                      </p>
                      <p className="text-xs text-gray-500 mt-2 ml-14">
                        billing@acme.org
                      </p>
                    </div>
                  </div>

                  <button className="px-5 py-2.5 text-sm shadow rounded-lg bg-gray-50 hover:bg-gray-100">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Payment History
            </h3>
            <p className="text-gray-600 text-sm mb-5">
              View and manage your payment history and upcoming invoices here.
            </p>

            <div className="overflow-x-auto   rounded-xl shadow-sm">
              <table className="w-full text-sm">
                <thead className="  text-gray-600 text-left">
                  <tr>
                    <th className="px-6 py-3 font-medium">Payment ID</th>
                    <th className="px-6 py-3 font-medium">Date</th>
                    <th className="px-6 py-3 font-medium">Plan</th>
                    <th className="px-6 py-3 font-medium">Amount</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className=" bg-white pt-12  ">
                    <td className="px-6 py-4 font-mono text-gray-900">
                      cmd5indcd6017q7wum7m6sexh0
                    </td>
                    <td className="px-6 py-4">16 Jul 2025</td>
                    <td className="px-6 py-4">3 months access</td>
                    <td className="px-6 py-4">£45</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                        Paid
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
