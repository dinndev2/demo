import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePDF from "./getPDF/InvoicePDF";

export default function Controls ({ recordedDays }) {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const billFrom = {
    name: "User",
    address: "123 Main St, Anytown, USA",
    phone: "123-456-7890",
    email: "user@example.com"
  }
  const client = {
    name: "dinndev",
    address: "123 Main St, Anytown, USA",
    phone: "123-456-7890",
    email: "dinndev@gmail.com"
  }
  const total = recordedDays.length * 100;


  return (
    <div className=" absolute top-2 right-2 md:top-4 md:right-4 flex flex-col gap-2 w-[calc(100%-1rem)] max-w-[250px] md:max-w-[250px] ">  
      <div className="rounded-lg border-4 border-gray-100 bg-gray-50 p-3 md:p-5 w-[calc(100%-1rem)] max-w-[250px] md:max-w-[250px] z-10">
        <span className="text-sm text-gray-700 font-medium block">
          This is a demo from a contractor portal of Naoi, where a contractor can raise an invoice for their work.
        </span>
      </div>
      <div className="rounded-lg border-l-2 border-gray-100 bg-gray-50 p-3 md:p-5 w-[calc(100%-1rem)] max-w-[250px] md:max-w-[250px] z-10">
        <span className="text-xs text-gray-900 block">
          Timesheet is automatically calculated on save and ready to download as PDF 
          <br className="hidden sm:block" />
          <span className="text-xs text-gray-400 block mt-1">This is only for demo purposes.</span>
        </span>
        {recordedDays.length > 0 && (
            <PDFDownloadLink 
              document={<InvoicePDF billFrom={billFrom} client={client} total={total} items={recordedDays} />} 
              fileName={`timesheet-${currentMonth + 1}-${currentYear}.pdf`}
              className="mt-3 md:mt-4 inline-block w-full md:w-auto"
              style={{ textDecoration: 'none' }}
            >
              {({ blob, url, loading, error }) => {
                if (error) {
                  console.error('PDF Error:', error);
                  return (
                    <span className="bg-red-500 text-white px-4 py-2 rounded inline-block cursor-pointer text-center w-full md:w-auto">
                      Error generating PDF
                    </span>
                  );
                }
                return loading ? (
                  <span className="bg-gray-400 text-white px-4 py-2 rounded inline-block cursor-not-allowed text-center w-full md:w-auto">
                    Loading...
                  </span>
                ) : (
                  <span className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded transition-colors inline-block cursor-pointer text-center w-full md:w-auto text-sm">
                    Raise Invoice
                  </span>
                );
              }}
            </PDFDownloadLink>
          )}
      </div>
    </div>
  )
}