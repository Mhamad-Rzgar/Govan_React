

import Uploader from './Uploader';
import QueryUploader from './QueryUploader';
import './Page.css';


export default function Page(props) {

    // 
    // const [endTime, setEndTime] = useState(0);
    // const [startTime, setStartTime] = useState(0);
    // const [imageData, setImageData] = useState("");

    // const url = "http://localhost:35220/api/image";
    // const url = "http://localhost:35220/api/SqlServer";


    // ئەمە تیەری سێ رەسمەکە وەرەگرێ لە تیەری دوو 
    // ناردنی رەسمەکەیە لەڕێگەی ئەی پی ئایەوە
    // const handleRunQuery = e => {
    //     e.preventDefault();
    //     setEndTime(0);
    //     // setTime({ ...time, sendTime: new Date().getTime() })
    //     // console.log("set start time");
    //     setStartTime(new Date().getTime());

    //     // پاکێجی ئاگزیۆسمان بەکارهێناوە لە ناردنی رەسمەکەیا
    //     axios.get(url)
    //         .then(function (response) {
    //             // handle success
    //             // جوابی ناردنەکە لێرە وەرەگرین کە ئایدی رەسمەکەیە
    //             setImageData(response.data[0]["imageId"]);
    //             console.log(response.data[0]["imageId"]);
    //             setEndTime(new Date().getTime());
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log("error: " + error);
    //         })
    // }



    // const url = "http://localhost:35220/api/image";
    // const url = "http://localhost:35220/api/SqlServer";
    // const pmySqlUrl = "http://127.0.0.1:5000/mysql";

    // const mySqlUrl = "http://localhost:35220/api/image";
    // const mySqlUrl = "http://127.0.0.1:5000/mysql";
    // const mySqlUrl = "http://127.0.0.1:5000/access";
    // const mySqlUrl = "http://127.0.0.1:5000/sqlserver";
    // const sqlServerUrl = "http://127.0.0.1:5000/sqlserver";
    // const sqlServerUrl = "http://localhost:35220/api/SqlServer";
    // const oracleUrl = "";
    // const msAccessUrl = "http://localhost:35220/api/msAccess";

    return (
        <>
            <br />
            <div className="text-center">
                <h1>{props.programmingLanguageName}</h1>
            </div>
            <br />
            {/* بەشی تابەکان کە جۆری دەیتابەیسەکان لێرە جیاکراونەتەوە بۆ یەک زمان دەس بنێی بە هەر تابێکا ئەو زمانەت بۆ ئەکاتەوە و ئەتوانی رەسم و ڤیدیۆ و فایل بنێری و کیوری بگەڕێتەوە */}
            <div className="container">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">My Sql</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link " id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Sql Server</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link " id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Oracle</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link " id="access-tab" data-bs-toggle="tab" data-bs-target="#access" type="button" role="tab" aria-controls="access" aria-selected="false">MS - Asscess</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className='row'>
                            <div className='col-6'>
                                {/* بەکارهێنانی کۆمپۆنێنتێکی درووستکراوە کە کۆدەکانی لە پەیجێکی ترن */}

                                {/* ئەم کۆمپۆنێنتە کە ناوی ئەپڵۆدەرە ئەپڵۆدی رەسم  ئەکا بۆ مای ئێس کیو ئێڵەکە کە وردە کارییەکەی لە پەیجی خۆیەتی */}
                                <Uploader
                                    name="Image"
                                    url={props.mySqlUrl}
                                    accept="image/*"
                                />
                            </div>
                            {/* ئەم کۆمپۆنێنتە ئەپڵۆدی ڤیدیۆ ئەکا بۆ ناو مای ئێس کیو ئێڵەکە */}
                            <div className='col-6'>
                                <Uploader
                                    name="Video"
                                    accept='video/*'
                                    url={props.mySqlUrl}
                                />
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            {/*  ئەم کۆمپۆنێنتە ئەپڵۆد هەموو جۆرە فایلێک دەکات بۆ ناو مای ئێسکیوئێڵەکە */}
                            <div className='col-6'>
                                <Uploader
                                    name="All Type of file"
                                    url={props.mySqlUrl}
                                />
                            </div>
                            <div className='col-6'>
                                {/* ئەم کۆمپۆنێنتە داونلۆدت کۆتا فایلیان رەسم دەکات کە ئەپڵۆد کراوە بۆ ناو مای ئێس کیو ئێڵەکە و کۆتا ئای دی پشانەیاتەوە */}
                                <QueryUploader
                                    name="simple Query"
                                    url={props.mySqlUrl}
                                />
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className='row'>
                            <div className='col-6'>
                                {/* بەکارهێنانی کۆمپۆنێنتێکی درووستکراوە کە کۆدەکانی لە پەیجێکی ترن */}

                                {/* ئەم کۆمپۆنێنتە کە ناوی ئەپڵۆدەرە ئەپڵۆدی رەسم  ئەکا بۆ  ئێس کیو ئێڵە سیرڤەرە کە وردە کارییەکەی لە پەیجی خۆیەتی */}

                                <Uploader
                                    name="Image"
                                    url={props.sqlServerUrl}
                                    accept="image/*"
                                />
                            </div>
                            <div className='col-6'>
                                {/* ئەم کۆمپۆنێنتە ئەپڵۆدی ڤیدیۆ ئەکا بۆ ناو ئێس کیو ئێڵ سێرڤەرەکە */}
                                <Uploader
                                    name="Video"
                                    url={props.sqlServerUrl}
                                    accept='video/*'
                                />
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-6'>
                                {/* ئەم کۆمپۆنێنتە ئەپڵۆدی هەموو جۆرە فایلێک دەکات بۆ ناو  ئێسکیوئێڵ سێرڤەرەکە */}
                                <Uploader
                                    name="All Type of file"
                                    url={props.sqlServerUrl}

                                />
                            </div>
                            <div className='col-6'>
                                {/* ئەم کۆمپۆنێنتە داونلۆدی کۆتا فایل یان رەسم دەکات کە ئەپڵۆد کراوە بۆ ناو  ئێس کیو ئێڵەک سێرڤەرەکە و کۆتا ئای دی پشانەیاتەوە */}
                                <QueryUploader
                                    name="simple Query"
                                    url={props.sqlServerUrl}
                                />
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <br />
                        <div className='alert alert-success'>
                            <div className='text-center'>
                                under construction... (~10 days)
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade disabled" id="access" role="tabpanel" aria-labelledby="access-tab">
                        <div className='row'>
                            <div className='col-6'>
                                {/* بەکارهێنانی کۆمپۆنێنتێکی درووستکراوە کە کۆدەکانی لە پەیجێکی ترن */}

                                {/* ئەم کۆمپۆنێنتە کە ناوی ئەپڵۆدەرە ئەپڵۆدی رەسم  ئەکا بۆ  ئەکسسەکە کە وردە کارییەکەی لە پەیجی خۆیەتی */}

                                <Uploader
                                    name="Image"
                                    url={props.msAccessUrl}
                                    accept="image/*"
                                    uurl={props.url}
                                />
                            </div>
                            <div className='col-6'>
                                {/* ئەم کۆمپۆنێنتە ئەپڵۆدی ڤیدیۆ ئەکا بۆ ناو ئەکسسەکە */}
                                <Uploader
                                    name="Video"
                                    url={props.msAccessUrl}
                                    accept='video/*'
                                    uurl={props.url}
                                />
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-6'>
                                {/* ئەم کۆمپۆنێنتە ئەپڵۆدی هەموو جۆرە فایلێک دەکات بۆ ناو ئەکسسەکە */}
                                <Uploader
                                    name="All Type of file"
                                    url={props.msAccessUrl}
                                />
                            </div>
                            <div className='col-6'>
                                {/* ئەم کۆمپۆنێنتە داونلۆدی کۆتا فایل یان رەسم دەکات کە ئەپڵۆد کراوە بۆ ناو ئەکسسەکە و کۆتا ئای دی پشانەیاتەوە */}

                                <QueryUploader
                                    name="simple Query"
                                    url={props.msAccessUrl}
                                />
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />


                    </div>
                </div>
            </div >
        </>
    );
}

