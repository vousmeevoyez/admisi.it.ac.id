import Heading from '@/app/components/heading';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import WaIcon from '@/app/components/wa-icon';
import {Form} from '@/app/components/form';

export const runtime = 'edge';

export const metadata = {
  title: 'Pendaftaran di Institut Teknologi Indonesia (ITI) | Informasi Terbaru & Proses Mudah',
  viewport: 'width=device-width, initial-scale=1',
  description: 'Sistem Informasi Akademik Institut Teknologi Indonesia. Langsung Bisa Digunakan, Tidak Ribet dan Pelaporan Beres.',
  keywords: '',
  authors: [{ name: 'siAkad Cloud' }],
};

function App() {
  const form = () => {
      return <Form/>
  }
  return (<>
      <Navbar />
      <section className="mainpos-content">
        <div className="container">
          <div className="row ">
            <div className="pos-main-content">
              <section className="pos-content-body col-md-9 form-page" style={{width: '100%'}}>
                <div className="body-pmb">
                  <Heading />
                  <div className="row">
                    <div className="pos-content-top01">
                      <div className="col-md-12 text-center">
                    <div className="f1-steps d-flex justify-content-center">
                      <div className="f1-progress daftar" style={{width: "75%"}}>
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
                            {form()}
                          </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <link
        href="https://assets.siakadcloud.com/spmbfront/assets/default/../default/css/style.wa.min.css"
        rel="stylesheet"
      />
      <WaIcon />
      <Footer />
  </>
  );
}

export default App;
