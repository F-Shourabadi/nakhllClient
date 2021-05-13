import React from 'react'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CustomDropDown from '../../../components/custom/customDropDown/CustomDropDown';

const FpanelTest = () => {
    const [t, i18n] = useTranslation();
    const history = useHistory();
    return (
        <div>
            <span>{t('common:login.title')}</span>
            <button onClick={() => { history.push('/fp/page') }}>got to url fp page</button>
            <CustomDropDown/>
        </div>
    )
}

export default FpanelTest;
