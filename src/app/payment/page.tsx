'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Heading from '@/app/components/heading';
import Invoice2 from '@/app/components/invoice2';

function PaymentPage() {
  const searchParams = useSearchParams()
  const fullName = searchParams.get('fullName')
  const phoneNumber = searchParams.get('phoneNumber')
  const studyProgram = searchParams.get('studyProgram')
  const id = searchParams.get('id')
  const uniqueCode = searchParams.get('uniqueCode')

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
                            fullName={fullName!}
                            phoneNumber={phoneNumber!}
                            studyProgram={studyProgram!}
                            uniqueCode={uniqueCode!}
                            id={id!}
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

export default function (){
  return <Suspense fallback={<div>Loading...</div>}>
    <PaymentPage/>
  </Suspense> 
};
