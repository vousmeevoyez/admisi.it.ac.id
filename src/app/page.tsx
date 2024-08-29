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
      <style
        dangerouslySetInnerHTML={{
          __html: '    div.logo-wrapper {        padding-left: 5px;    }    .mainpos-header .navbar .navbar-header .title {        margin-top: 1px;        padding-right: 0px;    }    .mainpos-header .navbar .navbar-header .title p {        font-size: 15px;        font-weight: bold;    }    .mainpos-header .navbar .navbar-header .navbar-toggle {        /*margin-top: 65px;*/    }    .carousel {        height: 600px;    }    .carousel-inner{        z-index: +1;    }    .carousel-inner>.item>img {        display: block;        height: 600px;        max-height: 600px;        min-width: 100%;        width: 100%;        max-width: 100%;        object-fit: cover;    }    .carousel-caption .btn-daftar {        font-size: 24px;        color: #FFFFFF;        margin: 2em 0;        padding: 0.5em 1em;    }    .carousel-caption .btn-login {        background: none;        font-size: 12px;        margin: 2em 0 1.5em;        padding: 1em 1.5em    }    .carousel-upper {        position: absolute;        top: 50px;        width: 100%;    }'
        }}
      />
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
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '      .f1-step.activated .f1-step-icon:hover {        background-color: #FFF;        color: #61B634;    }    .has-error .select2-container--focus .select2-selection, .has-error .select2-container--open .select2-selection, .has-error .select2-container .select2-selection {        border: 1px solid #a94442 !important;        box-shadow: none;    }'
                        }}
                      />
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
      <style
        dangerouslySetInnerHTML={{
          __html: '        .user-guide {            position: relative;            width: 220px;            height: 60px;        }        .user-guide a {            position: absolute;            top: 0;            left: 0;            z-index: 1;        }        .user-guide p {            position: absolute;            top: 20px;            left: 60px;            width: 150px;            font-size: 12px;            text-align: center;            z-index: 2;        }'
        }}
      />
      <Footer />
  </>
  );
}

export default App;
