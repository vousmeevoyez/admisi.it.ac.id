'use client';
import { useSearchParams } from 'next/navigation';
import Heading from '@/app/components/heading';
import Invoice2 from '@/app/components/invoice2';

function PaymentPage() {
  const searchParams = useSearchParams()
  const fullName = searchParams.get('fullName')
  const phoneNumber = searchParams.get('phoneNumber')
  const studyProgram = searchParams.get('studyProgram')
  const id = searchParams.get('id')

  const h1 = 'Pembayaran';

  return (
    <>
      <section className="mainpos-content">
        <div className="container">
          <div className="row">
            <div className="pos-main-content">
              <section className="pos-content-body col-md-9 form-page" style={{ width: '100%' }}>
                <div className="body-pmb">
                  <Heading h1={h1} />
                  <div className="row">
                    <div className="pos-content-top01">
                      <div className="col-md-12 text-center">
                        <div className="row">
                          {/* Pass parameters to Invoice2 or use as needed */}
                          <Invoice2
                            fullName={fullName as string}
                            phoneNumber={phoneNumber as string}
                            studyProgram={studyProgram as string}
                            id={id as string}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentPage;
