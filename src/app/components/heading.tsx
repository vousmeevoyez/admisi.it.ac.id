export default function Heading({h1, h2}: {h1: string, h2?: string}){
  return (
              <div className="row">
                <div
                  className="pos-content-header col-md-12"
                  translate="no"
                >
                  <h1 className="main-header text-center" style={{fontSize: '24px'}}>
                    {h1}
                  </h1>
                  <br/>
                  {h2&&<p className="text-center text-warning" style={{fontSize:'18px'}}>
                    {h2}
                  </p>}
                </div>
              </div>
  );
}
