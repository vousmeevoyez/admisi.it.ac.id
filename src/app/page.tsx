import Heading from '@/app/components/heading';
import Banner from '@/app/components/banner';
import { Form } from '@/app/components/form';
import SideBanner from '@/app/components/side-banner';

export const runtime = 'edge';

export const metadata = {
  title: 'Pendaftaran di Institut Teknologi Indonesia (ITI) | Informasi Terbaru & Proses Mudah',
  viewport: 'width=device-width, initial-scale=1',
  description: 'Sistem Informasi Akademik Institut Teknologi Indonesia. Langsung Bisa Digunakan, Tidak Ribet dan Pelaporan Beres.',
  keywords: '',
  authors: [{ name: 'siAkad Cloud' }],
};

function App() {
  const h1 = 'Pendaftaran';
  const h2 = 'Jalur Akademik S1 Reguler Perkuliahan Senin - Jumat';

  return (<>
    <Banner />
    <section className="mainpos-content">
      <div className="container">
        <div className="row ">
          <div className="pos-main-content">
            <section className="pos-content-body col-md-9 form-page">
              <div className="body-pmb">
                <Heading h1={h1} h2={h2}/>
                <div className="row">
                  <div className="pos-content-top01">
                    <div className="col-md-12 text-center">
                      <div className="f1-steps d-flex justify-content-center">
                        <div className="f1-progress daftar" style={{ width: "75%" }}>
                          <div
                            className="f1-progress-line"
                            data-now-value="25"
                            data-number-of-steps="2"
                            style={{
                              width: '50%'
                            }}
                          />
                        </div>
                        <div className="f1-step daftar activated">
                          <a
                            className="f1-step-icon"
                            href="/daftar/jalur"
                          >
                            1
                          </a>
                          <p>
                            Jalur Pendaftaran
                          </p>
                        </div>
                        <div className="f1-step daftar active">
                          <div className="f1-step-icon">
                            2
                          </div>
                          <p>
                            Pendaftaran & Pembayaran
                          </p>
                        </div>
                      </div>
                      <fieldset
                        style={{
                          display: 'block'
                        }}
                      >
                        <Form />
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <SideBanner />
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default App;
