import React from 'react';
import { SubjectInfoBlockStyle } from './styles';

const SubjectInfoBlock = ({info, title}) => {
    const classes = SubjectInfoBlockStyle();

    return(
        <div className={classes.Wrapper}>
            <span className={classes.InfoBlock}>{info}</span>
            <span className={classes.subjectBlock}>{title}</span>
        </div>
    );
};

export default SubjectInfoBlock;