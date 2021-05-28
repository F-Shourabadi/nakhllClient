import React, { useEffect, lazy, useState, Fragment } from 'react';
import ApiRegister from '../../../../services/apiRegister/ApiRegister';
import styles from './../../../../styles/stylesProductPage.pcss';
import BeautyStars from 'beauty-stars';
import img from './../../../../assets/images/png/download.png';
import delivery_logo from './../../../../assets/images/png/delivery_logo.png';
import guarantee_logo from './../../../../assets/images/png/guarantee_logo.png';
import quality_logo from './../../../../assets/images/png/quality_logo.png';
import shopping_logo from './../../../../assets/images/png/shopping_logo.png';
import {
    CustomSliderProduct,
    CustomButton
} from './../../../../components';
const ProductPage = (props) => {

    const [data, setData] = useState({
        "ID": "5c794ea5-394b-49d1-a103-24a9278b2532",
        "Title": "عروسک خرگوش",
        "Image": "http://nakhll.com/media/Pictures/Markets/SubMarkets/Shops/Products/PwWhDE.jpg",
        "Description": "بافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شدهبافته شده با کاموا ایرانی مرغوب و الیاف ضد حساسیت و چشم بست دار ایمن شده",
        "Slug": "rabbit4",
        "Price": 1800000,
        "Available": true,
        "Publish": true,
        "get_discounted": 0,
        "get_related_products": [
            {
                "Image_thumbnail_url": "/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/lNo5R4/87872fae3ff46bf903cb37ca1c697465.jpg",
                "get_url": "/product/Good-texture/-2za-/",
                "OldPrice": 0,
                "Price": 2800000,
                "Slug": "-2za-",
                "Title": "سرهمی کلاهدار دستباف",
                "Status": "1",
                "get_discounted": 0,
                "ID": "d5b0d533-b977-4ba9-b65c-4c4381c1af1b"
            },
            {
                "Image_thumbnail_url": "/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/1bYjbM/3089c89d2cc6c2792d893ce952a2a0f9.jpg",
                "get_url": "/product/Palm/mat-12/",
                "OldPrice": 350000,
                "Price": 300000,
                "Slug": "mat-12",
                "Title": "حصیر کد 12",
                "Status": "1",
                "get_discounted": 14,
                "ID": "20f8f4a4-3860-478d-97a2-4260e1b744a2"
            },
            {
                "Image_thumbnail_url": "/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/WKTntk/e3008a2cb237c81e171e50700e03f904.jpg",
                "get_url": "/product/Mobina/Bag-Makromeh-Cream/",
                "OldPrice": 1250000,
                "Price": 1200000,
                "Slug": "Bag-Makromeh-Cream",
                "Title": "کیف مکرومه کرم",
                "Status": "2",
                "get_discounted": 4,
                "ID": "ab282055-f160-41bb-8c96-928d189432fc"
            },
            {
                "Image_thumbnail_url": "/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/H7o12A/4115c9e31c7ab6e2e816c56e4f4e8643.jpg",
                "get_url": "/product/mohammadi/Doll-Hemp/",
                "OldPrice": 0,
                "Price": 350000,
                "Slug": "Doll-Hemp",
                "Title": "عروسک کنفی(طرح پسر)",
                "Status": "2",
                "get_discounted": 0,
                "ID": "caac252f-261a-41f8-858f-65bb222c15de"
            },
            {
                "Image_thumbnail_url": "/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/WYRBNh/69077d6f14f2324ca6237d1635af016c.jpg",
                "get_url": "/product/crocha65/golgoli/",
                "OldPrice": 0,
                "Price": 430000,
                "Slug": "golgoli",
                "Title": "گوشواره گل گلی",
                "Status": "1",
                "get_discounted": 0,
                "ID": "33069641-9168-4390-a5f9-9ebc5027dcf6"
            },
            {
                "Image_thumbnail_url": "/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/QKqlyo/598d64ba0acec4a1a1c51a92833118cd.jpg",
                "get_url": "/product/zarnoshe/0081/",
                "OldPrice": 0,
                "Price": 3000000,
                "Slug": "0081",
                "Title": "باکس سه تیکه درب دار ",
                "Status": "2",
                "get_discounted": 0,
                "ID": "91627ee7-6a67-4044-9cba-120d0920d07d"
            },
            {
                "Image_thumbnail_url": "/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/FF8zDv/a606e25f5502d30140edb0cbb9e57bac.jpg",
                "get_url": "/product/Mobina/Bag-Makromeh-Blue/",
                "OldPrice": 1250000,
                "Price": 1200000,
                "Slug": "Bag-Makromeh-Blue",
                "Title": "کیف مکرومه آبی",
                "Status": "2",
                "get_discounted": 4,
                "ID": "073e2e97-f343-43a7-8c2c-0e7e9d12de18"
            },
            {
                "Image_thumbnail_url": "/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/avzbi6/6991077e93f22e06b2a97cad17a54616.jpg",
                "get_url": "/product/Palm/Wicker-basket-rows/",
                "OldPrice": 800000,
                "Price": 750000,
                "Slug": "Wicker-basket-rows",
                "Title": "سبد حصیری کد09",
                "Status": "2",
                "get_discounted": 6,
                "ID": "f7d2c9c4-32b1-49b9-a0b8-aac11f78928c"
            },
            {
                "Image_thumbnail_url": "/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/6IGASe/32e008e1729500d9c39eb49d458150e0.jpg",
                "get_url": "/product/Good-texture/Hat-Knitted-Model-screw-the-big/",
                "OldPrice": 0,
                "Price": 750000,
                "Slug": "Hat-Knitted-Model-screw-the-big",
                "Title": "کلاه بافتنی مدل پیچ بزرگ",
                "Status": "2",
                "get_discounted": 0,
                "ID": "48c2c4ff-91b9-4f74-a169-c637c43943de"
            },
            {
                "Image_thumbnail_url": "/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/bCtHG8/a716bfbe9de8d8083510c135554eefcf.jpg",
                "get_url": "/product/delbaft/gorbe/",
                "OldPrice": 1500000,
                "Price": 1300000,
                "Slug": "gorbe",
                "Title": "عروسک جغجغه دار پیشی",
                "Status": "1",
                "get_discounted": 13,
                "ID": "73f39d3c-e24f-4fac-b926-741526413575"
            },
            {
                "Image_thumbnail_url": "/media/CACHE/images/media/Pictures/Markets/SubMarkets/Shops/Products/1nBbcs/3a577cdb9855c0d8038c4cce0467ab04.jpg",
                "get_url": "/product/crocha65/earrings-bowtiee/",
                "OldPrice": 0,
                "Price": 380000,
                "Slug": "earrings-bowtiee",
                "Title": "گوشواره ریسه پاپیون",
                "Status": "1",
                "get_discounted": 0,
                "ID": "60920919-a311-4a5a-a365-925bc82c883c"
            },
            {
                "Image_thumbnail_url": "https://nakhll.com/media/Pictures/default.jpg",
                "get_url": "/product/zarnoshe/ja-ghashoghe/",
                "OldPrice": 2500000,
                "Price": 2400000,
                "Slug": "ja-ghashoghe",
                "Title": "جاقاشقی متحرک ",
                "Status": "2",
                "get_discounted": 4,
                "ID": "e2946ae9-9489-4a0a-939c-6fa974ffbff4"
            }
        ],
        "Product_Attr": [

            { title: 'وزن', value: '120گرم' },
            { title: 'بسته بندی', value: 'دارد' },
            { title: 'وزن', value: '120گرم' },
            { title: 'بسته بندی', value: 'دارد' },

        ],
        "AttrPrice_Product": [],
        "Product_Banner": [
            {
                "Image": "http://nakhll.com/media/Pictures/Markets/SubMarkets/Shops/Products/Banners/k9x93N.jpg",
                "id": 2077
            },
            {
                "Image": "http://nakhll.com/media/Pictures/Markets/SubMarkets/Shops/Products/Banners/2v6MO6.jpg",
                "id": 2078
            }
        ],
        "Product_Comment": [],
        "Product_Review": []
    })

    /**
     * @param {*request > get product page detailes}
     */
    const _handleRequestProductDetailes = () => {
        let loadData = null;
        let loadUrl = 'api/v1/product-page/details/rabbit4/';
        let result = ApiRegister().apiRequest(loadData, 'get', loadUrl, false);
        console.log(`result==>`, result);
        console.log(`result==>`, data);
    }
    const _handleProductAttribute = () => {
        return data.Product_Attr.length > 0
            ? data.Product_Attr.map((item, index) => {
                return <div style={{ display: 'flex', fls: 1, flexDirection: 'row', justifyContent: 'flex-end', marginTop: 8 }}>
                    <span>{item.value}</span> :
                    <span>{item.title}</span>
                </div>
            })
            : <div>ویژگی وجود ندارد</div>
    }

    useEffect(() => {
        _handleRequestProductDetailes();
    }, [])

    return (
        <Fragment>
            <div className={styles.conatiner_productt}>

                {/* bread crumb */}
                <div className={styles.breadcromb_product}>
                    <span>خانه / فانتزی / عروسک</span>
                </div>

                {/* product details */}
                <div className={styles.details_product}>
                    {/* slider product*/}
                    <div className={styles.slider_product}>
                        {/* slidet image */}
                        <CustomSliderProduct src={data.Image} sliderProductThumbNail={data.Product_Banner} />
                    </div>
                    {/* attribute product */}
                    <div className={styles.attribute_product}>
                        <div className={styles.attribute_product_head}>
                            <div className={styles.attribute_product_head_attribute}>
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <h1 style={{ margin: 0 }}>{data.Title}</h1>
                                    <div className={styles.attribute_product_star} style={{ marginTop: 10 }}>

                                        <div style={{ display: 'flex', flex: .6, flexDirection: 'row-reverse', justifyContent: 'flex-start' }}>

                                            <BeautyStars
                                                value={4}
                                                size={20}
                                                onChange={value => this.setState({ value })}
                                            />


                                            <span>4.3(44)</span>
                                        </div>

                                        <span>4دیدگاه و 44 پرسش و پاسخ</span>

                                    </div>
                                    {/* product attr */}
                                    <div style={{ marginTop: 15 }}>
                                        <span style={{ fontWeight: 600, fontSize: 20 }}>:ویژگی محصول</span>
                                        {
                                            _handleProductAttribute()
                                        }
                                    </div>
                                    <span style={{ height: '.01vw', width: '100%', backgroundColor: '#d9ebeb', marginTop: '12px' }}></span>
                                </div>
                                <div style={{
                                    marginTop: 15, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'
                                }}>
                                    <span style={{ fontWeight: 600, placeSelf: 'flex-end' }}>:معرفی محصول</span>
                                    <p>{`${data.Description.substring(0, 200)}`}<span style={{ color: 'blue' }}>بیشتر</span></p>
                                </div>
                            </div>
                            <div className={styles.attribute_product_head_basket}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    {
                                        data.get_discounted == 0
                                            ? <span style={{ fontSize: 22 }}>{`${data.Price} تومان`}</span>
                                            : <div> <span style={{ fontSize: 22, color: 'red' }}>{`${data.get_discounted} تومان`}</span> <span style={{ textDecoration: 'line-through' }}>{`${data.Price}`}</span> </div>
                                    }
                                </div>
                                <div className={styles.productPageAlignment}>
                                    <CustomButton title={'افزودن به سبد خرید'} />
                                </div>
                                <div className={styles.productPageAlignment} style={{ marginTop: '10%' }}>
                                    <span>20/2/1400 : زمان ارسال</span>
                                    <img src={'./../../../../assets/images/png/shoppinglogo.png'} />
                                </div>
                                <div className={styles.productPageAlignment}>
                                    <span>ارسال از : کرمان</span>
                                    <img src={'./../../../../assets/images/png/shoppinglogo.png'} />
                                </div>
                                <div className={styles.productPageAlignment}>
                                    <span>ارسال به : سراسر کشور</span>
                                    <img src={'./../../../../assets/images/png/shoppinglogo.png'} />
                                </div>

                                <span style={{ display: 'flex', flex: .001, backgroundColor: '#d9ebeb', marginTop: '12px' }}></span>
                                <div className={styles.productPageAlignment}>
                                    <div className={styles.starRateShopper}>
                                        <div>

                                            <BeautyStars
                                                value={1}
                                                size={10}
                                                maxStars={1}
                                                activeColor={'#ffffff'}
                                            // onChange={value => this.setState({ value })}
                                            />
                                            <span style={{ color: 'white' }}> 4.3(33نفر) </span>
                                        </div>
                                    </div>
                                    <span>فروشنده: فرامرز شورآبادی</span>
                                </div>

                                <div className={styles.productPageAlignment}>
                                    <span>اخرین بازدید حجره دار: یک ساعت قبل</span>
                                </div>

                            </div>
                        </div>
                        <span style={{ display: 'flex', flex: .001, backgroundColor: '#d9ebeb', marginRight: '1vw' }}></span>
                        <div className={styles.attribute_product_foot}>
                            <div className={styles.attribute_product_foot_item}>
                                <span>پرداخت انلاین هزینه</span>
                                <img src={shopping_logo} />
                            </div>
                            <div className={styles.attribute_product_foot_item}>
                                <span>امکان تحویل اکسپرس</span>
                                <img src={delivery_logo} />
                            </div>
                            <div className={styles.attribute_product_foot_item}>
                                <span>تضمین کیفیت و اصل بودن کالا</span>
                                <img src={quality_logo} />
                            </div>
                            <div className={styles.attribute_product_foot_item}>
                                <span>هفت روز ضمانت بازگشت وجه</span>
                                <img src={guarantee_logo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductPage;