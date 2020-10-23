import React, { Fragment, Component } from "react";
import Button from "./components/Button/Button";
import "./upload.scss";
class UploadRtas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "CAMS",
      showMoreGuide: false,
      showUpload: false,
    };
  }

  handleClickTab = (type) => {
    this.setState({ activeTab: type });
  };

  showUpload = () => {
    this.setState({
      showUpload: true,
      showMoreGuide: false,
    });
  };

  showMore = () => {
    this.setState({
      showMoreGuide: !this.state.showMoreGuide,
    });
  };
  render() {
    const { activeTab, showMoreGuide, showUpload } = this.state;
    return (
      <Fragment>
        <div className="container bg-white  p-5">
          {showUpload && (
            <Fragment>
              <div className="row mt-5 border-bottom  al_tabs_2" style={{ cursor: "pointer" }}>
                <span
                  className={`col text-center ${activeTab === "CAMS" ? "active " : ""}`}
                  onClick={() => this.handleClickTab("CAMS")}
                >
                  CAMS
                </span>
                <span
                  className={`col text-center ${activeTab === "Karvy" ? "active" : ""}`}
                  onClick={() => this.handleClickTab("Karvy")}
                >
                  {" "}
                  Karvy
                </span>
                <span
                  className={`col text-center ${activeTab === "FT" ? "active" : ""}`}
                  onClick={() => this.handleClickTab("FT")}
                >
                  {" "}
                  FT
                </span>
                <span
                  className={`col text-center ${activeTab === "BSE" ? "active" : ""}`}
                  onClick={() => this.handleClickTab("BSE")}
                >
                  {" "}
                  BSE
                </span>
              </div>
              <div className="row justify-content-between mt-5">
                <div className="col-sm-5">
                  <div className="form-group">
                    <label>Upload MFSD221 (Transaction File) </label>
                    <div className="row border border-dark p-1 rounded">
                      <input className="col-9 form-control" type="file" name="file" />
                      <button type="file" className="col-3 al_button_01">
                        UPLOAD
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="form-group">
                    <label>Upload MFSD203 (Summary File)</label>
                    <div className="row border border-dark p-1 rounded">
                      <input className="col-9 form-control" type="file" name="file" />
                      <button type="file" className="col-3 al_button_01">
                        UPLOAD
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="col-sm-12 text-center pt-3">
                  <Button type="button" customClass={"al_button"} size="sm" text="UPLOAD">
                    {" "}
                  </Button>
                </div> */}
              </div>

              {/* <div className="row justify-content-center mt-4">
                <div className="col-sm-5">
                  <div className="row border border-dark p-1 rounded">
                    <input className="col-9 form-control"   type="file" name="file" />
                    <button type="file" className="col-3 al_button_01">
                      Select
                    </button>
                  </div>
                  <div className="row border border-dark rounded p-1 mt-4">
                    <input className="col-9 form-control" placeholder="Aadhaar Card" />
                    <button type="file" className="col-3 al_button_01">
                      {" "}
                      Select
                    </button>
                  </div>
                </div>
              </div> */}
            </Fragment>
          )}

          <div className="mt-5">
            <h6 className="par_7">
              Please read through the *guidelines*  carefully before uploading the files.
            </h6>
            <br />
            <div className="row">
              <p className="bg_6 p-3 col-5 mr-2">We support excel & csv files for upload.</p>
              <p className="bg_6 p-3 col-5">
                If the headers do not match or if the file format is different, you will get an
                error message. Please contact Support Team during such cases.
              </p>
              <p className="bg-light p-3 col-5 mr-2">
                Transaction files of RTA are mandatory. In case you would like to do recon, you may
                upload the summary files too.
              </p>
              <p className="bg-light p-3 col-5">
                While downloading the transaction files from RTA systems, please make sure that you
                do it since the oldest date of the transaction.
              </p>
            </div>
            {showMoreGuide && (
              <div className="row">
                <p className="bg_6 p-3 col-5 mr-2">
                  While downloading the summary files from RTA systems, please ensure date
                  uniformity between all 4 RTAs. That is, the report "as on date" must be the same
                  across all RTAs.
                </p>
                <p className="bg_6 p-3 col-5">
                  In the case of FT, transactions can only be extracted for a max period of 6
                  months. Hence, you will have to upload multiple files.
                </p>
                <p className="bg-light p-3 col-5 mr-2">
                  Please choose "Excel with Headers" for CAMS & "Excel" for Karvy. Do note to select
                  all AMCs.
                </p>
                <p className="bg-light p-3 col-5">
                  Please delete the 1st row titled "Transaction Report" from the Karvy file.
                </p>

                <p className="bg_6 p-3 col-5 mr-2">
                  FT does not allow excel download. Hence, please convert the text/dbf files to
                  excel for uploading.
                </p>
                <p className="bg_6 p-3 col-5">
                  You can check out the processing stats under the RTA tab in order to know the
                  transaction dates from which the file is processed.
                </p>
                <p className="bg-light p-3 col-5 mr-2">
                  A unit recon process will be initiated in order to ensure data accuracy.
                  Exceptions can be found under "recon" tab, where there would have been a mismatch
                  between units in transaction & summary file, for a given folio/scheme combination.
                  Please be aware that the investment reports will not be accurate for these.
                </p>
                <p className="bg-light p-3 col-5">
                  We will be creating unique client accounts based on all 4 RTA files
                </p>

                <p className="bg_6 p-3 col-5 mr-2">
                  We will be mapping the existing UCCs to the client accounts so that you may
                  continue to use them.
                </p>
                <p className="bg_6 p-3 col-5">
                  Clients with existing UCCs would be fit to transact through this software from day
                  zero. No on-boarding required.
                </p>
                <p className="bg-light p-3 col-5 mr-2">
                  We will be mapping the existing mandate IDs to the client accounts. You may
                  initiate a fresh SIP from this software using the same mandate.
                </p>
                <p className="bg-light p-3 col-5">
                  When the files are uploaded successfully, you will be able to see the reports the
                  next day. In case of an upload failure, please contact Support Team.
                </p>
              </div>
              // <ol start="6">
              //   <li>
              //     You can check out the processing stats under the RTA tab in order to know the
              //     transaction dates from which the file is processed.{" "}
              //   </li>
              //   <br />
              //   <li>
              //     You can always upload the same files again, and in such cases the data will be
              //     overwritten & replace the existing data
              //   </li>
              //   <br />
              //   <li>
              //     A unit recon process will be initiated in order to ensure data accuracy.
              //     Exceptions can be found under "recon" tab, where there would have been a mismatch
              //     between units in transaction & summary file, for a given folio/scheme combination.
              //     Please be aware that the investment reports will not be accurate for these.{" "}
              //   </li>
              //   <br />
              //   <li>
              //     Please be aware that the investment reports will not be accurate for folios where
              //     there is a recon failure. You are requested to upload fresh set of data only for
              //     the exceptions.
              //   </li>
              //   <br />
              //   <li>
              //     You may also find the client details where there are multiple banks, nominations &
              //     addresses being provided.{" "}
              //   </li>
              //   <br />
              //   <li>We will be creating unique client accounts based on all 4 RTA files </li>
              //   <br />
              //   <li>
              //     We will be mapping the existing UCCs to the client accounts so that you may
              //     continue to use them.{" "}
              //   </li>
              //   <br />
              //   <li>
              //     Clients with existing UCCs would be fit to transact through this software from day
              //     zero. No on-boarding required.
              //   </li>
              //   <br />
              //   <li>
              //     We will be mapping the existing mandate IDs to the client accounts. You may
              //     initiate a fresh SIP from this software using the same mandate.{" "}
              //   </li>
              //   <br />
              //   <li>
              //     For fresh UCC creation, we would populate the existing client data from the
              //     backend so that you would be required to fill only minimal information.{" "}
              //   </li>
              // </ol>
            )}
            <div className="row">
              <div className="col">
                <Button
                  text={showMoreGuide ? "Show less" : "Show More"}
                  size="sm"
                  onClick={() => this.showMore()}
                  customClass={"al_button"}
                />
              </div>
              {showUpload === false && (
                <div className="col text-center">
                  <Button
                    text="Procced to upload"
                    size="sm"
                    onClick={() => this.showUpload()}
                    customClass={"al_button"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <div className="container">
          <div className="mt-3">
            <div className="container-fluid app_layout" id="guidelines">
              <div className="row">
                <div className="col-sm-12 ">
                  <div className="row mt-3">
                    <div className="col-md-9">
                      <div className="row no-gutters mb-2">
                        <div className="form-check mr-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="camsDocumentUpload"
                            id="cams_Upload"
                            checked={optionNames === "camsDocumentUpload"}
                            onChange={() =>
                              this.setState({
                                optionNames: "camsDocumentUpload",
                              })
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="camsDocumentUpload"
                            style={{ marginTop: "3px" }}
                          >
                            CAMS
                          </label>
                        </div>
                        <div className="form-check mr-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="karvyDocumentUpload"
                            id="karvy_Upload"
                            checked={optionNames === "karvyDocumentUpload"}
                            onChange={() =>
                              this.setState({
                                optionNames: "karvyDocumentUpload",
                              })
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="karvyDocumentUpload"
                            style={{ marginTop: "3px" }}
                          >
                            Karvy
                          </label>
                        </div>
                        <div className="form-check mr-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="ftDocumentUpload"
                            id="ft_Upload"
                            checked={optionNames === "ftDocumentUpload"}
                            onChange={() =>
                              this.setState({
                                optionNames: "ftDocumentUpload",
                              })
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="ftDocumentUpload"
                            style={{ marginTop: "3px" }}
                          >
                            FT
                          </label>
                        </div>
                        <div className="form-check mr-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="sundaramDocumentUpload"
                            id="sundaram_Upload"
                            checked={optionNames === "sundaramDocumentUpload"}
                            onChange={() =>
                              this.setState({
                                optionNames: "sundaramDocumentUpload",
                              })
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="sundaramDocumentUpload"
                            style={{ marginTop: "3px" }}
                          >
                            Sundaram
                          </label>
                        </div>
                        <div className="form-check mr-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="bseDocumentUpload"
                            id="bse_Upload"
                            checked={optionNames === "bseDocumentUpload"}
                            onChange={() =>
                              this.setState({
                                optionNames: "bseDocumentUpload",
                              })
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor="bseDocumentUpload"
                            style={{ marginTop: "3px" }}
                          >
                            Bse
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {optionNames === "camsDocumentUpload" && (
                    <Fragment>
                      <div className="row mt-4">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Upload WBR2 (Transaction File) </label>
                            <input className="form-control" type="file" name="file" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Upload WBR9 (Summary File)</label>
                            <input className="form-control" type="file" name="file" />
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-end mt-3 mr-2">
                        <Button type="button" customClass={"al_button"} size="sm" text="UPLOAD">
                          {" "}
                        </Button>
                      </div>
                    </Fragment>
                  )}
                  {optionNames === "karvyDocumentUpload" && (
                    <Fragment>
                      <div className="row mt-4">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Upload MFSD221 (Transaction File) </label>
                            <input className="form-control" type="file" name="file" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Upload MFSD203 (Summary File)</label>
                            <input className="form-control" type="file" name="file" />
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-end mt-3 mr-2">
                        <Button type="button" customClass={"al_button"} size="sm" text="UPLOAD">
                          {" "}
                        </Button>
                      </div>
                    </Fragment>
                  )}
                  {optionNames === "ftDocumentUpload" && (
                    <Fragment>
                      <div className="row mt-4">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label> (Transaction File) </label>
                            <input className="form-control" type="file" name="file" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label> (Summary File)</label>
                            <input className="form-control" type="file" name="file" />
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-end mt-3 mr-2">
                        <Button type="button" customClass={"al_button"} size="sm" text="UPLOAD">
                          {" "}
                        </Button>
                      </div>
                    </Fragment>
                  )}
                  {optionNames === "sundaramDocumentUpload" && (
                    <Fragment>
                      <div className="row mt-4">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Upload ER02 (Transaction File)</label>
                            <input className="form-control" type="file" name="file" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Upload ER08 (Summary File)</label>
                            <input className="form-control" type="file" name="file" />
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-end mt-3 mr-2">
                        <Button type="button" customClass={"al_button"} size="sm" text="UPLOAD">
                          {" "}
                        </Button>
                      </div>
                    </Fragment>
                  )}
                  {optionNames === "bseDocumentUpload" && (
                    <Fragment>
                      <div className="row mt-4">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Upload Client Master Report</label>
                            <input className="form-control" type="file" name="file" />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Upload Mandate Registration Report</label>
                            <input className="form-control" type="file" name="file" />
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-end mt-3 mr-2">
                        <Button type="button" customClass={"al_button"} size="sm" text="UPLOAD">
                          {" "}
                        </Button>
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>
              <div>
                <h6>
                  Please read through the *guidelines* very very carefully to minimize mistakes.{" "}
                </h6>
                <br />
                <ol>
                  <li>We support excel & csv files for upload.</li>
                  <br></br>
                  <li>
                    If the headers do not match or if the file format is different, you will get an
                    error message. Please contact Support Team during such cases.{" "}
                  </li>
                  <br />
                  <li>
                    {" "}
                    While downloading the summary files from RTA systems, please ensure date
                    uniformity between all 4 RTAs. That is, the report "as on date" must be the same
                    across all RTAs.
                  </li>
                  <br />
                  <li>
                    While downloading the transaction files from RTA systems, please make sure that
                    you do it since the oldest date of the transaction.{" "}
                  </li>
                  <br />
                  <li>
                    In the case of FT, transactions can only be extracted for a max period of 6
                    months. Hence, you will have to upload multiple files.{" "}
                  </li>
                </ol>
                {showMoreGuide && (
                  <ol start="6">
                    <li>
                      You can check out the processing stats under the RTA tab in order to know the
                      transaction dates from which the file is processed.{" "}
                    </li>
                    <br />
                    <li>
                      You can always upload the same files again, and in such cases the data will be
                      overwritten & replace the existing data
                    </li>
                    <br />
                    <li>
                      A unit recon process will be initiated in order to ensure data accuracy.
                      Exceptions can be found under "recon" tab, where there would have been a
                      mismatch between units in transaction & summary file, for a given folio/scheme
                      combination. Please be aware that the investment reports will not be accurate
                      for these.{" "}
                    </li>
                    <br />
                    <li>
                      Please be aware that the investment reports will not be accurate for folios
                      where there is a recon failure. You are requested to upload fresh set of data
                      only for the exceptions.
                    </li>
                    <br />
                    <li>
                      You may also find the client details where there are multiple banks,
                      nominations & addresses being provided.{" "}
                    </li>
                    <br />
                    <li>We will be creating unique client accounts based on all 4 RTA files </li>
                    <br />
                    <li>
                      We will be mapping the existing UCCs to the client accounts so that you may
                      continue to use them.{" "}
                    </li>
                    <br />
                    <li>
                      Clients with existing UCCs would be fit to transact through this software from
                      day zero. No on-boarding required.
                    </li>
                    <br />
                    <li>
                      We will be mapping the existing mandate IDs to the client accounts. You may
                      initiate a fresh SIP from this software using the same mandate.{" "}
                    </li>
                    <br />
                    <li>
                      For fresh UCC creation, we would populate the existing client data from the
                      backend so that you would be required to fill only minimal information.{" "}
                    </li>
                  </ol>
                )}
                <Button
                  text={showMoreGuide ? "Show less" : "Show More"}
                  size="sm"
                  onClick={() => this.showMore()}
                  customClass={"al_button"}
                />
              </div>
            </div>
          </div>
        </div> */}
      </Fragment>
    );
  }
}

export default UploadRtas;
