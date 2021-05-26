import React, { useState, useEffect, Fragment } from 'react';
import styles from './../../../styles/stylesProductSlider.pcss';

/**
 * 
 * @param { *src > image address}
 * @param {*sliderProductThumbNail > array list image thumbnail}
 * @returns slider component
 */
const CustomSliderProduct = ({ src, sliderProductThumbNail }) => {


    // functions
    const _handleClickThumb = (e, src) => {
        console.log(`items==>`, src);
    }
    /**
     * @returns show images list thumbnail
     */
    const _handleViewThumbnail = () => {
        const thumbnailList = sliderProductThumbNail;

        return (
            <div className={styles.slider_product_thambnail_container}>
                <div className={styles.slider_thumbnail_box} style={{ justifyContent: 'flex-end' }} >
                    {
                        thumbnailList.map((item, index) =>
                            <img className={styles.slider_thumbnail_box} key={index} src={item.Image} style={{ cursor: 'pointer' }} onClick={(e) => _handleClickThumb(e, item.Image)} />
                        )
                    }
                </div>
                <div style={{ width: '73%', opacity: 0.7, cursor: 'pointer', position: 'relative' }}>
                    <img className={styles.slider_thumbnail_box} src={thumbnailList[0].Image} />
                    <span style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', color: 'white', borderRadius: '100px', backgroundColor: '#aaaa', margin: '10px' }}>...</span>
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            {/* slider image */}
            <div className={styles.slider_product_Image}>
                <img src={src} />
            </div>
            {/* slider thumbnail */}
            <div className={styles.slider_product_thumbNail}>
                {
                    _handleViewThumbnail()
                }
            </div>

        </Fragment>
    )
}

export { CustomSliderProduct };