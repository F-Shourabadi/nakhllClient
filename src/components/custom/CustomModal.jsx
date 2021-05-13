import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../../redux/modal/Action';

const CustomModal = () => {

    const dispatch = useDispatch();
    const reducerModal = useSelector(state => state.reducerModal);

    useEffect(() => {
        let modalElement = document.querySelector('.modal');
        modalElement.style.display = reducerModal.display;
    }, [reducerModal])

    const closeModal = () => {
        dispatch(hideModal());
    }

    return (
        <div>
            <div className={`modal fade ${reducerModal.classCustom}`} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                <i className="fa fa-spinner fa-spin"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label>{reducerModal.message}</label>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CustomModal };
