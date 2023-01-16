import React from "react";

function Facture(props) {
  // const {Date} = facture
  console.log(props.facture)
  console.log(props.facture.appartementid?.Adresse)
  return (
    <div>
      <section class="py-20 bg-black">
        <div class="max-w-5xl mx-auto py-16 bg-white">
          <article class="overflow-hidden ">
            <div class="bg-[white] rounded-b-md">
              <div class="p-9">
                <div class="space-y-6 text-slate-700">
                  {/* <img class="object-cover h-12" src="https://pbs.twimg.com/profile_images/1513243060834123776/dL8-d7zI_400x400.png" /> */}

                  <p class="text-xl font-extrabold tracking-tight uppercase font-body">
                    Syndicat Application
                  </p>
                </div>
              </div>
              <div class="p-9 text-centre">
                <div class="flex w-full">
                  <div class="grid grid-cols-4 gap-12">
                    <div class="text-sm font-light text-slate-500">
                      <p class="text-sm font-normal text-slate-700">Adresse:</p>
                      <p>{props.facture.appartementid?.Adresse}</p>
                      
                    </div>
                    <div class="text-sm font-light text-slate-500">
                      <p class="text-sm font-normal text-slate-700">
                        {" "}
                        name of the client
                      </p>
                      <p>The Boring Company</p>
                      <p>Tesla Street 007</p>
                      <p>Frisco</p>
                      <p>CA 0000</p>
                    </div>
                    <div class="text-sm font-light text-slate-500">
                      <p class="text-sm font-normal text-slate-700">
                        Invoice Number
                      </p>
                      <p>000000</p>

                      <p class="mt-2 text-sm font-normal text-slate-700">
                        Date{props.facture.Date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-9">
                <div class="flex flex-col mx-0 mt-8">
                  <table class="min-w-full divide-y divide-slate-500">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0"
                        >
                          Description
                        </th>

                        <th
                          scope="col"
                          class="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0"
                        >
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-slate-200">
                        <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                          <div class="font-medium text-slate-700">
                            numero de appartement
                          </div>
                        </td>

                        <td class="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                          $0.00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Facture;
