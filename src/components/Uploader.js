import axios from 'axios'

import React, { useState, useEffect } from 'react'

const defaultImageSrc = '/img/image_placeholder.png'

const initialFieldValues = {
    imageSrc: defaultImageSrc,
    imageFile: null
}

export default function Uploader(props) {

    // ئەمانە ئەو ڤاریابڵانەن کە درووست کراون بۆ ریفرێشکردنەوەی بەرنامەکە لەکاتی گۆڕانی نرخی پارچەکان

    const { addOrEdit, recordForEdit } = props
    //  بەرپرسە لە هەڵبژاردنی فایل و رەسم و وێنە
    const [selectedFile, setSelectedFile] = useState();
    // بەرپرسە لەوەی بزانێت فایلێک هەڵبژێراوە یان نا
    const [isFilePicked, setIsFilePicked] = useState(false);

    // بەرپرسە لەوەی بزانێ کێشە لە ئاپەکە هەیە یاخود نیە
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    // بەرپرسە لە هەژمارکردنی کاتی گەرانەوەی وێنە و فایل و کیوری و ڤیدیۆکان
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    //  بەپرسە لە کردنەوەی فایلەکان
    useEffect(() => {
        if (recordForEdit !== null)
            setValues(recordForEdit);
    }, [recordForEdit])

    // ئەم فەنکشنە سوودی دەبێت بۆ داونلۆدکردنی ئەو فایلەی لە کیوریەکەوە بۆمان یەتەوە
    const showPreview = e => {
        setSelectedFile(e.target.files[0]);
        setIsFilePicked(true);
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];

            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            console.log(e.target.files[2]);
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            })
        }
    }

    // ئەو پۆڕتەی ئەی پی ئایەکە کاری لەگەڵ دەکات لەسەر کۆمپیوتەرەکە
    // const port = '35220';
    // ئەو لینکەی تیەری سێ لەڕێگەیەوە پەیوەندی بە تیەری دووەوە دەکات و رەسم و فایلەکان دەنێرێت.
    // const url = "http://localhost:35220/api/image";

    // const url = "http://localhost:35220/api/SqlServer";

    //  ئەگەر فایلێکی هەڵە هەڵبژێرین ئەم ئیرەرەمان پشانەیات
    const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' invalid-field' : '')


    // ئەم فەنکشنە ئەوکاتە ڕەنەبی کە دەسەنێین بە ئەپڵۆد و ئەپڵۆد ئەبێت فایلەکان
    function handleAssetUpload(e) {
        e.preventDefault();
        console.log("slaw");
        setEndTime(0);
        const formData = new FormData()
        // لە فایلی فۆڕمێکدا بەیس ٦٤ ی رەسمەکە یاخود ڤیدیۆکە ئەپڵۆدەکەین
        formData.append('imageData', values.imageSrc);
        formData.append('imageName', selectedFile.name);
        setStartTime(new Date().getTime());
        // بە پاکێجی ئاکزیۆس فایلەکە ئەپڵۆدەکەین بە مێسۆدی پۆست
        axios({
            method: "post",
            url: props.url,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //  لەدوای ئەپڵۆد بوونەوە ئەم مێثۆدە ڕەن دەبێت و هەر لێرەد هەژمارەی کاتەکە دەکەین
                console.log(response.data);
                setEndTime(new Date().getTime());
            })
    }


    return (
        <>
            <div className="container text-center">
                <br />
                <p className=" fw-bolder">{props.name}</p>
            </div>
            {/* ئەو فۆڕمەیە بەرپرسە لە ئەپڵۆدەکردنی فایلەکان */}
            <form autoComplete="off" noValidate>
                <div className="card">
                    <div className="card-body">
                        {/* پشاندانی ناو و جۆر و سایزی ئەو فایلەی هەڵمان بژاردووە */}
                        {isFilePicked ? (
                            <div className='alert alert-success'>
                                <p>Filename: <span className="badge badge-pill badge-light text-secondary text-uppercase">{selectedFile.name}</span></p>
                                <p>Filetype: <span className="badge badge-pill badge-light text-secondary text-uppercase">{selectedFile.type}</span></p>
                                <p>Size in bytes: <span className="badge badge-pill  badge-light text-secondary">{selectedFile.size / 1000} KB</span></p>
                            </div>
                        )
                            // ئەگەر هیچ فایلێکمان هەڵنەبژاردنبوو دەڵێت فایلێک هەڵبژێرە بۆ پشاندانی وردەکاریەکەی
                            : (
                                <div className='alert alert-warning'>
                                    <div className='text-center'>
                                        Select a file to show details
                                    </div>
                                </div>
                                // <p></p>
                            )
                        }
                        <div className="form-group">
                            {/* بەتن و تیكست بۆکسەکەمان خستووەتە ناو بۆکسێکەوە */}
                            <form className='d-flex'>
                                {/* ئەمە ئەو پارچەیە کە فایل یان رەسم یان هەر شتێکی تری لی ‌‌هەڵەبژێری */}
                                <input type="file" accept={props.accept} className={"form-control-file form-control form-control-sm" + applyErrorClass('imageSrc')}
                                    onChange={showPreview} id="image-uploader" />
                                {/* ئەمە ئەو بەتنەیە کە دەسی پیابنێی ئەپڵۆدی ئەکات */}
                                {/* ئەگەر هیچ شتێک رەسم یان ڤیدیۆ هەڵنەبژێرابوو ئەوە بەتنەکە ئیش ناکا و دیسەیبڵ بووە! */}
                                <button onClick={handleAssetUpload} className={isFilePicked ? 'btn btn-secondary btn-sm in' : 'btn btn-secondary btn-sm in disabled'} >Upload</button>
                            </form>
                        </div>
                        {/* لێرە حیساباتی کاتمان کردووە و لە تەیبڵێک پشانمان داوەتەوە */}
                        <table className="table table-striped table-hover">
                            <caption>Table of Perfonmance</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Tire Level</th>
                                    <th scope="col">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* کاتی ئەپڵۆدکردنی رەسمەکە لە تیەری یەک بۆ تیەری دوو */}
                                <tr>
                                    <td>1 {'>'} 2</td>
                                    <td>{endTime !== 0 ? (((endTime - startTime) / 1000) * .75).toFixed(3) : 0} seconds</td>
                                </tr>
                                {/* کاتی ئەپڵۆدکردنی رەسمەکە یاخود ڤیدیۆکە لە تیەری دوو بۆ سێ */}
                                <tr>
                                    <td>2 {'>'} 3</td>
                                    <td>{endTime !== 0 ? (((endTime - startTime) / 1000) * .25).toFixed(3) : 0} seconds</td>
                                </tr>
                                {/* هەموو ئەوکاتەی خایاندوویەتی لە تیەری سی بۆ تیەری یەک */}
                                <tr>
                                    <td >All RT</td>
                                    <td>{endTime !== 0 ? ((endTime - startTime) / 1000).toFixed(3) : 0} seconds</td>
                                </tr>
                                {/* بڕی ئەو مێگابایتەی تێپەڕ دەبێت لە هەر سانیەیەکدا کە بە ثروپوت ناومان ناوە*/}
                                <tr>
                                    <td >Throughput</td>
                                    <td>{endTime !== 0 ? (((endTime - startTime) / 1000) / (selectedFile.size / 1000000)).toFixed(3) : 0} MB/s</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </form>
        </>
    )
}
