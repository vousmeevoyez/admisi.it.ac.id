export default function Heading({text = 'Pendaftaran'}: {text?: string}){
  return (
              <div className="row">
                <div
                  className="pos-content-header col-md-12"
                  translate="no"
                >
                  <h1 className="main-header text-center" style={{fontSize: '24px'}}>
          {text}
                  </h1>
                </div>
              </div>
  );
}
