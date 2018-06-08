import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
import LinkUnderlined from '../link-underlined';
import Input from '../input';
import s from './CarCard.css';

/* eslint-disable */

const DeletionAlert = ({ texts }) => (
    <div className={s.deletionAlert}>
        <strong>{texts.confirmDeletionTitle}</strong>
        <p>{texts.confirmDeletionSentence}</p>
        <div className={s.deletionButtons}>
            <LinkUnderlined>
                <strong>{texts.cancel}</strong>
            </LinkUnderlined>
            <LinkUnderlined>
                <strong>{texts.confirm}</strong>
            </LinkUnderlined>
        </div>
    </div>
);

const CarCard = ({
    carName, numberPlate, modifiable, texts, selected, pendingModification, pendingDeletion, deletable,
}) => {
    const footer = !pendingDeletion ? (
        <div className={s.footer}>
            <img
                src="./images/voiture-01-trois-quart-grise.png"
                className={s.carImage}
            />
            {
                !selected && !pendingModification &&
                <LinkUnderlined>
                    <strong>{texts.modify}</strong>
                </LinkUnderlined>
            }
            {
                selected && !pendingModification &&
                <i className={`icon-checkmark ${s.checkIcon}`} />
            }
            {
                pendingModification &&
                <LinkUnderlined>
                    <strong>{texts.save}</strong>
                </LinkUnderlined>
            }
        </div>
    ) : null;

    return (
        <Card
            FooterChildren={footer}
            isSelected={selected}
            contentClassName={pendingDeletion ? s.pendingDeletion : ''}
        >
            {
                !pendingDeletion && (
                    <span className={s.carName}>
                        {carName}

                        {
                            modifiable && !pendingModification &&
                            <button className={s.editButton}>
                                <i className={`icon-edit ${s.editIcon}`} />
                            </button>
                        }
                        {
                            modifiable && deletable && pendingModification &&
                            <button className={s.editButton}>
                                <i className={`icon-remove ${s.editIcon}`} />
                            </button>
                        }
                    </span>
                )
            }
            {
                !pendingModification && !pendingDeletion &&
                <span className={s.numberPlate}>{numberPlate}</span>
            }
            {
                pendingModification &&
                <Input inputType="text" defaultValue={numberPlate} />
            }
            {
                pendingModification &&
                <Input inputType="text" />
            }
            {
                pendingDeletion && <DeletionAlert texts={texts} />
            }
        </Card>
    );
};

CarCard.propTypes = {
    carName: PropTypes.string.isRequired,
    numberPlate: PropTypes.string.isRequired,
    modifiable: PropTypes.bool,
    deletable: PropTypes.bool,
    selected: PropTypes.bool,
    pendingModification: PropTypes.bool,
    pendingDeletion: PropTypes.bool,
    texts: PropTypes.object.isRequired,
};

CarCard.defaultProps = {
    modifiable: true,
    deletable: true,
    selected: false,
    pendingModification: false,
    pendingDeletion: false,
};

export default CarCard;
