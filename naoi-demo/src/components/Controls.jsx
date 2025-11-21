import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePDF from "./getPDF/InvoicePDF";

export default function Controls ({ recordedDays, userData }) {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const client = {
    name: "dinndev",
    address: "123 Main St, Anytown, USA",
    phone: "123-456-7890",
    email: "dinndev@gmail.com"
  }

  const billFrom = {
    name: userData.firstName + ' ' + userData.lastName,
    address: userData.address,
    phone: userData.phone,
    email: userData.email
  }
  const total = recordedDays.length * userData.rate;


  return (
    <div className=" ">  
      <div className="">
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